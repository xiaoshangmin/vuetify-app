<template>
    <v-container>
        <v-row justify="center">
            <v-snackbar v-model="snackbar" :timeout="timeout" vertical location="center">
                {{ text }}
                <template v-slot:actions>
                    <v-btn color="blue" variant="text" @click="snackbar = false">
                        关闭
                    </v-btn>
                </template>
            </v-snackbar>

            <v-col md="12" sm="12" lg="8">
                <v-card :loading="loading" max-width="1400">
                    <v-progress-linear v-if="loading" class="position-absolute" style="z-index: 1"
                        color="pink lighten-3" height="8" indeterminate rounded striped></v-progress-linear>
                    <v-img class="align-end text-white" height="200" src="https://oss.wowyou.cc/misc/pdf-header.jpg"
                        cover>
                    </v-img>
                    <v-card-text>
                        <v-row justify="center">
                            <v-col cols="10">
                                <v-file-input show-size counter outlined accept=".pdf" label="选择pdf文件" :rules="rules"
                                    prepend-icon="mdi-file" v-model="files" :disabled="disabled">
                                </v-file-input>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="2">
                                <v-switch v-model="merge" label="合并图片" color="red" value="true" hide-details>
                                </v-switch>
                            </v-col>
                            <v-col cols="8"></v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12">
                                <v-row justify="center">
                                    <v-btn color="#3c71b5" elevation="2" @click="pdfToPic" :disabled="disabled">
                                        上传并转换
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        snackbar: false,
        text: '',
        timeout: 2000,
        loading: false,
        merge: false,
        disabled: false,
        files: [],
        rules: [
            value => !!value || 'Required.',
            value => {
                return !value || !value.length || value[0].size < 5243000 || '文件大小不能超过5 MB!'
            },
        ],
    }),
    methods: {
        changeBtnStatus() {
            this.disabled = !this.disabled
            this.loading = !this.loading
        },
        pdfToPic() {
            if (this.files.length == 0) {
                this.text = "请选择需要转换的文件"
                this.snackbar = !this.snackbar
                return;
            }
            this.changeBtnStatus()
            this.$socket.getMsg((res) => {
                console.log("getMsg", res)
            })
            let file = this.files[0];//拿到上传的file
            let param = new FormData();//创建form对象
            param.append("file", file);//为创建的form对象增加上传的文件 
            param.append('merge', this.merge);
            let config = {
                headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: event => {
                    let complete = (event.loaded / event.total * 100 | 0) + '%'
                    console.log(complete)
                }
            }//请求头和上传进度
            this.$http.post("/api/upload", param, config).then((res) => {
                console.log(res.data);
                if (res.data.code) { 
                    this.snackbar = !this.snackbar
                    this.text = "文件上传成功，正在转换请稍等片刻";
                }
                this.changeBtnStatus()
            }).catch((res) => {
                console.log('error', res)
                this.changeBtnStatus()
            });
        },
    }
}
</script>

<style>
.header,
.footer {
    -webkit-transition: background .5s ease-in;
    transition: background .5s ease-in;
    background: linear-gradient(46deg, #e85846, #ff8170);
}
</style>