(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5901)}])},8819:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(5893),r=n(9630),c=n(7294);function i(e){let{boardTiles:t,focusingBoard:n,boardFocus:i,push:l}=e,[s,u]=(0,c.useState)({x:0,y:0}),[a,d]=(0,c.useState)({x:0,y:0}),f=e=>{u({x:e.touches[0].clientX,y:e.touches[0].clientY})},h=e=>{d({x:e.touches[0].clientX,y:e.touches[0].clientY})},m=()=>{let e=a.x-s.x,t=a.y-s.y;Math.abs(e)>Math.abs(t)?e>0?l("r"):l("l"):t>0?l("d"):l("u")};return(0,o.jsx)("div",{className:"board",ref:i,onBlur:n,onKeyDown:function(e){"ArrowLeft"===e.key?l("l"):"ArrowRight"===e.key?l("r"):"ArrowUp"===e.key?l("u"):"ArrowDown"===e.key&&l("d")},tabIndex:"0",onTouchStart:f,onTouchMove:h,onTouchEnd:m,children:null==t?void 0:t.map((e,t)=>(0,o.jsx)(r.default,{number:e},t))})}},2540:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var o=n(5893);function r(e){let{handleUndo:t,startNewGame:n,focusingBoard:r,undoCount:c}=e;return(0,o.jsxs)("div",{className:"button-container",children:[(0,o.jsxs)("button",{className:"undo-button",onClick:t,onFocus:r,children:[(0,o.jsx)("span",{className:"undo-count",children:Array(c).fill("❤️").join("")}),0===c&&(0,o.jsx)("span",{children:"Make a heart!!!"})]}),(0,o.jsx)("button",{className:"start-button",onClick:n,onFocus:r,children:"NEW GAME"})]})}n(7294)},5277:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var o=n(5893),r=n(7294);function c(e){let t=0,n=0;do t=Math.floor(4*Math.random()),n=Math.floor(4*Math.random());while(0!==e[4*t+n]);let o=[...e];return o[4*t+n]=.8>Math.random()?2:4,o}var i=n(8423),l=n(2540),s=n(8819),u=n(2489),a=n(9417),d=n(6455),f=n.n(d),h=n(7630),m=n.n(h);function x(){let[e,t]=(0,r.useState)([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),[n,d]=(0,r.useState)(0),[h,x]=(0,r.useState)(0),[_,j]=(0,r.useState)(500),[v,N]=(0,r.useState)(!1),[g,w]=(0,r.useState)([]),p=(0,r.useRef)(null),b=(0,o.jsx)("div",{children:(0,o.jsx)(u.G,{icon:a.bmm,style:{fontSize:"70px",color:"black"}})}),y=(0,o.jsx)("div",{children:(0,o.jsx)(u.G,{icon:a.lJX,style:{fontSize:"70px",color:"gold"}})});function E(){!function(e){if(!e||e.includes(0))return!0;for(let t=0;t<4;t++)for(let n=0;n<3;n++){let o=4*t+n;if(e[o]===e[o+1])return!0}for(let t=0;t<3;t++)for(let n=0;n<4;n++){let o=4*t+n;if(e[o]===e[o+4])return!0}return!1}(e)?k("GAME OVER!",b,"I'm done.TnT","Start a new game!"):!v&&e.includes(2048)&&(k("YOU WIN!!!",y,"Continue playing!","Start a new game!"),N(!0))}function k(e,t,n,o){setTimeout(()=>{let r=m()(f());r.fire({title:e,html:t,showCancelButton:!0,confirmButtonText:n,cancelButtonText:o}).then(e=>{e.value||S()})},700)}function S(){t(c(c([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))),d(0),N(!1),x(0),j(500),w([])}function M(){p.current.focus()}return(0,r.useEffect)(()=>{E()},[e]),(0,r.useEffect)(()=>{h<5&&_<=0&&(x(h+1),j(500+_))},[n]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"board-container",children:[(0,o.jsx)("div",{className:"game",children:"GAME"}),(0,o.jsx)("div",{className:"game-name",children:"2048"}),v&&(0,o.jsx)("div",{className:"win-message",children:"YOU WIN!"}),(0,o.jsx)(i.default,{score:n})]}),(0,o.jsx)(s.default,{focusingBoard:M,boardTiles:e,boardFocus:p,push:function(o){let r=!1,i=[],l=0;if("l"===o?[r,i,l]=function(e){let t=!1,n=0,o=[...e];for(let e=0;e<4;e++){let r=0,c=0;for(let i=0;i<4;i++)0!==o[4*e+i]&&(r!==o[4*e+i]?(r=o[4*e+i],o[4*e+i]=0,o[4*e+c]=r,i!==c&&(t=!0),c++):r===o[4*e+i]&&(o[4*e+c-1]=2*r,o[4*e+i]=0,n+=2*r,r=0,t=!0))}return[t,o,n]}([...e]):"r"===o?[r,i,l]=function(e){let t=!1,n=0,o=[...e];for(let e=0;e<4;e++){let r=0,c=3;for(let i=3;i>=0;i--)0!==o[4*e+i]&&(r!==o[4*e+i]?(r=o[4*e+i],o[4*e+i]=0,o[4*e+c]=r,i!==c&&(t=!0),c--):r===o[4*e+i]&&(o[4*e+c+1]=2*r,o[4*e+i]=0,n+=2*r,r=0,t=!0))}return[t,o,n]}([...e]):"u"===o?[r,i,l]=function(e){let t=!1,n=0,o=[...e];for(let e=0;e<4;e++){let r=0,c=0;for(let i=0;i<4;i++)0!==o[4*i+e]&&(r!==o[4*i+e]?(r=o[4*i+e],o[4*i+e]=0,o[4*c+e]=r,i!==c&&(t=!0),c++):r===o[4*i+e]&&(o[4*(c-1)+e]=2*r,o[4*i+e]=0,n+=2*r,r=0,t=!0))}return[t,o,n]}([...e]):"d"===o&&([r,i,l]=function(e){let t=!1,n=0,o=[...e];for(let e=0;e<4;e++){let r=0,c=3;for(let i=3;i>=0;i--)0!==o[4*i+e]&&(r!==o[4*i+e]?(r=o[4*i+e],o[4*i+e]=0,o[4*c+e]=r,i!==c&&(t=!0),c--):r===o[4*i+e]&&(o[4*(c+1)+e]=2*r,o[4*i+e]=0,n+=2*r,r=0,t=!0))}return[t,o,n]}([...e])),r){t(c(i)),d(n+l),j(_-l),E();let o=[...g,[...e]];o.length>5&&o.shift(),w(o)}}}),(0,o.jsx)(l.default,{handleUndo:function(){if(h>0&&g.length>0){let e=g[g.length-1];t([...e]),x(h-1),j(500),w(g.slice(0,-1))}},focusingBoard:M,undoCount:h,startNewGame:S})]})}},5901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var o=n(5893),r=n(9008),c=n.n(r),i=n(9854),l=n.n(i),s=n(5277);function u(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"GAME 2048"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)("main",{className:l().main,children:(0,o.jsx)(s.default,{})})]})}},8423:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var o=n(5893);function r(e){let{score:t}=e;return(0,o.jsxs)("div",{className:"score-container",children:[(0,o.jsx)("div",{className:"score-label",children:"SCORE"}),(0,o.jsx)("div",{className:"score-value",children:t})]})}n(7294)},9630:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(5893);let r=new Map([[0,[187,173,160]],[2,[248,231,28]],[4,[242,202,24]],[8,[245,159,27]],[16,[246,122,29]],[32,[242,83,34]],[64,[210,30,40]],[128,[241,45,98]],[256,[234,33,126]],[512,[191,33,128]],[1024,[149,33,135]],[2048,[98,33,138]],[4096,[74,0,128]]]);function c(e){let{number:t}=e,[n,c,i]=r.get(t)||[38,153,50],l={backgroundColor:"rgb(".concat(n,", ").concat(c,", ").concat(i,")")};return(0,o.jsx)("div",{className:"tile",style:l,children:0===t?"":t})}},9854:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO",rotate:"Home_rotate__99GkW"}},9008:function(e,t,n){e.exports=n(2636)}},function(e){e.O(0,[976,116,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);