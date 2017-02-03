

<template>
  <div class="postContainer">
    <div id="left">
      <img id="photo" :src="getSource"/>
      <div id="lower">
        <span id="caption">{{getCaption}}</span>
        <div id="buttons">
          <span><button id="likeButton" @click="increment_likes({ index: getIndex })">{{getLikes}}</button>
          <button id="commentButton">{{comments[getCode].length}}</button></span>
        </div>
      </div>
    </div>

    <div id="right">
      <span>
        <ul style="list-style: none;">
          <li v-for="(comment, index) in getComments">
            <p id="textDiv"><b>{{comment.user}}: </b>{{comment.text}}<span> <button id="deleteButton" @click="remove_comment({ postId: getCode, i: index })">X</button></span></p>
          </li>
        </ul>
        <form >
          <input type="text" placeholder="user" id="user" v-model="user"></input>
          <input type="text" placeholder="comment" id="comment" v-model="comment" v-on:keyup.enter="add_comment({postId: getCode, author: user, comment: comment })"></input>
        </form>
      </span>
    </div>

          
        <!--<comments></comments>-->
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex';

export default {
  data () {
    return {user: "",
            comment: ""
    }
  },
  beforeUpdate: function () {
      console.log('cheers')
  },
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
            src = val.display_src;
              }
          })
        return src;
    },
      getCode () {
      let code = "";
        this.$store.state.redux.posts.forEach((val) => {
          if (val.code === this.$route.params.id) {
            code = val.code;
              }
          })
        return code;
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

  p {
    text-align: left;
    font-size: .9em;
  }

  b {
    text-align: left;
  }

  .postContainer {
    background-color: grey;
    width: 80%;
    margin: 0 auto;
    display: flex;
  }


#lower {
overflow: auto;
width: 100%;
padding-bottom: 10px;
}

#left {
  width: 65%;
}

#right {
  width: 35%;
}

#caption {
width: 280px;
margin: 0 auto;
text-align: left;
padding-bottom: 10px;
font-size: 1.5em;

}

#buttons {
  margin: 0 auto;
  padding-left: 37px;
}

#textDiv {
  text-align: left;
}

button {
  float: left;
  width: 250px;
  height: 45px;
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

#deleteButton {
  width: 5px;
  background-color: grey;
  border-style: none;
  margin-left: 0px;
  padding-bottom: 0px;
    line-height: 0px;
  padding-inline-start: 0px;
}

ul {
  padding: 0px;
}

</style>
