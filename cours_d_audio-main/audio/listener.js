
 var nav = document.querySelector("nav")
//var listes = document.querySelectorAll(".ul li")


/***************LES GESTIONNAIRES D'EVENEMENT */
var listenerFunctions ={
    openeNav: (event)=>{
        nav.style.display = "block"
    },
    closeNav: ()=>{
        nav.style.display = "none"
    }
}

/*******************les abonnements*********/
var setupListeners = () =>{
    nav.onmouseover = listenerFunctions.openeNav

    nav.addEventListener("mouseleave", listenerFunctions.closeNav)
    //onmouseleave = listenerFunctions.closeNav

    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listenerFunctions.closeNav
    }
}