<template>
    <v-container>
        <div class="container d-flex justify-center align-center flex-column">
            <div class="main d-flex justify-center align-center">
                <div class="d-sm-none d-sm-flex resize-handle">⇲</div>
                <div class="content-mode" ref="draggable" :style="bgcolor">
                    <div class="card d-flex justify-center align-start pt-4 pb-4 px-4 rounded-lg flex-column">
                        <div contenteditable="true" class="editable-element title">
                            <p>👋 hi 你好</p>
                        </div>
                        <div class="editable-element content" contenteditable="true" @input="updateTitle">
                            <p></p>
                        </div>
                        <div class="editable-element time d-flex justify-end" contenteditable="true">
                            <p>讨厌麻烦事 2024-07-15 18:20 广东</p>
                        </div>
                        <v-divider></v-divider>

                        <div class="qrcode pt-2 d-flex flex-row justify-space-between align-center">
                            <div>
                                <div class="editable-element" contenteditable="true">
                                    Wo卡片
                                </div>
                                <div class="editable-element desc" contenteditable="true">
                                    扫描二维码
                                </div>
                            </div>
                            <vue-qr :text="qrData" :size="60" :margin="0" colorLight="transparent"
                                backgroundColor="transparent" colorDark="#999999" :callback="getQrcode">
                            </vue-qr>
                        </div>
                    </div>
                </div>
                <div class="resize-handle d-sm-none">⇲</div>
            </div>
            <div class="operation">
                <div class="bgcolor">
                    背景颜色
                    <div class="colors d-flex">
                        <div class="color-item rounded-circle" :style="theme" v-for="theme in themeList"
                            @click="changeColor"></div>
                    </div>
                </div>
                <div class="bgcolor">
                    内边距
                    <v-row>
                        <v-col v-for="(chip, index) in chips" :key="index">
                            <v-chip :class="{ 'selected-chip': chip.isSelected }" @click="toggleSelection(index)"
                                outlined>
                                芯片 {{ index + 1 }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-slider v-model="paddingSlider" thumb-label :step="1" track-color="grey"
                        @update:modelValue="onChange">
                        <template v-slot:prepend>
                            <v-btn icon="mdi-minus" size="small" variant="text" @click="decrement"
                                data-id="padding"></v-btn>
                        </template>

                        <template v-slot:append>
                            <v-btn :color="color" icon="mdi-plus" size="small" variant="text" @click="increment"
                                data-id="padding"></v-btn>
                        </template>
                    </v-slider>
                </div>
                <div class="bgcolor">
                    宽度
                    <div class="colors d-flex">
                        <v-slider v-model="widthSlider" thumb-label :step="1" track-color="grey">
                            <template v-slot:prepend>
                                <v-btn icon="mdi-minus" size="small" variant="text" @click="decrement"
                                    data-id="width"></v-btn>
                            </template>

                            <template v-slot:append>
                                <v-btn icon="mdi-plus" size="small" variant="text" @click="increment"
                                    data-id="width"></v-btn>
                            </template>
                        </v-slider>
                    </div>
                </div>
                <div class="bgcolor">
                    字体大小
                    <div class="colors d-flex">
                        <div class="color-item rounded-circle" v-for="(theme, index) in themeList" :key="index"
                            :style="theme" @click="changeColor"></div>
                    </div>
                </div>
                <v-btn @click="generateImage">
                    下载图片
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
import interact from 'interactjs';
import domtoimage from 'dom-to-image-more';


export default {
    data: () => ({
        chips: [
            { isSelected: false },
            { isSelected: false },
            { isSelected: false },
            // 可以根据需要添加更多芯片
        ],
        canvas: null,
        content: "",
        qrcode: "",
        widthSlider: 50,
        paddingSlider: 50,
        themeList: ["background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));", "background-image: linear-gradient(45deg, rgb(191, 69, 133), rgb(245, 159, 156));"],
        bgcolor: "",
        qrData: "https://www.baidu.com/",
    }),
    created() {
    },
    computed: {
        color() { }
    },
    mounted() {
        interact(this.$refs.draggable)
            .resizable({
                edges: { top: false, left: true, bottom: false, right: true },
                listeners: {
                    move: function (event) {
                        let { x, y } = event.target.dataset

                        x = (parseFloat(x) || 0) + event.deltaRect.left
                        y = (parseFloat(y) || 0) + event.deltaRect.top

                        Object.assign(event.target.style, {
                            width: `${event.rect.width}px`,
                            // height: `${event.rect.height}px`,
                            // transform: `translate(${x}px, ${y}px)`
                        })
                        Object.assign(event.target.dataset, { x, y })
                    }
                }
            });
    },
    methods: {
        toggleSelection(index) {
      this.chips[index].isSelected = !this.chips[index].isSelected;
    },
        getQrcode(data, id) {
            this.qrcode = data;
        },
        changeColor(e) {
            // this.theme = " --colorA: #B41433; --colorB: #CDCBFF; --angle: 45deg;"
            this.$refs.draggable.style.setProperty('--colorA', '#B41433');
            this.$refs.draggable.style.setProperty('--colorB', '#CDCBFF');
            this.$refs.draggable.style.setProperty('--angle', '45deg');

        },
        onChange(e) {
            this.$refs.draggable.style.setProperty('padding', `${this.paddingSlider}px`);
        },
        decrement(e) {
            if ("padding" == e.currentTarget.dataset.id) {
                this.paddingSlider -= 1
                this.$refs.draggable.style.setProperty('padding', `${this.paddingSlider}px`);
            } else {
                this.widthSlider -= 1
            }
        },
        increment(e) {
            if ("padding" == e.currentTarget.dataset.id) {
                this.paddingSlider += 1
                this.$refs.draggable.style.setProperty('padding', `${this.paddingSlider}px`);
            } else {
                this.widthSlider += 1
            }
        },
        generateImage() {
            document.fonts.ready.then(() => {
                domtoimage.toPng(this.$refs.draggable).then(dataUrl => {
                    this.imageUrl = dataUrl;
                    // 创建一个新窗口并显示生成的图片
                    const imgWindow = window.open('', '_blank');
                    imgWindow.document.write('<img src="' + dataUrl + '" />');
                }).catch(error => {
                    console.error('生成图片时出错:', error);
                });
            });
        },
        downloadImage() {
            if (this.canvas) {
                const link = document.createElement('a');
                link.href = this.canvas.toDataURL();
                link.download = 'capture.png';
                link.click();
            } else {
                alert('请先生成图片');
            }
        },
        updateTitle(event) {
            // console.log(event)
            this.content = event.target.innerText;
        }
    }
}
</script>

<style>
@property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 45deg
}

@property --colorA {
    syntax: "<color>";
    inherits: false;
    initial-value: #5797f9
}

@property --colorB {
    syntax: "<color>";
    inherits: false;
    initial-value: #6cd5c4
}
.selected-chip {
  border: 2px solid blue;
}

.container {
    font-family: "Roboto", sans-serif;
}

.main {
    /* min-width: 393px;
    max-width: 1800px; */
    position: relative;
    font-family: inherit;
}

.content-mode {
    width: 100%;
    /* background-color: hsla(173, 77%, 83%, 1); */
    background-image: linear-gradient(var(--angle), var(--colorA), var(--colorB));
    transition: padding .5s, --angle 1s, --colorA 1s, --colorB 1s;
    min-width: 393px;
    padding: 50px;
    font-family: inherit;
}

.title,
.content {
    width: 100%;
    height: auto;
    font-family: inherit;
}

.title {
    font-weight: 700;
    line-height: 2rem;
}

.content {
    line-height: 1.8;
    min-height: 2rem;
}

.time {
    width: 100%;
    height: auto;
    font-size: 0.875rem;
    opacity: .4;
    margin: 1rem 0;
}

.card {
    width: 100%;
    background-color: hsla(0, 0%, 100%, .5);
    box-shadow: 0 10px 40px hsla(0, 0%, 39%, .4);
    color: #000;
}

.editable-element {
    display: block;
    white-space: pre-wrap;
    word-break: break-word;
    outline: none;
    width: 100%;
}

.resize-handle {
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    line-height: 20px;
}

.qrcode {
    width: 100%;
    opacity: .5;
    font-size: 1.25rem;
}

.desc {
    font-size: 0.875rem;
}

.operation {
    position: fixed;
    bottom: 100px;
}

.bgcolor {
    margin: 2rem 0;
}

.color-item {
    width: 1.75rem;
    height: 1.75rem;
}
</style>
