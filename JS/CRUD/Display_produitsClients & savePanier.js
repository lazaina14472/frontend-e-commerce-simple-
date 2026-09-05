
import {

    API_displayProduits ,

} from '../../API/API.js' ;




const liste_produitsClients =document.getElementById('liste_produitsClients') ;

const listePanier =document.getElementById('listePanier') ;

const total_produitsPanier =document.getElementById('total_produitsPanier') ;

export const inputRechercheProduits =document.getElementById('inputRechercheProduits') ;

const conteneur_panier =document.getElementById('conteneur_panier') ;





inputRechercheProduits.addEventListener('input' ,() => {display_ProduitsClients()}) ;





export async function display_ProduitsClients() {

    const response =await fetch(API_displayProduits) ;

    const data =await response.json() ;

    let storageProduits =data.produits ;



    const rechercheValue =inputRechercheProduits.value.trim().toLowerCase() ;


    let filterProduits =storageProduits.filter(

        (p) => p.nom.toLowerCase().includes(rechercheValue) 
    
    ) ;



    liste_produitsClients.textContent ="" ;

    filterProduits.forEach((p) => {

        let article =document.createElement('article') ;

        article.innerHTML =`
        <img class ="imgProduits-clients" src="${p.image}" alt="">

        <h3>${p.nom}</h3>

        <p><strong>${p.detailles}</strong></p>

        <h3>${p.prix}Ar</h3>
        `;


        let btnAjouterPanier =document.createElement('button') ;

        btnAjouterPanier.textContent ="Ajouter" ;

        btnAjouterPanier.onclick = () => {btnAjouter_auPanier(p)} ;




        article.classList.add('article-produitsClients') ;

        liste_produitsClients.appendChild(article) ;

 
        article.appendChild(btnAjouterPanier) ;

    })


}






// ============
// NOMBRE DE PRODUITS 
// ============
function nombreDeproduits() {

    document.getElementById('btnDisplayPanier').textContent =`Panier :${storagePanier.length} produits` ;

}







// ============
// PANIERS
// ============

export let storagePanier =JSON.parse(localStorage.getItem('storagePanier')) || [] ;


function btnAjouter_auPanier(p) {

    conteneur_panier.style.display ="block" ;

    let existProduits =storagePanier.find(

        (produits) => (produits.nom === p.nom) && (produits.detailles === p.detailles)

    )


    if (existProduits) {

        alert(`*${p.nom}* est déja dans votre panier.`) ;

        return ;

    }

    else {

    storagePanier.push({

        image :p.image ,

        detailles :p.detailles ,

        nom :p.nom ,

        qauntiter :1 ,

        prix :p.prix

    }) ;

    localStorage.setItem('storagePanier' ,JSON.stringify(storagePanier)) ;

    }


    afficherProduitsPanier() ;  
    nombreDeproduits() ;  

}





// =========================
// DISPLAY PRODUITS CLIENTS 
// =========================
function afficherProduitsPanier() {

    listePanier.textContent ="" ;


    let totalPrix =0 ;


    storagePanier.forEach((produit ,index) => {

        let totalChaqueProduits =Number(produit.prix) * Number(produit.qauntiter) ;


        let div =document.createElement('div') ;

        div.innerHTML =`
        <p>${produit.nom}</p>

        <img class ="imageProduits_clients" src="${produit.image}" alt="">

        <p>Qauntité :${produit.qauntiter}X</p>

        <p>Prix unitaire :${produit.prix}Ar</p>

        <p><strong>Totals :${totalChaqueProduits}Ar</strong></p>` 
        ;


        totalPrix += totalChaqueProduits ;
 
        total_produitsPanier.textContent =`Totals général :${totalPrix}Ar` ;



        // supprimer produits 
        let btnSupprimer =document.createElement('button') ;

        btnSupprimer.textContent ="Supprimer" ;

        btnSupprimer.onclick = () => {supprimerBtn(index)} ;



        // Diminuer quantiter 
        let btnDimnuer =document.createElement('button') ;

        btnDimnuer.textContent ='-' ;

        btnDimnuer.onclick = () => {dimunuerBtn(produit ,index)} ;


        // Augmenter qauntiter 
        let btnAugmenter =document.createElement('button') ;

        btnAugmenter.textContent ='+' ;

        btnAugmenter.onclick = () => {augmenterBtn(produit)} ;



        listePanier.appendChild(div) ;

        div.appendChild(btnSupprimer) ;

        div.appendChild(btnDimnuer) ;

        div.appendChild(btnAugmenter) ;



        div.classList.add('produits-panier') ;

    })

}






// ===================
// SUPPRIMER PRODUITS
// ===================
function supprimerBtn(index) {

    storagePanier.splice(index ,1) ;

    localStorage.setItem('storagePanier' ,JSON.stringify(storagePanier)) ;


    afficherProduitsPanier() ;

    nombreDeproduits() ;  



    if (storagePanier.length === 0) {
        window.location.href ='index.html' ;
    }

}








// ===================
// DIMNUER PRODUITS
// ===================
function dimunuerBtn(produit ,index) {

    let existProduits =storagePanier.find(

        (p) => p.nom === produit.nom 

    ) ;


    if (existProduits) {

        existProduits.qauntiter -= 1 ;

        localStorage.setItem('storagePanier' ,JSON.stringify(storagePanier)) ;

        afficherProduitsPanier() ;

        nombreDeproduits() ;  


    }


    if (existProduits.qauntiter === 0) {

        storagePanier.splice(index ,1) ;

        localStorage.setItem('storagePanier' ,JSON.stringify(storagePanier)) ;

        afficherProduitsPanier() ;

        nombreDeproduits() ;  

    }


    if (storagePanier.length === 0) {
        window.location.href ='index.html' ;
    }


}






// ===================
// DIMNUER PRODUITS
// ===================

function augmenterBtn(produit) {

    let existProduits =storagePanier.find(

        (p) => p.nom === produit.nom 

    ) ;


    if (existProduits) {

        existProduits.qauntiter += 1 ;

        localStorage.setItem('storagePanier' ,JSON.stringify(storagePanier)) ;

        afficherProduitsPanier() ;

        nombreDeproduits() ;  

    }

}




afficherProduitsPanier() ;    
nombreDeproduits() ;