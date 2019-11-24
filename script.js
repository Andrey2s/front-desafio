// Usei o jquery pra colocar a mascara e puxar os valores dos inputs
$(document).ready(function(){
    $('#telefone').mask('(00) 0000-00000'); // Mascara para telefone
    
    $("#formulario").submit(function(e){
      var password = $(".password").val(); //Pega valor do input
      var repeat_password = $(".r_password").val(); //Pega valor do input
      var firstname = $(".first_name").val(); //Pega valor do input
      var email = $(".email").val(); //Pega valor do input
      var telefone = $(".telefone").val(); //Pega valor do input
  
      if(password != repeat_password){// Testa se for diferente os inputs
        alert("Senhas diferentes");
        return false
      } else {
       alert(firstname +'\n'+ telefone + '\n'+ email + '\n'+ password + '\n'+ repeat_password) // Exibe os valores no alert
      }
  
    });
  
  });