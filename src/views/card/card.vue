<template>
    <v-container>
        <div class="container d-flex justify-center align-center flex-column">
            <div class="content d-flex justify-center align-center">
                <div class="d-sm-none d-sm-flex resize-handle">⇲</div>
                <div class="content-mode" ref="draggable">
                    <div class="card d-flex justify-center align-start pt-4 pb-4 px-4 rounded-lg flex-column">
                        <div contenteditable="true" class="editable-element title">
                            <p>👋 hi 你好</p>
                        </div>
                        <div class="editable-element subtitle" contenteditable="true" @input="updateTitle">
                            <p>{{ content }}</p>
                        </div>
                        <div class="editable-element time" contenteditable="true">
                            <p>讨厌麻烦事 2024-07-15 18:20 广东</p>
                        </div>
                        <div class="qrcode pt-2 d-flex flex-row justify-space-between align-center">
                            <div>
                                <div  class="editable-element" contenteditable="true">
                                    Wo卡片
                                </div>
                                <div class="editable-element desc"  contenteditable="true">
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
        canvas: null,
        content: "",
        qrcode: "",
        qrData: "https://www.baidu.com/",
    }),
    created() {
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
                            transform: `translate(${x}px, ${y}px)`
                        })
                        Object.assign(event.target.dataset, { x, y })
                    }
                }
            });
    },
    methods: {
        getQrcode(data, id) {
            this.qrcode = data;
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
            this.content = event.target.innerText;
        }
    }
}
</script>

<style>
.content {
    min-width: 393px;
    max-width: 1800px;
    position: relative;
    transition: all 500ms ease 0;
    font-family: inherit;
}

.content-mode {
    width: 100%;
    background-color: hsla(173, 77%, 83%, 1);
    background-image: linear-gradient(var(--houdini-angle), var(--houdini-colorA), var(--houdini-colorB));
    transition: padding .5s, --houdini-angle 1s, --houdini-colorA 1s, --houdini-colorB 1s;
    min-width: 393px;
    padding: 50px;
    font-family: inherit;
    --houdini-colorA: #F4CD52;
    --houdini-colorB: #FDCADC;
    --houdini-angle: 45deg;
}

.title,
.subtitle {
    width: 100%;
    height: auto;
}

.title {
    font-weight: 700;
    line-height: 1.25rem;
}

.subtitle {
    line-height: 1.1rem;
    line-height: 1.8;
}

.time {
    font-size: 0.875rem;
    opacity: .4;
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
.desc{
    font-size: 0.875rem;
}
.operation {
    position: fixed;
    bottom: 100px;
}
</style>
