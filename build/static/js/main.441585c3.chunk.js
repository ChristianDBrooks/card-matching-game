(this["webpackJsonpcard-matching-game"]=this["webpackJsonpcard-matching-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(10),n(11),n(2)),o=(n(12),n(5)),l=function e(t,n,c){Object(o.a)(this,e),this.id=t,this.groupId=n,this.selected=!1,this.matched=!1,this.thumbnail=c},u=(n(13),n(0));var d=function(e){return Object(u.jsx)("div",{className:"scene",onClick:function(){e.onClick(e.index)},children:Object(u.jsxs)("div",{className:"card ".concat(e.selected||e.matched?"is-flipped":""," ").concat(e.matched?e.turn?"fly-right":"fly-left":""),children:[Object(u.jsx)("div",{className:"card__face card__face--front"}),Object(u.jsx)("div",{className:"card__face card__face--back card-".concat(e.groupId)})]})})};n(15);var h=function(e){return Object(u.jsx)("button",{onClick:e.onClick,children:e.title})};n(16);function j(e){return Object(u.jsxs)("div",{id:e.id,className:"player ".concat(e.turn?"active":""),children:[Object(u.jsx)("h4",{className:"playerName",children:e.name}),Object(u.jsxs)("p",{className:"score",children:["Score: ",e.score]})]})}n(17),n(18);function m(e){return e.show?Object(u.jsx)("p",{id:e.id,className:"instructions",children:"The rules of the game our simple. Its a 2 player game. Player 1 goes first and selects two cards. If the cards match then they are removed from the board, and the player gets a point and another turn. The player continues to make selections until they don't make a matching selection. If two cards don't match they will be flipped back over and then player 2 gets to select cards with the same rules. This back and forth continues until all matched have been found between both players. Good luck!"}):""}function b(e){return Object(u.jsx)("div",{className:"startMenu",children:Object(u.jsxs)("div",{className:"gameStartContent",children:[Object(u.jsx)("h1",{className:"gameTitle",children:"Welcome to Card Matcher"}),Object(u.jsxs)("div",{className:"buttonMenu",children:[Object(u.jsx)(h,{title:"Start Game",onClick:function(){e.setShowGameStart(!e.showGameStart)}}),Object(u.jsx)(h,{title:"Instructions",onClick:function(){e.setShowInstructions(!e.showInstructions)}})]}),Object(u.jsx)(m,{show:e.showInstructions})]})})}n(19);function f(e){return e.isTie?Object(u.jsxs)("p",{children:[e.winningPlayerName," wins!"]}):Object(u.jsx)("p",{children:"Tie Game!"})}function O(e){return Object(u.jsx)("div",{className:"gameOver",children:Object(u.jsxs)("div",{className:"gameOverContent",children:[Object(u.jsx)("h1",{children:"Game Over!"}),Object(u.jsx)(f,{isTie:e.isTie,winningPlayerName:e.winningPlayerName}),Object(u.jsx)(h,{title:"New Game",onClick:function(){e.resetGame()}})]})})}function x(e){false}function p(){var e=Q(10),t=null,n=null,a=[0,0],s=["Player One","Player Two"],i=Object(c.useState)(0),o=Object(r.a)(i,2),m=o[0],f=o[1],p=Object(c.useState)(U(e)),g=Object(r.a)(p,2),v=g[0],w=g[1],N=Object(c.useState)(!1),y=Object(r.a)(N,2),S=y[0],k=y[1],I=Object(c.useState)(!0),C=Object(r.a)(I,2),T=C[0],G=C[1],M=Object(c.useState)(!1),P=Object(r.a)(M,2),_=P[0],B=P[1],F=Object(c.useState)(0),J=Object(r.a)(F,2),L=J[0],D=J[1],E=Object(c.useState)(0),R=Object(r.a)(E,2),W=R[0],q=R[1],z=Object(c.useState)(0),A=Object(r.a)(z,2),H=A[0],K=A[1];return Object(u.jsxs)("div",{className:"gameBorder",children:[T?Object(u.jsx)(b,{setShowGameStart:G,showGameStart:T,setShowInstructions:B,showInstructions:_}):null,S?Object(u.jsx)(O,{isTie:[0,1].includes(L),winningPlayerName:s[L],resetGame:X}):null,Object(u.jsx)("div",{className:"gameBoard",children:v}),Object(u.jsxs)("div",{className:"leaderBoard",children:[Object(u.jsx)(j,{id:"playerOne",name:s[0],score:W,turn:!m}),Object(u.jsx)(j,{id:"playerTwo",name:s[1],score:H,turn:m})]}),Object(u.jsxs)("div",{className:"gameMenu buttonMenu",children:[Object(u.jsx)(h,{title:"Main Menu",onClick:function(){G(!T)}}),Object(u.jsx)(h,{title:"Restart Game",onClick:function(){X()}})]})]});function Q(e){for(var t=[],n=1,c=1;c<=e;c++)t.push(new l(n++,c,"https://picsum.photos/200/300")),t.push(new l(n++,c,"https://picsum.photos/200/300"));return function(e){var t,n,c=e.length;for(;0!==c;)n=Math.floor(Math.random()*c),t=e[c-=1],e[c]=e[n],e[c].index=c,e[n]=t}(t),t}function U(e){return e.map((function(e){return Object(u.jsx)(d,{index:e.index,groupId:e.groupId,selected:e.selected,matched:e.matched,turn:m,onClick:V},e.id)}))}function V(c){t&&n||t&&t.index===c||e[c].selected||e[c].matched||(e[c].selected=!0,t?n=e[c]:t=e[c],w(U(e)),setTimeout((function(){var c,s;t&&n&&(s=n,(c=t).groupId===s.groupId&&c.id!==s.id?function(e,t){x(),e.matched=t.matched=!0,a[m]+=1;var n=a,c=Object(r.a)(n,2),s=c[0],i=c[1];q(s),K(i)}(c,s):(x(),f(m=m?0:1)),function(e,c){e.selected=!1,c.selected=!1,t=null,n=null}(t,n)),w(U(e)),0===e.filter((function(e){return!1===e.matched})).length&&(x(),a[0]!==a[1]?D(a.indexOf(Math.max(a[0],a[1]))):D(-1),k(!0))}),t&&n?1500:0))}function X(){x(),e=Q(10),setTimeout(w(U(e)),200),a=[0,0],t=null,n=null,q(0),K(0),f(0),k(!1)}}function g(){return Object(u.jsx)(p,{})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.441585c3.chunk.js.map