  
document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );

//const UpdateDom = () => document.getElementById('text').innerText = `This is really cool!`

function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }