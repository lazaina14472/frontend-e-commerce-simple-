
import {$id} from '../../UTILS/UTILS.js' ;


export const btn_navProduits =$id('btn_navProduits');

export const btn_navAdmin =$id('btn_navAdmin') ;

export const btn_navPublier =$id('btn_navPublier') ;



const templateClients =$id('templateClients') ;

const templateAuth =$id('templateAuth') ;

const templatePublication =$id('templatePublication') ;




function hideAll_templates() {

    templateClients.style.display = 'none' ;

    templateAuth.style.display ='none' ;

}





btn_navAdmin.addEventListener('click' ,function() {

    hideAll_templates() ;

    templateAuth.style.display ="block" ;

})




btn_navProduits.addEventListener('click' ,function() {

    hideAll_templates() ;

    templateClients.style.display ="block" ;

    templatePublication.style.display ="none" ;

})




btn_navPublier.addEventListener('click' ,function() {

    templateClients.style.display ="none" ;

    templatePublication.style.display ="block" ;

})