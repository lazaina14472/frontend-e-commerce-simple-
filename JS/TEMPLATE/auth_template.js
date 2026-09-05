
export const templateAuth =document.getElementById('templateAuth') ;



templateAuth.innerHTML =`

  <form action="" class ="auth-login">

    <h2>Se connecter</h2>
    
    <input type="text" placeholder="Nom d'utulisateur"  id="nomAdmin"><br><br>

    <div class="conteneur-password">
        <input type="password" placeholder="Password"  id="password">
        <button type="button" id="btnTogglePasswordAdmin">Show</button><br><br>
    </div>

    <button type="button" id="btnSeConnecter">Connéxion</button>
    <p id="messageAuthAdmin"></p>

  </form>

`