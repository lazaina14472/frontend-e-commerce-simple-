

import {

    API_displayCommandeValider ,

    API_deleteCommandeValider

} from '../../API/API.js' ;


const listeCommandeValider =document.getElementById('listeCommandeValider') ;




export async function displayCommandeValider() {

    const response =await fetch(API_displayCommandeValider) ;

    const data =await response.json() ;



    let storageCommandeValider =data.commandeValider ;

    listeCommandeValider.textContent ="" ;

    storageCommandeValider.forEach((c) => {

        let div =document.createElement('div') ;

        div.innerHTML =`

        <h3>ID :${c.idClients}</h3>

        <h3>${c.nomClients} ${c.prenomClients}</h3>
        ` ;



        let btnDelete =document.createElement('button') ;

        btnDelete.textContent ="Supprimer" ;

        btnDelete.addEventListener('click' ,() => {btnDeleteCommandeValider(c.id)}) ;



        div.classList.add('div-commandeValider') ;

        listeCommandeValider.appendChild(div) ;

        div.appendChild(btnDelete) ;

    })


}






// =======================
// DELETE COMMANDE VALIDER
// =======================
async function btnDeleteCommandeValider(id) {

    const response =await fetch(`${API_deleteCommandeValider}/${id}` ,{

        method :'DELETE' ,

    }) ;


    const data =await response.json() ;

    displayCommandeValider() ;

    alert(data.message) ;

}