
export const btnDisplayPanier =document.getElementById('btnDisplayPanier') ;

const conteneur_panier =document.getElementById('conteneur_panier') ;

export const btnCreerCommande =document.getElementById('btnCreerCommande') ;

const listePanier =document.getElementById('listePanier') ;

const total_produitsPanier =document.getElementById('total_produitsPanier') ;

const containeur_identiterClients =document.getElementById('containeur_identiterClients') ;

const btnRetourner_auPanier =document.getElementById('btnRetourner_auPanier') ;



function hideAllPanier() {
  
  conteneur_panier.style.display ='none' ;

}



let togglePanier =true ;

btnDisplayPanier.addEventListener('click' ,function() { 

  if (togglePanier === true) {

    hideAllPanier() ;

    conteneur_panier.style.display ='block' ;

    togglePanier =false ;

    return ;

  }


  if (togglePanier === false) {

    hideAllPanier() ;

    conteneur_panier.style.display ="none" ;

    togglePanier =true ;

    return ;

  }


})







function hideAll() {  

  total_produitsPanier.style.display ="none" ;

  listePanier.style.display ="none" ;

  containeur_identiterClients.style.display ="none" 

  btnCreerCommande.style.display ="none" ;

}




btnCreerCommande.addEventListener('click', function() {

  hideAll() ;

  containeur_identiterClients.style.display ='block' ;
    
})




btnRetourner_auPanier.addEventListener('click' ,function() {

  hideAll() ;

  total_produitsPanier.style.display ="block" ;

  listePanier.style.display ="block" ;

  btnCreerCommande.style.display ="block" ;
    
})