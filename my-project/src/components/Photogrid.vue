

<template>
  <div class="hello">
    photogrid component
    <ol>
      <li v-for="(post, index) in posts">
         <router-link :to='post.code' ><img id="thumbnail" :src="post.display_src"></router-link>
         <p>{{post.caption}}</p>
         <button @click="increment_likes({ index: index })">{{post.likes}}</button>
      </li>
    </ol>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex';

export default {


  created: 
    function () {
      console.log('photogrid', this.$store.state.redux.posts[0])
    },
  
  computed: {
    posts () {
      return this.$store.state.redux.posts;
    }
  },
  methods: {
    ...mapActions({
      increment_likes: 'INCREMENT_LIKES',
    }),
  }
};

console.log()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#thumbnail {
  width: 300px;
}
</style>
