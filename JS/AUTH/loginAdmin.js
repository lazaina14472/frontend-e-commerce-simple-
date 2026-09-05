
import {$id ,message ,input} from '../../UTILS/UTILS.js' ;

import { API_login } from '../../API/API.js';



const nomAdmin =new input('nomAdmin') ;

const password =new input('password') ;

const messageAuthAdmin =new message('messageAuthAdmin') ;

export const btnSeConnecter =$id('btnSeConnecter') ;





async function saveAdmin() {

  try {

  const response =await fetch(API_login ,{

    method :'POST' ,

    headers :{

      'Content-Type':'application/json' 

    } ,

    body :JSON.stringify({

      nomAdmin :nomAdmin.valeur().trim() ,

      password :password.valeur().trim()
    
    }) 

  })


  const data =await response.json() ;

  messageAuthAdmin.afficher(data.message ,data.color) ;


  if (data.token) {

    localStorage.setItem('token' ,data.token) ;

    alert(data.message) ;

    window.location.href ='index.html' ;

  }

  }
  
  
  catch (error) {

    messageAuthAdmin.afficher(error) ;

  }

}




btnSeConnecter.addEventListener('click' ,function() {

  try { 

    saveAdmin() ;

  } 
  
  
  catch (error) {

    messageAuthAdmin.afficher(error ,'red') ;

  }
  
})


