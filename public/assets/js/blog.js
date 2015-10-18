$(document).ready(function() {
    var rightContent = $('.right-content');
    var sec1Image =  $('.section_image');
    var leftContent =  $('.left-content');

    var imageArticle = function(index,nextIndex,direction){
                 sec1Image.animate({

                height: "0%"
            }, 500, "easeOutExpo");


    };

    var onLoadSetRev = function(anchorlink, index){
        rightContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        leftContent.animate({ opacity: 1, top: "-10px" }, 'slow');
        sec1Image.animate({opacity:1},100);
    };

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed:0,


        onLeave: function(index,nextIndex, direction) {
            switch(index) {


                case 1:
                    $('.about_text').animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;
                case 2:

                    if(direction === 'up'){

                        leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    }
                    else{

                    }

                    imageArticle(index,nextIndex, direction);
                    break;

                case 3:
                    imageArticle(index,nextIndex, direction);
                    leftContent.animate({ opacity: 0, top: "+10px" }, 'slow');
                    break;
                    }
        },


        afterLoad: function(anchorlink, index) {
            switch (index) {

                case 1:
                    leftContent.animate({opacity: 1, top: "-10px"}, 'slow');
                    sec1Image.animate({
                        height: "100%"
                    }, 600, "easeOutExpo");
                    break;

              case 2:

                  $('.about_text').animate({ opacity: 1, top: "-10px" }, 'slow');
                    break;

                case 3:

                    rightContent.animate({ opacity: 1, top: "-10px" }, 'slow');
                    sec1Image.animate({
                        height: "100%"
                    }, 600, "easeOutExpo");
                    break;

            }

        }



    });





});