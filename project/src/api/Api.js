import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost/wp-json/wp/v2',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    auth: {
        username: "Fyfynn",
        password: "likt%ZMT!OgFzgtBuLFGlngh"

    }
})


  export default {
    // CATEGORIES 
    getcategories(){
        return instance.get('/categories')  
    },
    addCat(input){
        return instance.post(`/categories`, input)
    },
    deleteCat(id){
        return instance.delete(`/categories/${id}?force=true`)
    },
    editCat(id, input){
        return instance.put(`/categories/${id}`, input)
    },
    // POSTS
    getPosts(id) {
        return instance.get(`/posts/?categories=${id}`)
    },
    getPost(id) {
        return instance.get(`/posts/${id}`)
    },
    addPost(input) {
        return instance.post(`/posts`, input)
    },
    deletePost(id) {
        return instance.delete(`/posts/${id}`)
    },
    editPost(id, input) {
        return instance.put(`/posts/${id}`, input)
    },
    // COMMENTS
    getComments(id) {
        return instance.get(`/comments/?post=${id}`)
    },
    addComment(id, input) {
        return instance.post(`/comments/?post=${id}`, input)
    },
    deleteComments(id) {
        return instance.delete(`/comments/${id}`)
    },
    editComments(id, input) {
        return instance.put(`/comments/${id}`, input)
    }
}