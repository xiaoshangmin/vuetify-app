<template>
    <div class="d-flex justify-center flex-column mt-10">
        <div class="d-flex justify-center remove">
            <ImgComparisonSlider :value="imgSliderVal" class="img-slider slider-with-animated-handle">

                <div v-if="!isActive" slot="first"
                    class="slider-first-img-default-style d-flex justify-center align-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235c-.21.391-.47.742-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558c-.002-.473-.002-.973-.002-1.501v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386c0 .529 0 1.026.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"
                            clip-rule="evenodd"></path>
                        <path fill="currentColor"
                            d="m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a2.995 2.995 0 0 0 .602-.859"
                            opacity=".4"></path>
                    </svg></div>
                <div v-if="!isActive" slot="second"
                    class="slider-second-img-default-style d-flex justify-center align-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" class="icon">
                        <path fill="currentColor" d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235c-.21.391-.47.742-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558c-.002-.473-.002-.973-.002-1.501v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386c0 .529 0 1.026.002 1.495c.008 1.874.05 3.246.238 4.303c.184 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069c.21-.21.381-.442.524-.707c.332-.616.523-1.44.621-2.645c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176"
                            clip-rule="evenodd"></path>
                        <path fill="currentColor"
                            d="m20.607 19.146l-2.83-2.547a3 3 0 0 0-3.732-.225l-.299.21a2 2 0 0 1-2.564-.222l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.002.876l.002.65c.008 1.875.05 3.247.238 4.304c.185 1.035.498 1.7 1.005 2.207c.57.57 1.34.897 2.619 1.069c1.3.174 3.008.176 5.386.176s4.087-.002 5.387-.176c1.278-.172 2.049-.5 2.618-1.069a2.995 2.995 0 0 0 .602-.859"
                            opacity=".4"></path>
                    </svg></div>

                <img v-if="isActive" slot="first" class="slider-img" :src="before" />
                <img v-if="isActive" slot="second" class="slider-img" :src="after" />
                <svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100"
                    viewBox="-8 -3 16 6">
                    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
                </svg>
            </ImgComparisonSlider>
        </div>
        <div class="mt-10">
            <div class="d-flex justify-center align-center flex-column">
                <div class="d-flex  justify-center align-center ga-5 mb-6">
                    <v-btn @click="upload" text="上传图片"  prepend-icon="mdi-image" elevation="12" size="x-large" rounded="xl"
                        width="180px" height="55px">
                    </v-btn>

                    <v-btn @click="handleDownload" text="下载图片"  prepend-icon="mdi-download" elevation="12"
                        size="x-large" width="180px" height="55px" rounded="xl" :disabled="disabled"></v-btn>
                </div>
                <v-tooltip text="电脑有GPU的话勾选出图更快">
                    <template v-slot:activator="{ props }">
                        <v-checkbox label="使用GPU" v-model="gpu" v-bind="props"></v-checkbox>
                    </template>
                </v-tooltip>
            </div>
            <v-file-input ref="upload" label="选择需要转换的文件" :rules="rules" prepend-icon="" v-model="files" @change="remove"
                class="custom-file-input">
            </v-file-input>
            <!-- <div class="d-flex justify-center align-center flex-column">
                没有图片？ 试试这些图片：
                <div class="d-flex ga-2">
                    <v-img :width="64" aspect-ratio="1" cover rounded src="../../test.jpg" @click="test"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded src="../../dog.jpg" @click="test"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded src="../../car.jpg" @click="test"></v-img>
                    <v-img :width="64" aspect-ratio="1" cover rounded src="../../people.jpg" @click="test"></v-img>
                </div>
            </div> -->
           
        </div>
    </div>
    <!-- 对话框 -->
    <v-dialog v-model="dialog" max-width="500" persistent>
        <v-card v-if="isLoading" title="处理中">
            <v-card-text>
                初始化AI模型，请稍等片刻，模型下载完成后自动处理图片
            </v-card-text>
            <v-progress-linear color="light-blue" height="10" striped v-model="downloadProgress"></v-progress-linear>
        </v-card>
        <v-card v-if="isProgress" title="正在处理图像">
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
        isActive: false,
        gpu: false,
        dialog: false,
        isLoading: false,
        isProgress: false,
        snackbar: false,
        disabled:true,
        downloadProgress: 0,
        imgSliderVal: 75,
        files: [],
        info: {},
        rules: [
            (value) => !!value || "Required.",
            (value) => {
                return (
                    !value || !value.length || value[0].size < 10486000 || "文件大小不能超过10 MB!"
                );
            },
        ],
        before: "",//"https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",
        after: "",//"https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg"
    }),
    components: {
        ImgComparisonSlider,
    },
    created() {
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
        handleDownload() {
            if (this.after) {
                const link = document.createElement("a")
                link.href = this.after
                link.download = `remove-bg-${Date.now()}.png`
                link.click()
            }
        },
        test(e) {
            const url = e.target.currentSrc
            this.before = url;
            this.after = url;
            this.isActive = true;
            this.doRemove(url)
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
            this.isActive = true;
            this.disabled = true;
            this.doRemove(url)
        },
        doRemove(url: string) {
            let config: Config = {
                debug: false,
                model: 'isnet',
                output: {
                    quality: 0.8,
                    format: 'image/png' //image/jpeg, image/webp
                },
                device: this.gpu ? "gpu" : "cpu",
                //publicPath: "http://localhost:3000/ai-data/", // path to the wasm files
                progress: (key, current, total) => {
                    let per = ((current / total) * 100).toFixed(0)
                    // console.log("progress", key, current, total, per)

                    if (key.includes("fetch:")) {
                        if (key.includes("model")) {
                            this.downloadProgress = per
                        }
                    }
                    if (key == "compute:decode") {
                        this.isLoading = false
                        this.isProgress = true
                    }
                    if (key === "compute:inference") {
                        // console.log("Processing image...")
                    }
                },
            }

            console.time();
            this.isLoading = true
            this.isProgress = false
            this.dialog = true;
            let imageData: string = url
            removeBackground(imageData!, config).then((blob: Blob) => {
                const url = URL.createObjectURL(blob)
                this.after = url
                this.imgSliderVal = 15;
                this.isLoading = false;
                this.isProgress = false;
                this.dialog = false;
                this.snackbar = true;
                this.disabled = false;
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
    --divider-width: 4px;
    --divider-color: #ffa658;
    --default-handle-opacity: 0;
    transition: box-shadow 200ms ease-in-out;
}

.img-slider:focus {
    outline: none;
    box-shadow: 0px 0px 15px 5px #858685;
}

.custom-animated-handle {
    transition: transform 0.2s;
}

.slider-with-animated-handle:hover .custom-animated-handle {
    transform: scale(1.2);
}

.slider-first-img-default-style {
    width: 600px !important;
    height: 350px !important;
    background: rgb(229, 229, 229);
}

.slider-second-img-default-style {
    width: 600px !important;
    height: 350px !important;
}

.slider-img {
    height: 50vh;
    width: auto;
    object-fit: contain;
}

.icon {
    --tw-text-opacity: 1;
    color: rgb(115 115 115 / var(--tw-text-opacity));
}

.custom-file-input {
    width: 0;
    height: 0;
    visibility: hidden;
}
</style>