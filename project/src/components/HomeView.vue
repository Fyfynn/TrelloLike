<template>
    <!-- Container & Cards-->
    <div class="container">
        <span class="editCat" v-if="showEditCat"><input v-model="editCate.name"><button @click="editCat(idCat)">Edit</button></span>
        <div v-for="category in categories" v-bind:key="category.id" class="card">
            <div v-drag class="card-header">
                <input class="todo" type="text" name="TO DO" placeholder="Title of the list" :value="category.name">
                <button class="editBtn" @click="editView(category.id)"><img src="../assets/more_horiz_FILL0_wght400_GRAD0_opsz48.png"></button>
            </div>
            <Posts :cat ="category.id" />
            <div class="card-footer">
                <div class="delete">
                    <button @click="deleteCat(category.id)">Delete list</button>
               </div>
            </div>
        </div>
                        <!-- CREATE CONTAINER AND CARD TEPMPLATE -->
        <div class="card">
            <div class="card-header">
                <input class="todo" type="text" name="TO DO" placeholder="Title of the list" v-model="inputCat.name">
            </div>
            <div class="card-footer">
                <div class="add">
               <button v-on:click="catPlus()">+ Add List</button>
                </div>  
            </div>
        </div>
        </div>
</template>


<script>
import Api from '@/api/Api.js'
import Posts from './Posts.vue'
    

export default {
  name: 'HelloWorld',
  components: {
    Posts
  },
  data () {
    return {
    msg: 'Welcome to Your Vue.js App',
    inputCat: {
        name: ''
    },
    editCate: {
        name: ''
    },
    posts: [],
    categories: [],
    showEditCat: false,
    idCat: '',
    }
  },
  
mounted() {
    Api.getcategories()
        .then(response => {
            this.categories = response.data
        
        })
        .catch(error => {
            console.log('Error :', error.response)
        })
},
methods: {
    catPlus(){
        Api.addCat(this.inputCat)
        .then(function(response){
            if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
            console.log(response)
        }.bind(this),
        );
      },
    deleteCat(id) {
        Api.deleteCat(id)
        .then(function(response) {
            if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
            console.log(response)
        }.bind(this));
    },
    editCat(id) {
        Api.editCat(id, this.editCate)
        .then(function(response) {
            if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
            console.log(response)
        }.bind(this));
        this.showEditCat = false;
        this.idCat = '';
        this.editCate= { name: ''};
    },
    editView(id) {
        this.idCat = id;
        this.showEditCat = true;
    }
}
}
</script>


<style scoped>
/* Container */
.container{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    background: linear-gradient(45deg, lightblue, pink);
    padding: 10px;
    width: 100%;
    height: 1000px;
    
}
/* Card */
.card{
    width: 300px;
    height: 360px;
    background-color: rgb(230, 230, 230);
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgb(184, 183, 183);
    margin: 10px;
    height: 350px;
    overflow-x: scroll;
    scrollbar-color: #aaa transparent;
    scrollbar-width:thin;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 8px;
}
.card-header{
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-header img{
    width: 2em;
}
.card-header button{
    border:none;
    background: transparent;
}
.card-footer{
    display: flex;
    justify-content: center;
    align-items: center;
}
.add button {
    padding: 10px;
    background-color: transparent;
    border: none;
}
.delete{
    margin-top: 1em;
}
.delete button{
    padding: 10px;
    background-color: transparent;
    border: none;
}
.add:hover button{
    background-color: rgba(207, 205, 205, 0.96);
    border-radius: 2em;
    padding: 10px;
}
.delete:hover{
    background-color: rgba(207, 205, 205, 0.96);
    border-radius: 2em;
}
.todo{
    width:100%;
    height: 2em;
    border: none;
    background-color: rgb(230, 230, 230);
    padding: 3%;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
}
.editCat {
    position: absolute;
    top: 47%;
    left: 45%;
}
input{
    outline: none;
    border: none;
}
.editCat button {
    padding: 10px;
    background-color: transparent;
    border: none;
}
.editCat:hover button{
    background-color: rgba(207, 205, 205, 0.96);
    border-radius: 2em;
    padding: 10px;
}
.editBtn:hover {
    background-color: rgba(207, 205, 205, 0.96);
    border-radius: 2em;
}
</style>