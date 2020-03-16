function verificar(){
    var data=new Date()
    var ano=data.getUTCFullYear()
    var fano= document.getElementById('txtano')
    var res=document.getElementById('res')
    if (fano.Value.length==0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        alert('tudo ok')
    }
}