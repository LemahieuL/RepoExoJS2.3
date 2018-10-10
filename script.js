var lastname = document.getElementById('lastname')
var regex = /^[a-zA-ZÂ-ẑ-]+$/
lastname.addEventListener('keypress', dialog)

function dialog(){
  if(regex.test(lastname.value)){
    alert(lastname.value)
  }else{
    alert('Entrer des Lettres')
  }
}
