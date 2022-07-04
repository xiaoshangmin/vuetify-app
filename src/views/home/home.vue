<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-file-input show-size counter accept=".pdf" label="pdf文件" :rules="rules" prepend-icon="mdi-file"
                    v-model="files">
                </v-file-input>
            </v-col>
            <v-col cols="1">
                <v-checkbox v-model="merge" label="合并图片" color="red" value="true" hide-details></v-checkbox>
            </v-col>
            <v-col cols="10">
                <v-row justify="center">
                    <v-btn depressed color="primary" elevation="2" @click="pdfToPic">
                        上传
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        merge: false,
        files: [],
        rules: [
            value => {
                return !value || !value.length || value[0].size < 2000000 || '文件大小不能超过2 MB!'
            },
        ],
        links: [
            'Dashboard',
            'Messages',
            'Profile',
            'Updates',
        ],
    }),
    created() {
    },
    methods: {
        pdfToPic() { 
            let file = this.files[0];//拿到上传的file
            let param = new FormData();//创建form对象
            param.append("file", file);//为创建的form对象增加上传的文件 
            let config = { headers: { "Content-Type": "multipart/form-data" } }//修改请求头   
            this.$http.post("/api/upload", param, config).then((res) => {
                console.log(res);
            });
        },
    }
}
</script>

<style>
.header,
.footer {
    transition: background .5s ease-in;
    background: linear-gradient(225deg, #80a0c4, #386fb4) !important;
}
</style>