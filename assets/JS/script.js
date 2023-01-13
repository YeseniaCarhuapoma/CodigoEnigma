

  
function encriptar(){
    passSistema = "ada1234";
    msgError = "Contraseña incorrecta, vuelve a intentarlo";
    var mensaje = document.getElementById("msg").value;
    var Password = document.getElementById("pass").value;
     //alert(mensaje+ "+" +Password)
 if(passSistema == Password){
    //alert("Contraseña correcta");
    document.getElementById("error").innerHTML = "";
    var encryted = btoa(mensaje);
    //alert(encryted);
    document.getElementById("demo1").innerHTML = encryted;
 }else{
    //alert("error")
    document.getElementById("error").innerHTML = msgError;
 }

}
function desencriptar(){
    var mensajeCodigo = document.getElementById("Codigo").value;
    var decrypted = atob(mensajeCodigo)
    document.getElementById("demo2").innerHTML = decrypted;
}