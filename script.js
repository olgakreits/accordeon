//пошли эксперименты

class Component {
  constructor(selector){
    //array of trigger panels
    this.panels = Array.from(document.querySelectorAll(selector.panels));
    // array of hidden panels
    this.hidePanels = Array.from(document.querySelectorAll(selector.hidePanels));
  }

  horizontal_auto (){
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
          if( thisHP !== element.nextElementSibling)
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

  accordion1.horizontal_auto();