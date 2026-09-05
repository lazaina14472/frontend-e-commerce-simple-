
import {

  $id ,

} from '../../UTILS/UTILS.js' ;


import {

  API_displayProduits ,

  API_deleteProduits ,

  API_modifierProduits ,

  API_modifierImage

} from '../../API/API.js' ;



import {

  display_ProduitsClients ,

} from './Display_produitsClients & savePanier.js' ;





export const btnEnregistrer_ModificationProduits =$id('btnEnregistrer_ModificationProduits') ;

const listeProduitsAdmin =$id('listeProduitsAdmin') ;

let token =localStorage.getItem('token') ;





// ===================
// DISPLAY PRODUITS 
// ===================


export async function displayProduitsAdmin() {

  const response =await fetch(API_displayProduits ,{

    method :'GET'

  }) ;


  const data =await response.json() ;

  let storageProduits =data.produits ;


  listeProduitsAdmin.textContent ="" ;


  storageProduits.forEach((p) => {

    let article =document.createElement('article') ;

    article.innerHTML =`

    <h3>${p.nom}</h3>

    <img class ="imgProduits-clients" src="${p.image}" alt="">

    <p><strong>${p.detailles}</strong></p>

    <h3>${p.prix}Ar</h3>

    ` ;



    // Delete 

    let btnDelete =document.createElement('button') ;

    btnDelete.textContent ="Supprimer" ;

    btnDelete.onclick = () => {btnDeleteProduits(p.id)} ;



    // Modifier 

    let btnModifier =document.createElement('button') ;

    btnModifier.textContent ="Modifier" ;

    btnModifier.onclick = () => {btnModifierProduits(p)} ;




    article.classList.add('article-produitsAdmin') ;

    btnDelete.classList.add('btn-deleteProduits') ;

    btnModifier.classList.add('btn-modifierProduits') ;



    listeProduitsAdmin.appendChild(article) ;

    article.appendChild(btnDelete) ;

    article.appendChild(btnModifier) ;

  })
  
}







// ===================
// DELETE PRODUITS 
// ===================


async function btnDeleteProduits(id) {

  const response =await fetch(`${API_deleteProduits}/${id}` ,{

    method :'DELETE' ,

    headers :{

      'Authorization': `Bearer ${token}`

    }

  }) ;


  const data =await response.json() ;

  displayProduitsAdmin() ;

  display_ProduitsClients() ;

  alert(data.message) ;

}









// ===================
// MODIFIER PRODUITS 
// ===================


let idModifier =null ;


function btnModifierProduits(p) {

  idModifier =p.id ;



  $id('conteneur_ajouterProduits').style.display ="none" ;

  $id('conteneur_modifierProduits').style.display ="block" ;



  $id('nomProduitsModifier').value =p.nom ;

  $id('detaillesProduitsModifier').value =p.detailles ;

  $id('prixProduitsModifier').value =p.prix ;

}




btnEnregistrer_ModificationProduits.addEventListener('click' ,async function (){ 

  const response =await fetch(`${API_modifierProduits}/${idModifier}` ,{

    method :'PUT' ,

    headers :{

      'Content-Type':'application/json' ,

      'Authorization': `Bearer ${token}`

    } ,

    body :JSON.stringify({

      nomProduitsModifier :$id('nomProduitsModifier').value.trim() ,

      detaillesProduitsModifier :$id('detaillesProduitsModifier').value.trim() ,

      prixProduitsModifier :$id('prixProduitsModifier').value.trim() 
    
    })
    
  }) ;



  const data =await response.json() ;

  displayProduitsAdmin() ;

  display_ProduitsClients() ;


  alert(data.message) ;

  $id('conteneur_ajouterProduits').style.display ="block" ;

  $id('conteneur_modifierProduits').style.display ="none" ;

}) 







// ===================
// MODIFIER IMAGE 
// ===================


$id('btnModifierImage').addEventListener('click' ,function() {

  const fileIMG =$id('imgProduitsModifier').files[0] ;

  if (!fileIMG) {

    $id('message_ModificationProduits').textContent ="Veuillez selectionner une image." ;

    $id('message_ModificationProduits').style.color ="red" ;

    return ;

  }



  const reader =new FileReader() ;

  reader.onload = async () => {

    const response =await fetch(`${API_modifierImage}/${idModifier}` ,{

      method :'PUT' ,

      headers :{

        'Content-Type':'application/json' ,

        'Authorization': `Bearer ${token}`
 

      } ,

      body :JSON.stringify({

        img :reader.result 
      
      })

    }) ;


    const data =await response.json() ;

    displayProduitsAdmin() ;

    display_ProduitsClients() ;

    alert(data.message) ;

    $id('conteneur_ajouterProduits').style.display ="block" ;
 
    $id('conteneur_modifierProduits').style.display ="none" ;

  } 

  reader.readAsDataURL(fileIMG) ;

})


