<!-- 获取电影数据 -->
<template>
<div>
    <MovieList :movies="movies"/>
    <Page @page-change="handlePageChange" :total="total" :limit="limit" :current="page"/>
    <Loading :isShow="isLoading"/>
</div>  
</template>
<script>
import MovieList from "./MovieList.vue";
import movieService from "../services/movieServices.js"
import Page from "./Page.vue";
import Loading from "./Loading.vue"
export default {
    name: 'MovieContainer',
    components: {
        MovieList,
        Page,
        Loading
    },
    data () {
        return {
            movies : [],
            total: 0,//总数据量
            limit: 3,//页容量
            page: 1,//当前页码
            isLoading: false//是否正在远程加载数据
        };
    },
    async created() {
        // 获取电影数据
        this.getMovies();

    },
    methods: {
        handlePageChange(newPage) {
            this.page = newPage;
            this.getMovies();
        },
        async getMovies () {
            this.isLoading = true;
            var resp = await movieService.getMovies(this.page, this.limit);
            // console.log(resp);
            this.movies = resp.data;
            this.total = resp.count;
            this.isLoading = false;
        }
    }
}
</script>