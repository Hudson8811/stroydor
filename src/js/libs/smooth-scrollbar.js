!function(){var u,i,c,a,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,s=!1,d=!1,l={x:0,y:0},m=!1,f=document.documentElement,h=[],w=/^Mac/.test(navigator.platform),v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function b(){var e,t,o,n,r,a,l;!m&&document.body&&(m=!0,e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight,f=0<=document.compatMode.indexOf("CSS")?t:e,u=e,p.keyboardSupport&&Y("keydown",D),top!=self?d=!0:Q&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)&&((r=document.createElement("div")).style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+f.scrollHeight+"px",document.body.appendChild(r),c=function(){a=a||setTimeout(function(){s||(r.style.height="0",r.style.height=f.scrollHeight+"px",a=null)},500)},setTimeout(c,10),Y("resize",c),(i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),f.offsetHeight<=o&&((l=document.createElement("div")).style.clear="both",e.appendChild(l))),p.fixedBackground||s||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll"))}var g=[],S=!1,x=Date.now();function k(d,m,f){var e,t,o,n,r,h,w;e=0<(e=m)?1:-1,t=0<(t=f)?1:-1,l.x===e&&l.y===t||(l.x=e,l.y=t,g=[],x=0),1!=p.accelerationMax&&((o=Date.now()-x)<p.accelerationDelta&&(1<(n=(1+50/o)/2)&&(n=Math.min(n,p.accelerationMax),m*=n,f*=n)),x=Date.now()),g.push({x:m,y:f,lastX:m<0?.99:-.99,lastY:f<0?.99:-.99,start:Date.now()}),S||(r=q(),h=d===r||d===document.body,null==d.$scrollBehavior&&function(e){var t=M(e);{var o;null==B[t]&&(o=getComputedStyle(e,"")["scroll-behavior"],B[t]="smooth"==o)}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto"),w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<g.length;r++){var a=g[r],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=function(e){if(1<=e)return 1;if(e<=0)return 0;1==p.pulseNormalize&&(p.pulseNormalize/=V(1));return V(e)}(c));var u=a.x*c-a.lastX>>0,s=a.y*c-a.lastY>>0;o+=u,n+=s,a.lastX+=u,a.lastY+=s,i&&(g.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),m||f||(g=[]),g.length?j(w,d,1e3/p.frameRate+1):(S=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))},j(w,d,0),S=!0)}function e(e){m||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(u,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(u,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}},1e3);var t=120<e&&P(e),o=!P(120)&&!P(100)&&!t;return e<50||o}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),k(r,o,n),e.preventDefault(),void C()):!d||!_||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==v.spacebar;document.body.contains(u)||(u=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(u,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===v.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&y[e.keyCode])return!0;var r=0,a=0,l=z(u);if(!l)return!d||!_||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case v.up:a=-p.arrowScroll;break;case v.down:a=p.arrowScroll;break;case v.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case v.pageup:a=.9*-i;break;case v.pagedown:a=.9*i;break;case v.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case v.end:var c=l.scrollHeight-l.scrollTop-i,a=0<c?10+c:0;break;case v.left:r=-p.arrowScroll;break;case v.right:r=p.arrowScroll;break;default:return!0}k(l,r,a),e.preventDefault(),C()}function t(e){u=e.target}var n,r,M=(n=0,function(e){return e.uniqueID||(e.uniqueID=n++)}),E={},T={},B={};function C(){clearTimeout(r),r=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=f.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(f)&&O(o)||X(f);if(d&&L(f)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(h[0],e)&&K(h[1],e)&&K(h[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){var e,t;return $||((e=document.createElement("div")).style.cssText="height:10000px;width:1px;",document.body.appendChild(e),t=document.body.scrollTop,document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)),$});function V(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(--e,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}var F=window.navigator.userAgent,I=/Edge/.test(F),_=/chrome/i.test(F)&&!I,W=/firefox/i.test(F)&&!I,U=/safari/i.test(F)&&!I,G=/mobile/i.test(F),J=/Windows NT 6.1/i.test(F)&&/rv:11/i.test(F),Q=U&&(/Version\/8/i.test(F)||/Version\/9/i.test(F)),Z=(_||W||U||J)&&!G,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(e){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}oe&&Z&&(Y(oe,e,te),Y("mousedown",t),Y("load",b)),ne.destroy=function(){i&&i.disconnect(),A(oe,e),A("mousedown",t),A("keydown",D),A("resize",c),A("load",b)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}();