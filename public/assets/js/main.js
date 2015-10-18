$(document).ready(function() {

    $(document).on('click', '#moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    });

    $('.menu').click(function(e){
        e.stopPropagation();
        $('.toggle_menu').slideToggle( "slow","easeOutExpo" );
    });


    $(document).click(function(){
        $('.toggle_menu').slideUp();
    });

    $('.toggle_menu').click(function(e){
        e.stopPropagation();
    });


    $('.submit, .submit_black').click(function(){
       $(this).css({"background":"#4496f6","border-color":"#4496f6", "color":"white"

       }).unbind('mouseenter mouseleave').prop('disabled', true);;
    });

    var rightContent = $('.right-content');
    var sec1Image =  $('.section_image');
    var leftContent =  $('.left-content');

    var imageArticle = function(index,nextIndex,direction){
        if (direction === 'up') {
            sec1Image.animate({
                position:"absolute",
                top:"0",
                height: "0%"
            }, 500, "easeOutExpo");

        }else {
            sec1Image.animate({
                position:"absolute",
                bottom:"0",
                height: "0%"
            }, 500, "easeOutExpo");
        }
    }

    var onLoadSet = function(anchorlink, index){
        leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        sec1Image.animate({
            height:"100%"
        },600,"easeOutExpo");
    }

    var onLoadSetRev = function(anchorlink, index){
        rightContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        leftContent.animate({ opacity: 1}, 'slow');
        sec1Image.animate({
            height:"100%"
        },600,"easeOutExpo");
    }

    var toggleMenu = function(){
        $('.header-container').slideToggle("slow");
    }
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed:0,
        anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8','page9', 'page10', 'page11'],

        onLeave: function(index,nextIndex, direction) {
            switch(index) {
                case 1:
                    $('.section0_bot').animate({
                        height: "0%"
                    }, 500, "easeOutExpo");
                    setTimeout(toggleMenu,600);

                    break;

                case 2:
                    imageArticle(index,nextIndex,direction);
                    if(direction === "up"){
                        toggleMenu();
                    }
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;
                case 3:
                    sec1Image.animate({
                        height:"0%"
                    },600,"easeOutExpo");
                    if(direction ==="down"){

                    }else if(direction=="up"){
                        leftContent.animate({opacity: 0, top: "+10px"}, 'slow');
                    }
                    break;

                case 4:
                    sec1Image.animate({
                        height:"0%"
                    },500,"easeOutExpo");
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;
                case 5:
                    sec1Image.animate({
                        height:"0%"
                    },500,"easeOutExpo");
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;

                case 6:
                    imageArticle(index,nextIndex,direction);
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;
                case 7:
                    $('about_text').animate({ opacity: 0, top: "+10px" }, 'slow');

                    break;

                case 8:
                    imageArticle(index,nextIndex,direction);
                    rightContent.animate({ opacity: 1, top: "+10px" }, 'slow');
                    sec1Image.animate({
                        height:"0"
                    },600,"easeOutExpo");
                    break;


            }
        },
        afterLoad: function(anchorlink, index){
            switch(index){
                case 1:
                    $('.header-container').slideUp();
                    $('.section0_bot').animate({
                        height:"80%"
                    },600,"easeOutExpo");
                    break;
                case 2:
                    onLoadSet(anchorlink, index);
                    break;
                case 3:
                    onLoadSet(anchorlink, index);
                    leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
                    break;
                case 4:
                    onLoadSetRev(anchorlink, index);
                    break;
                case 5:
                    onLoadSet(anchorlink, index);
                    leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
                    break;
                case 6:
                    onLoadSet(anchorlink, index);
                    break;
                case 7:
                    $('about_text').animate({ opacity: 1, top: "-10px" }, 'slow');
                    break;
                case 8:
                    onLoadSetRev(anchorlink, index);
                    break
            }
        }
    });




    //move to actions

});