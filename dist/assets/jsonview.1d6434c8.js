import{l as I,m as D,u as k,n as W,p as Y,q as F,s as R,v as $,x as q,y as G,r as p,o as g,c as b,w as i,a as c,b as x,d as H,e as E,t as P,j as A}from"./index.f1058868.js";var M;const w=typeof window!="undefined",J=e=>typeof e=="string",K=()=>{};w&&((M=window==null?void 0:window.navigator)==null?void 0:M.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(e){return typeof e=="function"?e():k(e)}function z(e){return e}function U(e){return W()?(Y(e),!0):!1}function X(e,t=!0){F()?R(e):t?e():$(e)}function Z(e,t,o={}){const{immediate:r=!0}=o,u=I(!1);let n=null;function l(){n&&(clearTimeout(n),n=null)}function d(){u.value=!1,l()}function f(..._){l(),u.value=!0,n=setTimeout(()=>{u.value=!1,n=null,e(..._)},N(t))}return r&&(u.value=!0,w&&f()),U(d),{isPending:D(u),start:f,stop:d}}function ee(e){var t;const o=N(e);return(t=o==null?void 0:o.$el)!=null?t:o}const te=w?window:void 0;w&&window.document;const oe=w?window.navigator:void 0;w&&window.location;function ne(...e){let t,o,r,u;if(J(e[0])||Array.isArray(e[0])?([o,r,u]=e,t=te):[t,o,r,u]=e,!t)return K;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const n=[],l=()=>{n.forEach(s=>s()),n.length=0},d=(s,m,y)=>(s.addEventListener(m,y,u),()=>s.removeEventListener(m,y,u)),f=G(()=>ee(t),s=>{l(),s&&n.push(...o.flatMap(m=>r.map(y=>d(s,m,y))))},{immediate:!0,flush:"post"}),_=()=>{f(),l()};return U(_),_}function ae(e,t=!1){const o=I(),r=()=>o.value=Boolean(e());return r(),X(r,t),o}function se(e={}){const{navigator:t=oe,read:o=!1,source:r,copiedDuring:u=1500,legacy:n=!1}=e,l=["copy","cut"],d=ae(()=>t&&"clipboard"in t),f=q(()=>d.value||n),_=I(""),s=I(!1),m=Z(()=>s.value=!1,u);function y(){d.value?t.clipboard.readText().then(a=>{_.value=a}):_.value=S()}if(f.value&&o)for(const a of l)ne(a,y);async function C(a=N(r)){f.value&&a!=null&&(d.value?await t.clipboard.writeText(a):j(a),_.value=a,s.value=!0,m.start())}function j(a){const v=document.createElement("textarea");v.value=a!=null?a:"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function S(){var a,v,h;return(h=(v=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:v.toString())!=null?h:""}return{isSupported:f,text:_,copied:s,copy:C}}const T=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},V="__vueuse_ssr_handlers__";T[V]=T[V]||{};T[V];var Q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Q||(Q={}));var re=Object.defineProperty,B=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,L=(e,t,o)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ue=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&L(e,o,t[o]);if(B)for(var o of B(t))ie.call(t,o)&&L(e,o,t[o]);return e};const ce={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ue({linear:z},ce);const de={class:"pt-5 text-center"},pe={class:"red--text text--lighten-1"},fe={class:"text-body-1"},_e={key:0},ve={key:1},me={data:()=>({code:"123",dialog:!1,jsonStr:"",jsonView:[],errorMessages:""}),created(){},methods:{update:function(){this.errorMessages="";try{this.jsonView=JSON.parse(this.jsonStr)}catch(e){this.errorMessages=e.message}},toYaml(){let e={code:this.jsonView};this.$http.post("/api/json/toyaml",e).then(t=>{this.code=t.data.data,this.dialog=!0}).catch(t=>{console.log("error",t)})},close(){this.dialog=!1}}},ge=Object.assign(me,{__name:"jsonview",setup(e){const{copy:t,copied:o,text:r,isSupported:u}=se({copiedDuring:3e3});return(n,l)=>{const d=p("v-btn"),f=p("v-row"),_=p("v-textarea"),s=p("v-col"),m=p("json-viewer"),y=p("v-card-title"),C=p("v-card-text"),j=p("v-spacer"),S=p("v-card-actions"),a=p("v-card"),v=p("v-dialog"),h=p("v-container");return g(),b(h,null,{default:i(()=>[n.jsonStr?(g(),b(f,{key:0,justify:"end",class:"mt-1 mb-3"},{default:i(()=>[c(d,{elevation:"2",color:"#ff8170",onClick:n.toYaml},{default:i(()=>[x(" \u8F6C\u6210YAML\u683C\u5F0F ")]),_:1},8,["onClick"])]),_:1})):H("",!0),c(f,{justify:"center"},{default:i(()=>[c(s,{cols:"6"},{default:i(()=>[c(_,{modelValue:n.jsonStr,"onUpdate:modelValue":l[0]||(l[0]=O=>n.jsonStr=O),clearable:"",rows:"30",onInput:n.update},null,8,["modelValue","onInput"])]),_:1}),n.errorMessages!=""?(g(),b(s,{key:0,cols:"6"},{default:i(()=>[E("div",de,[E("strong",pe,P(n.errorMessages),1)])]),_:1})):(g(),b(s,{key:1,cols:"6"},{default:i(()=>[c(m,{value:n.jsonView,expanded:"","show-double-quotes":"","expand-depth":5,copyable:""},null,8,["value"])]),_:1}))]),_:1}),c(v,{transition:"dialog-bottom-transition",modelValue:n.dialog,"onUpdate:modelValue":l[2]||(l[2]=O=>n.dialog=O),persistent:""},{default:i(()=>[c(a,{"max-width":"1200"},{default:i(()=>[c(y,{class:"text-h5"},{default:i(()=>[x(" YAML ")]),_:1}),c(C,null,{default:i(()=>[E("pre",fe,P(n.code),1)]),_:1}),c(S,{class:"justify-end"},{default:i(()=>[c(j),c(d,{text:"",color:"secondary",onClick:l[1]||(l[1]=O=>k(t)(n.code))},{default:i(()=>[k(o)?(g(),A("span",ve,"\u590D\u5236\u6210\u529F")):(g(),A("span",_e,"\u590D\u5236"))]),_:1}),c(d,{text:"",onClick:n.close},{default:i(()=>[x("\u5173\u95ED ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{ge as default};
