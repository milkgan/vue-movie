<template>
  <div>
    <header>
      <router-link :to="{name: 'home'}">首页</router-link> 
      <router-link :to="{name: 'movie-list'}">电影页</router-link>
    </header>
    <router-view/>
  </div>
</template>


