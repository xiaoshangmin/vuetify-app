import{_ as k,r as l,o as w,c as x,w as a,a as r,b as d,t as y}from"./index.fcff41f4.js";const V={data:()=>({loading:!1,snackbar:!1,msg:"",url:"",paper:"",rules:{required:e=>!!e||"Required."},paperSelect:{state:"A4(8.27 x 11.7)",abbr:"8"},paperSize:[{state:"Letter(8.5 x 11)",abbr:"0"},{state:"Legal(8.5 x 14)",abbr:"1"},{state:"Tabloid(11 x 17)",abbr:"2"},{state:"Ledger(17 x 11)",abbr:"3"},{state:"A0(33.1 x 46.8)",abbr:"4"},{state:"A1(23.4 x 33.1)",abbr:"5"},{state:"A2(16.54 x 23.4)",abbr:"6"},{state:"A3(11.7 x 16.54)",abbr:"7"},{state:"A4(8.27 x 11.7)",abbr:"8"},{state:"A5(5.83 x 8.27)",abbr:"9"},{state:"A6(4.13 x 5.83)",abbr:"10"}]}),computed:{cardWidth(){switch(this.$vuetify.display.name){case"xs":return"100%";case"sm":return"100%";case"md":return"100%";case"lg":return"100%";case"xl":return"100%"}}},created(){},methods:{make(){if(!this.url){this.msg="\u8BF7\u8F93\u5165url",this.snackbar=!0;return}this.loading=!0,this.paper=parseInt(this.paperSelect.abbr);let e=new FormData;e.append("paper",this.paper),e.append("url",this.url),this.$http.post("/api/pdfTool/urlToPdf",e,{responseType:"blob"}).then(t=>{this.loading=!1,this.disabled=!1,console.log(t);var i=t.data;const c=window.URL.createObjectURL(new Blob([i],{type:t.headers["content-type"]}));var o=document.createElement("a");o.href=c,o.setAttribute("download",new Date().getTime()+".pdf"),document.body.appendChild(o),o.click()}).catch(t=>{console.log("error",t),this.msg=t.message,this.loading=!1,this.snackbar=!0,this.disabled=!1})}}};function A(e,t,i,c,o,u){const m=l("v-textarea"),p=l("v-col"),n=l("v-row"),f=l("v-select"),b=l("v-btn"),_=l("v-card-text"),v=l("v-card"),h=l("v-snackbar"),g=l("v-container");return w(),x(g,null,{default:a(()=>[r(n,{justify:"center",class:"mt-5"},{default:a(()=>[r(v,{width:u.cardWidth},{default:a(()=>[r(_,null,{default:a(()=>[r(n,{justify:"center"},{default:a(()=>[r(p,{md:"12",sm:"12",lg:"12"},{default:a(()=>[r(m,{modelValue:e.url,"onUpdate:modelValue":t[0]||(t[0]=s=>e.url=s),rules:[e.rules.required],clearable:"",label:"\u8BF7\u8F93\u5165url",counter:"",variant:"outlined","auto-grow":"",rows:"2"},null,8,["modelValue","rules"])]),_:1})]),_:1}),r(n,{justify:"center",class:"mt-8"},{default:a(()=>[r(p,{class:"d-flex",cols:"12",sm:"12"},{default:a(()=>[r(f,{items:e.paperSize,label:"\u9875\u9762\u5927\u5C0F",variant:"outlined",modelValue:e.paperSelect,"onUpdate:modelValue":t[1]||(t[1]=s=>e.paperSelect=s),"return-object":"","item-title":"state","item-value":"abbr"},null,8,["items","modelValue"])]),_:1})]),_:1}),r(n,{justify:"center",class:"mt-2 mb-5"},{default:a(()=>[r(b,{"append-icon":"mdi-reload",elevation:"2",color:"#ff8170",onClick:u.make,loading:e.loading},{default:a(()=>[d(" \u5F00\u59CB\u8F6C\u6362 ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),_:1},8,["width"])]),_:1}),r(h,{modelValue:e.snackbar,"onUpdate:modelValue":t[3]||(t[3]=s=>e.snackbar=s),location:"center"},{actions:a(()=>[r(b,{color:"pink",variant:"text",onClick:t[2]||(t[2]=s=>e.snackbar=!1)},{default:a(()=>[d(" \u597D\u7684 ")]),_:1})]),default:a(()=>[d(y(e.msg)+" ",1)]),_:1},8,["modelValue"])]),_:1})}var T=k(V,[["render",A]]);export{T as default};
