const form = document.querySelector('form');

 form.addEventListener('submit', function(e){ 
    e.preventDefault()
    setTimeout(function() {
    
  const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
    .map(item => item.value)

    if(values.length === 0) {
          alert("Error! Nothing selected")
      }
      else {
          alert("Successfully submitted!")
      };
    },2000)
}
 );