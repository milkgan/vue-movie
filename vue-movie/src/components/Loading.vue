<!-- 加载蒙层 -->
<template>
    <Modal v-if="isShow">
        <div class="loading">正在加载中···</div>
    </Modal>
</template>

<script>
import Modal from "./Modal.vue"
export default {
    components: {
        Modal
    },
    props: {
        isShow: {
            default: false,
            type: Boolean
        }
    }
}
</script>