!function(n,t){for(var e in t)n[e]=t[e]}(exports,function(n){function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=3)}([function(n,t){n.exports=require("react")},function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Wastes=t.Flame=t.LegRight=t.LegMiddle=t.LegLeft=t.Leg=t.LegAnimation=t.RocketEngineRight=t.RocketEngineMiddle=t.RocketEngineLeft=t.RocketEngine=t.RocketEngineBase=t.FinRight=t.FinLeft=t.GridFin=t.RocketCap=t.RocketSecondStage=t.RocketFairing=t.SpaceXLogo=t.USFlag=t.RocketFirstStage=t.Falcon9Left=t.Falcon9Right=t.Falcon9=t.Rocket=t.wasting2=t.wasting=t.engineTurnedOff=t.engineTurnedOn=t.launch=t.land=t.flameWiggleLand=t.flameWiggleLaunch=t.wiggle=t.openRightFin=t.openLeftFin=t.openRightLeg=t.openMiddleLeg=t.openLeftLeg=void 0;var a=i(["\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n"],["\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n"]),r=i(["\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n"],["\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n"]),p=i(["\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n"],["\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n"]),l=i(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n"],["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n"]),d=i(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n"],["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n"]),s=i(["\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n"],["\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n"]),u=i(["\n  0% {\n    height: 70px; }\n  50% {\n    height: 75px; }\n  100% {\n    height: 70px; }\n"],["\n  0% {\n    height: 70px; }\n  50% {\n    height: 75px; }\n  100% {\n    height: 70px; }\n"]),f=i(["\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n"],["\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n"]),c=i(["\n  0% {\n    top: -260px; }\n  80% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n"],["\n  0% {\n    top: -260px; }\n  80% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n"]),m=i(["\n  0% {\n  top: calc(100% - 280px); }\n  25% {\n  top: calc(100% - 280px); }\n  100% {\n  top: calc(0% - 300px); }\n"],["\n  0% {\n  top: calc(100% - 280px); }\n  25% {\n  top: calc(100% - 280px); }\n  100% {\n  top: calc(0% - 300px); }\n"]),x=i(["\n  0% {\n    opacity: 1;\n    display: 'none';    \n    left: 8px;\n    width: 8px;\n  }\n  50% {\n    opacity: 1;\n    display: block; \n    left: 8px;\n    width: 8px;\n  }\n  100% {\n    opacity: 1;\n    display: 'none';\n    left: 8px;\n    width: 8px;\n  }\n}\n"],["\n  0% {\n    opacity: 1;\n    display: 'none';    \n    left: 8px;\n    width: 8px;\n  }\n  50% {\n    opacity: 1;\n    display: block; \n    left: 8px;\n    width: 8px;\n  }\n  100% {\n    opacity: 1;\n    display: 'none';\n    left: 8px;\n    width: 8px;\n  }\n}\n"]),h=i(["\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n"],["\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n"]),g=i(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n"],["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n"]),b=i(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n"],["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n"]),y=i(["\n  display: ",";\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ","\n  animation-name: ",", ",";\n  animation-duration: 200ms, 10s;\n  animation-delay: 2s, 0s;\n  animation-iteration-count: 30, 1;\n  animation-timing-function: ",";\n  animation-fill-mode: forwards;\n"],["\n  display: ",";\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ","\n  animation-name: ",", ",";\n  animation-duration: 200ms, 10s;\n  animation-delay: 2s, 0s;\n  animation-iteration-count: 30, 1;\n  animation-timing-function: ",";\n  animation-fill-mode: forwards;\n"]),w=i(["\n  display: block;\n  position: absolute;\n  height: 320px;\n  left: 0px;\n"],["\n  display: block;\n  position: absolute;\n  height: 320px;\n  left: 0px;\n"]),k=i(["\n  left: ",";\n"],["\n  left: ",";\n"]),E=i(["\nleft: ",";\n"],["\nleft: ",";\n"]),T=i(["\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n"],["\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n"]),L=i(["\n  position: absolute;\n  top: 115px;\n  height: 5px;\n  width: 8px;\n  left: 7px;\n"],["\n  position: absolute;\n  top: 115px;\n  height: 5px;\n  width: 8px;\n  left: 7px;\n"]),R=i(["\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n"],["\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n"]),_=i(["\n  display: ",";\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: '';\n    position: absolute;\n    display: ",";\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n"],["\n  display: ",";\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: '';\n    position: absolute;\n    display: ",";\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n"]),A=i(["\n  display: ",";\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n"],["\n  display: ",";\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n"]),v=i(["\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n"],["\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n"]),N=i(["\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 1s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n"],["\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 1s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n"]),U=i(["\n  left: -2px;\n  border-top-left-radius: 50%;\n  transform-origin: right top;\n  animation-name: ",";\n"],["\n  left: -2px;\n  border-top-left-radius: 50%;\n  transform-origin: right top;\n  animation-name: ",";\n"]),O=i(["\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  animation-name: ",";\n"],["\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  animation-name: ",";\n"]),C=i(["\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n"],["\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n"]),S=i(["\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n  \n"],["\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n  \n"]),H=i(["\n  left: 14px;\n  border-top-left-radius: 100%;\n"],["\n  left: 14px;\n  border-top-left-radius: 100%;\n"]),F=i(["\n  left: 8px;\n  border-top-right-radius: 100%;\n"],["\n  left: 8px;\n  border-top-right-radius: 100%;\n"]),j=i(["\n  left: 2px;\n  border-top-right-radius: 100%;\n"],["\n  left: 2px;\n  border-top-right-radius: 100%;\n"]),P=i(["\n  animation-duration: 2s;\n  animation-delay: 6s;\n  animation-fill-mode: forwards;\n"],["\n  animation-duration: 2s;\n  animation-delay: 6s;\n  animation-fill-mode: forwards;\n"]),X=i(["\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n"],["\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n"]),M=i(["\n  right: 1px;\n  transform-origin: right center;\n  animation-name: ",";\n  transform: rotate(90deg) skewX(35deg);\n"],["\n  right: 1px;\n  transform-origin: right center;\n  animation-name: ",";\n  transform: rotate(90deg) skewX(35deg);\n"]),G=i(["\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  animation-name: ",";\n  transform-origin: left bottom;\n\n"],["\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  animation-name: ",";\n  transform-origin: left bottom;\n\n"]),D=i(["\n  left: 23px;\n  transform-origin: left center;\n  animation-name: ",";\n  transform: rotate(-90deg) skewX(-35deg);\n"],["\n  left: 23px;\n  transform-origin: left center;\n  animation-name: ",";\n  transform: rotate(-90deg) skewX(-35deg);\n"]),q=i(["\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  animation-name: ",", ",";\n  animation-duration: 100ms, 9s;\n  animation-delay: ",", ",";\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ",";\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n"],["\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  animation-name: ",", ",";\n  animation-duration: 100ms, 9s;\n  animation-delay: ",", ",";\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ",";\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n"]),W=i(["\n  position: absolute;\n  top: ",";\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 2s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: "," 400ms "," 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: "," 400ms "," 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: "," 400ms "," 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: "," 400ms "," 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: "," 400ms "," 100ms;\n  }\n"],["\n  position: absolute;\n  top: ",";\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 2s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: "," 400ms "," 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: "," 400ms "," 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: "," 400ms "," 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: "," 400ms "," 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: "," 400ms "," 100ms;\n  }\n"]),z=e(4),I=o(z),B=e(0),V=o(B),J=t.openLeftLeg=(0,z.keyframes)(a),K=t.openMiddleLeg=(0,z.keyframes)(r),Q=t.openRightLeg=(0,z.keyframes)(p),Y=t.openLeftFin=(0,z.keyframes)(l),Z=t.openRightFin=(0,z.keyframes)(d),$=t.wiggle=(0,z.keyframes)(s),nn=t.flameWiggleLaunch=(0,z.keyframes)(u),tn=t.flameWiggleLand=(0,z.keyframes)(f),en=t.land=(0,z.keyframes)(c),on=t.launch=(0,z.keyframes)(m),an=t.engineTurnedOn=(0,z.keyframes)(x),rn=t.engineTurnedOff=(0,z.keyframes)(h),pn=t.wasting=(0,z.keyframes)(g),ln=t.wasting2=(0,z.keyframes)(b),dn=t.Rocket=I.default.div(y,function(n){return n.display?"block":"none"},function(n){return"LAUNCH"==n.animationType?"top: calc(100% - 280px);":"top: calc(0%-300px);"},$,function(n){return"LAUNCH"==n.animationType?on:en},function(n){return"LAUNCH"==n.animationType?"ease-in":"ease-out"}),sn=t.Falcon9=I.default.div(w),un=t.Falcon9Right=sn.extend(k,function(n){return"LAUNCH"==n.animationType?"24px;":"-100px"}),fn=t.Falcon9Left=sn.extend(E,function(n){return"LAUNCH"==n.animationType?"-24px;":"-200px"}),cn=t.RocketFirstStage=I.default.span(T),mn=t.USFlag=I.default.img(L),xn=t.SpaceXLogo=I.default.img(R),hn=t.RocketFairing=I.default.i(_,function(n){return"LAUNCH"==n.animationType?"block":"none"},function(n){return"LAUNCH"==n.animationType?"block":"none"}),gn=t.RocketSecondStage=I.default.i(A,function(n){return"LAUNCH"==n.animationType?"block":"none"}),bn=t.RocketCap=I.default.i(v),yn=t.GridFin=I.default.i(N),wn=t.FinLeft=yn.extend(U,function(n){return"LAUNCH"==n.animationType?"none":Y}),kn=t.FinRight=yn.extend(O,function(n){return"LAUNCH"==n.animationType?"none":Z}),En=t.RocketEngineBase=I.default.i(C),Tn=t.RocketEngine=I.default.i(S),Ln=t.RocketEngineLeft=Tn.extend(H),Rn=t.RocketEngineMiddle=Tn.extend(F),_n=t.RocketEngineRight=Tn.extend(j),An=t.LegAnimation=I.default.i(P),vn=t.Leg=An.extend(X),Nn=t.LegLeft=vn.extend(M,function(n){return"LAUNCH"==n.animationType?"none":J}),Un=t.LegMiddle=An.extend(G,function(n){return"LAUNCH"==n.animationType?"none":K}),On=t.LegRight=vn.extend(D,function(n){return"LAUNCH"==n.animationType?"none":Q}),Cn=t.Flame=I.default.i(q,function(n){return"LAUNCH"==n.animationType?nn:tn},function(n){return"LAUNCH"==n.animationType?an:rn},function(n){return n.animationType,"2s"},function(n){return"LAUNCH"==n.animationType?"2s":"0s"},function(n){return"LAUNCH"==n.animationType?"120px":"50px"}),Sn=t.Wastes=I.default.i(W,function(n){return"LAUNCH"==n.animationType?"320px":"265px"},pn,function(n){return"LAUNCH"==n.animationType?"30":"18"},ln,function(n){return"LAUNCH"==n.animationType?"30":"18"},pn,function(n){return"LAUNCH"==n.animationType?"30":"18"},ln,function(n){return"LAUNCH"==n.animationType?"30":"18"},pn,function(n){return"LAUNCH"==n.animationType?"30":"18"}),Hn=function(n){var t=n.display,e=n.animationType,o=n.onAnimationEnd;return V.default.createElement(dn,{id:"rocket",display:t,animationType:e,onAnimationEnd:o.bind(void 0)},V.default.createElement(fn,{animationType:e},V.default.createElement(bn,null),V.default.createElement(cn,null),V.default.createElement(wn,{animationType:e}),V.default.createElement(kn,{animationType:e}),V.default.createElement(Cn,{animationType:e}),V.default.createElement(En,null),V.default.createElement(Ln,null),V.default.createElement(_n,null),V.default.createElement(Rn,null),V.default.createElement(Nn,{animationType:e}),V.default.createElement(On,{animationType:e}),V.default.createElement(Un,{animationType:e}),V.default.createElement(Sn,{animationType:e},V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null))),V.default.createElement(un,{animationType:e},V.default.createElement(bn,null),V.default.createElement(cn,null),V.default.createElement(wn,{animationType:e}),V.default.createElement(kn,{animationType:e}),V.default.createElement(Cn,{animationType:e}),V.default.createElement(En,null),V.default.createElement(Ln,null),V.default.createElement(_n,null),V.default.createElement(Rn,null),V.default.createElement(Nn,{animationType:e}),V.default.createElement(On,{animationType:e}),V.default.createElement(Un,{animationType:e}),V.default.createElement(Sn,{animationType:e},V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null))),V.default.createElement(sn,null,V.default.createElement(gn,{animationType:e}),V.default.createElement(hn,{animationType:e}),V.default.createElement(cn,null),V.default.createElement(mn,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"}),V.default.createElement(xn,{src:"http://i67.tinypic.com/24q6a0k.png"}),V.default.createElement(wn,{animationType:e}),V.default.createElement(kn,{animationType:e}),V.default.createElement(Cn,{animationType:e}),V.default.createElement(En,null),V.default.createElement(Ln,null),V.default.createElement(_n,null),V.default.createElement(Rn,null),V.default.createElement(Nn,{animationType:e}),V.default.createElement(On,{animationType:e}),V.default.createElement(Un,{animationType:e}),V.default.createElement(Sn,{animationType:e},V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null),V.default.createElement("i",null))))};t.default=Hn},function(n,t){n.exports=require("prop-types")},function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function p(n){var t=["To(.+).git"],e=["error:"];return new RegExp("("+t.join(")|(")+")").test(n)&&!new RegExp("("+e.join(")|(")+")").test(n)}function l(n){var t=["Updating"],e=/CONFLICT/;return new RegExp("("+t.join(")|(")+")").test(n)&&!e.test(n)}function d(n){var t=["Writing(.+),(.+)bytes"];if(new RegExp("("+t.join(")|(")+")").test(n)){var e=n.split(" ");return e[e.length-2]}return 0}var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),u=e(0),f=(o(u),e(1)),c=o(f),m=e(2),x=o(m);t.middleware=function(n){return function(t){return function(e){if("SESSION_ADD_DATA"===e.type){var o=e.data,i=d(o);i&&n.dispatch({type:i}),p(o)?n.dispatch({type:"PUSH_MODE_TOGGLE"}):l(o)&&n.dispatch({type:"PULL_MODE_TOGGLE"}),t(e)}else t(e)}}},t.reduceUI=function(n,t){switch(t.type){case"PUSH_MODE_TOGGLE":return n.set("rocketState","LAUNCH");case"PULL_MODE_TOGGLE":return n.set("rocketState","LAND");default:return Number.parseInt(t.type,10)?(console.log("is Int"),n.set("bytes",t.type)):n.set("rocketState","None")}};var h=function(n,t,e){return Object.assign(e,{rocketState:t.rocketState,bytes:t.bytes,animationType:t.animationType})};t.mapTermsState=function(n,t){return Object.assign(t,{rocketState:n.ui.rocketState,bytes:n.ui.bytes,animationType:n.ui.animationType})},t.getTermGroupProps=h,t.getTermProps=h,t.decorateTerm=function(n,t){var e=t.React,o=function(t){function o(n,t){i(this,o);var e=a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,n,t));return e.state={animationType:"NONE",display:!1,bytes:0},e}return r(o,t),s(o,[{key:"onTerminal",value:function(n){this.props.onTerminal&&this.props.onTerminal(n),this._div=n.div_,this._window=n.document_.defaultView}},{key:"componentWillReceiveProps",value:function(n){return console.log("ComponentWillReceiveProps"),console.log("nextProps"),console.log(n.rocketState),console.log("this.props"),console.log(this.props.rocketState),"LAND"===n.rocketState?this.setState({animationType:"LAND",display:!0,bytes:this.props.bytes}):"LAUNCH"===n.rocketState&&this.setState({animationType:"LAUNCH",display:!0,bytes:this.props.bytes}),n}},{key:"onAnimationEnd",value:function(n){console.log(n),10==n.elapsedTime&&(console.log(this.state),this.setState({animationType:"NONE",display:!1,bytes:0})),setTimeout(1500)}},{key:"render",value:function(){return console.log("renderHOC"),console.log(this.props),console.log(this.props.display),e.createElement("div",{style:{width:"100%",height:"100%",position:"relative"}},e.createElement(n,Object.assign({},this.props,{onTerminal:this._onTerminal})),e.createElement(c.default,{display:this.state.display,animationType:this.state.animationType,onAnimationEnd:this.onAnimationEnd.bind(this)}))}}]),o}(e.Component);return o.propTypes={onTerminal:x.default.func.isRequired,rocketState:x.default.number.isRequired,animationType:x.default.string.isRequired,type:x.default.number.isRequired,bytes:x.default.number.isRequired},o}},function(n,t){n.exports=require("styled-components")}]));
//# sourceMappingURL=index.js.map