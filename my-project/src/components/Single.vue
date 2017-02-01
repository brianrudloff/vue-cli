

<template>
  <div class="postContainer">
    <img id="photo" :src="getSource"/>
    <p>{{getCaption}}</p>
    <button @click="increment_likes({ index: getIndex })">{{getLikes}}</button>
    <form><input placeholder="user"></input><input placeholder="comment"></input></form>
    <span>
      <ul style="list-style: none;">
        <li v-for="(comment, index) in getComments">
          <p><b>{{comment.user}}: </b><span>{{comment.text}}</span></p><button @click="remove_comment({ postId: getId(), i: index })">X</button>
        </li>
      </ul>
    </span>

          
        <!--<comments></comments>-->
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex';

export default {
  computed: {
    posts () {
      return this.$store.state.redux.posts;
    },
    comments () {
      return this.$store.state.redux.comments;
    },
     getSource () {
      let src = "";
        this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            console.log('post', val)
            src = val.display_src;
              }
          })
        return src;
    },
     getLikes () {
      let likes = 0;
        this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            likes = val.likes;
              }
          })
        return likes;
    },
      getId () {
      let id = "";
        this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            console.log('id', id)
            id = val.id;
              }
          })
        return id;
    },
    getCaption () {
      let caption = "";
      this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            caption = val.caption;
              }
          })
        return caption;
    },
    getIndex () {
      let index1 = 0;
      this.$store.state.redux.posts.forEach((val, index) => {
          if (val.code === this.$route.params.id) {
            index1 = index;
              }
          })
        return index1;
    },
    getComments () {
      let commentsObj = {};
      Object.keys(this.$store.state.redux.comments).forEach((val) => {
        if (val === this.$route.params.id) {
            console.log(val)
            commentsObj = this.$store.state.redux.comments[val];
            console.log('commentsobj', commentsObj)
              }
          })
        return commentsObj;
    }
  },
  methods: {
    ...mapActions({
      increment_likes: 'INCREMENT_LIKES',
      add_comment: 'ADD_COMMENT',
      remove_comment: 'REMOVE_COMMENT'
    }),
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #photo {
    width: 90%;
    margin-top: 4%;
  }

  .postContainer {
    background-color: grey;
    width: 55%;
    margin: 0 auto;
  }

</style>
