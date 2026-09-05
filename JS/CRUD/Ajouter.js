
import {

  $id ,

  input ,

  message

} from '../../UTILS/UTILS.js' ;



import {

  API_ajouterProduits

} from '../../API/API.js' ;


import {

  displayProduitsAdmin 

} from './Display & Delete & Modifier.js'


import {

display_ProduitsClients ,

} from './Display_produitsClients & savePanier.js'





const imgProduits =$id('imgProduits') ;

const nomProduits =new input('nomProduits') ;

const detaillesProduits =new input('detaillesProduits') ;

const prixProduits =new input('prixProduits') ;

const messageProduits =new message('messageProduits') ;



export const btnEnregistrerProduits =$id('btnEnregistrerProduits') ;




let token =localStorage.getItem('token') ;




btnEnregistrerProduits.addEventListener('click' ,function() {

  const fileIMG =imgProduits.files[0] ;

  if (!fileIMG) {

    messageProduits.afficher('Veuillez selectionné une image.' ,'red') ;

  }

  const reader =new FileReader() ;


  reader.onload = async () => {

    const response =await fetch(API_ajouterProduits ,{

      method :'POST' ,

      headers :{

        'Content-Type':'application/json' ,

        'Authorization': `Bearer ${token}`

      } ,

      body :JSON.stringify({

        img :reader.result ,

        nomProduits :nomProduits.valeur().trim() ,

        detaillesProduits :detaillesProduits.valeur().trim() ,

        prixProduits :prixProduits.valeur().trim() 
      
      }) ,


    }) ;

    displayProduitsAdmin() ;

    display_ProduitsClients() ;

    const data =await response.json() ;

    messageProduits.afficher(data.message ,data.color) ;



    imgProduits.value ="" ;

    nomProduits.vider() ;

    detaillesProduits.vider() ;
    
    prixProduits.vider() ;

  } 


  reader.readAsDataURL(fileIMG) ;

})


