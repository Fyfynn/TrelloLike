
![Logo](https://media.discordapp.net/attachments/486666780962717727/1003303462697705572/M.T.png)


# Trello like with API WordPress

This is a web project as part of our studies in Epitech            
It's a web application based on Kanban-style.  
The user can create their different columns and add the tasks in them.  
The tasks can have a title and a description like statues such as To Do, In Progress, Done and a section comments. 




## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
Don't forget to download our images and change paths ! ^^
## Screenshots

![App Screenshot](https://media.discordapp.net/attachments/486666780962717727/1003305497799164095/unknown.png?width=1220&height=671)
![App Screenshot](https://media.discordapp.net/attachments/486666780962717727/1003305888481824828/unknown.png?width=1440&height=555)
![App Screenshot](https://media.discordapp.net/attachments/486666780962717727/1003306088793387088/unknown.png?width=1220&height=671)


## API WordPress Quick References

#### Get all items

```http
  GET /wp-json/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all categories / posts / comments

```http
  GET /wp-json/wp/v2/categories
  GET /wp-json/wp/v2/posts
  GET /wp-json/wp/v2/comments
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get posts of a category or get comments of a post

```http
  GET /posts/?categories=${id}

  GET /comments/?posts=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Tech Uses

**Client:** Vue.js 

**Server:** Node, REST API WordPress, Laragon


## Optimizations

The optimizations we have to do is to :  
• integrate a CSS framework and upgrade VueJS3  
• use one or more advanced front-end technologies (SCSS, ES6+, . . . )  
• set up automated tests  
• dockerize the project  
• manage users and their rights  
• drag tasks items between columns 
## Authors

- [@Viktory4](https://github.com/Viktory4)
- [@Cabezas Angie](https://github.com/angiecabezasepitech)
- [@Hacquard Delphine](https://github.com/Fyfynn)

