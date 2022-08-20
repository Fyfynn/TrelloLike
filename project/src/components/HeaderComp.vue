<template>
     <header class="header"> 
        <div class="gauche">
        <div class="logo">
            <img src="../assets/apps_FILL0_wght400_GRAD0_opsz48.png" alt="">
            <img src="../assets/M.T.png" alt="logo">
        </div>
        <div class="title">
            <p>My Trello</p>
        </div>
        <div class="navbar">
            <select class="espace select">
                <option>Espace de travail</option>
                <option value="1">Valeur 1</option>
                <option value="2">Valeur 2</option>
                <option value="3">Valeur 3</option>
            </select>
            <select class="récent select">
                <option>Récent</option>
                <option value="1">Valeur 1</option>
                <option value="2">Valeur 2</option>
                <option value="3">Valeur 3</option>
            </select>
            <select class="favoris select">
                <option>Favoris</option>
                <option value="1">Valeur 1</option>
                <option value="2">Valeur 2</option>
                <option value="3">Valeur 3</option>
            </select>
            <select class="modèles select">
                <option>Modèles</option>
                <option value="1">Valeur 1</option>
                <option value="2">Valeur 2</option>
                <option value="3">Valeur 3</option>
            </select>
        </div>
        </div>
    </header>
</template>

<script>
</script>


<style scoped>

/* Header */
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 60px;
    font-size: 2rem;
    background-color: lightblue;
    color: #474747;
}

.gauche{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.logo{
    display: flex;
    align-items: center;
}
.logo img{
    width: 1em;
    align-items: center;
    margin-right: 5px;
}
.navbar{
    margin-left: 10px;
    background-color: transparent;
    display:flex; 
}
.select{
    border:none;
    outline: none;
    color: #474747;
}
option{
    background-color:rgba(226, 225, 225, 0.96);
}
.espace{
    margin-right: 2em;
    background-color: transparent;
    display:flex;
    align-items: center;
}
.espace img{
    width: 2em;
}
.espace:hover{
    background-color: rgba(226, 225, 225, 0.96);
    border-radius: 2em;
    cursor: pointer;

}
.récent{
    margin-right: 2em;
    background-color: transparent;
    display:flex;
    align-items: center;
    
}
.récent img{
    width: 2em;
}
.récent:hover{
    background-color: rgb(226, 225, 225, 0.96);
    border-radius: 2em;
    cursor: pointer;

}
.modèles{
    margin-right: 2em;
    background-color: transparent;
    display:flex;
    align-items: center;
    
}
.modèles img{
    width: 2em;
}
.modèles:hover{
    background-color: rgb(226, 225, 225, 0.96);
    border-radius: 2em;
    cursor: pointer;

}
.favoris{
    margin-right: 2em;
    background-color: transparent;
    display:flex;
    align-items: center;
}
.favoris img{
    width: 2em;
}
.favoris:hover{
    background-color: rgb(226, 225, 225, 0.96);
    border-radius: 2em;
    cursor: pointer;

}

.title{
    padding: 10px;
}

button{
    border: none;
    outline: none;
}
</style>