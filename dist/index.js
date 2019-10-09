!function(t,e){for(var i in e)t[i]=e[i]}(exports,function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e){t.exports=require("styled-components")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("prop-types")},function(t,e,i){"use strict";i.r(e);var a=i(0),o=i.n(a);const n=a.keyframes`
  from {
    transform: rotate(90deg) skewX(35deg); }
  to {
    transform: rotate(-40deg) skewX(-35deg); } 
`,p=a.keyframes`
  from {
    transform: rotateX(0deg); }
  to {
    transform: rotateX(-135deg); } 
`,r=a.keyframes`
  from {
    transform: rotate(-90deg) skewX(-35deg); }
  to {
    transform: rotate(40deg) skewX(35deg); }
`,s=o.a.i`
  animation-duration: 0.5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`,l=s.extend`
  display: block; 
  position: absolute;
  height: 4px;
  width: 45px;
  bottom: 65px;
  background-color: #3a3a3b;
`,d=l.extend`
  right: 1px;
  transform-origin: right center;
  transform: rotate(90deg) skewX(35deg);
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+n+";"}
`,m=s.extend`
  position: absolute;
  height: 45px;
  width: 18px; 
  bottom: 65px;
  left: 2px;
  border-radius: 200% 200% 0 0;
  border-top-left-radius: 50% 90%;
  border-top-right-radius: 50% 90%;
  border: 8px solid #3a3a3b;
  border-bottom: none;
  transform-origin: left bottom;
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+p+";"}

`,c=l.extend`
  left: 23px;
  transform-origin: left center;
  transform: rotate(-90deg) skewX(-35deg);
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+r+";"}
`,x=a.keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(90deg); }
`,y=a.keyframes`
  from {
    transform: rotate(0deg); }
  to {
    transform: rotate(-90deg); }
`,h=o.a.i`
  display: block;
  position: absolute;
  top: 101px;
  height: 15px;
  width: 3px;
  background-color: #3a3a3b;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  transform: rotate(0deg);
`,u=h.extend`
  left: -2px;
  border-=top-left-radius: 50%;
  transform-origin: right top;
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+x+";"}
`,b=h.extend`
  right: -23px;
  border-top-right-radius: 50%;
  transform-origin: left top;
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+y+";"}
  `,f=o.a.i`
  position: absolute;
  height: 5px;
  width: 23px;
  bottom: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #3a3a3b; 
`,g=o.a.i`
  position: absolute;
  height: 8px;
  width: 8px;
  bottom: 52px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: #787879;
  border-color: #3a3a3b;
  border-width: 1px;
  border-top-width: 0px;
  border-style: solid;
`,T=g.extend`
  left: 15px;
`,w=g.extend`
  left: 11px;
`,k=g.extend`
  left: 4px;
`,E=g.extend`
  left: 0px;
`,v=a.keyframes`
  0% {
    height: 80px; }
  50% {
    height: 90px; }
  100% {
    height: 80px; }
`,N=a.keyframes`
  0% {
    height: 30px; }
  50% {
    height: 35px; }
  100% {
    height: 30px; }
`,$=a.keyframes`
  from {
    opacity: 1;
    display: block;    
    left: 5px;
    width: 13px;
  }
  to {
    opacity: 1;
    display: block; 
    left: 5px;
    width: 13px;
  }
}
`,_=a.keyframes`
  0% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  50% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  90% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  99% {
    opacity: 1;
    position: absolute;
    left: 11px;
    width: 2px;
  }
  100% {
    opacity: 0;
    position: absolute;
    left: 11px;
    width: 0px;
    //height: 0px;
  }
}
`,U=a.keyframes`
  0% {
    transform: translate3d(0px, 0, 0); }
  100% {
    transform: translate3d(-10px, 35px, 0); }
`,A=a.keyframes`
  0% {
    transform: translate3d(0px, 0, 0); }
  100% {
    transform: translate3d(10px, 35px, 0); }
`,L=o.a.i`
  display: block;
  position: absolute;
  top: 265px;
  height: 10px;
  width: 1px;
  left: 12px;
  opacity: 0;
  margin: 0px auto;
  background: white; 
  border-top-left-radius: 100px;
  border-bottom-left-radius: 9000%;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 9000%;
  box-shadow: 
      0 0px 0px 3px white,
      0 20px 1px 4px white, 
      0 25px 2px 3px #ffd9b3, 
      0 30px 5px 4px #ffd9b3,  //top
      0 0px 150px 15px #ffd9b3, //global
      0 10px 2px 4px white,
      0 5px 3px 3px white;
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?"animation-name: "+v+", "+$+";animation-duration: 100ms, 2.5s;animation-delay: 0.5s, 0.5s;animation-iteration-count: 13, 1;":"animation-name: "+N+", "+_+";animation-duration: 100ms, 2.5s;animation-delay: 1s, 0.0s;animation-iteration-count: 5, 1;"}
  animation-iteration-count: infinite, 1;
  animation-fill-mode: forwards;
  }
    .shadows{
    position: absolute;
    left: 4px;
    //top: -5%;
    width: 0px;
    height: ${t=>"LAUNCH"==t.animationType?"120px":"50px"};
    border-radius: 50%;
    box-shadow: 
      0 5px 20px 15px white, 
      0 0px 150px 30px #ffd9b3
  }
`,C=o.a.i`
  position: absolute;
  top: ${t=>"LAUNCH"==t.animationType?"340px":"265px"};
  height: 8px;
  width: 8px;
  left: 11px;
  animation-delay: 0s;
  i {
    position: absolute;
    width: 1px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  i:nth-child(1) {
    top: 2px;
    animation: ${U} 400ms ${t=>"LAUNCH"==t.animationType?"30":"18"} 100ms;
  }
  i:nth-child(2) {
    top: 4px;
    animation: ${A} 400ms ${t=>"LAUNCH"==t.animationType?"30":"18"} 200ms;
  }
  i:nth-child(3) {
    top: 6px;
    animation: ${U} 400ms ${t=>"LAUNCH"==t.animationType?"30":"18"} 300ms;
  }
  i:nth-child(4) {
    top: 8px;
    animation: ${A} 400ms ${t=>"LAUNCH"==t.animationType?"30":"18"} 400ms;
  }
  i:nth-child(5) {
    top: 10px;
    animation: ${U} 400ms ${t=>"LAUNCH"==t.animationType?"30":"18"} 100ms;
  }
`;var R=i(1),q=i.n(R),H=i(2),O=i.n(H);const S=a.keyframes`
  0% {
    left: calc(90% - 47px); }
  50% {
    left: calc(90% - 45px); }
  100% {
    left: calc(90% - 47px); }
`,j=a.keyframes`
  0% {
    top: -260px; }
  50% {
      top: calc(100% - 300px); }
  67% {
    top: calc(100% - 285px); }
  100% {
    top: calc(100% - 285px); }
`,P=a.keyframes`
  0% {
    top: calc(100% - 280px); }
  33% {
    top: calc(100% - 280px); }
  100% {
    top: calc(0% - 300px); }
`,F=o.a.div`
  display: ${t=>t.display?"block":"none"};
  position: absolute;
  height: 320px;
  left: calc(90% - 50px);
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?"top: calc(100% - 280px);animation-name: "+S+","+P+";animation-duration: 200ms, 3s;animation-delay: 0.5s, 0s;animation-iteration-count: 13, 1;animation-fill-mode: forwards;animation-timing-function: ease-in;":"top: calc(0%-300x);bottom: calc(100%);animation-name: "+S+","+j+";animation-duration: 200ms, 3s;animation-delay: 1s, 0s;animation-iteration-count: 5, 1;animation-fill-mode: forwards;animation-timing-function: ease-out;"}
`,D=o.a.div`
  ${t=>"0px"==t.position?"display: block;":t=>t.heavy?"display: block;":"display: none;"}
  position: absolute;
  height: 320px;
  top: calc(0%-300px);
  ${t=>"None"==t.animationType?";":t=>(t.animationType,"left: "+t.position+";")}
`,G=o.a.div`

`,M=o.a.span`
  display: block;
  position: absolute;
  top: 100px;
  width: 22px;
  height: 155px;
  background-color: #d1d2d6;
  border-top: 1px solid #a7a9b1;
`,X=o.a.img`
  position: absolute;
  top: 115px;
  height: 5px;
  width: 8px;
  left: 7px;
`,B=o.a.img`
  position: absolute;
  top: 130px;
  height: 85px;
  width: 22px;
`,I=o.a.i`
  display: ${t=>"LAUNCH"==t.animationType?"block":"none"};
  //display: ${t=>t.heavy?"block":"none"};
  position: absolute;
  top: -20px;
  height: 60px;
  width: 30px;
  left: -4px;
  border-top-left-radius: 200%;
  border-top-right-radius: 200%;
  border-bottom-left-radius: 70%;
  border-bottom-right-radius: 70%;
  background-color: #d1d2d6;
  box-sizing: border-box;

  :after{
    content: '';
    position: absolute;
    display: ${t=>"LAUNCH"==t.animationType?"block":"none"};
    left: 16px;
    width: 10px;
    top: 3px;
    height: 27px;
    border-top-right-radius: 100%;
    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); 
  }
`,z=o.a.i`
  display: ${t=>"LAUNCH"==t.animationType?"block":"none"};
  position: absolute;
  top: 40px;
  height: 60px;
  width: 20px;
  left: 1px;
  background-color: #d1d2d6;
  border-bottom: 1px solid #a7a9b1;
  border-top: 1px solid #a7a9b1;
  box-sizing: initial;
`,K=o.a.i`
  display: block;
  position: absolute;
  top: 80px;
  height: 65px;
  width: 22px;
  border-top-left-radius: 2000%;
  border-top-right-radius: 2000%;
  background-color: #d1d2d6;
`,W=({animationType:t})=>q.a.createElement(G,null,q.a.createElement(M,null),q.a.createElement(u,{animationType:t}),q.a.createElement(b,{animationType:t}),q.a.createElement(L,{animationType:t}),q.a.createElement(f,null),q.a.createElement(T,null),q.a.createElement(E,null),q.a.createElement(w,null),q.a.createElement(k,null),q.a.createElement(d,{animationType:t}),q.a.createElement(c,{animationType:t}),q.a.createElement(m,{animationType:t}),q.a.createElement(C,{animationType:t},q.a.createElement("i",null),q.a.createElement("i",null),q.a.createElement("i",null),q.a.createElement("i",null),q.a.createElement("i",null)));W.propTypes={animationType:O.a.string.isRequired};const Y=({position:t,heavy:e,animationType:i})=>q.a.createElement(D,{position:t,heavy:e,animationType:i},q.a.createElement(K,null),q.a.createElement(W,{animationType:i}));Y.propTypes={display:O.a.bool.isRequired,heavy:O.a.bool.isRequired,animationType:O.a.string.isRequired,position:O.a.string.isRequired};const V=({heavy:t,animationType:e,position:i})=>q.a.createElement(D,{position:i,heavy:t,animationType:e},q.a.createElement(z,{animationType:e}),q.a.createElement(I,{animationType:e,heavy:t}),q.a.createElement(W,{animationType:e}),q.a.createElement(X,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"}),q.a.createElement(B,{src:"http://i67.tinypic.com/24q6a0k.png"}));V.propTypes={heavy:O.a.bool.isRequired,animationType:O.a.string.isRequired,position:O.a.string.isRequired};const J=({display:t,animationType:e,heavy:i,onAnimationEnd:a})=>q.a.createElement(F,{id:"rocket",display:t,animationType:e,onAnimationEnd:a.bind(void 0)},q.a.createElement(Y,{position:"24px",heavy:i,animationType:e}),q.a.createElement(Y,{position:"-24px",heavy:i,animationType:e}),q.a.createElement(V,{position:"0px",heavy:i,animationType:e}));J.propTypes={display:O.a.bool.isRequired,heavy:O.a.bool.isRequired,animationType:O.a.string.isRequired,onAnimationEnd:O.a.func.isRequired};var Q=J;const Z=a.keyframes`
  0%{
    box-shadow: 0px -10px 60px -5px rgba(255,255,255,0.7);
  }
  90%{
    box-shadow: 0px -10px 70px 30px white;
  }
  100%{
    box-shadow: 0px -10px 120px 30px rgba(255,255,255,0.8);
  }
`,tt=a.keyframes`
  0%{
    filter:blur(4px);
    opacity: 0.5;
    height: 1px;
    width: 200px;
    left: calc(90% - 120px);
    box-shadow: 0px -10px 50px 50px rgba(255,255,255,0.6);
  }
  100%{
    filter:blur(4px);
    opacity: 0.5;
    height: 100px;
    width: 200px;
    left: calc(90% - 120px);
    box-shadow: 0px -10px 100px 100px rgba(255,255,255,0.6);
  }
`,et=o.a.div`
    position: absolute;
    display: ${t=>t.display?"block":"none"};
    height: 1px;
    width: 100px;
    left: calc(90% - 85px);
    right: 0;
    background: #444;
    ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?";":"animation-name: "+Z+";animation-duration: 2s;animation-delay: 1s;"}
    animation-iteration-count: 1;
    will-change: box-shadow;
`,it=o.a.i`
  position: absolute;
  display: block;
  background: rgba(255,255,255,0.6);
  left: calc(90% - 85px);
  bottom: calc(100%);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?"animation-name: "+tt+";animation-iteration-count: 1;animation-duration: 2.2s;animation-delay: 0.8s;":";"}
`;class at extends q.a.Component{render(){return q.a.createElement(et,{id:"platform",display:this.display,animationType:this.animationType},q.a.createElement(it,{animationType:this.animationType}))}}at.propTypes={display:O.a.bool.isRequired,animationType:O.a.string.isRequired};var ot=at;const nt=a.keyframes`
0%{
  height: 0px;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
100%{
  height: 100vh;
  box-shadow: 0px -10px 10px 10px rgba(255,255,255,0.3);
}
`,pt=o.a.div`
position: absolute;
display: ${t=>t.display?"block":"none"};
background: black;
left: calc(90% - 35px);
width: 0px;
bottom: calc(0%);
i {
  position: absolute;
  display: ${t=>t.display?"block":"none"};
  background: black;
  width: 0px;
  bottom: calc(0%);
  display: ${t=>t.display?"block":"none"};
  ${t=>"None"==t.animationType?";":t=>"LAUNCH"==t.animationType?"animation-name: "+nt+";animation-duration: 2s;animation-delay: 1.5s;":";"}
}
i:nth-child(1) {
}
i:nth-child(2) {
  display: ${t=>t.heavy?"block":"none"};
  left: -22px;
}
i:nth-child(3) {
  display: ${t=>t.heavy?"block":"none"};
  left: 22px;
}
`;class rt extends q.a.Component{render(){return q.a.createElement(pt,{id:"smoke",display:this.display,animationType:this.animationType,heavy:this.heavy},q.a.createElement("i",null),q.a.createElement("i",null),q.a.createElement("i",null))}}rt.propTypes={display:O.a.bool.isRequired,heavy:O.a.bool.isRequired,animationType:O.a.string.isRequired};var st=rt;i.d(e,"div_style",(function(){return dt})),exports.middleware=t=>e=>i=>{if("SESSION_ADD_DATA"===i.type){const{data:a}=i,o=t.getState().ui.activeUid,n=function(t){if(new RegExp(`(${["Writing(.+),(.+)KiB"].join(")|(")})`).test(t)){var e=t.split(/\n| /);return e[e.indexOf("KiB")-1]}return 0}(a);n&&t.dispatch({type:"UPDATE_BYTE_COUNT",uid:o,bytes:n}),!function(t){return new RegExp(`(${["To(.+).git"].join(")|(")})`).test(t)&&!new RegExp(`(${["error:"].join(")|(")})`).test(t)}(a)?function(t){return new RegExp(`(${["Unpacking objects:(.+)done."].join(")|(")})`).test(t)&&!/CONFLICT/.test(t)}(a)&&t.dispatch({type:"PULL_MODE_TOGGLE",uid:o}):t.dispatch({type:"PUSH_MODE_TOGGLE",uid:o}),e(i)}else e(i)},exports.reduceUI=(t,e)=>{let i={uid:e.uid,rocketState:"None",heavy:!1};if("PUSH_MODE_TOGGLE"===e.type)return i.rocketState="LAUNCH",t.set("gitFalcon9",i);if("PULL_MODE_TOGGLE"===e.type)return i.rocketState="LAND",t.set("gitFalcon9",i);if("UPDATE_BYTE_COUNT"===e.type){var a=Number.parseFloat(e.bytes,10);return a&&a>22.8?(i.heavy=!0,t.set("gitFalcon9",i)):t.set("gitFalcon9",i)}return t};const lt=(t,e,i)=>Object.assign(i,{gitFalcon9:e.gitFalcon9});exports.mapTermsState=(t,e)=>Object.assign(e,{gitFalcon9:t.ui.gitFalcon9}),exports.getTermGroupProps=lt,exports.getTermProps=lt;const dt=o.a.div`
    width: '100%';
    height: '100%';
    position: 'relative'
`;exports.decorateTerm=(t,{React:e})=>{class i extends e.Component{constructor(t,e){super(t,e),this.state={animationType:"NONE",heavy:!1,display:!1,uid:t.uid}}onTerminal(t){this.props.onTerminal&&this.props.onTerminal(t),this._div=t.div_,this._window=t.document_.defaultView}componentWillReceiveProps(t){const{uid:e}=this.state,{gitFalcon9:i}=t;return i&&i.uid===e&&(this.setState({animationType:i.rocketState,display:!0}),i.heavy&&this.setState({heavy:!0})),t}onAnimationEnd(t){3==t.elapsedTime&&this.setState({animationType:"LAUNCH",heavy:!1,display:!1}),setTimeout(1500)}render(){return e.createElement("div",{style:{div_style:dt}},e.createElement(t,Object.assign({},this.props,{onTerminal:this._onTerminal})),e.createElement(st,{display:this.state.display,animationType:this.state.animationType,heavy:this.state.heavy}),e.createElement(Q,{display:this.state.display,animationType:this.state.animationType,heavy:this.state.heavy,onAnimationEnd:this.onAnimationEnd.bind(this)}),e.createElement(ot,{display:this.state.display,animationType:this.state.animationType}))}}return i.propTypes={onTerminal:O.a.func.isRequired,uid:O.a.string.isRequired,gitFalcon9:O.a.object.isRequired},i}}]));
//# sourceMappingURL=index.js.map