(this.webpackJsonpmontyhall=this.webpackJsonpmontyhall||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/monty_1.61b92ce6.jpg"},function(e,t,n){e.exports=n.p+"static/media/monty_2.ed8b4911.jpg"},function(e,t,n){e.exports=n.p+"static/media/monty_3.64641eb2.jpg"},function(e,t,n){e.exports=n.p+"static/media/monty_4.5f4d136d.jpeg"},function(e,t,n){e.exports=n.p+"static/media/monty_5.de75b8d5.jpg"},function(e,t,n){e.exports=n.p+"static/media/monty_6.726d9044.jpg"},,,,,function(e,t,n){e.exports=n(36)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(24),n(9)),s=n.n(i),u=n(10),l=n.n(u),d=n(11),m=n.n(d),p=n(12),E=n.n(p),S=n(13),f=n.n(S),_=n(14),b=n.n(_),v=[s.a,l.a,m.a,E.a,f.a,b.a];function T(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var x=Math.ceil(6*Math.random()+0)-1,y=n(1),B=function(e){var t;return null!==(t=e.boxes)&&void 0!==t?t:[]},I=function(e){var t;return null!==(t=e.step)&&void 0!==t?t:""};n(30);function O(){var e=Object(y.c)((function(e){var t=e.app;return I(t)})),t=Object(y.c)((function(e){var t=e.app;return B(t)})).filter((function(e){return e.money&&e.pickedBox}));return c.a.createElement("div",{className:"message"},function(){switch(e){case"PICK_FIRST_BOX":return"Welcome contender! Please, pick a box!";case"KEEP_OR_SWITCH_BOX":return"Click on the numbered box to switch or the button to keep your box!";case"DISPLAY_RESULT":return t.length?"You won the money!":"Too bad, you did not win the money, try again!";default:return}}(),c.a.createElement("span",{className:"message-bubble"}))}var h=n(18);function k(e){return{type:"SET_PICKED_BOX",pickedBox:e}}function w(e){return{type:"SET_STEP",step:e}}n(31);function g(e){var t=e.callBack,n=e.data,a=e.step,o=n.id,r=n.isReveleadByHost,i=n.money,s=n.pickedBox,u=r||"DISPLAY_RESULT"===a,l=c.a.createElement("div",{className:i?"money":"empty"});return c.a.createElement("button",{onClick:function(){return t(n)},className:"box",disabled:r||s||"DISPLAY_RESULT"===a,style:r?{opacity:"0.2"}:{opacity:"1"}},u?l:s?c.a.createElement("span",{className:"circel"},"?"):c.a.createElement("span",{className:"circel"},o+1))}n(32);function C(e){var t=e.className,n=e.onClick,a=e.text,o=e.disabled;return c.a.createElement("button",{className:t,onClick:n,disabled:o},a)}n(33);function R(){var e=Object(y.c)((function(e){var t=e.app;return B(t)})),t=Object(y.c)((function(e){var t=e.app;return I(t)})),n=Object(a.useState)(!1),o=Object(h.a)(n,2),r=o[0],i=o[1],s=Object(y.b)();Object(a.useEffect)((function(){u()}),[]);var u=function(){s({type:"RESET_GAME"}),s({type:"INIT_BOX_WITH_MONEY"})},l=function(){s({type:"SET_KEPT_STATISTICS"}),s(w("DISPLAY_RESULT"))},d=function(e){s(k(e)),s({type:"REVELE_EMPTY_BOX"}),s(w("KEEP_OR_SWITCH_BOX"))},m=function(e){s(k(e)),s({type:"SET_SWITCHED_STATISTICS"}),s(w("DISPLAY_RESULT"))};function p(t,n){for(var a=0;a<n;a++){var c=e[T(0,3)];d(c),t(c),u()}}function E(e){switch(t){case"PICK_FIRST_BOX":return d(e);case"KEEP_OR_SWITCH_BOX":return m(e);case"DISPLAY_RESULT":return u();default:return}}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"boxes"},e.map((function(e){return c.a.createElement(g,{key:e.id,callBack:E,data:e,step:t})}))),c.a.createElement(C,{className:"button button-green",onClick:l,text:"Click here to keep box!",disabled:"KEEP_OR_SWITCH_BOX"!==t}),c.a.createElement(C,{className:"button",onClick:u,text:"Restart game",disabled:"DISPLAY_RESULT"!==t}),c.a.createElement(C,{className:"button",onClick:function(){return e=100,i(!0),p(m,e),p(l,e),void setTimeout((function(){i(!1)}),3e3);var e},text:r?"Done!":"Simulate",disabled:r}))}n(34);function N(){var e=Object(y.c)((function(e){return function(e){var t;return null!==(t=e.keptStatistics)&&void 0!==t?t:{}}(e.app)})),t=Object(y.c)((function(e){return function(e){var t;return null!==(t=e.switchedStatistics)&&void 0!==t?t:{}}(e.app)}));return c.a.createElement("div",{className:"statistics"},c.a.createElement("div",null,"Keep"),c.a.createElement("div",{className:"statistics-row"},c.a.createElement("div",{className:"statistics-data"},c.a.createElement("b",null,"Count:")," ".concat(e.count)),c.a.createElement("div",{className:"statistics-data"},c.a.createElement("b",null,"Odds:")," ".concat(e.percentage," %"))),c.a.createElement("div",{className:"separator"}),c.a.createElement("div",null,"Switch"),c.a.createElement("div",{className:"statistics-row"},c.a.createElement("div",{className:"statistics-data"},c.a.createElement("b",null,"Count:")," ".concat(t.count)),c.a.createElement("div",{className:"statistics-data"},c.a.createElement("b",null,"Odds:")," ".concat(t.percentage," %"))))}n(35);var P=function(){return c.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(v[x],")")}},c.a.createElement("div",{className:"container"},c.a.createElement(O,null),c.a.createElement(R,null),c.a.createElement(N,null)))},j=n(2),L=n(16),X=n(17),K=[{id:0,isReveleadByHost:!1,money:!1,pickedBox:!1},{id:1,isReveleadByHost:!1,money:!1,pickedBox:!1},{id:2,isReveleadByHost:!1,money:!1,pickedBox:!1}],H={count:0,percentage:0,won:0},M={boxes:K,currentBox:{},step:"PICK_FIRST_BOX",switchedBox:!1,switchedStatistics:H,keptStatistics:H},A=Object(X.a)((function(e,t){var n,a=t.step,c=t.type,o=t.pickedBox;function r(e,t){return(100*e/t).toFixed(1)}switch(c){case"SET_SWITCHED_STATISTICS":return e.switchedStatistics.count+=1,e.currentBox.money&&(e.switchedStatistics.won+=1),e.switchedStatistics.percentage=r(e.switchedStatistics.won,e.switchedStatistics.count),e;case"SET_KEPT_STATISTICS":return e.keptStatistics.count+=1,e.currentBox.money&&(e.keptStatistics.won+=1),e.keptStatistics.percentage=r(e.keptStatistics.won,e.keptStatistics.count),e;case"SET_STEP":return e.step=a,e;case"SET_PICKED_BOX":return"PICK_FIRST_BOX"===e.step&&(e.boxes[o.id].pickedBox=!0,e.currentBox=e.boxes[o.id]),"KEEP_OR_SWITCH_BOX"===e.step&&(e.boxes[e.currentBox.id].pickedBox=!1,e.boxes[o.id].pickedBox=!0,e.currentBox=e.boxes[o.id]),e;case"RESET_GAME":return e.boxes=K,e.step="PICK_FIRST_BOX",e;case"REVELE_EMPTY_BOX":var i=e.boxes.filter((function(e){return!e.money})),s=(n=i.length,Math.floor(Math.random()*(n-0)+0)),u=i[s];return u.pickedBox&&(u=i[+!s]),e.boxes[u.id].isReveleadByHost=!0,e;case"INIT_BOX_WITH_MONEY":return e.boxes[T(0,3)].money=!0,e}}),M),D=Object(j.c)({app:A}),W=function(e,t){return D(e,t)},Y=(Object(L.createLogger)({stateTransformer:function(e){for(var t={},n=0,a=Object.keys(e);n<a.length;n++){var c=a[n];t[c]=e[c]}return t}}),j.d);var F=Object(j.e)(W,Y(Object(j.a)()));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y.a,{store:F},c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[19,1,2]]]);
//# sourceMappingURL=main.f630279b.chunk.js.map