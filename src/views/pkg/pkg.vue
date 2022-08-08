<template>
  <v-container>
    <v-card>
      <v-card-title>pip</v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                提供方
              </th>
              <th class="text-left">
                使用方式
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in pip" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.use }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Npm</v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                提供方
              </th>
              <th class="text-left">
                使用方式
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in npm" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.use }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Composer</v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                提供方
              </th>
              <th class="text-left">
                使用方式
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in composer" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.use }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>Docker</v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                提供方
              </th>
              <th class="text-left">
                使用方式
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in docker" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.use }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pip: [
      {
        name: '豆瓣',
        use: 'pip install -i https://pypi.doubanio.com/simple/',
      },
      {
        name: '清华大学',
        use: 'pip install -i https://pypi.tuna.tsinghua.edu.cn/simple',
      },
      {
        name: '阿里云',
        use: 'pip install -i https://mirrors.aliyun.com/pypi/simple/',
      },
    ], npm: [
      {
        name: '淘宝',
        use: 'npm config set registry https://registry.npm.taobao.org',
      },
    ], composer: [
      {
        name: '阿里云',
        use: 'composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/',
      },
      {
        name: '华为云',
        use: 'composer config -g repo.packagist composer https://mirrors.huaweicloud.com/repository/php/',
      },
    ], docker: [
      {
        name: '中科大',
        use: 'https://ustc-edu-cn.mirror.aliyuncs.com',
      },
      {
        name: '网易云',
        use: 'https://hub-mirror.c.163.com',
      },
      {
        name: '百度云',
        use: 'https://mirror.baidubce.com',
      },
    ]
  }),
  created() {
  },
  methods: {}
}
</script>