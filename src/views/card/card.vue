<template>
    <v-container>
        <div class="container d-flex justify-center align-center flex-column">
            <div class="content d-flex justify-center align-center">
                <div class="resize-handle">⇲</div>
                <div class="card d-flex justify-center align-center" ref="draggable">
                    <div class="elevation-20" style="opacity: 0.9;">
                        <h2 class="text-h5 mb-6" style="font-family: fantasy;outline:none;" contenteditable="true"
                            @input="updateTitle">{{ content }}</h2>
                    </div>
                </div>
                <div class="resize-handle">⇲</div>
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
        content: "484864545454545"
    }),
    created() {
    },
    mounted() {
        interact(this.$refs.draggable)
            .resizable({
                edges: { top: false, left: true, bottom: true, right: true },
                listeners: {
                    move: function (event) {
                        let { x, y } = event.target.dataset

                        x = (parseFloat(x) || 0) + event.deltaRect.left
                        y = (parseFloat(y) || 0) + event.deltaRect.top

                        Object.assign(event.target.style, {
                            width: `${event.rect.width}px`,
                            height: `${event.rect.height}px`,
                            transform: `translate(${x}px, ${y}px)`
                        })
                        Object.assign(event.target.dataset, { x, y })
                    }
                }
            });
    },
    methods: {
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
.card {
    padding: 20px;
    width: 700px;
    height: 500px;
    background-color: hsla(173, 77%, 83%, 1);
    background-image: radial-gradient(circle at 5% 1%, hsla(250, 76%, 61%, 1) 7%, transparent 84%), radial-gradient(circle at 7% 81%, hsla(184, 91%, 91%, 1) 16%, transparent 53%), radial-gradient(circle at 11% 29%, hsla(213, 97%, 75%, 1) 8%, transparent 74%), radial-gradient(circle at 39% 52%, hsla(149, 93%, 64%, 1) 6%, transparent 68%), radial-gradient(circle at 90% 50%, hsla(118, 94%, 89%, 1) 2%, transparent 85%);
    background-blend-mode: normal, normal, normal, normal, normal;
}

.resize-handle {
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    line-height: 20px;
}
</style>
