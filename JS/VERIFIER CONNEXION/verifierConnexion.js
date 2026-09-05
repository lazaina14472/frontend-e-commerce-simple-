
import {

  $id ,

  message ,

} from '../../UTILS/UTILS.js' ;






const templateAuth =$id('templateAuth') ;

const templatePublication =$id('templatePublication') ;

const btn_navAdmin =$id('btn_navAdmin') ;

const btn_navPublier =$id('btn_navPublier') ;




let token =localStorage.getItem('token') ;


if (token) {

  templateAuth.style.display ="none" ;

  templatePublication.style.display ="none" ;

  btn_navAdmin.style.display ="none" ;

  btn_navPublier.style.display ="block" ;

}

