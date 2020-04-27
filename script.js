const accordion1 = new accComponent({
    panels: '.block_panel',
    hidePanels: '.hidden_panel'
  });

  const accordion2 = new accComponent({
    panels: '.block_panel2',
    hidePanels: '.hidden_panel2',
    accordion:'.accordion2'
  });

  accordion1.vertical_auto();
  accordion2.horizontal_auto();