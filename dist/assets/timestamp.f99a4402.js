import{_ as c,r as d,o as w,c as _,w as t,a,e as o,t as p}from"./index.6d4e0c63.js";const f={data:()=>({nowTimestamp:parseInt(new Date().getTime()/1e3).toString(),nowDatetime:new Date().toLocaleString(),toDateTime:"",toTimeStamp:"",timestamp:"",datetime:"",nowT:"",nowD:""}),computed:{},created(){setInterval(()=>{this.nowT=parseInt(Date.now()/1e3),this.nowD=new Date().toLocaleString()},1e3)},methods:{toDateTimeMethod(){let e=new Date(this.timestamp*1e3);this.toDateTime=e.toLocaleString()},toTimeStampMethod(){let e=new Date(this.datetime).getTime();e=parseInt(e/1e3),this.toTimeStamp=e}}},D=o("span",null,"\u65F6\u95F4\u6233(\u79D2)\uFF1A",-1),T=o("span",null,"\u5317\u4EAC\u65F6\u95F4\uFF1A",-1),h=o("span",null,"\u5F53\u524D\u65F6\u95F4\uFF1A",-1);function v(e,n,V,g,S,r){const i=d("v-text-field"),m=d("v-col"),s=d("v-row"),u=d("v-container");return w(),_(u,{fluid:""},{default:t(()=>[a(s,{justify:"center",align:"center",class:"mt-3"},{default:t(()=>[a(m,{md:"5",sm:"12"},{default:t(()=>[a(i,{placeholder:e.nowTimestamp,"hide-details":"",modelValue:e.timestamp,"onUpdate:modelValue":n[0]||(n[0]=l=>e.timestamp=l),variant:"outlined",onInput:r.toDateTimeMethod},{prepend:t(()=>[D]),append:t(()=>[o("span",null,p(e.toDateTime),1)]),_:1},8,["placeholder","modelValue","onInput"])]),_:1})]),_:1}),a(s,{justify:"center",align:"center"},{default:t(()=>[a(m,{md:"5",sm:"12"},{default:t(()=>[a(i,{placeholder:e.nowDatetime,"hide-details":"",modelValue:e.datetime,"onUpdate:modelValue":n[1]||(n[1]=l=>e.datetime=l),variant:"outlined",onInput:r.toTimeStampMethod},{prepend:t(()=>[T]),append:t(()=>[o("span",null,p(e.toTimeStamp),1)]),_:1},8,["placeholder","modelValue","onInput"])]),_:1})]),_:1}),a(s,{justify:"center",align:"center"},{default:t(()=>[a(m,{md:"5",sm:"12"},{default:t(()=>[a(i,{modelValue:e.nowD,"onUpdate:modelValue":n[2]||(n[2]=l=>e.nowD=l),readonly:"",variant:"outlined"},{prepend:t(()=>[h]),append:t(()=>[o("span",null,p(e.nowT),1)]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}var y=c(f,[["render",v]]);export{y as default};
