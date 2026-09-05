
import {

    $id ,

    message ,

    input

} from '../../UTILS/UTILS.js' ;

import {
    
    API_commenderProduits 

} from '../../API/API.js' ;

import {

    storagePanier

} from '../CRUD/Display_produitsClients & savePanier.js' ;

import {

    displayCommande

} from './display & delete & valider commande.js' ;







const nomClients =new input('nomClients') ;

const prenomClients =new input('prenomClients') ;

const numeroTelephoneClients =new input('numeroTelephoneClients') ;

const adresseLivrasionClients =new input('adresseLivrasionClients') ;

const messageCommandeClients =new message('messageCommandeClients') ;

export const btnEnvoyerCommande =$id('btnEnvoyerCommande') ;

btnEnvoyerCommande.addEventListener('click' ,() => {envoyerCommande()}) ;





export async function envoyerCommande() {

    const response =await fetch(API_commenderProduits ,{

        method :'POST' ,

        headers :{

            'Content-Type':'application/json'

        } ,

        body :JSON.stringify({

            produitsClients :JSON.stringify(storagePanier) ,

            nomClients :nomClients.valeur().trim() ,

            prenomClients :prenomClients.valeur().trim() ,

            numeroTelephoneClients :numeroTelephoneClients.valeur().trim() ,

            adresseLivrasionClients :adresseLivrasionClients.valeur().trim()

        })

    }) ;


    displayCommande() ;

    const data =await response.json() ;

    messageCommandeClients.afficher(data.message ,data.color) ;

}
