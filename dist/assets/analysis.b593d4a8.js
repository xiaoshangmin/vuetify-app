import{_ as C,r as o,o as d,c as u,w as e,a as t,b as i,t as $,j as p,e as x,d as f,k as B,F as N}from"./index.4d25ad44.js";const U={data:()=>({finish:!1,snackbar:!1,text:"",timeout:2e3,loading:!1,disabled:!1,info:{},url:""}),created(){},methods:{analysis(){const a=/http[s]?:\/\/([\w./-]+)\??[\w=&:.\-+%]*[/]*/.exec(this.url);if(a==null){this.text="\u590D\u5236\u7684\u6587\u6848\u6216\u8005\u94FE\u63A5\u9519\u8BEF",this.snackbar=!this.snackbar;return}this.loading=!0,this.disabled=!0;let s={url:a[0]};this.$http.post("/api/analysis/media",s).then(r=>{console.log(r.data),r.data.code==1&&(this.info=r.data.data),this.loading=!1,this.finish=!0,this.disabled=!1}).catch(r=>{console.log("error",r),this.loading=!1,this.disabled=!1})}}},z=i(" \u5173\u95ED "),F=i("\u6296\u97F3"),D=i("\u5FEB\u624B"),E=i("\u5FAE\u535A"),L=i("\u54D4\u54E9\u54D4\u54E9"),S=i(" \u5F00\u59CB\u89E3\u6790 "),T={key:0,width:"270",height:"480",controls:"",autoplay:""},q=["src"],A=i(" \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002 ");function G(a,s,r,H,I,v){const m=o("v-btn"),h=o("v-snackbar"),g=o("v-textarea"),c=o("v-col"),l=o("v-row"),_=o("v-chip"),y=o("v-card-text"),b=o("v-card"),k=o("v-divider"),w=o("v-progress-circular"),V=o("v-img"),j=o("v-container");return d(),u(j,null,{default:e(()=>[t(h,{modelValue:a.snackbar,"onUpdate:modelValue":s[1]||(s[1]=n=>a.snackbar=n),timeout:a.timeout,vertical:"",location:"center"},{actions:e(()=>[t(m,{color:"blue",variant:"text",onClick:s[0]||(s[0]=n=>a.snackbar=!1)},{default:e(()=>[z]),_:1})]),default:e(()=>[i($(a.text)+" ",1)]),_:1},8,["modelValue","timeout"]),t(l,{justify:"center"},{default:e(()=>[t(c,{md:"12",sm:"12",lg:"10"},{default:e(()=>[t(b,{"max-width":"1400"},{default:e(()=>[t(y,null,{default:e(()=>[t(l,{justify:"center"},{default:e(()=>[t(c,{md:"8",sm:"12",lg:"8"},{default:e(()=>[t(g,{variant:"outlined",modelValue:a.url,"onUpdate:modelValue":s[2]||(s[2]=n=>a.url=n),clearable:"",label:"\u8BF7\u7C98\u8D34\u5206\u4EAB\u7684\u94FE\u63A5\u6216\u8005\u89C6\u9891url\u5730\u5740","auto-grow":"","hide-details":"",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1}),t(l,{justify:"center"},{default:e(()=>[t(c,{md:"8",sm:"12",lg:"8"},{default:e(()=>[t(_,{color:"primary",class:"ma-2"},{default:e(()=>[F]),_:1}),t(_,{color:"secondary",class:"ma-2"},{default:e(()=>[D]),_:1}),t(_,{color:"red",class:"ma-2"},{default:e(()=>[E]),_:1}),t(_,{color:"green",class:"ma-2"},{default:e(()=>[L]),_:1})]),_:1})]),_:1}),t(l,{justify:"center"},{default:e(()=>[t(m,{"append-icon":"mdi-cloud-search-outline",elevation:"2",color:"#ff8170",onClick:v.analysis,disabled:a.disabled,loading:a.loading},{default:e(()=>[S]),_:1},8,["onClick","disabled","loading"])]),_:1})]),_:1})]),_:1}),a.finish?(d(),u(l,{key:0,justify:"center"},{default:e(()=>[t(k,{class:"ma-1 pa-1"}),t(c,{cols:"10"},{default:e(()=>[t(l,{justify:"center",align:"center"},{default:e(()=>[a.info.type=="video"?(d(),p("video",T,[x("source",{src:a.info.videoUrl,type:"video/mp4"},null,8,q),A])):f("",!0),a.info.type=="images"?(d(),u(l,{key:1},{default:e(()=>[(d(!0),p(N,null,B(a.info.pics,n=>(d(),u(c,{key:n,class:"d-flex child-flex",cols:"4"},{default:e(()=>[t(V,{src:n,"lazy-src":n,"aspect-ratio":"1",cover:"",class:"bg-grey-lighten-2"},{placeholder:e(()=>[t(l,{class:"fill-height ma-0",align:"center",justify:"center"},{default:e(()=>[t(w,{indeterminate:"",color:"grey-lighten-5"})]),_:1})]),_:2},1032,["src","lazy-src"])]),_:2},1024))),128))]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1})):f("",!0)]),_:1})]),_:1})]),_:1})}var K=C(U,[["render",G]]);export{K as default};