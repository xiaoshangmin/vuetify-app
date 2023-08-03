<template>
  <div>
    <div style="height: calc(100vh - 100px); width: 100%" ref="myPage" @click="isShowNodeMenuPanel = false">
      <relation-graph ref="relationGraph$" :options="options" :on-node-click="onNodeClick">
        <template #graph-plug>
          <v-dialog v-model="dialog" width="auto">
            <v-alert :title="alterTitle" :text="alterText" type="info"></v-alert>
          </v-dialog>
        </template>
        <template #node="{ node }">
          <div @click.right="showNodeMenus(node, $event)" @contextmenu.prevent.stop="showNodeMenus(node, $event)">
            <v-avatar v-if="node.data.pic != undefined" :image="node.data.pic" size="80"></v-avatar>
            <div v-else style="width: 80px;height:80px;" class="d-flex justify-center align-center">
              {{ node.text }}
            </div>
          </div>
        </template>
      </relation-graph>
      <!-- 右键弹窗内容 -->
      <div v-show="isShowNodeMenuPanel" :style="{
        left: nodeMenuPanelPosition.x + 'px',
        top: nodeMenuPanelPosition.y + 'px',
      }" style="z-index: 999; padding: 10px; position: absolute">
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
                <v-text-field label="名称" :rules="[rules.required]" v-model="newNode.text" clearable></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea clearable label="简介" v-model="newNode.desc"></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-file-input clearable label="图片" accept="image/*" prepend-icon="" show-size></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-select clearable label="连接" v-model="select" :items="links" item-title="title"
                  item-value="value"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                简介是点击节点后弹窗的详情内容，图片会覆盖名称，图片大小不能超过200kb
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="addNodeDialog = false">
            关闭
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="doAddNode"> 保存 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--  -->
    <v-snackbar v-model="snackbar" :timeout="timeout" vertical location="center">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false"> 关闭 </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { uniqueId } from "../../utils/utils";
import { onMounted, ref } from "vue";
import RelationGraph from "relation-graph/vue3";
const relationGraph$ = ref<RelationGraph>();
const rules = {
  required: value => !!value || '名称必须填写',
}
const myPage = ref({});
const newNode = ref({
  text: "",
  desc: "",
});

const isShowNodeMenuPanel = ref(false);
const nodeMenuPanelPosition = ref({ x: 0, y: 0 });
const snackbar = ref(false);
const timeout = ref(2000);
const text = ref("");
const dialog = ref(false);
const addNodeDialog = ref(false);
const alterText = ref("");
const alterTitle = ref("")
const currentNode = ref(null);
const jsonData = ref({});
const links = ref([])
const select = ref("")
const options = {
  debug: false,
  allowSwitchLineShape: true,
  defaultJunctionPoint: "border",
  defaultNodeShape: 0,
  defaultNodeBorderWidth: 0,
  defaultNodeColor: "rgba(10, 248, 30, 1)",
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

  const _all_nodes = relationGraph$.value.getInstance().getNodes();
  const _all_links = relationGraph$.value.getInstance().getLinks();
  let appendId = uniqueId();
  let appendData = {
    rootId: "start",
    nodes: [
      {
        id: appendId,
        text: newNode.value.text,
        data: {
          desc: newNode.value.desc
        }
      }
    ],
    lines: [
      {
        from: currentNode.value.id,
        to: appendId,
      }
    ],
  };

  if (select.value != "") {
    appendData.lines.push({
      from: appendId,
      to: select.value
    })
  }

  relationGraph$.value.getInstance().appendJsonData(appendData)
  // relationGraph$.value.getInstance().refresh()
  addNodeDialog.value = false;
  //更新下拉选项
  let linkList = [];
  _all_nodes.forEach(e => {
    let element = {
      title: e.text,
      value: e.id
    }
    linkList.push(element)
  });
  links.value = linkList
  newNode.value = {
    text: "",
    desc: "",
  }
}

function delNode(nodeObject, $event) { }

function editNode(nodeObject, $event) { }

function onNodeClick(nodeObject, $event) {
  console.log("onNodeClick:", nodeObject.text);
  alterTitle.value = nodeObject.text
  alterText.value = nodeObject.data.desc;
  dialog.value = true;
}

onMounted(() => {
  let id = "start"//uniqueId();
  jsonData.value = {
    rootId: id,
    nodes: [
      {
        id: id,
        text: "初始",
      },
    ],
    lines: [],
  };
  relationGraph$.value.setJsonData(jsonData.value);
});
</script>
<style lang="scss" scoped></style>
