var accordion = document.getElementsByClassName("accordion");
var blockPanel = document.getElementsByClassName("block_panel");
var hiddenPanel = document.getElementsByClassName("hidden_panel");
var i;
//set_width/height
console.log(accordion.getAttribute);


//horizontal_realize
for ( i = 0; i < blockPanel.length; i++) {
  blockPanel[i].addEventListener("click", function() {
    if (this.nextElementSibling.classList.contains('open')) {
      this.nextElementSibling.style.height = '0';
      this.nextElementSibling.classList.toggle('open');
    } 
    else {
      this.nextElementSibling.style.height = `${ this.nextElementSibling.scrollHeight }px`;
      this.nextElementSibling.classList.toggle('open');
    }
    for (i = 0; i < hiddenPanel.length; i++){
      if( this.nextElementSibling.innerHTML !== hiddenPanel[i].innerHTML){
      hiddenPanel[i].style.height ="0";
      hiddenPanel[i].classList.remove('open');
      }
    }
  });
  
}
