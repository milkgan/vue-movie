<!-- 显示多条电影 -->
<template>
    <div class="data-container">
        <MovieItem :movie="item" v-for="item in movies" :key="item._id"/>
    </div>
</template>

<script>
import MovieItem from "./MovieItem.vue"

export default {
    name: 'MovieList',
    props: ["movies"],//电影数组
    components: {
        MovieItem
    }
}
</script>