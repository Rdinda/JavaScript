function carregar(){
var nsg=window.document.getElementById('nsg')
var img=window.document.getElementById('imagen')
var data= new Date()
var hora= data.getHours()
nsg.innerHTML=`Agora São ${hora} Horas.`
if(hora>=0&&hora<12){
    img.src='manha.png'
}else if(hora>=12 && hora <18){
    img.src='tarde.png'
}else{
    img.src='noite.png'
}
}