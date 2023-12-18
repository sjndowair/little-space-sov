$(document).ready(function(){
    $("#fullpage").fullpage({
        menu:"#menu",
        css3:true,
        navigation:true,
        navigationPosition:'right',
        autoScrolling:true,
        scrollHorizontally:true,
        sectionsColor:['',''],
       anchors:['page1', 'page2' , 'page3', 'page4', 'page5', 'page6' ,'last'],
       nextArrow:$('.next'),
       prevArrow:$('.prev'),
       afterLoad: function(origin, destination, direction){
        // 특정 섹션에 도달했을 때 애니메이션 클래스 추가
        $('.section').eq(destination.index).find('h3').addClass('animate__animated animate__slideInLeft');
    }
    });
    let cursor = $('<div id="custom-cursor"></div>').appendTo('body');

    $(document).mousemove(function (event) {
      // 마우스 이동에 따라 커서 위치 및 그림자 업데이트
      cursor.css({
        top: event.clientY,
        left: event.clientX,
      });
    });
  });
