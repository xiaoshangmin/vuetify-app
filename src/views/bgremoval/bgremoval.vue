<template>
    <div class="d-flex justify-center flex-column mt-6">
        <div class="d-flex justify-center remove">
            <ImgComparisonSlider value="15">
                <img slot="first" class="slider-img" :src="before" />
                <img slot="second" class="slider-img" :src="after" />
            </ImgComparisonSlider>
        </div>
        <div class="mt-16">
            <div class="d-flex justify-center">
                <v-btn @click="upload" text="上传图片" color="#0f70e6" elevation="12" size="x-large" rounded="xl">
                </v-btn>
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
    <v-alert closable text="..."></v-alert>
</template>


<script lang="ts">
import { removeBackground, Config } from "@imgly/background-removal";
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
    data: () => ({
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

    },
    methods: {
        upload() {
            this.$refs.upload.click()
        },
        remove() {
            let file = this.files[0]; //拿到上传的file
            const url = URL.createObjectURL(file)
            console.log(url)
            this.before = url;
            this.after = url;
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