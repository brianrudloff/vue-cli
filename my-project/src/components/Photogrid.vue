

<template>
  <div >
    <ol>
      <li v-for="(post, index) in posts">
        <div id="container">
          <router-link :to='post.code' ><img id="thumbnail" :src="post.display_src"></router-link>
            <div id="lower">
                <p id="caption">{{post.caption}}</p>
              <div id="buttons">
              <button id="likeButton" @click="increment_likes({ index: index })">{{post.likes}}</button>
              <router-link :to='post.code' ><button id="commentButton">{{comments.BAhvZrRwcfu.length}}</button></router-link>
              </div>
            </div>
        </div>
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
      console.log('photogrid', this.$store.state.redux.posts[0].code)
      console.log('comments', this.$store.state.redux.comments.BAhvZrRwcfu)
    },
  
  computed: {
    posts () {
      return this.$store.state.redux.posts;
    },
    comments () {
      return this.$store.state.redux.comments;
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

#container {
  width: 300px;
  background-color: grey;
  border-style: solid;
  border-color: #2c3e50;

}

#lower {
overflow: auto;
padding-bottom: 10px;
}

#thumbnail {
  width: 300px;
}

#caption {
width: 280px;
margin: 0 auto;
text-align: left;
padding-bottom: 10px;
}

#buttons {
  margin: 0 auto;
}

button {
  float: left;
  width: 125px;
  height: 40px;
  border-radius: 1px;
  background-color: white;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: 30px;
  margin-left: 18px;
  padding-bottom: 20px;
  font-size: 1em;
  text-align: center;
  line-height: 30px;
  padding-inline-start: 30px;
  border-style: solid;
  border-color: #2c3e50;
 color: #2c3e50;
}

#likeButton {
  background-image: url('https://cdn3.iconfinder.com/data/icons/faticons/32/heart-01-128.png');
}

#commentButton {
   background-image: url('https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/chat-512.png');
}

</style>
