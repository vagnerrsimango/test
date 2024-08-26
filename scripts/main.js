window.onscroll = function() {
  var navScroll = "nav-scroll",
    scrollPoint = 586,
    // viewWidth = 768,
    navbar = document.getElementById("navbar").classList;

  if (
    document.body.scrollTop > scrollPoint ||
    document.documentElement.scrollTop > scrollPoint
  )
    navbar.add(navScroll);
  else navbar.remove(navScroll);
};
