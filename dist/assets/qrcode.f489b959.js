import{_ as x,r as a,o as s,c as l,w as e,a as t,d as h,b as w}from"./index.d5491b10.js";const k={data:()=>({text:"",qrData:""}),computed:{width(){switch(this.$vuetify.display.name){case"xs":return"100%";case"sm":return"100%";case"md":return"80%";case"lg":return"80%";case"xl":return"50%"}}},created(){},methods:{make(){this.qrData=this.text}}},q=w(" \u751F\u6210\u4E8C\u7EF4\u7801 ");function y(o,r,V,b,C,c){const d=a("v-textarea"),_=a("v-col"),n=a("v-row"),u=a("v-btn"),m=a("vue-qr"),i=a("v-card-text"),f=a("v-card"),v=a("v-container");return s(),l(v,null,{default:e(()=>[t(n,{justify:"center"},{default:e(()=>[t(f,{width:c.width},{default:e(()=>[t(i,null,{default:e(()=>[t(n,{justify:"center"},{default:e(()=>[t(_,{md:"10",sm:"12",lg:"10"},{default:e(()=>[t(d,{modelValue:o.text,"onUpdate:modelValue":r[0]||(r[0]=p=>o.text=p),clearable:"",label:"\u8BF7\u8F93\u5165\u5185\u5BB9","auto-grow":"","hide-details":"",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{justify:"center",class:"ma-4"},{default:e(()=>[t(u,{elevation:"2",color:"#ff8170",onClick:c.make},{default:e(()=>[q]),_:1},8,["onClick"])]),_:1}),o.qrData?(s(),l(n,{key:0,justify:"center"},{default:e(()=>[t(m,{text:o.qrData},null,8,["text"])]),_:1})):h("",!0)]),_:1})]),_:1},8,["width"])]),_:1})]),_:1})}var D=x(k,[["render",y]]);export{D as default};