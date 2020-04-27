document.addEventListener('DOMContentLoaded',function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems,{
    onOpenEnd : function(){
      document.getElementById("thumbnail").setAttribute("class","scale-transition scale-in circle responsive-img rounded");
    },
     onCloseStart : function(){
      document.getElementById("thumbnail").setAttribute("class","scale-transition scale-out circle responsive-img rounded");
    }
  });
});

var typed = new Typed(document.getElementById("txt"), {
    strings: ["","hagun"],
    typeSpeed: 250,
    backSpeed: 250,
    loop: true
});
    

