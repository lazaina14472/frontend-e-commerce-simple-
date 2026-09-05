
export const templatePublication =document.getElementById('templatePublication') ;


templatePublication.innerHTML =`

<button id="btnSeDeConnecter">Se deconnecter</button>


<button id="btnDashboardAdmin" type ="button">Voir les commande</button>


<div id="conteneur_listeCommande">
<h2 style ="text-align :center">Commande Validé :</h2>


<div id="listeCommandeValider"></div> 

<hr>

<h2 style ="text-align :center">Tous les commandes</h2>

<div id="listeCommande"></div>
</div>


<div id="contenuer_Ajouter_Modifier">

<form action="" id="conteneur_ajouterProduits">

  <h2>Entrer votre produit.</h2>

  <label for="">Image du produit :</label>
  <input type="file" id="imgProduits"><br><br>

  <label for="">Nom du produit :</label>
  <input type="text" id="nomProduits"><br><br>

  <label for="">Detailles :</label>
  <input type="text" id="detaillesProduits"><br><br>

  <label for="">Prix :</label>
  <input type="text" id="prixProduits"><br><br>

  <button type="button" id="btnEnregistrerProduits">Enregistrer</button>

  <p id="messageProduits"></p>
  
</form>




<form action="" id="conteneur_modifierProduits">

  <h2>Vous pouvez modifié votre produit.</h2>

  <label for="">Modifier l'image :</label>
  <input type="file" id="imgProduitsModifier">

  <button type="button" id="btnModifierImage">Modifié image</button><br><br><br><br>


  <label for="">Nom du produit :</label>
  <input type="text" id="nomProduitsModifier"><br><br>

  <label for="">Detailles :</label>
  <input type="text" id="detaillesProduitsModifier"><br><br>

  <label for="">Prix :</label>
  <input type="text" id="prixProduitsModifier"><br><br>

  <button type="button" id="btnEnregistrer_ModificationProduits">Enregistrer la modification</button>

  <p id="message_ModificationProduits"></p>
  
</form>

<div id="listeProduitsAdmin"></div>

</div>

` ;