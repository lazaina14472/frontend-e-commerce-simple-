

import {$id ,message ,input} from './UTILS/UTILS.js' ;

import './API/API.js' ;




import {btn_navProduits ,btn_navAdmin} from './JS/TOGGLE/toggleNAV.js' ;

import {templateAuth} from './JS/TEMPLATE/auth_template.js' ;

import {btnTogglePasswordAdmin} from './JS/TOGGLE/togglePassword.js' ;

import {templatePublication} from './JS/TEMPLATE/templateDePublication.js' ;

import {templateClients} from './JS/TEMPLATE/templateClients.js' ;

import './JS/VERIFIER CONNEXION/verifierConnexion.js' ;




import {btnSeConnecter} from './JS/AUTH/loginAdmin.js' ;

import {btnSeDeConnecter} from './JS/SE DECONNECTER/seDeconnecter.js' ;




import {btnEnregistrerProduits} from './JS/CRUD/Ajouter.js' ;

import {displayProduitsAdmin} from './JS/CRUD/Display & Delete & Modifier.js' ;

displayProduitsAdmin() ;

import {display_ProduitsClients} from './JS/CRUD/Display_produitsClients & savePanier.js' ;

display_ProduitsClients() ;




import {btnDisplayPanier} from './JS/TOGGLE/togglePanier.js' ;




import {btnCreerCommande} from './JS/TOGGLE/togglePanier.js' ;

import {btnEnvoyerCommande} from './JS/COMMANDE DU CLIENTS/commanderProduits.js'

import {btnDashboardAdmin} from './JS/TOGGLE/toggleAdmin.js' ;

import {displayCommande} from './JS/COMMANDE DU CLIENTS/display & delete & valider commande.js' ;

displayCommande() ;

import {displayCommandeValider} from './JS/COMMANDE DU CLIENTS/displayCommandeValider & supprimer.js' ;

displayCommandeValider() ;
