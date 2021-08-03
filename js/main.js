window.onload = function(){
    $(window).scroll(function(){

        var topContentPos =$(window).scrollTop();
        
        // the corresponding section should be animated on
        $(".reveal-ele").each(function(){
            var botEle =$(this).offset().top + $(this).innerHeight();
            var botWin = topContentPos+$(window).height()+75;
            if(botEle<botWin)
            {
                $(this).addClass('animated');
            }
            
        });

    })
}
/*下拉菜单首项链接有效*/
$(document).on("click",".dropdown-toggle",function(){
    if($(this).attr('href')) window.location = $(this).attr('href');
})
/*导航栏效果*/
window.addEventListener('scroll',function(){
    let header = document.querySelector('.header');
 
   /*header.classList.toggle("change",window.scrollY>0); */
   if(window.scrollY>0)
    {
        header.classList.add("change");
    }else{
        header.classList.remove("change");
    }
})
/*吸顶式下拉菜单*/
function navbarToggle(){
    let y = document.querySelector('.header');
    var x = document.getElementById("navbar");
    if(x.className == "navbar"){
        x.className="navbar-expanded";
        y.classList.add("header-change");
    }
    else{
        x.className = "navbar";
        y.classList.remove("header-change") 
    }
}

/*hero-image的faded效果*/
$(document).ready(function(){
$('.feature-image').slick({
    arrows:true,
    autoplay:true,
    dots:true,
    speed:200,
    fade:true,
    cssEase:'linear'
});
/*pproduct-center滚播效果*/
$('.product').slick({
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    dots:true,
    lazyLoad: 'ondemand'
})
});
/*平滑式滚动页面*/
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
$(document).ready( function (){ 
        dropdownOpen(); //调用 
}); 
/*鼠标划过就展开子菜单，免得需要点击才能展开 */ 
function dropdownOpen() { 
     var $dropdownLi = $( 'li.dropdown' ); 
     $dropdownLi.mouseover( function () { 
         $( this ).addClass( 'open' ); 
     }).mouseout( function () { 
         $( this ).removeClass( 'open' ); 
     }); 
} 
/*左菜单栏与右显示*/
function openCity(evt, month) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(month).style.display = "block";
    evt.currentTarget.className += " active";
}



/*modal模态框*/
function showModal(modalName, newsTitle){
    // Get the modal
    var modal = document.getElementById(modalName);

    // Get the button that opens the modal
    var btn = document.getElementById(newsTitle);

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $(modal).modal('hide')
        }
    }
}

/*防复制粘贴*/
$(function(){
    $(".panel-heading").click(function(e){
      /*切换折叠指示图标*/
      $(this).find("span").toggleClass("glyphicon-chevron-down");
      $(this).find("span").toggleClass("glyphicon-chevron-right");
    });
  });
  $(document).ready(function(){
  document.oncontextmenu = function(){
      return false;
  }
  document.onselectstart = function(){
      return false;
  }
  document.oncopy = function(){
      return false;
  }
});