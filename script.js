const accordeon1 = new accComponent({
  panels: '.block_panel',
  hidePanels: '.hidden_panel'
});

const accordeon2 = new accComponent({
  panels: '.block_panel2',
  hidePanels: '.hidden_panel2',
  accordeon: '.accordeon2'
});

accordeon1.vertical_auto();
accordeon2.horizontal_auto();
