
import {

    $id 

} from '../../UTILS/UTILS.js' ;



export const btnSeDeConnecter =$id('btnSeDeConnecter') ;




btnSeDeConnecter.addEventListener('click' ,function() {

    localStorage.removeItem('token') ;

    window.location.href ="index.html" ;

})
