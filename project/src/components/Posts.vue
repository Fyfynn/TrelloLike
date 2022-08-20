<template>
<div id="notes">
    <div v-for="post in posts" v-bind:key="post.id" class="card-item">
            <p v-on:click="openPost(post.id)">{{ post.title.rendered }}</p>
            <button v-on:click="deletePost(post.id)"><img src="../assets/delete_forever_FILL0_wght400_GRAD0_opsz48.png" class="trash"></button>
    </div>
    <div class="card-footer">
        <div class="add">
            <textarea v-model="inputPost.title" placeholder="Create a Post"></textarea>
            <button @click="createPost()">+ Add a card</button>
        </div>
    </div>
    <Test v-if="showpost" @closePost="closePost" :card="postID"/>
</div>
</template>

<script scoped>
import Api from '@/api/Api.js'
import Test from './Test.vue'

export default {
    components: {
        Test
    },
    props: [
        'cat'
    ],
    data() {
      return {
        posts: [],
        postID: '',
        showpost: false,
        inputPost: {
            title: '',
            content: '',
            status: 'publish',
            categories: this.cat
        }
      }
    },
    mounted() {
      Api.getPosts(this.cat)
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
      console.log('Error :', error.response)
      })
    },
    methods: {
        createPost(){
            Api.addPost(this.inputPost)
            .then(function( response ){
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
        },
        openPost(id) {
            this.postID = id;
            this.showpost = true;
        },
        closePost() {
            this.card = '';
            this.showpost = false;
        },
        deletePost(id) {
            Api.deletePost(id)
            .then(function( response ){
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
        },
    },
}
</script>

<style scoped>
.card-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    color: #474747;  
}
.card-item img{
    width: 1.75em;
}
.card-item button{
    background-color: transparent;
    border: none;
}
.card-item, .trash{
    opacity: 0;
    cursor: pointer;
}
.card-item, .trash:hover{
    opacity: 1;
}
.card-footer{
    display: flex;
    justify-content: center;
    align-items: center;
}
.add{
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.add textarea{
    padding: 8px;
    background-color: white;
    border: none;
    border-radius: 1em;
    width: 13em;
    height: 3em;
    margin-right: 1.5em;
    resize: none;
    outline: none;
}
.add img{
    width: 2em;
    display:flex;
    justify-content: center;
    
}
.add button{
    border: none;
    border-radius: 2em;
    cursor: pointer;
    padding: 7px;
}
.add button:hover {
    background-color: rgba(207, 205, 205, 0.96);
    border-radius: 2em;
}
</style>