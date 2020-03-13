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
    //array of trigger panels
    this.panels = Array.from(document.querySelectorAll(selector.panels));
    // array of hidden panels
    this.hidePanels = Array.from(document.querySelectorAll(selector.hidePanels));
  }

  hide_show (){
    this.panels.forEach((element,index) => {
      // event "when element clicked"
      element.addEventListener('click',()=>{
        // hidden panel of element[index] = HP
        let HP = this.hidePanels[index];
        if (HP.classList.contains('show')) 
        {
          HP.style.height = '0';
          HP.classList.toggle('show');
        } 
        else 
        {
          HP.style.height = `${ HP.scrollHeight }px`;
          HP.classList.toggle('show');
        }

        // automatic hiding of visible panels except the current one
        for ( let i = 0; i < this.hidePanels.length; i++)
        {
          // current hidden panel = thisHP
          let thisHP = this.hidePanels[i];
          // КОСТЫЫЫЫЛЬ!!!!!
          if( thisHP.innerHTML !== element.nextElementSibling.innerHTML)
          {
            thisHP.style.height ="0";
            thisHP.classList.remove('show');
          }
        }
      });
    });
  }
}

  const accordion1 = new Component({
    panels: '.block_panel',
    hidePanels: '.hidden_panel'
  });

  accordion1.hide_show();