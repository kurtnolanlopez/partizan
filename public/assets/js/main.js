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
            }, 1000, "easeInOutExpo");

        }else {
            sec1Image.animate({
                position:"absolute",
                bottom:"0",
                height: "0%"
            }, 1000, "easeInOutExpo");
        }
    }

    var onLoadSet = function(anchorlink, index){
        leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        sec1Image.animate({
            height:"100%"
        },1000,"easeInOutExpo");
    }

    var onLoadSetRev = function(anchorlink, index){
        rightContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        leftContent.animate({ opacity: 1}, 'slow');
        sec1Image.animate({
            height:"100%"
        },1000,"easeInOutExpo");
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
                    }, 1000, "easeInOutExpo");
                    setTimeout(toggleMenu,500);

                    break;

                case 2:
                    imageArticle(index,nextIndex,direction);
                    if(direction === "up"){
                        toggleMenu();
                    }
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    $('.box:nth-child(odd)').animate({
                        height: "0%"
                    }, 500, "easeInOutExpo");
                    $('.inverse').animate({
                        position:"absolute",
                        bottom:"38%",
                        height: "0%"
                    }, 500, "easeInOutExpo");

                    break;
                case 3:
                    sec1Image.animate({
                        height:"0%"
                    },600,"easeOutExpo");
                    if(direction ==="down"){

                    }else if(direction=="up"){
                        leftContent.animate({opacity: 0, top: "+10px"}, 'slow');
                    }

                    $('.inverse').animate({
                        height: "0%",
                        position: "absolute",
                        bottom:"38%"
                    }, 1000, "easeInOutExpo");

                    $('.box').animate({
                        height: "0%",
                    }, 1000, "easeInOutExpo");
                    break;

                case 4:

                    $('.long_inverse').animate({
                        height: "0%",
                        position: "absolute",
                        bottom:"15%"
                    }, 1000, "easeInOutExpo");

                    $('.longbox').animate({
                        height: "0%",
                    }, 1000, "easeInOutExpo");

                    sec1Image.animate({
                        height:"0%"
                    },500,"easeOutExpo");
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    if(direction === "up"){}
                    else if(direction === "down"){
                        rightContent.animate({ opacity: 0, top: "10px" }, 'slow');
                    }
                    break;
                case 5:
                    sec1Image.animate({
                        height:"0%"
                    },1000,"easeOutExpo");
                    rightContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    $('.sectionHolder').animate({
                        height:"0%"

                    },1000,"easeOutExpo");

                    break;

                case 6:
                    $('.sectionHolder').animate({
                        height:"0%"
                    },1000,"easeOutExpo");
                    sec1Image.animate({
                        height:"0%"
                    },600,"easeOutExpo");
                    $('.purpose_top').animate({
                        height:"0"
                    },300,"easeOutExpo");
                    $('.end_game').animate({
                        height:"0"
                    },600,"easeOutExpo");
                    break;
                case 7:
                    $('.purpose_top').animate({
                        height:"0",
                        padding: "0"
                    },1000,"easeOutExpo");
                    $('.end_game').animate({
                        height:"0"

                    },1000,"easeOutExpo");

                    break;

                case 8:
                    $('.upper_title').animate({
                        height:"0%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"0%",
                        padding: "0"
                    },1000,"easeOutExpo");
                    break;
                case 9:
                    $('.upper_title').animate({
                        height:"0%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"0%",
                        padding: "0"
                    },1000,"easeOutExpo");
                    break;
                case 10:
                    $('.upper_title').animate({
                        height:"0%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"0%",
                        padding: "0"

                    },1000,"easeOutExpo");
                    break;


            }
        },
        afterLoad: function(anchorlink, index){
            switch(index){
                case 1:
                    $('.header-container').slideUp();
                    $('.section0_bot').animate({
                        height:"80%"
                    },1000,"easeOutExpo");
                    break;
                case 2:
                    onLoadSet(anchorlink, index);
                    break;
                case 3:
                    $('.inverse').animate({
                        height: "33%",
                        position: "absolute",
                        bottom:"38%"
                    }, 1000, "easeInOutExpo");

                    $('.box').animate({
                        height: "33%",
                    }, 1000, "easeInOutExpo");

                    leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
                    break;
                case 4:
                    $('.long_inverse').animate({
                        height: "85%",
                        position: "absolute",
                        bottom:"15%"
                    }, 1000, "easeInOutExpo");

                    $('.longbox').animate({
                        height: "85%",
                    }, 1000, "easeInOutExpo");


                    break;
                case 5:
                    leftContent.animate({ opacity: 1 }, 'fast');
                    rightContent.animate({ opacity: 1, top: "-10px" }, 'slow');
                    sec1Image.animate({
                        height:"95%"
                    },1000,"easeInOutExpo");
                    break;
                case 6:
                    $('.sectionHolder').animate({
                        height:"100%"
                    },1000,"easeOutExpo");
                    break;
                case 7:
                    $('.end_game').animate({
                        height:"50%"
                    },1000,"easeOutExpo");
                    $('.purpose_top').animate({
                        height:"30%",
                        padding: "5%"
                    },1000,"easeOutExpo");
                    break;

                case 8:
                    $('.upper_title').animate({
                        height:"40%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"45%",
                        padding: "5%"

                    },1000,"easeOutExpo");

                    break;

                case 9:
                    $('.upper_title').animate({
                        height:"40%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"45%",
                        padding: "5%"
                    },1000,"easeOutExpo");
                    break;
                case 10:
                    $('.upper_title').animate({
                        height:"40%"
                    },1000,"easeOutExpo");
                    $('.about_bottom_content').animate({
                        height:"45%",
                        padding: "5%"
                    },1000,"easeOutExpo");
                    break;
            }
        }
    });




    //move to actions

});