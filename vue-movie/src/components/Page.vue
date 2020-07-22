<!-- 换页组件 -->
<template>
    <div class="page">
        <a @click.prevent="handleClick(1)" class="page-item" :class="current===1?'disabled':''">首页</a>
        <a @click.prevent="handleClick(current-1)" href="" class="page-item" :class="current===1?'disabled':''">上一页</a>
        <span class="page-text">
            <i>{{current}}</i>
            /
            <i>{{pageNumber}}</i>
        </span>
        <a @click.prevent="handleClick(current+1)" href="" class="page-item" :class="current===pageNumber?'disabled':''">下一页</a>
        <a @click.prevent="handleClick(pageNumber)" href="" class="page-item" :class="current===pageNumber?'disabled':''">尾页</a>
    </div>
</template>

<script>
export default {
    name: 'Page',
    props: {
        current: {
            // 当前页码
            default: 1,
            type: Number
        },
        total: {
            // 总的数据量
            default: 0,
            type: Number
        },
        limit: {
            // 每页显示多少条数据，页容量
            default: 8,
            type: Number
        }
    },
    computed: {
        pageNumber() {
            return Math.ceil(this.total /this.limit);
        }
    },
    methods: {
        handleClick(newPage) {
            if(newPage < 1 || newPage > this.pageNumber || newPage === this.current){
                return;
            }
            this.$emit("page-change", newPage)
        }
    }
}
</script>