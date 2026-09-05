
import {

    $id

} from '../../UTILS/UTILS.js' ;


export const btnDashboardAdmin =$id('btnDashboardAdmin') ;

const conteneur_listeCommande =$id('conteneur_listeCommande') ;

const contenuer_Ajouter_Modifier =$id('contenuer_Ajouter_Modifier') ;

const listeProduitsAdmin =$id('listeProduitsAdmin') ;





function hideALLAdmin() {

    conteneur_listeCommande.style.display ="none" ;

    contenuer_Ajouter_Modifier.style.display ="none" ;

}




let toggle =true ;


btnDashboardAdmin.addEventListener('click' ,function() {

    if (toggle === true) {

    hideALLAdmin() ;
  
    conteneur_listeCommande.style.display ="block" ;

    toggle =false ;

    return ;

    }

    
    if (toggle === false) {  

    hideALLAdmin() ;

    contenuer_Ajouter_Modifier.style.display ="block" ;

    toggle =true ;

    
    }

})