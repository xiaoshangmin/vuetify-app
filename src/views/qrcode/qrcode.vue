<template>
    <v-container>
        <v-row justify="center">
            <v-card :width="width">
                <v-card-text>
                    <v-row justify="center">
                        <v-col md="10" sm="12" lg="10">
                            <v-textarea v-model="text" clearable label="请输入内容" auto-grow hide-details rows="2">
                            </v-textarea>
                        </v-col>

                    </v-row>
                    <v-row justify="center" class="ma-4">
                        <v-btn elevation="2" color="#ff8170" @click="make">
                            生成二维码
                        </v-btn>
                    </v-row>
                    <v-row justify="center" v-if="qrData">
                        <vue-qr :text="qrData"> </vue-qr>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        text: '',
        qrData: '',
    }),
    computed: {
        width() {
            switch (this.$vuetify.display.name) {
                case 'xs':
                    return '100%'
                case 'sm':
                    return '100%'
                case 'md':
                    return '80%'
                case 'lg':
                    return '80%'
                case 'xl':
                    return '50%'
            }
        },
    },
    created() {
    },
    methods: {
        make() {
            this.qrData = this.text
        }
    }
}
</script>

<style scoped>
</style>