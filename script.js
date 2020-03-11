// const accordion = document.getElementsByClassName("accordion");
// const blockPanel = document.getElementsByClassName("block_panel");
// const hiddenPanel = document.getElementsByClassName("hidden_panel");
// let i;
// 
// 
// // horizontal_realize
// for ( i = 0; i < blockPanel.length; i++) {
//   blockPanel[i].addEventListener("click", function() {
//     let next =  this.nextElementSibling;
//     if (next.classList.contains('show')) {
//       next.style.height = '0';
//       next.classList.toggle('show');
//     } 
//     else {
//       next.style.height = `${ next.scrollHeight }px`;
//       next.classList.toggle('show');
//     }
//     for (i = 0; i < hiddenPanel.length; i++){
//       if( next.innerHTML !== hiddenPanel[i].innerHTML){
//       hiddenPanel[i].style.height ="0";
//       hiddenPanel[i].classList.remove('show');
//       }
//     }
//   });
// }
// 
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

//пошли эксперименты

class Component {
  constructor(selector){
    this.elems = Array.from(document.querySelectorAll(selector.panel));
    this.hide_elems = Array.from(document.querySelectorAll(selector.hidePanel));
  }
  hide (){
    this.elems.forEach((element,index) => {
      element.addEventListener('click',()=>{
        this.hide_elems[index].style.color = 'red';
      });
        
    });
  }
}

  const accordion1 = new Component({
    panel: '.clases',
    hidePanel: '.clasesHP'
  });

  console.log(accordion1.elems);
  console.log(accordion1);
  console.log(accordion1.hide());