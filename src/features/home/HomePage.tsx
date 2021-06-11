import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Power1, TimelineMax, TweenMax } from "gsap";
import { useStore } from '../../app/stores/store';
import { clear } from 'console';

export default function HomePage() {
  const { commonStore, videoStore } = useStore();

  let firstScene: any;
  let ourChatBotRef: any;
  let jumpHintsRef: any;
  let firstIntro: any;
  let firstIntroVideo: any;
  let secondIntro: any;
  let firstIntroVdoWrap: any;
  let roadMapSec: any;
  let roadMapVideo: any;
  let roadMapVideoMp4 = useRef();
  let subVideo1Cont: any;
  let subVideo2Cont: any;
  let subVideo3Cont: any;
  let outroVideo1Cont: any;
  let outroVideo3Cont: any;
  let outroVideo4Cont: any;
  let subVideo1Button: any;
  let subVideo2Button: any;
  let subVideo3Button: any;
  let subVideo1: any;
  let subVideo2: any;
  let subVideo3: any;
  let outroVideo1: any;
  let outroVideo3: any;
  let outroVideo4: any;
  let roadMapGapImg: any;
  let progressBarLine: any;
  let trapBox2: any;
  let trapBox3: any;
  let trapBox4: any;
  let trapBox5: any;
  let trapBox6: any;
  let trapBox7: any;
  let trapBox8: any;
  let trapBox9: any;
  let trapBox10: any;
  let trapBox11: any;
  let trapBox12: any;
  let trapBox13: any;
  let trapBox14: any;
  let trapBox15: any;
  let trapBox16: any;
  let trapBox1TypingRef: any;
  let trapBox2TypingRef: any;
  let trapBox3TypingRef: any;
  let trapBox4TypingRef: any;
  let trapBox5TypingRef: any;
  let trapBox6TypingRef: any;
  let trapBox7TypingRef: any;
  let trapBox8TypingRef: any;
  let trapBox9TypingRef: any;
  let trapBox10TypingRef: any;
  let trapBox11TypingRef: any;
  let trapBox12TypingRef: any;
  let trapBox13TypingRef: any;
  let trapBox14TypingRef: any;
  let trapBox15TypingRef: any;
  let trapBox16TypingRef: any;
  let trapBox1Cont: any;
  let trapBox2Cont: any;
  let trapBox3Cont: any;
  let trapBox4Cont: any;
  let trapBox5Cont: any;
  let trapBox6Cont: any;
  let trapBox7Cont: any;
  let trapBox8Cont: any;
  let trapBox9Cont: any;
  let trapBox10Cont: any;
  let trapBox11Cont: any;
  let trapBox12Cont: any;
  let trapBox13Cont: any;
  let trapBox14Cont: any;
  let trapBox15Cont: any;
  let trapBox16Cont: any;
  let roadMap1: any;
  let roadMap2: any;
  let roadMap3: any;
  let roadMap4: any;
  let roadMap5: any;
  let $bigBall: any;
  let $smallBall: any;
  let roadmapvideoTime: number = 0;
  let roadMapVdoSrc = useRef('');
  const tlS = new TimelineMax();
  const delay = 1000;
  const [muted, setMuted] = useState(false);
  const [showChatBotTxt, setShowChatBotTxt] = useState(false);
  // const [roadMapVdo, setRoadMapVdo] = useState();
  // const roadMapVideoMp4 = useRef();

  const getFirstScene = (elem: any) => {
    firstScene = elem
  }
  const getOurChatBotRef = (elem: any) => {
    ourChatBotRef = elem
  }
  const getJumpHintsRef = (elem: any) => {
    jumpHintsRef = elem
  }
  const getFirstIntro = (elem: any) => {
    firstIntro = elem
  }
  const getFirstIntroVideo = (elem: any) => {
    firstIntroVideo = elem
  }
  const getSecondIntro = (elem: any) => {
    secondIntro = elem
  }
  const getFirstIntroVdoWrap = (elem: any) => {
    firstIntroVdoWrap = elem
  }
  const getRoadMapGapImg = (elem: any) => {
    roadMapGapImg = elem
  }
  const getRoadMapSec = (elem: any) => {
    roadMapSec = elem
  }
  const getRoadMapVideo = (elem: any) => {
    roadMapVideo = elem
  }
  const getSubVideo1Cont = (elem: any) => {
    subVideo1Cont = elem
  }
  const getSubVideo2Cont = (elem: any) => {
    subVideo2Cont = elem
  }
  const getSubVideo3Cont = (elem: any) => {
    subVideo3Cont = elem
  }
  const getOutroVideo1Cont = (elem: any) => {
    outroVideo1Cont = elem
  }
  const getOutroVideo3Cont = (elem: any) => {
    outroVideo3Cont = elem
  }
  const getOutroVideo4Cont = (elem: any) => {
    outroVideo4Cont = elem
  }
  const getSubVideo1Button = (elem: any) => {
    subVideo1Button = elem
  }
  const getSubVideo2Button = (elem: any) => {
    subVideo2Button = elem
  }
  const getSubVideo3Button = (elem: any) => {
    subVideo3Button = elem
  }
  const getSubVideo1 = (elem: any) => {
    subVideo1 = elem
  }
  const getSubVideo2 = (elem: any) => {
    subVideo2 = elem
  }
  const getSubVideo3 = (elem: any) => {
    subVideo3 = elem
  }
  const getOutroVideo1 = (elem: any) => {
    outroVideo1 = elem
  }
  const getOutroVideo3 = (elem: any) => {
    outroVideo3 = elem
  }
  const getOutroVideo4 = (elem: any) => {
    outroVideo4 = elem
  }
  const getProgressBarLine = (elem: any) => {
    progressBarLine = elem
  }
  const getTrapBox1Cont = (elem: any) => {
    trapBox1Cont = elem
  }
  const getTrapBox1TypingRef = (elem: any) => {
    trapBox1TypingRef = elem
  }
  const getTrapBox2TypingRef = (elem: any) => {
    trapBox2TypingRef = elem
  }
  const getTrapBox3TypingRef = (elem: any) => {
    trapBox3TypingRef = elem
  }
  const getTrapBox4TypingRef = (elem: any) => {
    trapBox4TypingRef = elem
  }
  const getTrapBox5TypingRef = (elem: any) => {
    trapBox5TypingRef = elem
  }
  const getTrapBox6TypingRef = (elem: any) => {
    trapBox6TypingRef = elem
  }
  const getTrapBox7TypingRef = (elem: any) => {
    trapBox7TypingRef = elem
  }
  const getTrapBox8TypingRef = (elem: any) => {
    trapBox8TypingRef = elem
  }
  const getTrapBox9TypingRef = (elem: any) => {
    trapBox9TypingRef = elem
  }
  const getTrapBox10TypingRef = (elem: any) => {
    trapBox10TypingRef = elem
  }
  const getTrapBox11TypingRef = (elem: any) => {
    trapBox11TypingRef = elem
  }
  const getTrapBox12TypingRef = (elem: any) => {
    trapBox12TypingRef = elem
  }
  const getTrapBox13TypingRef = (elem: any) => {
    trapBox13TypingRef = elem
  }
  const getTrapBox14TypingRef = (elem: any) => {
    trapBox14TypingRef = elem
  }
  const getTrapBox15TypingRef = (elem: any) => {
    trapBox15TypingRef = elem
  }
  const getTrapBox16TypingRef = (elem: any) => {
    trapBox16TypingRef = elem
  }
  const getTrapBox2 = (elem: any) => {
    trapBox2 = elem
  }
  const getTrapBox2Cont = (elem: any) => {
    trapBox2Cont = elem
  }
  const getTrapBox3 = (elem: any) => {
    trapBox3 = elem
  }
  const getTrapBox3Cont = (elem: any) => {
    trapBox3Cont = elem
  }
  const getTrapBox4 = (elem: any) => {
    trapBox4 = elem
  }
  const getTrapBox4Cont = (elem: any) => {
    trapBox4Cont = elem
  }
  const getTrapBox5 = (elem: any) => {
    trapBox5 = elem
  }
  const getTrapBox5Cont = (elem: any) => {
    trapBox5Cont = elem
  }
  const getTrapBox6 = (elem: any) => {
    trapBox6 = elem
  }
  const getTrapBox6Cont = (elem: any) => {
    trapBox6Cont = elem
  }
  const getTrapBox7 = (elem: any) => {
    trapBox7 = elem
  }
  const getTrapBox8 = (elem: any) => {
    trapBox8 = elem
  }
  const getTrapBox9 = (elem: any) => {
    trapBox9 = elem
  }
  const getTrapBox10 = (elem: any) => {
    trapBox10 = elem
  }
  const getTrapBox11 = (elem: any) => {
    trapBox11 = elem
  }
  const getTrapBox12 = (elem: any) => {
    trapBox12 = elem
  }
  const getTrapBox13 = (elem: any) => {
    trapBox13 = elem
  }
  const getTrapBox14 = (elem: any) => {
    trapBox14 = elem
  }
  const getTrapBox15 = (elem: any) => {
    trapBox15 = elem
  }
  const getTrapBox16 = (elem: any) => {
    trapBox16 = elem
  }
  const getTrapBox7Cont = (elem: any) => {
    trapBox7Cont = elem
  }
  const getTrapBox8Cont = (elem: any) => {
    trapBox8Cont = elem
  }
  const getTrapBox9Cont = (elem: any) => {
    trapBox9Cont = elem
  }
  const getTrapBox10Cont = (elem: any) => {
    trapBox10Cont = elem
  }
  const getTrapBox11Cont = (elem: any) => {
    trapBox11Cont = elem
  }
  const getTrapBox12Cont = (elem: any) => {
    trapBox12Cont = elem
  }
  const getTrapBox13Cont = (elem: any) => {
    trapBox13Cont = elem
  }
  const getTrapBox14Cont = (elem: any) => {
    trapBox14Cont = elem
  }
  const getTrapBox15Cont = (elem: any) => {
    trapBox15Cont = elem
  }
  const getTrapBox16Cont = (elem: any) => {
    trapBox16Cont = elem
  }
  const getRoadMap1 = (elem: any) => {
    roadMap1 = elem
  }
  const getRoadMap2 = (elem: any) => {
    roadMap2 = elem
  }
  const getRoadMap3 = (elem: any) => {
    roadMap3 = elem
  }
  const getRoadMap4 = (elem: any) => {
    roadMap4 = elem
  }
  const getRoadMap5 = (elem: any) => {
    roadMap5 = elem
  }
  const getBigBall = (elem: any) => {
    $bigBall = elem
  }
  const getSmallBall = (elem: any) => {
    $smallBall = elem
  }


  useEffect(() => {
    let chatBotTxtTimer = setTimeout(() => setShowChatBotTxt(true), delay * 5);
    roadMapVdoSrc.current = commonStore.getRoadmapVdo;
    if (!commonStore.getRoadmapVdo) {
      roadMapVdoSrc.current = 'assets/video/fresh-background.mp4'
    }
    const clearTime = setInterval(() => {
      if (commonStore.getRoadmapVdo) {
        roadMapVdoSrc.current = commonStore.getRoadmapVdo;
        console.log('got the url: ', commonStore.getRoadmapVdo);
        clearTimeout(clearTime)
      }
    }, 5000);
    // roadMapVdoSrc.current = commonStore.getRoadmapVdo;

    return () => {
      clearTimeout(chatBotTxtTimer);
      // clearTimeout(clearTime);
    };
  }, [commonStore, videoStore]);

  const onWheelFirstScene = (e: any) => {
    console.log(e.deltaY)
    if (e.deltaY / 100 < 0) {
      pauseFirstIntroVideo();
      e.target.classList.remove('animated');
    } else {
      playFirstIntroVideo(true);
      e.target.classList.add('animated');
    }
  }

  const onWheelFirstIntro = (e: any) => {
    // roadMapVideo.requestFullscreen()
    console.log(e.deltaY)
    if (e.deltaY / 100 < 0) {
      pauseFirstIntroVideo();
    } else {
      pauseFirstIntroVideo();
      firstIntroVdoWrap.style.transform = 'translateX(' + -100 + '%)';
      setTimeout(() => {
        roadMapSec.classList.add('open');
      }, 2000)
    }
  }

  const onWheelRoadmapSec = (e: any) => {
    console.log(e.deltaY)
    if (roadmapvideoTime >= 100) {
      if (e.deltaY / 100 > 0) {
        return false;
      }
    }
    if (roadmapvideoTime <= 0) {
      if (e.deltaY / 100 < 0) {
        firstIntroVdoWrap.style.transform = 'translateX(' + 0 + '%)';
        setTimeout(() => roadMapSec.classList.remove('open'))
        playFirstIntroVideo();
        return false;
      }
    }
    if (e.deltaY / 100 < 0) {
      if (roadmapvideoTime) {
        roadmapvideoTime = roadmapvideoTime - .1;
        if (roadmapvideoTime < 0) {
          roadmapvideoTime = 0;
        }
        pauseFirstIntroVideo();
      } else {
        e.target.classList.add('animated');
        firstIntroTopShaderTransition();
        playRoadMapVideo();
      }
    } else {
      roadmapvideoTime = roadmapvideoTime + .1;
      pauseFirstIntroVideo();
    }

    setInterval(() => { if (roadMapVideo) { roadMapVideo.currentTime = roadmapvideoTime } }, 40);

    roadMapVideoIndicators(roadMapVideo.currentTime);
    roadMapSubVideoOpenButtons(roadMapVideo.currentTime);

    console.log(roadMapVideo.currentTime);
    trapBox1Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 40) + '%)';
    // if (roadMapVideo.currentTime > 3.5) {
    trapBox1TypingRef.classList.remove('hideAri');
    // }

    if (roadMapVideo.currentTime > 4) {
      trapBox2.classList.add('show')
      trapBox2Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 40) + '%)';
      // if (roadMapVideo.currentTime > 6) {
      trapBox2TypingRef.classList.remove('hideAri');
      // }
    } else {
      trapBox2.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 5) {
      trapBox3.classList.add('show')
      trapBox3Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 35) + '%)';
      // if (roadMapVideo.currentTime > 6.5) {
      trapBox3TypingRef.classList.remove('hideAri');
      // }
    } else {
      trapBox3.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 10) {
      trapBox4.classList.add('show')
      trapBox4Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 40) + '%)';
      // if (roadMapVideo.currentTime > 11) {
      trapBox4TypingRef.classList.remove('hideAri');
      // }
    } else {
      trapBox4.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 15) {
      trapBox5.classList.add('show')
      trapBox5Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 35) + '%)';
      // if (roadMapVideo.currentTime > 16) {
      trapBox5TypingRef.classList.remove('hideAri');
      // }
    } else {
      trapBox5.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 20) {
      trapBox6.classList.add('show')
      trapBox6Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 30) + '%)';
      // if (roadMapVideo.currentTime > 21) {
      trapBox6TypingRef.classList.remove('hideAri');
      setTimeout(() => trapBox4TypingRef.classList.remove('hideAri'), 600);
      // }
    } else {
      trapBox6.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 25) {
      trapBox7.classList.add('show')
      trapBox7Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 35) + '%)';
      setTimeout(() => trapBox7Cont.classList.remove('hideAri'), 40);
    } else {
      trapBox7.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 30) {
      roadMapSec.classList.add('test-class');
      if (!roadMapSec.classList.contains('opened-outro-video1')) {
        openOutroVideo1();
        roadMapSec.classList.add('opened-outro-video1')
        // completeTrap1Box();
      }
    }

    if (roadMapVideo.currentTime > 35) {
      trapBox8.classList.add('show')
      trapBox8Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 35) + '%)';

      setTimeout(() => trapBox8TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox8.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 58 && roadMapVideo.currentTime <= 62) {
      trapBox9.classList.add('show')

      setTimeout(() => trapBox9TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox9.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 62 && roadMapVideo.currentTime <= 65) {
      trapBox10.classList.add('show')

      setTimeout(() => trapBox10TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox10.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 65 && roadMapVideo.currentTime <= 68) {
      trapBox11.classList.add('show')

      setTimeout(() => trapBox11TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox11.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 68 && roadMapVideo.currentTime < 72) {
      trapBox12.classList.add('show')

      setTimeout(() => trapBox12TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox12.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 71) {
      if (!roadMapSec.classList.contains('opened-outro-video3')) {
        openOutroVideo3();
        roadMapSec.classList.add('opened-outro-video3')
      }
    }

    if (roadMapVideo.currentTime > 73) {
      trapBox13.classList.add('show')
      trapBox13Cont.style.transform = 'translateX(' + (400 - roadMapVideo.currentTime * 3) + '%)';
      setTimeout(() => trapBox13TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox13.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 76) {
      trapBox13Cont.style.transform = 'translateX(' + (350 - roadMapVideo.currentTime * 6) + '%)';
      trapBox14.classList.add('show')
      trapBox14Cont.style.transform = 'translateX(' + (770 - roadMapVideo.currentTime * 10) + '%)';
      setTimeout(() => trapBox14TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox14.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 79) {
      trapBox14Cont.style.transform = 'translateX(' + (500 - roadMapVideo.currentTime * 10) + '%)';
      trapBox15.classList.add('show')
      trapBox15Cont.style.transform = 'translateX(' + (490 - roadMapVideo.currentTime * 3) + '%)';
      setTimeout(() => trapBox15TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox15.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 80) {
      trapBox15Cont.style.transform = 'translateX(' + (490 - roadMapVideo.currentTime * 10) + '%)';
      trapBox16.classList.add('show')
      trapBox16Cont.style.transform = 'translateX(' + (200 - roadMapVideo.currentTime * 6) + '%)';
      setTimeout(() => trapBox16TypingRef.classList.remove('hideAri'), 600);
    } else {
      trapBox16.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 83) {
      if (!roadMapSec.classList.contains('opened-outro-video4')) {
        openOutroVideo4();
        roadMapSec.classList.add('opened-outro-video4')
      }
    }
  }

  const firstIntroDownShaderTransition = () => {
    tlS.clear();
    tlS.to(".tint", 1, { ease: Power1.easeIn, })
      .to(".tint", 1.0, { opacity: 0.5, ease: Power1.easeOut, backgroundColor: "#01b1e5", }, "-=1.0")
      .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
      .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
      .to(".tint", 1, {
        ease: Power1.easeIn,
        onComplete: () => {
          roadMapSec.classList.add('open');
        }
      }, "-=1.75");
  }

  const firstIntroTopShaderTransition = () => {
    tlS.clear();
    tlS.to(".tint", 1, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#01b1e5", })
      .to(".tint", 1.0, { opacity: 0.5, ease: Power1.easeOut, backgroundColor: "#01b1e5", }, "-=1.0")
      .to(".tint", 1.0, { opacity: 1, ease: Power1.easeOut, backgroundColor: "#fff", })
      .to(".tint", 1.0, { opacity: 0, ease: Power1.easeOut, backgroundColor: "#fff", })
      .to(".tint", 1, {
        ease: Power1.easeIn,
        onComplete: () => { }
      }, "-=1.75");
  }


  const roadMapVideoIndicators = (time: number) => {
    if (time > 98) {
      progressBarLine.style.width = '100%';
    } else {
      progressBarLine.style.width = (time - 5) + '%';
    }
    if (time > 0) {
      roadMap1.classList.add('active');
    }
    if (time > 28) {
      roadMap2.classList.add('active');
    }

    if (time > 54) {
      roadMap3.classList.add('active');
    }
    if (time > 79) {
      roadMap4.classList.add('active');
    }
    if (time > 98) {
      roadMap5.classList.add('active');
      progressBarLine.style.width = 100 + '%';
    }
    if (time > 100) {
      jumpToRoadMap(26522);
    }
  }

  const roadMapSubVideoOpenButtons = (time: number) => {
    if (time > 7 && time < 17) {
      subVideo1Button.classList.add('active')
    } else {
      subVideo1Button.classList.remove('active')
    }
    if (time > 46 && time < 49.5) {
      subVideo2Button.classList.add('active')
    } else {
      subVideo2Button.classList.remove('active')
    }

  }

  const roadMap1Click = (e: any) => {
    console.log(e)
    jumpToRoadMap(0);
  };

  const roadMap2Click = (e: any) => {
    console.log(e)
    jumpToRoadMap(30);
  };

  const roadMap3Click = (e: any) => {
    console.log(e)
    jumpToRoadMap(54);
  };

  const roadMap4Click = (e: any) => {
    console.log(e)
    jumpToRoadMap(79);
  };

  const roadMap5Click = (e: any) => {
    console.log(e)
    jumpToRoadMap(99.8);
  };

  const onClickSpeakerButton = (e: any) => {
    setMuted(!muted)
  };

  const onClickFirstIntro = (e: any) => {
    if (firstIntroVideo.paused === false) {
      pauseFirstIntroVideo();
    } else {
      playFirstIntroVideo();
    }
  };

  const onClickSubVideo1Button = (e: any) => {
    subVideo1Cont.classList.add('active');
    subVideo1.play();
  };

  const openOutroVideo1 = () => {
    outroVideo1Cont.classList.add('active');
    outroVideo1.play();
  };
  const openOutroVideo3 = () => {
    outroVideo3Cont.classList.add('active');
    outroVideo3.play();
  };
  const openOutroVideo4 = () => {
    outroVideo4Cont.classList.add('active');
    outroVideo4.play();
  };

  const onClickSubVideo1 = (e: any) => {
    if (firstIntroVideo.paused === false) {
      subVideo1.pause();
    } else {
      subVideo1.play();
    }
  };

  const onClickSubVideo1Close = (e: any) => {
    subVideo1Cont.classList.remove('active');
    subVideo1.pause();
  };

  const onMouseWheelSubVideo1 = (e: any) => {
    subVideo1Cont.classList.add('active-removed');
    subVideo1.pause();
  };


  const onClickSubVideo2Button = (e: any) => {
    subVideo2Cont.classList.add('active');
    subVideo2.play();
  };
  const onClickSubVideo3Button = (e: any) => {
    subVideo3Cont.classList.add('active');
    subVideo3.play();
  };

  const onClickSubVideo2 = (e: any) => {
    if (subVideo2.paused === false) {
      subVideo2.pause();
    } else {
      subVideo2.play();
    }
  };

  const onClickSubVideo3 = (e: any) => {
    if (subVideo3.paused === false) {
      subVideo3.pause();
    } else {
      subVideo3.play();
    }
  };

  const onClickOutroVideo1 = (e: any) => {
    if (outroVideo1.paused === false) {
      outroVideo1.pause();
    } else {
      outroVideo1.play();
    }
  };
  const onClickOutroVideo3 = (e: any) => {
    if (outroVideo3.paused === false) {
      outroVideo3.pause();
    } else {
      outroVideo3.play();
    }
  };
  const onClickOutroVideo4 = (e: any) => {
    if (outroVideo4.paused === false) {
      outroVideo4.pause();
    } else {
      outroVideo4.play();
    }
  };

  const onClickSubVideo2Close = (e: any) => {
    subVideo2Cont.classList.remove('active');
    subVideo2.pause();
  };

  const onClickSubVideo3Close = (e: any) => {
    subVideo3Cont.classList.remove('active');
    subVideo3.pause();
  };

  const onClickOutroVideo1Close = (e: any) => {
    outroVideo1Cont.classList.remove('active');
    outroVideo1.pause();
  };

  const onClickOutroVideo3Close = (e: any) => {
    outroVideo3Cont.classList.remove('active');
    outroVideo3.pause();
  };

  const onClickOutroVideo4Close = (e: any) => {
    outroVideo4Cont.classList.remove('active');
    outroVideo4.pause();
  };
  const onMouseWheelSubVideo2 = (e: any) => {
    subVideo2Cont.classList.add('active-removed');
    subVideo2.pause();
  };
  const onMouseWheelSubVideo3 = (e: any) => {
    subVideo3Cont.classList.add('active-removed');
    subVideo3.pause();
  };
  const onMouseWheelOutroVideo1 = (e: any) => {
    outroVideo1Cont.classList.add('active-removed');
    outroVideo1.pause();
  };
  const onMouseWheelOutroVideo3 = (e: any) => {
    outroVideo3Cont.classList.add('active-removed');
    outroVideo3.pause();
  };
  const onMouseWheelOutroVideo4 = (e: any) => {
    outroVideo4Cont.classList.add('active-removed');
    outroVideo4.pause();
  };

  const jumpToRoadMap = (time: number) => {
    firstScene.classList.add('animated')
    firstIntro.classList.add('animated')
    roadMapSec.classList.add('open');
    firstIntroVideo.pause();
    // var roadMapVideo = document.getElementById('roadMapVideo')
    roadMapVideo.currentTime = time;
    roadmapvideoTime = time;
    roadMapVideoIndicators(roadMapVideo.currentTime);
    roadMapSubVideoOpenButtons(roadMapVideo.currentTime);
  }

  const playFirstIntroVideo = (muted?: boolean) => {
    if (muted) {
      firstIntroVideo.muted = muted;
    }
    firstIntroVideo.play()
  };

  const pauseFirstIntroVideo = () => {
    firstIntroVideo.pause();
  };

  const playRoadMapVideo = () => {
    roadMapVideo.play()
  };

  const pauseRoadMapVideo = () => {
    roadMapVideo.pause()
  };


  // Move the cursor
  const onMouseMove = (e: any) => {
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
  // const onMouseHover = () => {
  //   TweenMax.to($bigBall, .3, {
  //     scale: 4
  //   });

  // }

  // const onMouseHoverOut = () => {
  //   TweenMax.to($bigBall, .3, {
  //     scale: 1
  //   });

  // }

  return (
    <div onMouseMove={(e) => onMouseMove(e)}>
      <main id='pinContainer' className='initail-top-section'>
        <section id='firstScene' className='panel initail-top-section-content' ref={getFirstScene} onWheel={(e) => onWheelFirstScene(e)}>
          <h1>Welcome</h1>
          <div ref={getOurChatBotRef} className='chat-bot-txt'>
            <h3 className={`chat-bot-h3 ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>Our Chat Bot is available to assist you in</h3>
            <h3 className={`chat-bot-h3 ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>answering any questions you may have</h3>
            <h3 className={`chat-bot-h3 ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>during this interactive experience.</h3>
          </div>
          <span id='firstIntroDown' className={`mouse-move-down ${!showChatBotTxt ? 'showAri' : 'hideAri'}`} style={{ marginTop: '3%' }}>
            <span className='move-down'></span>
          </span>
        </section>
        <section ref={getFirstIntro} id='firstIntro' className='panel first-intro' onWheel={(e) => onWheelFirstIntro(e)} onClick={(e) => onClickFirstIntro(e)}>
          <div className='first-intro-video-box' ref={getFirstIntroVdoWrap}>
            <video ref={getFirstIntroVideo} id='firstIntroVideo' preload='auto' controls muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%201_BUDGET%20UNCERTAINTY%20Outro1.mp4' type='video/mp4' />
            </video>
          </div>
        </section>
        <section id='roadmapSec' ref={getRoadMapSec} className='panel roadmap-sec' onWheel={(e) => onWheelRoadmapSec(e)}>
          <div className='roadmap-sec-video-box' id='roadMapVdoWrap'>
            <video id='roadMapVideo' ref={getRoadMapVideo} muted={muted} src={roadMapVdoSrc.current}>
              {/* {!roadMapVdoSrc.current && (
                <source src={'assets/video/fresh-background.mp4'} type='video/mp4'></source>
              )} */}
            </video>

            <div className='text-container'>
              <div className='text-box trap-box-1'>
                <div className='box-cont' ref={getTrapBox1Cont}>
                  <h3 className='trap-title'>Trap 1</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox1TypingRef}>Budget Uncertainty</h2>
                </div>
              </div>
              <div className='text-box trap-box-1-1 trap-box-2' ref={getTrapBox2}>
                <div className='box-cont' ref={getTrapBox2Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox2TypingRef}>Have you ever<br />underestinated<br />your fleet's<br />operating budget?</h6>
                </div>
              </div>
              <div className='text-box trap-box-3' ref={getTrapBox3}>
                <div className='box-cont' ref={getTrapBox3Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox3TypingRef}>If so, you wouldn't be the<br />first. It's a common blind<br />spot in the budget silo.</h6>
                </div>
              </div>
              <div className='text-box trap-box-4' ref={getTrapBox4}>
                <div className='box-cont' ref={getTrapBox4Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox4TypingRef}>But what if you<br />didn't have to<br />guess?</h6>
                </div>
              </div>
              <div className='text-box trap-box-5' ref={getTrapBox5}>
                <div className='box-cont' ref={getTrapBox5Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef}>What if you could<br />quantify your budget<br />with far more certainty<br />and forecast<br />replacement-versus-rep<br />air two, three or four<br />years in advance?</h6>
                </div>
              </div>
              <div className='text-box trap-box-6' ref={getTrapBox6}>
                <div className='box-cont' ref={getTrapBox6Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox6TypingRef}>What if you could see how today's<br />replacement decissions will impact both<br />short-term operating expenses and<br />long-term capital needs?</h6>
                </div>
              </div>
              <div className='text-box trap-box-7' ref={getTrapBox7}>
                <div className='box-cont typing-animate typing-animate-start hideAri' ref={getTrapBox7Cont}>
                  <h2>Did you catch<br />the hidden<br />easter eggs<br />so far?</h2>
                  <h6>There were at least 4.</h6>
                  <h6>Plus you ran a STOP sign.</h6>
                </div>
              </div>
              <div className='text-box trap-box-8' ref={getTrapBox8}>
                <div className='box-cont' ref={getTrapBox8Cont}>
                  <h3 className='trap-title'>Trap 2</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox8TypingRef}>Annual<br />Supply Chain<br />Bidding</h2>
                </div>
              </div>
              <div className='text-box trap-box-9' ref={getTrapBox9}>
                <div className='box-cont' ref={getTrapBox9Cont}>
                  <h3 className='trap-title'>Trap 3</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox9TypingRef}>Minimizing<br />Upfit Price</h2>
                </div>
              </div>
              <div className='text-box trap-box-10' ref={getTrapBox10}>
                <div className='box-cont' ref={getTrapBox10Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox10TypingRef}>All too often, the design and upfit silo is so<br />focused on immediate savings, it tries to<br />minimize the price of upfitting.</h6>
                </div>
              </div>
              <div className='text-box trap-box-11' ref={getTrapBox11}>
                <div className='box-cont' ref={getTrapBox11Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox11TypingRef}>That's not surprising.<br />Quick savings are easy to see<br />on an annual spreadsheet.</h6>
                </div>
              </div>
              <div className='text-box trap-box-12' ref={getTrapBox12}>
                <div className='box-cont' ref={getTrapBox12Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox12TypingRef}>But whether you're operating a fleet of vans or<br />sedans, if you are focused on thhe upfit bill, as<br />oposed to your upfit spaces, you will likely end up<br />spending more on the long run.</h6>
                </div>
              </div>
              <div className='text-box trap-box-13' ref={getTrapBox13}>
                <div className='box-cont' ref={getTrapBox13Cont}>
                  <h3 className='trap-title'>Trap 4</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox13TypingRef}>Getting tangled<br />in the weeds</h2>
                </div>
              </div>
              <div className='text-box trap-box-14' ref={getTrapBox14}>
                <div className='box-cont' ref={getTrapBox14Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox14TypingRef}>Supply chain process can<br />be a bear, with hidden traps<br />that lower productivity and<br />increase costs.</h6>
                </div>
              </div>
              <div className='text-box trap-box-15' ref={getTrapBox15}>
                <div className='box-cont' ref={getTrapBox15Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox15TypingRef}>It's the nature of the beast,<br />which too often forces fleet<br />managers to deal with<br />time-consuming distractions.</h6>
                </div>
              </div>
              <div className='text-box trap-box-16' ref={getTrapBox16}>
                <div className='box-cont' ref={getTrapBox16Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef}>Like drafting the specs<br />themselves, or untangling<br />status updates from your<br />fleet, management company<br />and supplier.</h6>
                </div>
              </div>
            </div>
            <div id='roadMapVideoScrollContainer' className='roadmap-scroll-container'>
              <div className='sub-video-1-button' ref={getSubVideo1Button} onClick={(e) => onClickSubVideo1Button(e)}></div>
              <div className='sub-video-2-button' ref={getSubVideo2Button} onClick={(e) => onClickSubVideo2Button(e)}></div>
              <div className='sub-video-3-button' ref={getSubVideo3Button} onClick={(e) => onClickSubVideo3Button(e)}></div>
            </div>
          </div>
        </section>
        <div className='sub-video-container'>
          <div className='sub-video-box sub-video-1-cont' ref={getSubVideo1Cont}>
            <video id='subVideo1' preload='auto' ref={getSubVideo1} onClick={(e) => onClickSubVideo1(e)} onWheel={(e) => onMouseWheelSubVideo1(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%201_BUDGET%20UNCERTAINTY%20SubVideo1.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-1-close' onClick={(e) => onClickSubVideo1Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-2-cont' ref={getSubVideo2Cont}>
            <video id='subVideo2' preload='auto' ref={getSubVideo2} onClick={(e) => onClickSubVideo2(e)} onWheel={(e) => onMouseWheelSubVideo2(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%202_ANNUAL%20SUPPLY%20CHAIN%20BIDDING%20SubVideo2.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-2-close' onClick={(e) => onClickSubVideo2Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-3-cont' ref={getSubVideo3Cont}>
            <video id='subVideo3' preload='auto' ref={getSubVideo3} onClick={(e) => onClickSubVideo3(e)} onWheel={(e) => onMouseWheelSubVideo3(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%203_UPFIT%20PRICING%20SubVideo3.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-3-close' onClick={(e) => onClickSubVideo3Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-4-cont outro1-video' ref={getOutroVideo1Cont}>
            <video id='subVideo4' preload='auto' ref={getOutroVideo1} onClick={(e) => onClickOutroVideo1(e)} onWheel={(e) => onMouseWheelOutroVideo1(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%201_BUDGET%20UNCERTAINTY%20Outro1.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-4-close' onClick={(e) => onClickOutroVideo1Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-5-cont outro3-video' ref={getOutroVideo3Cont}>
            <video id='subVideo5' preload='auto' ref={getOutroVideo3} onClick={(e) => onClickOutroVideo3(e)} onWheel={(e) => onMouseWheelOutroVideo3(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%203_UPFIT%20PRICING%20Outro3.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-5-close' onClick={(e) => onClickOutroVideo3Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-6-cont outro4-video' ref={getOutroVideo4Cont}>
            <video id='subVideo6' preload='auto' ref={getOutroVideo4} onClick={(e) => onClickOutroVideo4(e)} onWheel={(e) => onMouseWheelOutroVideo4(e)} muted={muted}>
              <source src='https://s3.amazonaws.com/stream.arifleet.com/supplychain_2021/TRAP%204_GETTING%20TANGLED%20IN%20THE%20WEEDS%20Outro4.mp4' type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-6-close' onClick={(e) => onClickOutroVideo4Close(e)}>
              <img src='assets/img/times-solid.svg' alt='' />
            </button>
          </div>
        </div>
        <div className='progress-bar-sec'>
          <div className='progress-bar-line'><span ref={getProgressBarLine}></span></div>
          <ul>
            <li><a id='roadMap1' ref={getRoadMap1} onClick={(e) => roadMap1Click(e)}></a></li>
            <li><a id='roadMap2' ref={getRoadMap2} onClick={(e) => roadMap2Click(e)}></a></li>
            <li><a id='roadMap3' ref={getRoadMap3} onClick={(e) => roadMap3Click(e)}></a></li>
            <li><a id='roadMap4' ref={getRoadMap4} onClick={(e) => roadMap4Click(e)}></a></li>
            <li><a id='roadMap5' ref={getRoadMap5} onClick={(e) => roadMap5Click(e)}></a></li>
          </ul>
        </div>
        <div className={'speaker-button ' + (muted ? 'mute' : '')} onClick={(e) => onClickSpeakerButton(e)}>
          <span className='volume-up-icon'>
            <img src='assets/img/volume-up-solid.svg' alt='' />
          </span>
          <span className='volume-mute-icon'>
            <img src='assets/img/volume-mute-solid.svg' alt='' />
          </span>
        </div>
      </main>
      <div className='cursor'>
        <div className='cursor__ball cursor__ball--big ' ref={getBigBall}>
          <svg height='30' width='30'>
            <circle cx='15' cy='15' r='12' strokeWidth='0'></circle>
          </svg>
        </div>
        <div className='cursor__ball cursor__ball--small' ref={getSmallBall}>
          <svg height='10' width='10'>
            <circle cx='5' cy='5' r='4' strokeWidth='0'></circle>
          </svg>
        </div>
      </div>
    </div>
  )
}