 var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

 // Exibe os usuários na página
 var usuariosList = document.getElementById("usuariosList");
 if (usuarios.length === 0) {
     usuariosList.innerHTML = "<p>Nenhum usuário cadastrado.</p>";
 } else {
     usuarios.forEach(function(usuario) {
         var usuarioDiv = document.createElement("div");
         usuarioDiv.innerHTML = `
             <strong>Nome:</strong> ${usuario.nome}<br>
             <strong>Sobrenome:</strong> ${usuario.sobrenome}<br>
             <strong>Email:</strong> ${usuario.email}<br>
             <strong>Mensagem:</strong> ${usuario.mensagem}<br>
             <hr>
         `;
         usuariosList.appendChild(usuarioDiv);
     });
 }