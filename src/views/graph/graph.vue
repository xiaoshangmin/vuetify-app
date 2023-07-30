<template>
  <div>
    <div
      style="height: calc(100vh - 100px); width: 100%"
      ref="myPage"
      @click="isShowNodeMenuPanel = false"
    >
      <relation-graph
        ref="relationGraph$"
        :options="options"
        :on-node-click="onNodeClick"
      >
        <template #graph-plug>
          <v-dialog v-model="dialog" width="auto">
            <v-alert :title="title" text="..." type="info"></v-alert>
          </v-dialog>
        </template>
        <template #node="{ node }">
          <div
            @click.right="showNodeMenus(node, $event)"
            @contextmenu.prevent.stop="showNodeMenus(node, $event)"
          >
            <v-avatar :image="node.data.pic" size="80"></v-avatar>
          </div>
        </template>
      </relation-graph>
      <!-- 右键 -->
      <div
        v-show="isShowNodeMenuPanel"
        :style="{
          left: nodeMenuPanelPosition.x + 'px',
          top: nodeMenuPanelPosition.y + 'px',
        }"
        style="z-index: 999; padding: 10px; position: absolute"
      >
        <v-card class="mx-auto" max-width="300">
          <v-list>
            <v-list-item @click.stop="addNode"> 新增节点</v-list-item>
            <v-list-item @click="delNode"> 删除节点</v-list-item>
            <v-list-item @click="editNode"> 编辑内容</v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>

    <!-- 新增节点弹窗 -->
    <v-dialog v-model="addNodeDialog" persistent width="1024">
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="名称"
                  required
                  v-model="newNode.text"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="简介"
                  required
                  v-model="newNode.desc"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="addNodeDialog = false"
          >
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="doAddNode">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--  -->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      vertical
      location="center"
    >
      {{ text }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import RelationGraph from "relation-graph/vue3";
const relationGraph$ = ref<RelationGraph>();
const myPage = ref({});
const newNode = ref({
  text: "fdsafdsaf",
  desc: "fdsafdsaf",
});
const isShowNodeMenuPanel = ref(false);
const nodeMenuPanelPosition = ref({ x: 0, y: 0 });
const snackbar = ref(false);
const timeout = ref(2000);
const text = ref("");
const dialog = ref(false);
const addNodeDialog = ref(false);
const title = ref("");
const currentNode = ref(null);
const jsonData = ref({
  rootId: "a",
  nodes: [
    {
      id: "a",
      text: "a",
      data: {
        pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2308340537,462224207&fm=58&app=83&f=JPEG?w=250&h=250&s=EC708F46DA96B89CB69D5DDA0300D014",
        name: "侯亮平",
      },
    },
  ],
  lines: [],
});
const options = {
  debug: false,
  allowSwitchLineShape: true,
  defaultJunctionPoint: "border",
  defaultNodeShape: 0,
  defaultNodeBorderWidth: 0,
  defaultNodeColor: "",
  defaultNodeBorderColor: "#409EFF",
};

function showNodeMenus(nodeObject, $event) {
  currentNode.value = nodeObject;
  const _base_position = myPage.value.getBoundingClientRect();
  //   console.log("showNodeMenus:", $event, _base_position);
  isShowNodeMenuPanel.value = true;
  nodeMenuPanelPosition.value.x = $event.clientX - _base_position.x;
  nodeMenuPanelPosition.value.y = $event.clientY - _base_position.y;
}
function addNode() {
  isShowNodeMenuPanel.value = false;
  addNodeDialog.value = true;
}

function doAddNode() {
  if (newNode.value.text == "") {
    return;
  }
  console.log("doAddNode", currentNode.value);
  let nodes = jsonData.value.nodes;
  let addNode = {
    id: "b",
    text: newNode.value.text,
    data: {
      pic: "https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2308340537,462224207&fm=58&app=83&f=JPEG?w=250&h=250&s=EC708F46DA96B89CB69D5DDA0300D014",
      name: "侯亮平",
    },
  };
  nodes.push(addNode);
  let lines = jsonData.value.lines;
  let newLine = {
    from: currentNode.value.id,
    to: "b",
  };
  lines.push(newLine);
  console.log("doAddNodePush", nodes);
  jsonData.value.nodes = nodes;
  jsonData.value.lines = lines;
  relationGraph$.value.setJsonData(jsonData.value);
  addNodeDialog.value = false;
}

function delNode(nodeObject, $event) {}

function editNode(nodeObject, $event) {}

function onNodeClick(nodeObject, $event) {
  console.log("onNodeClick:", nodeObject.text);
  title.value = nodeObject.text;
  dialog.value = true;
}

onMounted(() => {
  relationGraph$.value.setJsonData(jsonData.value);
});
</script>
<style lang="scss" scoped>
.c-node-menu-item {
  line-height: 30px;
  padding-left: 10px;
  cursor: pointer;
  color: #444444;
  font-size: 14px;
  border-top: #efefef solid 1px;
}
.c-node-menu-item:hover {
  background-color: rgba(66, 187, 66, 0.2);
}
.c-slot-teamplate {
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  height: 150px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 12px;
}
.c-slot-teamplate:hover {
  border: 1px solid #00bb00;
}
.c-slot-teamplate-checked {
  border: 1px solid #409eff;
}
</style>
