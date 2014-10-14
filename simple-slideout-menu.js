+function($) {
  if (!$) return;

  var shown = false,
    siteContentSelector = '#site-wrapper > #site-canvas > #site-content',
    toggleMenu = function (show, e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      if (show === shown) { return; }
      else if (show === false) { $(siteContentSelector).off('click.menu.close'); }

      $('#site-wrapper').toggleClass('show-menu', show);
      shown = show;
    },
    hideMenu = function (e) {
      toggleMenu(false, e)
    },
    showMenu = function (e) {
      if (!shown) { $(siteContentSelector).one('click.menu.close', hideMenu); }

      toggleMenu(true, e)
    };

  $(document)
    .on('click.menu.open', '[data-toggle="menu"]', showMenu)
    .on('click.menu.close', '[data-dismiss="menu"]', hideMenu)
    .on('menu.close', hideMenu)
    .on('menu.open', showMenu);

}(jQuery);
