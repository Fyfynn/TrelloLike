<template>
    <div class="container">
        <div class="overlay"></div>
    <div class="card">
        <div class="close" @click="closePost()">
            <img src="../assets/close.png" alt="close">
        </div>

        <div class="title">
            <div class="item title-header">
                <img src="../assets/title.png" alt="title">
               <input type="text" :placeholder="this.title" class="input-title" v-model="inputEdit.title">
            </div>
        </div>

        <div class="item description">
            <div class="description-header">
                <img src="../assets/description.png" alt="description" class="description-item">
                <p class="description-item">Description</p>
            </div>
            <p v-html="this.content"></p>
            <textarea cols="70" rows="5" placeholder="Edit your content" type="text" v-model="inputEdit.content"></textarea>
        </div>

        <br>

        <div class="item activite">
            <div class="activite-header">
            <img src="../assets/activites.png" alt="activites" class="activite-item">
            <p class="activite-item">Activité</p>
            </div>
        
            <span><textarea placeholder="Add comment" cols="70" rows="5" v-model="inputCom.content"></textarea><button @click="addComment()">Comment</button></span>
            <span v-if="showEditComs"><input v-model="inputEditCom.content"/><button @click="editComments(idCom)">Edit</button></span>
            <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
                <p>From : {{comment.author_name}}</p>
                <p v-html="comment.content.rendered"></p>
                <div class="butn">
                <a class="deleteComments" @click="deleteComments(comment.id)">Delete</a>
                <a class="editComments" @click="editView(comment.id)">Edit</a>
                </div>
            </div>
        </div>
        <div class="button-card">
            <button v-on:click="editPost(card)">Save</button>
        </div>
    </div> <!-- Fin de la card-->
</div> <!-- Fin du conteneur-->
</template>

<script>
import Api from '@/api/Api.js'

export default {
    props: [
        'card'
    ],
    data() {
        return {
            title: '',
            content: '',
            inputEdit: {
                title: '',
                content: '',
            },
            inputEditCom: {
                content: ''
            },
            inputCom: {
                content: ''
            },
            comments: [],
            showEditComs: false,
            idCom: '',
        }
    },
    mounted() {
        Api.getPost(this.card)
        .then(response => {
            this.content = response.data.content.rendered;
            this.title = response.data.title.rendered;
        })
        .catch(error => {
            console.log('Error :', error.response)
        }),
        Api.getComments(this.card)
        .then(response => {
            this.comments = response.data
        })
        .catch(error => {
            console.log('Error :', error.response)
        })
    },
    methods: {
        closePost() {
            this.$emit('closePost');
        },
        editPost(id){
            Api.editPost(id, this.inputEdit)
            .then(function( response ){
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
        },
        addComment() {
            Api.addComment(this.card, this.inputCom)
            .then(function( response ){
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
        },
        deleteComments(id) {
            Api.deleteComments(id)
            .then(function(response){
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
        },
        editComments(id) {
            Api.editComments(id, this.inputEditCom)
            .then(function(response) {
                if(response) {
                this.$router.go();
            } else {
                alert("Désolé, une erreur est apparu lors de votre requête.")
            }
                console.log(response)
            }.bind(this));
            this.showEditComs = false;
            this.idCom = '';
            this.inputEditCom = { content: ''};
        },
        editView(id) {
            this.idCom = id;
            this.showEditComs = true;
        },

    },
}
</script>


<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
    
}
.overlay{
    position:fixed;
    top: 0;
    bottom:0;
    left:0;
    right: 0;
    background: rgb(0, 0, 0, 0.5);
    
}
.card{
    background-color: rgb(238, 238, 238);
    width: 35em;
    height: 45em;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    position:fixed;
}
.close{
    display: flex;
    justify-content: flex-end;
}
.close img{
    width: 1.5em;
}
.close img:hover{
    background-color:#c3c2c2b0;
    cursor: pointer;
    border-radius: 2em;
    padding: 2px;
}
.input-title{
    background-color: rgb(238, 238, 238);
    border: none;
    padding: 15px;
}
.item img{
    width: 2em;
}
.item{
    margin: 10px;
}
.title-header, .description-header, .activite-header{
    display: flex;
    align-items: center;
}
.description-item, .activite-item{
    margin-right: 15px;
    margin-bottom: 10px;
}
button{
    border: none;
    padding: 10px;
    background-color: #d9d7d7a2;
    border-radius: 2px;
    display: flex;
    justify-content: center;
}
button:hover{
    background-color: #c3c2c2b0;
}
.button-card{
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    outline: none;
    border: none;
}
textarea{
    padding: 10px;
    background-color: #d9d7d7a2;
    border: none;
    outline: none;
    resize: none;
}
.comment{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    background-color: #d9d7d7a2 ;
}
.deleteComments{
    cursor: pointer;
    background-color: rgb(255, 80, 80);
    border-radius: 2em;
    margin-right: 1em;
}
.editComments{
    cursor: pointer;
    background-color: rgb(115, 248, 248);
    border-radius: 2em;
    width: 5em;
}
.butn{
    display:flex;
}
</style>