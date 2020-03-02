const accordion = document.getElementsByClassName("accordion");
const blockPanel = document.getElementsByClassName("block_panel");
const hiddenPanel = document.getElementsByClassName("hidden_panel");
let i;
//set_width/height

console.log(Array.from(blockPanel));

//horizontal_realize
for ( i = 0; i < blockPanel.length; i++) {
  blockPanel[i].addEventListener("click", function() {
    let next =  this.nextElementSibling;
    if (next.classList.contains('open')) {
      next.style.height = '0';
      next.classList.toggle('open');
    } 
    else {
      next.style.height = `${ next.scrollHeight }px`;
      next.classList.toggle('open');
    }
    for (i = 0; i < hiddenPanel.length; i++){
      if( next.innerHTML !== hiddenPanel[i].innerHTML){
      hiddenPanel[i].style.height ="0";
      hiddenPanel[i].classList.remove('open');
      }
    }
  });
}

// Array.from(blockPanel).forEach(element => { 
//   element.addEventListener("click", function() {
//     let next =  this.nextElementSibling;
//     if (next.classList.contains('open')) {
//       next.style.height = '0';
//       next.classList.toggle('open');
//     } 
//     else {
//       next.style.height = `${ next.scrollHeight }px`;
//       next.classList.toggle('open');
//     }
//     for (i = 0; i < hiddenPanel.length; i++){
//       if( next.innerHTML !== hiddenPanel[i].innerHTML){
//       hiddenPanel[i].style.height ="0";
//       hiddenPanel[i].classList.remove('open');
//       }
//     }
//   });
  
// });