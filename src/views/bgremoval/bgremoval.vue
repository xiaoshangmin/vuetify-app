<template>
    <v-row justify="center">
        <v-col md="10" sm="12" lg="12">
            <v-file-input label="选择需要转换的文件" :rules="rules" prepend-icon="" v-model="files" :disabled="disabled"
                @change="f" class="custom-file-input">
            </v-file-input>
        </v-col>
    </v-row>
    <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img slot="first" style="width: 100%" :src="before" />
        <img slot="second" style="width: 100%" :src="after" />
        <!-- eslint-enable -->
    </ImgComparisonSlider>
</template>


<script lang="ts">
import { removeBackground, Config } from "@imgly/background-removal";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    data: () => ({
        disabled: false,
        files: [],
        info: {},
        rules: [
            (value) => !!value || "Required.",
            (value) => {
                return (
                    !value || !value.length || value[0].size < 10486000000 || "文件大小不能超过10 MB!"
                );
            },
        ],
        before: "https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",//"https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",
        after: ""//https://img-comparison-slider.sneas.io/demo/images/before.webp
    }),
    components: {
        ImgComparisonSlider,
    },
    created() {

    },
    methods: {
        uu() {
            console.log(this.files[0])
            let file = this.files[0]; //拿到上传的file
            const url = URL.createObjectURL(file)
            console.log(url)
        },
        f() {
            let file = this.files[0]; //拿到上传的file
            const url = URL.createObjectURL(file)
            console.log(url)
            this.before = url;
            let config: Config = {
                debug: true,
                // device:"gpu",
                //publicPath: "http://localhost:3000/ai-data/", // path to the wasm files
                progress: (key, current, total) => {
                    if (key.includes("fetch:")) {
                        console.log(
                            "Downloading AI models. This was a little while ago the first time..."
                        )
                    }
                    if (key === "compute:inference") { console.log("Processing image...") }
                },
            }


            let imageData: string = url
            removeBackground(imageData!, config).then((blob: Blob) => {
                // result is a blob encoded as PNG.
                // It can be converted to an URL to be used as HTMLImage.src
                const url = URL.createObjectURL(blob)
                console.log("url", url)
                this.after = url
            })
        }
    }


}
</script>

<style scoped>
.custom-file-input .v-file-input__text {
    display: none;
    /* 隐藏默认的文件输入文本 */
}

.custom-file-input .v-file-input__slot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    /* 设置长方形的宽度 */
    height: 100px;
    /* 设置长方形的高度 */
    border: 2px dashed #3f51b5;
    /* 自定义边框样式 */
    border-radius: 10px;
    /* 设置圆角 */
    cursor: pointer;
    position: relative;
}

.custom-file-input .v-file-input__slot::before {
    content: '选择文件';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #3f51b5;
    /* 按钮背景色 */
    color: #fff;
    /* 按钮文字颜色 */
    padding: 10px 20px;
    border-radius: 5px;
    /* 按钮圆角 */
}

.custom-file-input input[type="file"] {
    display: none;
    /* 隐藏实际的文件输入 */
}
</style>