$(function () {
  function fixedHandle(aimEle) {
    var aimTop = aimEle.offset().top; // 元素距离顶部的高度
    var aimH = aimEle.outerHeight(); // 元素的高度(包括 padding)
    var createEle = $("<div></div>");
    $(createEle).css({
      height: aimH,
      marginBottom: '0.4rem',
      display: 'none'
    });
    $(aimEle.parent()).append(createEle); // 追加到父元素中，成为最后一个孩子
    $(window).scroll(function () {
      if($(window).scrollTop() >= aimTop){
        aimEle.css({
          position: 'fixed',
          top: 0
        });
        $(createEle).show();
      }else{
        aimEle.css({
          position: 'static'
        });
        $(createEle).hide();
      }
    });
  }

  fixedHandle($('.head-yy'));
});