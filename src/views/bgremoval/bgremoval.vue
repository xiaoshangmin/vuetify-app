<template>
    <div class="d-flex justify-center flex-column mt-6">
        <div class="d-flex justify-center remove">
            <ImgComparisonSlider :value="imgSliderVal" class="img-slider">
                <img slot="first" class="slider-img" :src="before" />
                <img slot="second" class="slider-img" :src="after" />
            </ImgComparisonSlider>
        </div>
        <div class="mt-16">
            <div class="d-flex justify-center">
                <v-btn @click="upload" text="上传图片" color="#0f70e6" elevation="12" size="x-large" rounded="xl">
                </v-btn>
                <v-tooltip text="电脑有GPU的话勾选出图更快">
                    <template v-slot:activator="{ props }">
                        <v-checkbox label="使用GPU" v-model="gpu" v-bind="props"></v-checkbox>
                    </template>
                </v-tooltip>
            </div>
            <div class="d-flex justify-center mt-16 align-center flex-column">
                没有图片？ 试试这些图片：
                <div class="d-flex ga-2">
                    <v-img :width="64" aspect-ratio="1" cover rounded
                        src="https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded
                        src="https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded
                        src="https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded
                        src="https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"></v-img>
                </div>
            </div>
            <v-file-input ref="upload" label="选择需要转换的文件" :rules="rules" prepend-icon="" v-model="files" @change="remove"
                class="custom-file-input">
            </v-file-input>
        </div>
    </div>
    <!-- 对话框 -->
    <v-dialog v-model="dialog" max-width="500" persistent>
        <v-card v-if="isLoading" title="Dialog">
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </v-card-text>
            <v-progress-linear color="light-blue" height="10" striped v-model="downloadProgress"></v-progress-linear>
        </v-card>
        <v-card v-if="isProgress" title="Dialog">
            <v-card-text>
                <v-progress-circular indeterminate></v-progress-circular>
            </v-card-text>
        </v-card>
    </v-dialog>
    <!-- 消息条 -->
    <v-snackbar v-model="snackbar" elevation="24" timeout="3000" color="red">
        图片已经处理完成啦，拖动分割条看看吧！
    </v-snackbar>
</template>


<script lang="ts">
import { removeBackground, Config } from "@imgly/background-removal";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    data: () => ({
        gpu: false,
        dialog: false,
        isLoading: false,
        isProgress: false,
        snackbar: false,
        downloadProgress: 0,
        imgSliderVal: 50,
        files: [],
        info: {},
        rules: [
            (value) => !!value || "Required.",
            (value) => {
                console.log(value[0])
                return (
                    !value || !value.length || value[0].size < 10486 || "文件大小不能超过10 MB!"
                );
            },
        ],
        before: "https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",//"https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",
        after: "https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"//https://img-comparison-slider.sneas.io/demo/images/before.webp
    }),
    components: {
        ImgComparisonSlider,
    },
    created() {
        // const canvas = document.createElement('canvas');
        // const webgl = canvas.getContext('experimental-webgl');
        // const info = gl.getExtension('WEBGL_debug_renderer_info');

        // const msg = webgl.getParameter(info.UNMASKED_RENDERER_WEBGL);
        // console.log(msg);
        this.checkGpu();

    },
    methods: {
        init() {

        },
        checkGpu() {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl && gl instanceof WebGLRenderingContext) {
                this.gpu = true
            }
        },
        upload() {
            this.$refs.upload.click()
        },
        remove() {
            this.downloadProgress = 0;
            let file = this.files[0]; //拿到上传的file
            const url = URL.createObjectURL(file)
            this.before = url;
            this.after = url;
            let config: Config = {
                debug: false,
                model: 'isnet',
                output: {
                    quality: 0.8,
                    format: 'image/webp' //image/jpeg, image/webp
                },
                device: gpu ? "gpu" : "cpu",
                //publicPath: "http://localhost:3000/ai-data/", // path to the wasm files
                progress: (key, current, total) => {
                    let per = ((current / total) * 100).toFixed(0)
                    console.log("progress", key, current, total, per)

                    if (key.includes("fetch:")) {
                        this.isLoading = true
                        this.isProgress = false
                        this.dialog = true;
                        if (key.includes("onnxruntime")) {
                            this.downloadProgress = per
                        }
                        // console.log(
                        //     "Downloading AI models. This was a little while ago the first time..."
                        // )
                    }
                    if (key == "compute:decode") {
                        this.isLoading = false
                        this.isProgress = true
                        this.dialog = true;
                    }
                    if (key === "compute:inference") {
                        console.log("Processing image...")
                    }
                },
            }

            console.time();
            let imageData: string = url
            removeBackground(imageData!, config).then((blob: Blob) => {
                const url = URL.createObjectURL(blob)
                this.after = url
                this.imgSliderVal = 15
                this.isLoading = false
                this.isProgress = false
                this.dialog = false;
                this.snackbar = true
                console.timeEnd();
            })
        }
    }


}
</script>

<style scoped>
.img-slider {
    background: url("../../assets/background.svg");
    background-repeat: repeat;
}

.slider-img {
    height: 50vh;
    width: auto;
    object-fit: contain;
}

.custom-file-input {
    width: 0;
    height: 0;
    visibility: hidden;
}
</style>