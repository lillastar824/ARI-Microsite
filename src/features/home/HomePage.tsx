import React, { useEffect, useState } from 'react';
import { Power1, TimelineMax, TweenMax } from "gsap";

export default function HomePage() {
  let firstScene: any;
  let firstIntro: any;
  let firstIntroVideo: any;
  let firstIntroVdoWrap: any;
  let roadMapSec: any;
  let roadMapVideo: any;
  let subVideo1Cont: any;
  let subVideo2Cont: any;
  let subVideo3Cont: any;
  let outroVideo1Cont: any;
  let outroVideo3Cont: any;
  let outroVideo4Cont: any;
  let subVideo1Button: any;
  let subVideo2Button: any;
  let subVideo1: any;
  let subVideo2: any;
  let subVideo3: any;
  let outroVideo1: any;
  let outroVideo3: any;
  let outroVideo4: any;
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
  let trapBox2TypingRef1: any;
  let trapBox2TypingRef2: any;
  let trapBox2TypingRef3: any;
  let trapBox3TypingRef: any;
  let trapBox3TypingRef1: any;
  let trapBox3TypingRef2: any;
  let trapBox4TypingRef: any;
  let trapBox4TypingRef1: any;
  let trapBox4TypingRef2: any;
  let trapBox5TypingRef: any;
  let trapBox5TypingRef1: any;
  let trapBox5TypingRef2: any;
  let trapBox5TypingRef3: any;
  let trapBox5TypingRef4: any;
  let trapBox5TypingRef5: any;
  let trapBox5TypingRef6: any;
  let trapBox6TypingRef: any;
  let trapBox6TypingRef1: any;
  let trapBox6TypingRef2: any;
  let trapBox6TypingRef3: any;
  let trapBox2Ref: any;
  let trapBox8TypingRef: any;
  let trapBox8TypingRef1: any;
  let trapBox8TypingRef2: any;
  let trapBox9TypingRef: any;
  let trapBox9TypingRef1: any;
  let trapBox10TypingRef: any;
  let trapBox10TypingRef1: any;
  let trapBox10TypingRef2: any;
  let trapBox11TypingRef: any;
  let trapBox11TypingRef1: any;
  let trapBox11TypingRef2: any;
  let trapBox12TypingRef: any;
  let trapBox12TypingRef1: any;
  let trapBox12TypingRef2: any;
  let trapBox12TypingRef3: any;
  let trapBox13TypingRef: any;
  let trapBox13TypingRef1: any;
  let trapBox14TypingRef: any;
  let trapBox14TypingRef1: any;
  let trapBox14TypingRef2: any;
  let trapBox14TypingRef3: any;
  let trapBox15TypingRef: any;
  let trapBox15TypingRef1: any;
  let trapBox15TypingRef2: any;
  let trapBox15TypingRef3: any;
  let trapBox16TypingRef: any;
  let trapBox16TypingRef1: any;
  let trapBox16TypingRef2: any;
  let trapBox16TypingRef3: any;
  let trapBox16TypingRef4: any;
  let trapBox1Cont: any;
  let trapBox1Ref: any;
  let trapBox2Cont: any;
  let trapBox3Cont: any;
  let trapBox4Cont: any;
  let trapBox5Cont: any;
  let trapBox6Cont: any;
  let trapBox7Cont: any;
  let trapBox7TypingRef: any;
  let trapBox7TypingRef1: any;
  let trapBox7TypingRef2: any;
  let trapBox7TypingRef3: any;
  let trapBox7TypingRef4: any;
  let trapBox7TypingRef5: any;
  let trapBox8Cont: any;
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
  let introVideoTime: number = 0;
  let roadmapvideoTime: number = 0;
  const tlS = new TimelineMax();
  const delay = 1000;
  const [muted, setMuted] = useState(true);
  const [showChatBotTxt, setShowChatBotTxt] = useState(false);

  const getFirstScene = (elem: any) => {
    firstScene = elem
  }

  const getFirstIntro = (elem: any) => {
    firstIntro = elem
  }

  const getFirstIntroVideo = (elem: any) => {
    firstIntroVideo = elem
  }


  const getFirstIntroVdoWrap = (elem: any) => {
    firstIntroVdoWrap = elem
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
  const getTrapBox1Ref = (elem: any) => {
    trapBox1Ref = elem
  }
  const getTrapBox1TypingRef = (elem: any) => {
    trapBox1TypingRef = elem
  }
  const getTrapBox2TypingRef = (elem: any) => {
    trapBox2TypingRef = elem
  }
  const getTrapBox2TypingRef1 = (elem: any) => {
    trapBox2TypingRef1 = elem
  }
  const getTrapBox2TypingRef2 = (elem: any) => {
    trapBox2TypingRef2 = elem
  }
  const getTrapBox2TypingRef3 = (elem: any) => {
    trapBox2TypingRef3 = elem
  }
  const getTrapBox3TypingRef = (elem: any) => {
    trapBox3TypingRef = elem
  }
  const getTrapBox3TypingRef1 = (elem: any) => {
    trapBox3TypingRef1 = elem
  }
  const getTrapBox3TypingRef2 = (elem: any) => {
    trapBox3TypingRef2 = elem
  }
  const getTrapBox4TypingRef = (elem: any) => {
    trapBox4TypingRef = elem
  }
  const getTrapBox4TypingRef1 = (elem: any) => {
    trapBox4TypingRef1 = elem
  }
  const getTrapBox4TypingRef2 = (elem: any) => {
    trapBox4TypingRef2 = elem
  }
  const getTrapBox5TypingRef = (elem: any) => {
    trapBox5TypingRef = elem
  }
  const getTrapBox5TypingRef1 = (elem: any) => {
    trapBox5TypingRef1 = elem
  }
  const getTrapBox5TypingRef2 = (elem: any) => {
    trapBox5TypingRef2 = elem
  }
  const getTrapBox5TypingRef3 = (elem: any) => {
    trapBox5TypingRef3 = elem
  }
  const getTrapBox5TypingRef4 = (elem: any) => {
    trapBox5TypingRef4 = elem
  }
  const getTrapBox5TypingRef5 = (elem: any) => {
    trapBox5TypingRef5 = elem
  }
  const getTrapBox5TypingRef6 = (elem: any) => {
    trapBox5TypingRef6 = elem
  }

  const getTrapBox6TypingRef = (elem: any) => {
    trapBox6TypingRef = elem
  }
  const getTrapBox6TypingRef1 = (elem: any) => {
    trapBox6TypingRef1 = elem
  }
  const getTrapBox6TypingRef2 = (elem: any) => {
    trapBox6TypingRef2 = elem
  }
  const getTrapBox6TypingRef3 = (elem: any) => {
    trapBox6TypingRef3 = elem
  }

  const getTrapBox2Ref = (elem: any) => {
    trapBox2Ref = elem
  }
  const getTrapBox8TypingRef = (elem: any) => {
    trapBox8TypingRef = elem
  }
  const getTrapBox8TypingRef1 = (elem: any) => {
    trapBox8TypingRef1 = elem
  }
  const getTrapBox8TypingRef2 = (elem: any) => {
    trapBox8TypingRef2 = elem
  }
  const getTrapBox9TypingRef = (elem: any) => {
    trapBox9TypingRef = elem
  }
  const getTrapBox9TypingRef1 = (elem: any) => {
    trapBox9TypingRef1 = elem
  }
  const getTrapBox10TypingRef = (elem: any) => {
    trapBox10TypingRef = elem
  }
  const getTrapBox10TypingRef1 = (elem: any) => {
    trapBox10TypingRef1 = elem
  }
  const getTrapBox10TypingRef2 = (elem: any) => {
    trapBox10TypingRef2 = elem
  }
  const getTrapBox11TypingRef = (elem: any) => {
    trapBox11TypingRef = elem
  }
  const getTrapBox11TypingRef1 = (elem: any) => {
    trapBox11TypingRef1 = elem
  }
  const getTrapBox11TypingRef2 = (elem: any) => {
    trapBox11TypingRef2 = elem
  }
  const getTrapBox12TypingRef = (elem: any) => {
    trapBox12TypingRef = elem
  }
  const getTrapBox12TypingRef1 = (elem: any) => {
    trapBox12TypingRef1 = elem
  }
  const getTrapBox12TypingRef2 = (elem: any) => {
    trapBox12TypingRef2 = elem
  }
  const getTrapBox12TypingRef3 = (elem: any) => {
    trapBox12TypingRef3 = elem
  }
  const getTrapBox13TypingRef = (elem: any) => {
    trapBox13TypingRef = elem
  }
  const getTrapBox13TypingRef1 = (elem: any) => {
    trapBox13TypingRef1 = elem
  }
  const getTrapBox14TypingRef = (elem: any) => {
    trapBox14TypingRef = elem
  }
  const getTrapBox14TypingRef1 = (elem: any) => {
    trapBox14TypingRef1 = elem
  }
  const getTrapBox14TypingRef2 = (elem: any) => {
    trapBox14TypingRef2 = elem
  }
  const getTrapBox14TypingRef3 = (elem: any) => {
    trapBox14TypingRef3 = elem
  }
  const getTrapBox15TypingRef = (elem: any) => {
    trapBox15TypingRef = elem
  }
  const getTrapBox15TypingRef1 = (elem: any) => {
    trapBox15TypingRef1 = elem
  }
  const getTrapBox15TypingRef2 = (elem: any) => {
    trapBox15TypingRef2 = elem
  }
  const getTrapBox15TypingRef3 = (elem: any) => {
    trapBox15TypingRef3 = elem
  }
  const getTrapBox16TypingRef = (elem: any) => {
    trapBox16TypingRef = elem
  }
  const getTrapBox16TypingRef1 = (elem: any) => {
    trapBox16TypingRef1 = elem
  }
  const getTrapBox16TypingRef2 = (elem: any) => {
    trapBox16TypingRef2 = elem
  }
  const getTrapBox16TypingRef3 = (elem: any) => {
    trapBox16TypingRef3 = elem
  }
  const getTrapBox16TypingRef4 = (elem: any) => {
    trapBox16TypingRef4 = elem
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

  const getTrapBox7TypingRef = (elem: any) => {
    trapBox7TypingRef = elem
  }
  const getTrapBox7TypingRef1 = (elem: any) => {
    trapBox7TypingRef1 = elem
  }
  const getTrapBox7TypingRef2 = (elem: any) => {
    trapBox7TypingRef2 = elem
  }
  const getTrapBox7TypingRef3 = (elem: any) => {
    trapBox7TypingRef3 = elem
  }
  const getTrapBox7TypingRef4 = (elem: any) => {
    trapBox7TypingRef4 = elem
  }
  const getTrapBox7TypingRef5 = (elem: any) => {
    trapBox7TypingRef5 = elem
  }

  const getTrapBox8Cont = (elem: any) => {
    trapBox8Cont = elem
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
    let chatBotTxtTimer = setTimeout(() => setShowChatBotTxt(true), delay * 3);
    return () => {
      clearTimeout(chatBotTxtTimer);
    };
  }, []);

  const onWheelFirstScene = (e: any) => {
    console.log(e.deltaY)
    if (e.deltaY / 100 < 0) {
      pauseFirstIntroVideo();
      e.target.classList.remove('animated');
    } else {
      playFirstIntroVideo();
      e.target.classList.add('animated');
    }
  }

  const onWheelFirstIntro = (e: any) => {
    // roadMapVideo.requestFullscreen() BUDGET UNCERTAINTY
    console.log(e.deltaY)
    if (e.deltaY / 100 < 0) {
      pauseFirstIntroVideo();
      if (!(introVideoTime < 1)) {
        introVideoTime = introVideoTime - 5;
        firstIntroVdoWrap.style.transform = 'translateX(' + (-0) + '%)';
      }
    } else {
      pauseFirstIntroVideo();
      if (!(introVideoTime > 99)) {
        introVideoTime = introVideoTime + 5;
        firstIntroVdoWrap.style.transform = 'translateX(' + (-100) + '%)';
        setTimeout(() => {
          roadMapSec && roadMapSec.classList.add('open');
        }, 1500)
      }
    }

    console.log('introTime:', introVideoTime)
  }

  const onWheelRoadmapSec = (e: any) => {
    if (!roadMapSec.classList.contains('open')) {
      return false;
    }
    console.log(e.deltaY)

    introVideoTime = 0;
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
        roadmapvideoTime = roadmapvideoTime - .2;
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
      roadmapvideoTime = roadmapvideoTime + .2;
      pauseFirstIntroVideo();
    }

    setInterval(() => { if (roadMapVideo) { roadMapVideo.currentTime = roadmapvideoTime } }, 40);

    roadMapVideoIndicators(roadMapVideo.currentTime);
    roadMapSubVideoOpenButtons(roadMapVideo.currentTime);

    console.log(roadMapVideo.currentTime);
    if (roadMapVideo.currentTime > 0) {
      trapBox1Ref.classList.remove('hideAri');
      trapBox1TypingRef.classList.remove('hideAri');
      if (roadMapVideo.currentTime > 1) {
        trapBox1Cont.style.transform = 'translateX(' + (-roadMapVideo.currentTime * 40) + '%)';
      }
    }

    if (roadMapVideo.currentTime > 5) {
      trapBox2.classList.add('show')
      trapBox2TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox2TypingRef1.classList.remove('hideAri')
        setTimeout(() => {
          trapBox2TypingRef2.classList.remove('hideAri')
          setTimeout(() => {
            trapBox2TypingRef3.classList.remove('hideAri')
          }, 600);
        }, 600);
      }, 600);

      // setTimeout(() => trapBox2TypingRef3.classList.remove('hideAri'), 400);
      if (roadMapVideo.currentTime > 6) {
        trapBox2Cont.style.transform = 'translateX(' + (150 - roadMapVideo.currentTime * 50) + '%)';
      }
    } else {
      trapBox2.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 9) {
      trapBox3.classList.add('show')
      trapBox3TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox3TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox3TypingRef2.classList.remove('hideAri');
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 10) {
        trapBox3Cont.style.transform = 'translateX(' + (280 - roadMapVideo.currentTime * 40) + '%)';
      }
    } else {
      trapBox3.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 15) {
      trapBox4.classList.add('show')
      trapBox4TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox4TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox4TypingRef2.classList.remove('hideAri');
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 16) {
        trapBox4Cont.style.transform = 'translateX(' + (500 - roadMapVideo.currentTime * 40) + '%)';
      }
    } else {
      trapBox4.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 20) {
      trapBox5.classList.add('show')
      trapBox5TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox5TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox5TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox5TypingRef3.classList.remove('hideAri');
            setTimeout(() => {
              trapBox5TypingRef4.classList.remove('hideAri');
              setTimeout(() => {
                trapBox5TypingRef5.classList.remove('hideAri');
                setTimeout(() => {
                  trapBox5TypingRef6.classList.remove('hideAri');
                }, 600)
              }, 600)
            }, 600)
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 22) {
        trapBox5Cont.style.transform = 'translateX(' + (800 - roadMapVideo.currentTime * 40) + '%)';
      }
    } else {
      trapBox5.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 25) {
      trapBox6.classList.add('show')
      trapBox6TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox6TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox6TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox6TypingRef3.classList.remove('hideAri');
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 27) {
        trapBox6Cont.style.transform = 'translateX(' + (1000 - roadMapVideo.currentTime * 40) + '%)';
      }
    } else {
      trapBox6.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 30) {
      trapBox7.classList.add('show')
      trapBox7TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox7TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox7TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox7TypingRef3.classList.remove('hideAri');
            setTimeout(() => {
              trapBox7TypingRef4.classList.remove('hideAri');
              setTimeout(() => {
                trapBox7TypingRef5.classList.remove('hideAri');
              }, 600)
            }, 600)
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 32) {
        trapBox7Cont.style.transform = 'translateX(' + (1200 - roadMapVideo.currentTime * 40) + '%)';
      }
    } else {
      trapBox7.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 34) {
      if (!roadMapSec.classList.contains('opened-outro-video1')) {
        openOutroVideo1();
        roadMapSec.classList.add('opened-outro-video1')
      }
      trapBox8Cont.style.transform = 'translateX(' + (1300 - roadMapVideo.currentTime * 40) + '%)';
    }

    // if (roadMapVideo.currentTime > 38) {
    //   trapBox8.classList.remove('show')
    // }

    if (roadMapVideo.currentTime > 58 && roadMapVideo.currentTime <= 62) {
      trapBox9.classList.add('show')
      trapBox9TypingRef.classList.remove('hideAri');
      setTimeout(() => trapBox9TypingRef1.classList.remove('hideAri'), 600)
    } else {
      trapBox9.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 62 && roadMapVideo.currentTime <= 65) {
      trapBox10.classList.add('show')
      trapBox10TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox10TypingRef1.classList.remove('hideAri')
        setTimeout(() => {
          trapBox10TypingRef2.classList.remove('hideAri')
        }, 600);
      }, 600);
    } else {
      trapBox10.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 65 && roadMapVideo.currentTime <= 68) {
      trapBox11.classList.add('show')
      trapBox11TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox11TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox11TypingRef2.classList.remove('hideAri');
        }, 600)
      }, 600)
    } else {
      trapBox11.classList.remove('show')
    }
    if (roadMapVideo.currentTime > 68 && roadMapVideo.currentTime < 72) {
      trapBox12.classList.add('show')
      trapBox12TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox12TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox12TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox12TypingRef3.classList.remove('hideAri');
          }, 600)
        }, 600)
      }, 600)
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
      trapBox13TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox13TypingRef1.classList.remove('hideAri');
      }, 600)
      if (roadMapVideo.currentTime > 74) {
        trapBox13Cont.style.transform = 'translateX(' + (300 - roadMapVideo.currentTime * 5) + '%)';
      }
    } else {
      trapBox13.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 78) {
      trapBox13Cont.style.transform = 'translateX(' + (300 - roadMapVideo.currentTime * 10) + '%)';
      trapBox14.classList.add('show')
      trapBox14TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox14TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox14TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox14TypingRef3.classList.remove('hideAri');
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 78.5 && roadMapVideo.currentTime <= 83) {
        trapBox14Cont.style.transform = 'translateX(' + (700 - roadMapVideo.currentTime * 10) + '%)';
      }
      if (roadMapVideo.currentTime > 83) {
        trapBox14Cont.style.transform = 'translateX(' + (700 - roadMapVideo.currentTime * 12) + '%)';
      }
    } else {
      trapBox14.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 88) {
      trapBox14Cont.style.transform = 'translateX(' + (700 - roadMapVideo.currentTime * 15) + '%)';
      trapBox15.classList.add('show')
      trapBox15TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox15TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox15TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox15TypingRef3.classList.remove('hideAri');
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 88.5) {
        trapBox15Cont.style.transform = 'translateX(' + (700 - roadMapVideo.currentTime * 9) + '%)';
      }
    } else {
      trapBox15.classList.remove('show')
    }

    if (roadMapVideo.currentTime > 94) {
      trapBox15Cont.style.transform = 'translateX(' + (800 - roadMapVideo.currentTime * 12) + '%)';
      trapBox16.classList.add('show')
      trapBox16TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox16TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox16TypingRef2.classList.remove('hideAri');
          setTimeout(() => {
            trapBox16TypingRef3.classList.remove('hideAri');
            setTimeout(() => {
              trapBox16TypingRef4.classList.remove('hideAri');
            }, 600)
          }, 600)
        }, 600)
      }, 600)
      if (roadMapVideo.currentTime > 94.5) {
        trapBox16Cont.style.transform = 'translateX(' + (800 - roadMapVideo.currentTime * 10) + '%)';
      }
    } else {
      trapBox16.classList.remove('show')
    }
    if (roadMapVideo.currentTime >= 99.5) {
      if (!roadMapSec.classList.contains('opened-outro-video4')) {
        openOutroVideo4();
        roadMapSec.classList.add('opened-outro-video4')
      }
    }
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
    jumpToRoadMap(0);
  };

  const roadMap2Click = (e: any) => {
    jumpToRoadMap(30);
  };

  const roadMap3Click = (e: any) => {
    jumpToRoadMap(55);
  };

  const roadMap4Click = (e: any) => {
    jumpToRoadMap(80);
  };

  const roadMap5Click = (e: any) => {
    jumpToRoadMap(99.8);
  };

  const onClickSpeakerButton = (e: any) => {
    const newMuteStatus = !muted;
    setMuted(newMuteStatus)
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
    trapBox7.classList.add('closedby-outro-video1')
    outroVideo1Cont.classList.add('active-removed');
    outroVideo1.pause();
    setTimeout(() => {
      trapBox8.classList.add('show')
      trapBox2Ref.classList.remove('hideAri');
      trapBox8TypingRef.classList.remove('hideAri');
      setTimeout(() => {
        trapBox8TypingRef1.classList.remove('hideAri');
        setTimeout(() => {
          trapBox8TypingRef2.classList.remove('hideAri');
        }, 600)
      }, 600)
    }, 1400)
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

  const playFirstIntroVideo = () => {
    firstIntroVideo.play()
  };

  const pauseFirstIntroVideo = () => {
    firstIntroVideo.pause();
  };

  const playRoadMapVideo = () => {
    roadMapVideo.play()
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

  return (
    <div onMouseMove={(e) => onMouseMove(e)}>
      <main id='pinContainer' className='initail-top-section'>
        <section id='firstScene' className={`panel initail-top-section-content`} ref={getFirstScene} onWheel={(e) => onWheelFirstScene(e)}>
          <h1>Welcome</h1>
          <div className='chat-bot-txt'>
            <h3 className={`chat-bot-h3 animate__animated animate__fadeIn ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>Our Chat Bot is available to assist you in</h3>
            <h3 className={`chat-bot-h3 animate__animated animate__fadeIn ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>answering any questions you may have</h3>
            <h3 className={`chat-bot-h3 animate__animated animate__fadeIn ${showChatBotTxt ? 'showAri' : 'hideAri'}`}>during this interactive experience.</h3>
          </div>
          <span id='firstIntroDown' className={`mouse-move-down ${!showChatBotTxt ? 'showAri' : 'hideAri'}`} style={{ marginTop: '3%' }}>
            <span className='move-down'></span>
          </span>
        </section>
        <section ref={getFirstIntro} id='firstIntro' className='panel first-intro' onWheel={(e) => onWheelFirstIntro(e)} onClick={(e) => onClickFirstIntro(e)}>
          <div className='first-intro-video-box' ref={getFirstIntroVdoWrap}>
            <video ref={getFirstIntroVideo} id='firstIntroVideo' preload='auto' muted={muted} src={'assets/video/outro1.mp4'} >
              {/* <source type='video/mp4' /> */}
            </video>
          </div>
        </section>
        <section id='roadmapSec' ref={getRoadMapSec} className='panel roadmap-sec' onWheel={(e) => onWheelRoadmapSec(e)}>
          <div className='roadmap-sec-video-box' id='roadMapVdoWrap'>
            <video id='roadMapVideo' ref={getRoadMapVideo} muted={muted} src={'assets/video/fresh-background.mp4'} height="calc(100vh)">
              {/* {!roadMapVdoSrc.current && (
                <source src={'assets/video/fresh-background.mp4'} type='video/mp4'></source>
              )} */}
            </video>

            <div className='text-container'>
              <div className='text-box trap-box-1'>
                <div className='box-cont' ref={getTrapBox1Cont}>
                  <h3 className='trap-title animate__animated animate__zoomIn hideAri' ref={getTrapBox1Ref}>Trap 1</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox1TypingRef}>Budget Uncertainty</h2>
                </div>
              </div>
              <div className='text-box trap-box-1-1 trap-box-2' ref={getTrapBox2}>
                <div className='box-cont' ref={getTrapBox2Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox2TypingRef}>Have you ever</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox2TypingRef1}>underestinated</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox2TypingRef2}>your fleet's</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox2TypingRef3}>operating budget?</h6>
                </div>
              </div>
              <div className='text-box trap-box-3' ref={getTrapBox3}>
                <div className='box-cont' ref={getTrapBox3Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox3TypingRef}>If so, you wouldn't be the</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox3TypingRef1}>first. It's a common blind</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox3TypingRef2}>spot in the budget silo.</h6>
                </div>
              </div>
              <div className='text-box trap-box-4' ref={getTrapBox4}>
                <div className='box-cont' ref={getTrapBox4Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox4TypingRef}>But what if you</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox4TypingRef1}>didn't have to</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox4TypingRef2}>guess?</h6>
                </div>
              </div>
              <div className='text-box trap-box-5' ref={getTrapBox5}>
                <div className='box-cont' ref={getTrapBox5Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef}>What if you could</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef1}>quantify your budget</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef2}>with far more certainty</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef3}>and forecast</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef4}>replacement-versus-rep</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef5}>air two, three or four</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox5TypingRef6}>years in advance?</h6>
                </div>
              </div>
              <div className='text-box trap-box-6' ref={getTrapBox6}>
                <div className='box-cont' ref={getTrapBox6Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox6TypingRef}>What if you could see how today's</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox6TypingRef1}>replacement decissions will impact both</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox6TypingRef2}>short-term operating expenses and</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox6TypingRef3}>long-term capital needs?</h6>
                </div>
              </div>
              <div className='text-box trap-box-7' ref={getTrapBox7}>
                <div className='box-cont' ref={getTrapBox7Cont}>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef}>Did you catch</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef1}>the hidden</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef2}>easter eggs</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef3}>so far?</h2>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef4}>There were at least 4.</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox7TypingRef5}>Plus you ran a STOP sign.</h6>
                </div>
              </div>
              <div className='text-box trap-box-8' ref={getTrapBox8}>
                <div className='box-cont' ref={getTrapBox8Cont}>
                  <h3 className='trap-title animate__animated animate__zoomIn hideAri' ref={getTrapBox2Ref}>Trap 2</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox8TypingRef}>Annual</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox8TypingRef1}>Supply Chain</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox8TypingRef2}>Bidding</h2>
                </div>
              </div>
              <div className='text-box trap-box-9' ref={getTrapBox9}>
                <div className='box-cont'>
                  <h3 className='trap-title animate__animated animate__zoomIn'>Trap 3</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox9TypingRef}>Minimizing</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox9TypingRef1}>Upfit Price</h2>
                </div>
              </div>
              <div className='text-box trap-box-10' ref={getTrapBox10}>
                <div className='box-cont'>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox10TypingRef}>All too often, the design and upfit silo is so</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox10TypingRef1}>focused on immediate savings, it tries to</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox10TypingRef2}>minimize the price of upfitting.</h6>
                </div>
              </div>
              <div className='text-box trap-box-11' ref={getTrapBox11}>
                <div className='box-cont'>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox11TypingRef}>That's not surprising.</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox11TypingRef1}>Quick savings are easy to see</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox11TypingRef2}>on an annual spreadsheet.</h6>
                </div>
              </div>
              <div className='text-box trap-box-12' ref={getTrapBox12}>
                <div className='box-cont'>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox12TypingRef}>But whether you're operating a fleet of vans or</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox12TypingRef1}>sedans, if you are focused on thhe upfit bill, as</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox12TypingRef2}>oposed to your upfit spaces, you will likely end up</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox12TypingRef3}>spending more on the long run.</h6>
                </div>
              </div>
              <div className='text-box trap-box-13' ref={getTrapBox13}>
                <div className='box-cont' ref={getTrapBox13Cont}>
                  <h3 className='trap-title animate__animated animate__zoomIn'>Trap 4</h3>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox13TypingRef}>Getting tangled</h2>
                  <h2 className='typing-animate typing-animate-start hideAri' ref={getTrapBox13TypingRef1}>in the weeds</h2>
                </div>
              </div>
              <div className='text-box trap-box-14' ref={getTrapBox14}>
                <div className='box-cont' ref={getTrapBox14Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox14TypingRef}>Supply chain process can</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox14TypingRef1}>be a bear, with hidden traps</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox14TypingRef2}>that lower productivity and</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox14TypingRef3}>increase costs.</h6>
                </div>
              </div>
              <div className='text-box trap-box-15' ref={getTrapBox15}>
                <div className='box-cont' ref={getTrapBox15Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox15TypingRef}>It's the nature of the beast,</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox15TypingRef1}>which too often forces fleet</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox15TypingRef2}>managers to deal with</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox15TypingRef3}>time-consuming distractions.</h6>
                </div>
              </div>
              <div className='text-box trap-box-16' ref={getTrapBox16}>
                <div className='box-cont' ref={getTrapBox16Cont}>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef}>Like drafting the specs</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef1}>themselves, or untangling</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef2}>status updates from your</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef3}>fleet, management company</h6>
                  <h6 className='typing-animate typing-animate-start hideAri' ref={getTrapBox16TypingRef4}>and supplier.</h6>
                </div>
              </div>
            </div>
            <div id='roadMapVideoScrollContainer' className='roadmap-scroll-container'>
              <div className='sub-video-1-button' ref={getSubVideo1Button} onClick={(e) => onClickSubVideo1Button(e)}></div>
              <div className='sub-video-2-button' ref={getSubVideo2Button} onClick={(e) => onClickSubVideo2Button(e)}></div>
            </div>
          </div>
        </section>
        <div className='sub-video-container'>
          <div className='sub-video-box sub-video-1-cont' ref={getSubVideo1Cont}>
            <video id='subVideo1' preload='auto' ref={getSubVideo1} onClick={(e) => onClickSubVideo1(e)} onWheel={(e) => onMouseWheelSubVideo1(e)} muted={muted}>
              <source src={'assets/video/sub_video1.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-1-close' onClick={(e) => onClickSubVideo1Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-2-cont' ref={getSubVideo2Cont}>
            <video id='subVideo2' preload='auto' ref={getSubVideo2} onClick={(e) => onClickSubVideo2(e)} onWheel={(e) => onMouseWheelSubVideo2(e)} muted={muted}>
              <source src={'assets/video/sub_video2.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-2-close' onClick={(e) => onClickSubVideo2Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-3-cont' ref={getSubVideo3Cont}>
            <video id='subVideo3' preload='auto' ref={getSubVideo3} onClick={(e) => onClickSubVideo3(e)} onWheel={(e) => onMouseWheelSubVideo3(e)} muted={muted}>
              <source src={'assets/video/sub_video3.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-3-close' onClick={(e) => onClickSubVideo3Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-4-cont outro2-video' ref={getOutroVideo1Cont}>
            <video id='subVideo4' preload='auto' ref={getOutroVideo1} onClick={(e) => onClickOutroVideo1(e)} onWheel={(e) => onMouseWheelOutroVideo1(e)} muted={muted}>
              <source src={'assets/video/outro2.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-4-close' onClick={(e) => onClickOutroVideo1Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-5-cont outro3-video' ref={getOutroVideo3Cont}>
            <video id='subVideo5' preload='auto' ref={getOutroVideo3} onClick={(e) => onClickOutroVideo3(e)} onWheel={(e) => onMouseWheelOutroVideo3(e)} muted={muted}>
              <source src={'assets/video/outro3.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-5-close' onClick={(e) => onClickOutroVideo3Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
            </button>
          </div>
          <div className='sub-video-box sub-video-6-cont outro4-video' ref={getOutroVideo4Cont}>
            <video id='subVideo6' preload='auto' ref={getOutroVideo4} onClick={(e) => onClickOutroVideo4(e)} onWheel={(e) => onMouseWheelOutroVideo4(e)} muted={muted}>
              <source src={'assets/video/outro4.mp4'} type='video/mp4' />
            </video>
            <button className='sub-video-close sub-video-6-close' onClick={(e) => onClickOutroVideo4Close(e)}>
              <img src={'assets/img/times-solid.svg'} alt='' />
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