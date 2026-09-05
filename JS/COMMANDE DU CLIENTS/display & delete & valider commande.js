
import {

  $id

} from '../../UTILS/UTILS.js' ;

import {

  API_displayCommandeClients ,

  API_deleteCommandeClients ,

  API_validerCommandeClients

} from '../../API/API.js' ;

import {

  displayCommandeValider

} from './displayCommandeValider & supprimer.js' ;






const listeCommande =$id('listeCommande') ;

let token =localStorage.getItem('token') ;






// ==================
// DISPLAY COMMANDE 
// ==================

export async function displayCommande() {

  const response =await fetch(API_displayCommandeClients) ;

  const data =await response.json() ;

  let clientsStorage =data.Clients ;


// AFFICHAGE CLIENTS 

listeCommande.textContent ="" ;


clientsStorage.forEach((c) => {

    const div = document.createElement('div');

    div.innerHTML = `

        <h3>Nom :${c.nomClients} ${c.prenomClients}</h3>

        <h3>ID :${c.id}</h3>

        <p>Numero de téléphone :${c.numeroTelephoneClients}</p>

        <p>Adresse de livraison :${c.adresseLivrasionClients}</p>

    `;


// AFFICHAGE PRODUITS 

const produits = JSON.parse(c.produitsClients);

let totalTous_lesProduits =0 ;



produits.forEach((p) => {

    let divProduits = document.createElement('div');

    divProduits.innerHTML = `
        <img src="${p.image}" alt="${p.nom}" width="100">

        <h4>${p.nom}</h4>

        <p>Prix : ${p.prix} Ar</p>

        <p>Quantité : ${p.qauntiter}</p>

    `;



    totalTous_lesProduits += Number(p.prix) * Number(p.qauntiter)

    div.appendChild(divProduits);
});



  const total = document.createElement('h3');

  total.innerHTML = `
        Total de la commande : ${totalTous_lesProduits} Ar
  `;



  let btnDelete =document.createElement('button') ;

  btnDelete.textContent ="Supprimer" ;

  btnDelete.addEventListener('click' ,() => {btnDeleteCommande(c.id)}) ;



  let btnValider =document.createElement('button') ;

  btnValider.textContent ="Valider la commande" ;

  btnValider.addEventListener('click' ,() => {btnValiderCommande(c)}) ;



div.appendChild(total);

div.appendChild(btnDelete) ;

div.appendChild(btnValider) ;

listeCommande.appendChild(div);

});


}








// ======================
// SUPPRIMER LA COMMANDE 
// ======================

async function btnDeleteCommande(id) {
  
  const response =await fetch(`${API_deleteCommandeClients}/${id}` ,{

    method :'DELETE' ,

    headers :{

      'Authorization': `Bearer ${token}`

    }

  }) ;


  displayCommande() ;

  const data =await response.json() ;

  alert(data.message) ;

}







// ================
// VALIDER COMMANDE 
// ================

async function btnValiderCommande(c) {

  const response =await fetch(API_validerCommandeClients ,{

    method :'POST' ,

    headers :{

      'Content-Type':'application/json' ,

      'Authorization': `Bearer ${token}`

    } ,

    body :JSON.stringify({

      nomClients :c.nomClients ,

      prenomClients :c.prenomClients ,

      id :c.id

    })

  }) ;


  const data =await response.json() ;

  displayCommandeValider() ;

  alert(data.message) ;

}