function contar(){
    var n1=document.querySelector('input#inicio').value;
    var n2=document.querySelector('#fim').value;
    var inc=document.querySelector('#passo').value;
    var res=document.querySelector('#res')
    var soma=res==n1
    for(n1;n1<=n2;n1+=inc){
        res.innerHTML=`${soma}`
    }
}