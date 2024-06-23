<template>
    <!-- <v-img :src="url" cover class="bg-grey-lighten-2"></v-img> -->
    <ImgComparisonSlider>
        <!-- eslint-disable -->
        <img slot="first" style="width: 100%" :src="before" />
        <img slot="second" style="width: 100%" :src="after" />
        <!-- <div slot="first" style="width: 100%">
            <v-img :src="before" cover aspect-ratio="1" class="bg-grey-lighten-2"></v-img>
        </div>
        <div slot="second" style="width: 100%">
            <v-img :src="after" cover aspect-ratio="1" class="bg-grey-lighten-2"></v-img>
        </div> -->
        <!-- eslint-enable -->
    </ImgComparisonSlider>
    <v-row justify="center">
        <v-col md="10" sm="12" lg="12">
            <v-file-input show-size counter label="选择需要转换的文件" :rules="rules" prepend-icon=""
                append-inner-icon="mdi-file" v-model="files" :disabled="disabled" @change="f">
            </v-file-input>
        </v-col>
    </v-row>
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
        before: "",//"https://oss.wowyou.cc/font/p1b5ovf8b7qb2jrb1dmjspo14991.jpg",
        after: ""//https://img-comparison-slider.sneas.io/demo/images/before.webp
    }),
    components: {
        ImgComparisonSlider,
    },
    created() {

    },
    methods: {
        uu(){
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
                console.log("url",url)
                this.after = url
            })
        }
    }


}
</script>