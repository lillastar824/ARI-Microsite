// $('#firstIntroDown').click(function(){
//     $('.first-intro').addClass('opened');
//     $('.initail-top-section-content').hide();
// });

// $('.first-intro').bind('mousewheel', function(e){
//     if(e.originalEvent.wheelDelta /120 > 0) {
//         $('.first-intro').removeClass('opened');
//         $('.initail-top-section-content').show();
//     }
//     else{
//         $('.first-intro').addClass('opened');
//         $('.initail-top-section-content').hide();
//     }
// });  
$('.speaker-button').bind('click', function() {
    if ($("video")[0].muted) {
        $("video").prop('muted', false);
        $(this).removeClass('mute');
    } else {
        $("video").prop('muted', true);
        $(this).addClass('mute');
    }

});


$('#firstIntro').click(function() {
    let firstIntroVideo = document.getElementById('firstIntroVideo');
    if (firstIntroVideo.paused === false) {
        $('#firstIntroVideo')[0].pause();
    } else {
        $('#firstIntroVideo')[0].play();
    }
});





$('.sub-video-1-button').click(function() {
    $('.sub-video-container .sub-video-1-cont').addClass('active');
    $('#subVideo1')[0].play();
});

$('#subVideo1').click(function() {
    if (document.getElementById('firstIntroVideo').paused === false) {
        $(this)[0].pause();
    } else {
        $(this)[0].play();
    }
});

$('.sub-video-1-close').click(function() {
    $('.sub-video-container .sub-video-1-cont').removeClass('active');
    $('#subVideo1')[0].pause();
});
$('#subVideo1').bind('mousewheel', function(e) {
    $('.sub-video-container .sub-video-1-cont').removeClass('active');
    $('#subVideo1')[0].pause();

});


$('.sub-video-2-button').click(function() {
    $('.sub-video-container .sub-video-2-cont').addClass('active');
    $('#subVideo2')[0].play();
});

$('#subVideo2').click(function() {
    if (document.getElementById('firstIntroVideo').paused === false) {
        $(this)[0].pause();
    } else {
        $(this)[0].play();
    }
});

$('.sub-video-2-close').click(function() {
    $('.sub-video-container .sub-video-2-cont').removeClass('active');
    $('#subVideo2')[0].pause();
});
$('#subVideo2').bind('mousewheel', function(e) {
    $('.sub-video-container .sub-video-2-cont').removeClass('active');
    $('#subVideo2')[0].pause();
});


// var controller = new ScrollMagic.Controller();

// var wipeAnimation = new TimelineMax();

// wipeAnimation.fromTo("section.panel.initail-top-section-content", 1000, 
//     { y: "0", }, 
//     { y: "-120%", duration: "1", ease: Linear.easeNone, })
//     .fromTo("section.panel.first-intro", 1000, 
//         { y: "0", }, 
//         { x: "-100%", ease: Linear.easeNone, onStart: playFirstIntroVideo, onReverseComplete: pauseFirstIntroVideo, }

//     ).fromTo("section.panel.roadmap-sec", 100000, 
//     { y: "0", }, 
//     { x: "0", ease: Linear.easeNone, onStart: playRoadmap, onReverseComplete: playFirstIntroVideo, }

//     );

// var scene = new ScrollMagic.Scene({
//         triggerElement: "#pinContainer",
//         triggerHook: "onLeave",
//         duration: "5000%",
//         reverse: true,
//         refreshInterval: 1,
//     }).setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addTo(controller);;


// scene.on("enter", function(event) {
//     var element = document.getElementById('firstScene');
//     element.scrollIntoView(false);
// });



$('#firstScene').bind('wheel', function(e) {
    if (e.originalEvent.wheelDelta / 100 > 0) {
        $("#firstIntroVideo")[0].pause();
        $(this).removeClass('animated')
        setTimeout(function() {
            $('#firstIntro').off('mousewheel');
        }, 500);
    } else {
        document.getElementById('firstIntroVideo').play();
        setTimeout(function() {
            $(this).off('mousewheel');
        }, 500);
        $(this).addClass('animated')
    }


});
$('#firstIntro').bind('wheel', function(e) {
    if (e.originalEvent.wheelDelta / 100 > 0) {
        $("#firstIntroVideo")[0].pause();
        setTimeout(function() {
            $('#roadmapSec').off('mousewheel');
        }, 500);
        $('#firstScene').removeClass('animated')
        $(this).removeClass('animated')

    } else {
        $("#firstIntroVideo")[0].pause();
        setTimeout(function() {
            $(this).off('mousewheel');
        }, 500);
        $(this).addClass('animated')
        firstIntroDownShaderTransition()

    }


});
var roadmapvideoTime = 0;
$('#roadmapSec').bind('wheel', function(e) {
    if (e.originalEvent.wheelDelta / 100 > 0) {
        if (roadmapvideoTime) {
            roadmapvideoTime = roadmapvideoTime - .5;
            if (roadmapvideoTime < 0) {
                roadmapvideoTime = 0;
            }
            $("#firstIntroVideo")[0].pause();
        } else {
            setTimeout(function() {
                $('#firstIntro').off('mousewheel');
            }, 500);
            $('#firstIntro').removeClass('animated')
            $(this).removeClass('open')
            firstIntroTopShaderTransition()
            document.getElementById('firstIntroVideo').play();
        }
        // 
    } else {
        roadmapvideoTime = roadmapvideoTime + .5;
        $("#firstIntroVideo")[0].pause();
    }

    setInterval(function() {
        roadMapVideo.currentTime = roadmapvideoTime;
    }, 40);
    roadMapVideoIndicators(roadMapVideo.currentTime);
    roadMapSubVideoOpenButtons(roadMapVideo.currentTime);

    console.log(roadMapVideo.currentTime);

    $('.text-box.trap-box-1 .box-cont').css('transform', 'translateX(' + (200 - parseInt(roadMapVideo.currentTime * 25)) + '%)');

    if (roadMapVideo.currentTime > 5) {
        $('.text-box.trap-box-1-1').addClass('show')

        $('.text-box.trap-box-1-1 .box-cont').css('transform', 'translateX(' + (200 - parseInt(roadMapVideo.currentTime * 30)) + '%)');
    } else {
        $('.text-box.trap-box-1-1').removeClass('show')
    }


});
var tlS = new TimelineMax();

function firstIntroDownShaderTransition() {
    tlS.clear();
    tlS.to(".tint", 1, { ease: Power1.easeIn, })
        .to(".tint", 1.0, { opacity: 0.5, ease: Power1.easeOut, backgroundColor: "#01b1e5", }, "-=1.0")
        .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
        .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
        .to(".tint", 1, {
            ease: Power1.easeIn,
            onComplete: function() {
                $('#roadmapSec').addClass('open')
            }
        }, "-=1.75");
}

function firstIntroTopShaderTransition() {
    tlS.clear();
    tlS.to(".tint", 1, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#01b1e5", })
        .to(".tint", 1.0, { opacity: 0.5, ease: Power1.easeOut, backgroundColor: "#01b1e5", }, "-=1.0")
        .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
        .to(".tint", 1.0, { opacity: 0, ease: Power1.easeOut, backgroundColor: "#fff", })
        .to(".tint", 1, {
            ease: Power1.easeIn,
            onComplete: function() {}
        }, "-=1.75");
}


$('#roadMap1').click(function() {
    jumpToRoadMap(0);
});

$('#roadMap2').click(function() {
    jumpToRoadMap(30);
});

$('#roadMap3').click(function() {
    jumpToRoadMap(54);
});

$('#roadMap4').click(function() {
    jumpToRoadMap(79);
});

$('#roadMap5').click(function() {
    jumpToRoadMap(99.8);
});

function jumpToRoadMap(time) {
    $('#firstScene').addClass('animated')
    $('#firstIntro').addClass('animated')
    $('#roadmapSec').addClass('open');
    $("#firstIntroVideo")[0].pause();
    var roadMapVideo = document.getElementById('roadMapVideo')
    roadMapVideo.currentTime = time;
    roadmapvideoTime = time;
    roadMapVideoIndicators(roadMapVideo.currentTime);
    roadMapSubVideoOpenButtons(roadMapVideo.currentTime);
}

function roadMapVideoIndicators(time) {
    if (time > 98) {
        $(".progress-bar-line span").css("width", 100 + '%');
    } else {
        $(".progress-bar-line span").css("width", time - 5 + '%');
    }
    if (time > 0) {
        $("#roadMap1").addClass('active');
    }
    if (time > 28) {
        $("#roadMap2").addClass('active');
    }

    if (time > 54) {
        $("#roadMap3").addClass('active');
    }
    if (time > 79) {
        $("#roadMap4").addClass('active');
    }
    if (time > 98) {
        $("#roadMap5").addClass('active');
        $(".progress-bar-line span").css("width", 100 + '%');
    }
    if (time > 100) {
        jumpToRoadMap(26522, 99.8);
    }

}

function roadMapSubVideoOpenButtons(time) {
    if (time > 6) {
        $('.sub-video-1-button').addClass('active')
    } else {
        $('.sub-video-1-button').removeClass('active')
    }
    if (time > 15) {
        $('.sub-video-1-button').removeClass('active')
    }
    if (time > 49) {
        $('.sub-video-2-button').addClass('active')
    }

}

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    if (window.CP.shouldStopExecution(0)) break;
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
    });

    TweenMax.to($smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
    });

}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 4
    });

}

function onMouseHoverOut() {
    TweenMax.to($bigBall, .3, {
        scale: 1
    });

}