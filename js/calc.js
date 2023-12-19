$(document).ready(function(){
    let color = $(".hover");
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
       'onLeave':function(index,nextIndex, direction){
        switch(index){
           case 1:
               $(".welcome.by").removeClass("on");
                break;
           case 2:
             $(".welcome.by2").removeClass("on");
             
               break;
           case 3:
              $(".welcome.by3").removeClass("on");
               break;
           case 4:
              $(".welcome.by4").removeClass("on");
               break;
           case 5:
           $(".welcome.by5").removeClass("on");
               break;
           case 6:
           $(".welcome.by6").removeClass("on");
              break;
                default:
                break;
        }
        },
        'afterLoad':function(anchorLink,index){
         switch(index){
            case 1:
                $(".welcome.by").addClass("on");
                color.eq(0).addClass("on").siblings().removeClass("on");
                color.eq(0).addClass("on2").siblings().removeClass("on2");
                 break;
            case 2:
              $(".welcome.by2").addClass("on");
              color.eq(1).addClass("on").siblings().removeClass("on");
                break;
            case 3:
               $(".welcome.by3").addClass("on");
               color.eq(2).addClass("on").siblings().removeClass("on");
                break;
            case 4:
               $(".welcome.by4").addClass("on");
               color.eq(3).addClass("on").siblings().removeClass("on");
                break;
            case 5:
            $(".welcome.by5").addClass("on");
            color.eq(4).addClass("on").siblings().removeClass("on");
                break;
            case 6:
            $(".welcome.by6").addClass("on");
            color.eq(5).addClass("on").siblings().removeClass("on");
               break;
                 default:
                 break; }},

    });
    let cursor = $('<div id="custom-cursor"></div>').appendTo('body');

    $(document).mousemove(function (event) {
      // 마우스 이동에 따라 커서 위치 및 그림자 업데이트
      cursor.css({
        top: event.clientY,
        left: event.clientX,
      });
    });
    // $(".welcome").addClass("on")
  });
