import{_ as C,r as l,o as d,c as f,w as e,a,b as o,t as $,j as p,e as x,d as _,k as B,F as N}from"./index.f1058868.js";const U={data:()=>({finish:!1,snackbar:!1,text:"",timeout:2e3,loading:!1,disabled:!1,info:{},url:""}),created(){},methods:{analysis(){const t=/http[s]?:\/\/([\w./-]+)\??[\w=&:.\-+%]*[/]*/.exec(this.url);if(t==null){this.text="\u590D\u5236\u7684\u6587\u6848\u6216\u8005\u94FE\u63A5\u9519\u8BEF",this.snackbar=!this.snackbar;return}this.loading=!0,this.disabled=!0,this.info={};let s={url:t[0]};this.$http.post("/api/analysis/media",s).then(r=>{console.log(r.data),r.data.code==1&&(this.info=r.data.data),this.loading=!1,this.finish=!0,this.disabled=!1}).catch(r=>{console.log("error",r),this.loading=!1,this.disabled=!1})}}},z={key:0,width:"270",height:"480",controls:"",autoplay:""},F=["src"];function D(t,s,r,E,L,v){const m=l("v-btn"),h=l("v-snackbar"),g=l("v-textarea"),c=l("v-col"),n=l("v-row"),u=l("v-chip"),y=l("v-card-text"),b=l("v-card"),k=l("v-divider"),w=l("v-progress-circular"),V=l("v-img"),j=l("v-container");return d(),f(j,null,{default:e(()=>[a(h,{modelValue:t.snackbar,"onUpdate:modelValue":s[1]||(s[1]=i=>t.snackbar=i),timeout:t.timeout,vertical:"",location:"center"},{actions:e(()=>[a(m,{color:"blue",variant:"text",onClick:s[0]||(s[0]=i=>t.snackbar=!1)},{default:e(()=>[o(" \u5173\u95ED ")]),_:1})]),default:e(()=>[o($(t.text)+" ",1)]),_:1},8,["modelValue","timeout"]),a(n,{justify:"center"},{default:e(()=>[a(c,{md:"12",sm:"12",lg:"10"},{default:e(()=>[a(b,{"max-width":"1400"},{default:e(()=>[a(y,null,{default:e(()=>[a(n,{justify:"center"},{default:e(()=>[a(c,{md:"8",sm:"12",lg:"8"},{default:e(()=>[a(g,{variant:"outlined",modelValue:t.url,"onUpdate:modelValue":s[2]||(s[2]=i=>t.url=i),clearable:"",label:"\u8BF7\u7C98\u8D34\u5206\u4EAB\u7684\u94FE\u63A5\u6216\u8005\u89C6\u9891url\u5730\u5740","auto-grow":"","hide-details":"",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1}),a(n,{justify:"center"},{default:e(()=>[a(c,{md:"8",sm:"12",lg:"8"},{default:e(()=>[a(u,{color:"primary",class:"ma-2"},{default:e(()=>[o("\u6296\u97F3")]),_:1}),a(u,{color:"secondary",class:"ma-2"},{default:e(()=>[o("\u5FEB\u624B")]),_:1}),a(u,{color:"red",class:"ma-2"},{default:e(()=>[o("\u5FAE\u535A")]),_:1}),a(u,{color:"green",class:"ma-2"},{default:e(()=>[o("\u54D4\u54E9\u54D4\u54E9")]),_:1}),a(u,{color:"pink",class:"ma-2"},{default:e(()=>[o("\u5C0F\u7EA2\u4E66")]),_:1})]),_:1})]),_:1}),a(n,{justify:"center"},{default:e(()=>[a(m,{"append-icon":"mdi-cloud-search-outline",elevation:"2",color:"#ff8170",onClick:v.analysis,disabled:t.disabled,loading:t.loading},{default:e(()=>[o(" \u5F00\u59CB\u89E3\u6790 ")]),_:1},8,["onClick","disabled","loading"])]),_:1})]),_:1})]),_:1}),t.finish?(d(),f(n,{key:0,justify:"center"},{default:e(()=>[a(k,{class:"ma-1 pa-1"}),a(c,{cols:"10"},{default:e(()=>[a(n,{justify:"center",align:"center"},{default:e(()=>[t.info.type=="video"?(d(),p("video",z,[x("source",{src:t.info.videoUrl,type:"video/mp4"},null,8,F),o(" \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002 ")])):_("",!0),t.info.type=="images"?(d(),f(n,{key:1},{default:e(()=>[(d(!0),p(N,null,B(t.info.pics,i=>(d(),f(c,{key:i,class:"d-flex child-flex",cols:"4"},{default:e(()=>[a(V,{src:i,"lazy-src":i,"aspect-ratio":"1",cover:"",class:"bg-grey-lighten-2"},{placeholder:e(()=>[a(n,{class:"fill-height ma-0",align:"center",justify:"center"},{default:e(()=>[a(w,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src"])]),_:2},1024))),128))]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1})):_("",!0)]),_:1})]),_:1})]),_:1})}var T=C(U,[["render",D]]);export{T as default};