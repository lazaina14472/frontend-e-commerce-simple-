
export const templateClients =document.getElementById('templateClients') ;



templateClients.innerHTML =`

    <button id="btnDisplayPanier" type ='button'>Panier</button>

    <div id="conteneur_panier">

    <div>
      <h3 style="text-align: center;">Panier</h3>
      <div id="listePanier"></div>
      <h3 style="text-align: center;" id="total_produitsPanier"></h3>
      <button id="btnCreerCommande"  type="button">Creer la commande</button>
    </div>

<form action="" id ="containeur_identiterClients">

  <button id="btnRetourner_auPanier"  type="button">Retour au panier</button>


  <h2>Entrer votre identité</h2>

  <label for="">Nom :</label>
  <input type="text" id="nomClients"><br><br>

  <label for="">Prénom :</label>
  <input type="text" id="prenomClients"><br><br>

  <label for="">Numéro de telephone :</label>
  <input type="text" id="numeroTelephoneClients"><br><br>

  <label for="">Adresse de livraison :</label>
  <input type="text" id="adresseLivrasionClients"><br><br>

  <button id="btnEnvoyerCommande" type="button">Envoyer la commande</button>

  <p id="messageCommandeClients"></p>

</form>

    </div>




    <h2 style="text-align: center;">Tous nos produits</h2>

   <div class="conteneur-rechercheProduitsClients">

    <label for="">Rechercher un produit :</label>
    <input type="text" id="inputRechercheProduits" placeholder="Rechercher...">

   </div>

    <div id="liste_produitsClients"></div>

` ;

