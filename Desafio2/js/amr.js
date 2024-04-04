document.addEventListener("DOMContentLoaded", function() {
    
    var cadform = document.getElementById("contato-cad-form");
    cadform.addEventListener("submit", async (e) => {
        e.preventDefault();

        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        var email = document.getElementById("email").value;
        var mensagem = document.getElementById("mensagemTextarea").value;

        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        console.log(mensagem);

        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagemTextarea").value = "";

        alert("Dados salvos com sucesso!");
        
        let usuarios= new Array();
        if(localStorage.hasOwnProperty("usuarios")){
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        }
        
        usuarios.push({nome, sobrenome, email, mensagem});
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    });

    // Limpar localStorage
    
    document.getElementById("limparBotao").addEventListener("click", function() {
        localStorage.removeItem("usuarios");
        alert("Os usuários foram removidos do localStorage.");
    });
    
});











