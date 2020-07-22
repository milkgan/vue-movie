<template>
    <div>
        <div class="data-container">
        <button @click="$router.back()">回到列表页</button>
        </div>
        <MovieDetail :movie="movie"/>
    </div>
    
</template>

<script>
import MovieDetail from '../components/MovieDetail.vue'
import movieService from '../services/movieServices.js';
export default {
    name: 'Movie',
    components: {
        MovieDetail
    },
    data() {
        return {
            movie: null
        };
    },
    async created() {
        var movieId = this.$route.params.id;
        // console.log(this.$route)
        var resp = await movieService.getMovie(movieId);
        // console.log(resp.data)
        this.movie = resp.data;
    }
}
</script>