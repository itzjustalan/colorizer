import{L as Ae,S as Q,i as X,s as Y,e as E,k as I,c as N,m as w,a as U,d as g,b as A,M as Le,g as C,N as J,O as D,P as De,Q as Z,R as Fe,l as M,E as z,T as Re,U as pe,t as S,h as G,j as Ue,J as b,q as $,w as ce,x as se,y as ie,V as Se,o as y,B as ae,n as K,p as x,W as q,X as Ge,Y as ye,Z as re,_ as Pe}from"../../chunks/index-163b6a71.js";import{a as V,c as W,b as je}from"../../chunks/stores-96c693d4.js";import"../../chunks/index-91fb1250.js";const qe=()=>{const l=Ae("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},We={subscribe(l){return qe().page.subscribe(l)}};var Me=(l,e)=>{const n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",l),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)};function be(l,e,n){const t=l.slice();return t[4]=e[n],t[6]=n,t}function ge(l){var u;let e,n,t,o,a,s,i=(u=l[1])!=null?u:[],c=[];for(let _=0;_<i.length;_+=1)c[_]=ke(be(l,i,_));return{c(){e=E("input"),t=I(),o=E("select");for(let _=0;_<c.length;_+=1)c[_].c();this.h()},l(_){e=N(_,"INPUT",{type:!0}),t=w(_),o=N(_,"SELECT",{name:!0});var d=U(o);for(let p=0;p<c.length;p+=1)c[p].l(d);d.forEach(g),this.h()},h(){A(e,"type","color"),e.value=n=l[1][l[0]],A(o,"name","color-selector"),l[0]===void 0&&Le(()=>l[3].call(o))},m(_,d){C(_,e,d),C(_,t,d),C(_,o,d);for(let p=0;p<c.length;p+=1)c[p].m(o,null);J(o,l[0]),a||(s=[D(e,"change",function(){De(l[2])&&l[2].apply(this,arguments)}),D(o,"change",l[3])],a=!0)},p(_,d){var p;if(l=_,d&3&&n!==(n=l[1][l[0]])&&(e.value=n),d&2){i=(p=l[1])!=null?p:[];let f;for(f=0;f<i.length;f+=1){const r=be(l,i,f);c[f]?c[f].p(r,d):(c[f]=ke(r),c[f].c(),c[f].m(o,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=i.length}d&1&&J(o,l[0])},d(_){_&&g(e),_&&g(t),_&&g(o),Z(c,_),a=!1,Fe(s)}}}function ke(l){let e,n;return{c(){e=E("option"),this.h()},l(t){e=N(t,"OPTION",{style:!0});var o=U(e);o.forEach(g),this.h()},h(){e.__value=l[6],e.value=e.__value,A(e,"style",n=`background:${l[4]}`)},m(t,o){C(t,e,o)},p(t,o){o&2&&n!==(n=`background:${t[4]}`)&&A(e,"style",n)},d(t){t&&g(e)}}}function Ve(l){var t;let e,n=((t=l[1])==null?void 0:t.length)>l[0]&&ge(l);return{c(){n&&n.c(),e=M()},l(o){n&&n.l(o),e=M()},m(o,a){n&&n.m(o,a),C(o,e,a)},p(o,[a]){var s;((s=o[1])==null?void 0:s.length)>o[0]?n?n.p(o,a):(n=ge(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:z,o:z,d(o){n&&n.d(o),o&&g(e)}}}function ze(l,e,n){let{colors:t}=e,{onchange:o}=e,{color_index:a}=e;function s(){a=Re(this),n(0,a)}return l.$$set=i=>{"colors"in i&&n(1,t=i.colors),"onchange"in i&&n(2,o=i.onchange),"color_index"in i&&n(0,a=i.color_index)},l.$$.update=()=>{l.$$.dirty&1&&(a||n(0,a=0))},[a,t,o,s]}class He extends Q{constructor(e){super(),X(this,e,ze,Ve,Y,{colors:1,onchange:2,color_index:0})}}function Je(l){let e,n,t;return{c(){e=E("input"),this.h()},l(o){e=N(o,"INPUT",{type:!0}),this.h()},h(){A(e,"type","color")},m(o,a){C(o,e,a),pe(e,l[0]),n||(t=D(e,"input",l[1]),n=!0)},p(o,[a]){a&1&&pe(e,o[0])},i:z,o:z,d(o){o&&g(e),n=!1,t()}}}function Qe(l,e,n){let{color:t}=e;function o(){t=this.value,n(0,t)}return l.$$set=a=>{"color"in a&&n(0,t=a.color)},[t,o]}class Xe extends Q{constructor(e){super(),X(this,e,Qe,Je,Y,{color:0})}}function ve(l,e,n){const t=l.slice();return t[6]=e[n],t[7]=e,t[8]=n,t}function Oe(l,e,n){const t=l.slice();return t[9]=e[n],t[8]=n,t}function Ee(l){var p,f;let e,n=((f=(p=l[1][l[0].colorscheme_index])==null?void 0:p.name)!=null?f:"")+"",t,o,a,s,i,c,u,_=l[1],d=[];for(let r=0;r<_.length;r+=1)d[r]=Ne(Oe(l,_,r));return{c(){e=S(`selected color scheme:\r
    `),t=S(n),o=I(),a=E("br"),s=I(),i=E("select");for(let r=0;r<d.length;r+=1)d[r].c();this.h()},l(r){e=G(r,`selected color scheme:\r
    `),t=G(r,n),o=w(r),a=N(r,"BR",{}),s=w(r),i=N(r,"SELECT",{});var h=U(i);for(let m=0;m<d.length;m+=1)d[m].l(h);h.forEach(g),this.h()},h(){l[0].colorscheme_index===void 0&&Le(()=>l[4].call(i))},m(r,h){C(r,e,h),C(r,t,h),C(r,o,h),C(r,a,h),C(r,s,h),C(r,i,h);for(let m=0;m<d.length;m+=1)d[m].m(i,null);J(i,l[0].colorscheme_index),c||(u=D(i,"change",l[4]),c=!0)},p(r,h){var m,F;if(h&3&&n!==(n=((F=(m=r[1][r[0].colorscheme_index])==null?void 0:m.name)!=null?F:"")+"")&&Ue(t,n),h&2){_=r[1];let B;for(B=0;B<_.length;B+=1){const v=Oe(r,_,B);d[B]?d[B].p(v,h):(d[B]=Ne(v),d[B].c(),d[B].m(i,null))}for(;B<d.length;B+=1)d[B].d(1);d.length=_.length}h&1&&J(i,r[0].colorscheme_index)},d(r){r&&g(e),r&&g(t),r&&g(o),r&&g(a),r&&g(s),r&&g(i),Z(d,r),c=!1,u()}}}function Ne(l){let e,n=l[9].name+"",t,o;return{c(){e=E("option"),t=S(n),this.h()},l(a){e=N(a,"OPTION",{});var s=U(e);t=G(s,n),s.forEach(g),this.h()},h(){e.__value=o=l[8],e.value=e.__value},m(a,s){C(a,e,s),b(e,t)},p(a,s){s&2&&n!==(n=a[9].name+"")&&Ue(t,n)},d(a){a&&g(e)}}}function Ce(l){let e,n,t,o;return{c(){e=E("button"),n=S("add new color")},l(a){e=N(a,"BUTTON",{});var s=U(e);n=G(s,"add new color"),s.forEach(g)},m(a,s){C(a,e,s),b(e,n),t||(o=D(e,"click",l[3]),t=!0)},p:z,d(a){a&&g(e),t=!1,o()}}}function Te(l){var s,i;let e,n,t=(i=(s=l[1][l[0].colorscheme_index])==null?void 0:s.colors)!=null?i:[],o=[];for(let c=0;c<t.length;c+=1)o[c]=Be(ve(l,t,c));const a=c=>y(o[c],1,1,()=>{o[c]=null});return{c(){for(let c=0;c<o.length;c+=1)o[c].c();e=M()},l(c){for(let u=0;u<o.length;u+=1)o[u].l(c);e=M()},m(c,u){for(let _=0;_<o.length;_+=1)o[_].m(c,u);C(c,e,u),n=!0},p(c,u){var _,d;if(u&3){t=(d=(_=c[1][c[0].colorscheme_index])==null?void 0:_.colors)!=null?d:[];let p;for(p=0;p<t.length;p+=1){const f=ve(c,t,p);o[p]?(o[p].p(f,u),$(o[p],1)):(o[p]=Be(f),o[p].c(),$(o[p],1),o[p].m(e.parentNode,e))}for(K(),p=t.length;p<o.length;p+=1)a(p);x()}},i(c){if(!n){for(let u=0;u<t.length;u+=1)$(o[u]);n=!0}},o(c){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)y(o[u]);n=!1},d(c){Z(o,c),c&&g(e)}}}function Be(l){let e,n,t;function o(s){l[5](s,l[6],l[7],l[8])}let a={};return l[6]!==void 0&&(a.color=l[6]),e=new Xe({props:a}),Ge.push(()=>ye(e,"color",o)),{c(){ce(e.$$.fragment)},l(s){se(e.$$.fragment,s)},m(s,i){ie(e,s,i),t=!0},p(s,i){l=s;const c={};!n&&i&3&&(n=!0,c.color=l[6],Se(()=>n=!1)),e.$set(c)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){ae(e,s)}}}function Ye(l){var F,B;let e,n,t,o,a,s,i,c,u,_,d,p,f,r=l[1].length!=0&&Ee(l),h=l[1].length&&Ce(l),m=((B=(F=l[1][l[0].colorscheme_index])==null?void 0:F.colors)==null?void 0:B.length)&&Te(l);return{c(){e=E("div"),r&&r.c(),n=I(),t=E("button"),o=S("add new colorscheme"),a=I(),s=E("br"),i=I(),c=E("br"),u=S(`\r
\r
  colors:\r
  `),h&&h.c(),_=I(),m&&m.c()},l(v){e=N(v,"DIV",{});var O=U(e);r&&r.l(O),n=w(O),t=N(O,"BUTTON",{});var R=U(t);o=G(R,"add new colorscheme"),R.forEach(g),a=w(O),s=N(O,"BR",{}),i=w(O),c=N(O,"BR",{}),u=G(O,`\r
\r
  colors:\r
  `),h&&h.l(O),_=w(O),m&&m.l(O),O.forEach(g)},m(v,O){C(v,e,O),r&&r.m(e,null),b(e,n),b(e,t),b(t,o),b(e,a),b(e,s),b(e,i),b(e,c),b(e,u),h&&h.m(e,null),b(e,_),m&&m.m(e,null),d=!0,p||(f=D(t,"click",l[2]),p=!0)},p(v,[O]){var R,P;v[1].length!=0?r?r.p(v,O):(r=Ee(v),r.c(),r.m(e,n)):r&&(r.d(1),r=null),v[1].length?h?h.p(v,O):(h=Ce(v),h.c(),h.m(e,_)):h&&(h.d(1),h=null),(P=(R=v[1][v[0].colorscheme_index])==null?void 0:R.colors)!=null&&P.length?m?(m.p(v,O),O&3&&$(m,1)):(m=Te(v),m.c(),$(m,1),m.m(e,null)):m&&(K(),y(m,1,1,()=>{m=null}),x())},i(v){d||($(m),d=!0)},o(v){y(m),d=!1},d(v){v&&g(e),r&&r.d(),h&&h.d(),m&&m.d(),p=!1,f()}}}function Ze(l,e,n){let t,o;q(l,V,u=>n(0,t=u)),q(l,W,u=>n(1,o=u));const a=()=>{t.schemedata.push([]),re(V,t.colorscheme_index=o.length,t),W.update(u=>[...u,{name:`colorscheme-${u.length}`,colors:[]}])},s=()=>re(W,o[t.colorscheme_index].colors=[...o[t.colorscheme_index].colors,"black"],o);function i(){t.colorscheme_index=Re(this),V.set(t)}function c(u,_,d,p){d[p]=u,W.set(o)}return[t,o,a,s,i,c]}class Ke extends Q{constructor(e){super(),X(this,e,Ze,Ye,Y,{})}}function Ie(l,e,n){const t=l.slice();return t[11]=e[n][0],t[12]=e[n][1],t[13]=e,t[14]=n,t}function we(l){let e,n,t=Object.entries(l[2].colors),o=[];for(let s=0;s<t.length;s+=1)o[s]=$e(Ie(l,t,s));const a=s=>y(o[s],1,1,()=>{o[s]=null});return{c(){for(let s=0;s<o.length;s+=1)o[s].c();e=M()},l(s){for(let i=0;i<o.length;i+=1)o[i].l(s);e=M()},m(s,i){for(let c=0;c<o.length;c+=1)o[c].m(s,i);C(s,e,i),n=!0},p(s,i){if(i&7){t=Object.entries(s[2].colors);let c;for(c=0;c<t.length;c+=1){const u=Ie(s,t,c);o[c]?(o[c].p(u,i),$(o[c],1)):(o[c]=$e(u),o[c].c(),$(o[c],1),o[c].m(e.parentNode,e))}for(K(),c=t.length;c<o.length;c+=1)a(c);x()}},i(s){if(!n){for(let i=0;i<t.length;i+=1)$(o[i]);n=!0}},o(s){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)y(o[i]);n=!1},d(s){Z(o,s),s&&g(e)}}}function $e(l){var p;let e,n,t,o,a,s=l[11]+"",i,c;function u(...f){return l[5](l[11],...f)}function _(f){l[6](f,l[11])}let d={colors:(p=l[1][l[0].colorscheme_index])==null?void 0:p.colors,onchange:u};return l[0].schemedata[l[0].colorscheme_index][l[11]]!==void 0&&(d.color_index=l[0].schemedata[l[0].colorscheme_index][l[11]]),t=new He({props:d}),Ge.push(()=>ye(t,"color_index",_)),{c(){e=E("br"),n=I(),ce(t.$$.fragment),a=I(),i=S(s)},l(f){e=N(f,"BR",{}),n=w(f),se(t.$$.fragment,f),a=w(f),i=G(f,s)},m(f,r){C(f,e,r),C(f,n,r),ie(t,f,r),C(f,a,r),C(f,i,r),c=!0},p(f,r){var m;l=f;const h={};r&3&&(h.colors=(m=l[1][l[0].colorscheme_index])==null?void 0:m.colors),r&3&&(h.onchange=u),!o&&r&5&&(o=!0,h.color_index=l[0].schemedata[l[0].colorscheme_index][l[11]],Se(()=>o=!1)),t.$set(h)},i(f){c||($(t.$$.fragment,f),c=!0)},o(f){y(t.$$.fragment,f),c=!1},d(f){f&&g(e),f&&g(n),ae(t,f),f&&g(a),f&&g(i)}}}function xe(l){var ue;let e,n,t,o,a,s=((ue=l[2])==null?void 0:ue.name)+"",i,c,u,_,d,p,f,r,h,m,F,B,v,O,R,P,ee,le,oe,j,te,H,ne,fe;u=new Ke({});let T=(l[0].colorscheme_index||l[0].colorscheme_index===0)&&we(l);return{c(){e=E("section"),n=E("a"),t=S("go home"),o=I(),a=E("h1"),i=S(s),c=I(),ce(u.$$.fragment),_=I(),T&&T.c(),d=I(),p=E("br"),f=I(),r=E("br"),h=I(),m=E("img"),B=I(),v=E("br"),O=I(),R=E("button"),P=S("LOG CONFIG FILE"),ee=I(),le=E("br"),oe=I(),j=E("button"),te=S("DOWNLOAD CONFIG FILE"),this.h()},l(L){e=N(L,"SECTION",{});var k=U(e);n=N(k,"A",{href:!0});var _e=U(n);t=G(_e,"go home"),_e.forEach(g),o=w(k),a=N(k,"H1",{});var he=U(a);i=G(he,s),he.forEach(g),c=w(k),se(u.$$.fragment,k),_=w(k),T&&T.l(k),d=w(k),p=N(k,"BR",{}),f=w(k),r=N(k,"BR",{}),h=w(k),m=N(k,"IMG",{src:!0,alt:!0}),B=w(k),v=N(k,"BR",{}),O=w(k),R=N(k,"BUTTON",{});var de=U(R);P=G(de,"LOG CONFIG FILE"),de.forEach(g),ee=w(k),le=N(k,"BR",{}),oe=w(k),j=N(k,"BUTTON",{});var me=U(j);te=G(me,"DOWNLOAD CONFIG FILE"),me.forEach(g),k.forEach(g),this.h()},h(){A(n,"href","/colorizer"),Pe(m.src,F=l[2].icon)||A(m,"src",F),A(m,"alt",l[2].name)},m(L,k){C(L,e,k),b(e,n),b(n,t),b(e,o),b(e,a),b(a,i),b(e,c),ie(u,e,null),b(e,_),T&&T.m(e,null),b(e,d),b(e,p),b(e,f),b(e,r),b(e,h),b(e,m),b(e,B),b(e,v),b(e,O),b(e,R),b(R,P),b(e,ee),b(e,le),b(e,oe),b(e,j),b(j,te),H=!0,ne||(fe=[D(R,"click",l[7]),D(j,"click",l[8])],ne=!0)},p(L,[k]){L[0].colorscheme_index||L[0].colorscheme_index===0?T?(T.p(L,k),k&1&&$(T,1)):(T=we(L),T.c(),$(T,1),T.m(e,d)):T&&(K(),y(T,1,1,()=>{T=null}),x())},i(L){H||($(u.$$.fragment,L),$(T),H=!0)},o(L){y(u.$$.fragment,L),y(T),H=!1},d(L){L&&g(e),ae(u),T&&T.d(),ne=!1,Fe(fe)}}}const nl=l=>({params:l.params});function el(l,e,n){let t,o,a,s;q(l,V,r=>n(0,t=r)),q(l,W,r=>n(1,o=r)),q(l,We,r=>n(9,a=r)),q(l,je,r=>n(10,s=r));const i=s.find(r=>r.name.toLowerCase()==a.params.app),c=()=>{var h;let r={};for(const[m,F]of Object.entries(t.schemedata[t.colorscheme_index]))r[m]=(h=o[t.colorscheme_index])==null?void 0:h.colors[F];console.log(i.configName,i.buildConfig(r))},u=()=>{var h;let r={};for(const[m,F]of Object.entries(t.schemedata[t.colorscheme_index]))r[m]=(h=o[t.colorscheme_index])==null?void 0:h.colors[F];Me(i.configName,i.buildConfig(r))},_=(r,h)=>{re(W,o[t.colorscheme_index].colors[t.schemedata[t.colorscheme_index][r]]=h.target.value,o)};function d(r,h){l.$$.not_equal(t.schemedata[t.colorscheme_index][h],r)&&(t.schemedata[t.colorscheme_index][h]=r,V.set(t))}return[t,o,i,c,u,_,d,r=>c(),r=>u()]}class rl extends Q{constructor(e){super(),X(this,e,el,xe,Y,{})}}export{rl as default,nl as load};
