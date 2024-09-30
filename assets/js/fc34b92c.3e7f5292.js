"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[8965],{15674:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=n(74848),l=n(28453);const t={title:"\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0 - OCP",weight:2},c=void 0,r={id:"user_manual/user_best_practices/deploy_tools/deploy_ocp",title:"\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0 - OCP",description:"\u5b89\u88c5\u7684\u7248\u672c\u662f OCP V4.0.3CEBP1\uff0c\u8be5\u7248\u672c\u96c6\u6210\u4e3a ALL-IN-ONE \u8f6f\u4ef6\u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u9875\u9762\u5b89\u88c5\u90e8\u7f72\u96c6\u7fa4\u4ee5\u53ca\u670d\u52a1\uff0c\u4e0e\u5176\u4ed6\u7684\u7248\u672c\u5b89\u88c5\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\uff0c\u5176\u4ed6\u7248\u672c\u5b89\u88c5\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\u3002",source:"@site/docs/user_manual/user_best_practices/deploy_tools/deploy_ocp.md",sourceDirName:"user_manual/user_best_practices/deploy_tools",slug:"/user_manual/user_best_practices/deploy_tools/deploy_ocp",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_tools/deploy_ocp",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/deploy_tools/deploy_ocp.md",tags:[],version:"current",frontMatter:{title:"\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0 - OCP",weight:2},sidebar:"legacySidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72\u5de5\u5177 - OBD",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_tools/deploy_obd"},next:{title:"\u6570\u636e\u8fc1\u79fb\u5e73\u53f0 - OMS",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_tools/deploy_oms"}},a={},d=[{value:"\u542f\u52a8 ocp-installer",id:"\u542f\u52a8-ocp-installer",level:2},{value:"\u5f00\u59cb\u90e8\u7f72",id:"\u5f00\u59cb\u90e8\u7f72",level:2}];function o(e){const s={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u5b89\u88c5\u7684\u7248\u672c\u662f OCP V4.0.3_CE_BP1\uff0c\u8be5\u7248\u672c\u96c6\u6210\u4e3a ALL-IN-ONE \u8f6f\u4ef6\u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u9875\u9762\u5b89\u88c5\u90e8\u7f72\u96c6\u7fa4\u4ee5\u53ca\u670d\u52a1\uff0c\u4e0e\u5176\u4ed6\u7684\u7248\u672c\u5b89\u88c5\u65b9\u5f0f\u53ef\u80fd\u4e0d\u540c\uff0c\u5176\u4ed6\u7248\u672c\u5b89\u88c5\u53ef\u4ee5\u53c2\u8003\u5b98\u7f51\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u542f\u52a8-ocp-installer",children:"\u542f\u52a8 ocp-installer"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u4e0b\u8f7d\u5e76\u89e3\u538b\u8f6f\u4ef6\u5305"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"tar -xf ocp-server-all-in-one-1.0.0-YYYYMMDDhhmmss.el7.x86_64.tar.gz\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"\u5b89\u88c5\u90e8\u7f72\u7a0b\u5e8f"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"cd ocp-server-all-in-one/bin && sh install.sh\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"\u73af\u5883\u53d8\u91cf"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"source ~/.ocp-server-all-in-one/bin/env.sh\n"})}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsx)(s.li,{children:"\u6267\u884c ocp-installer install \uff0c\u5e76\u6839\u636e\u8fd4\u56de\u7684 IP \u5730\u5740\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u94fe\u63a5\u5f00\u59cb\u90e8\u7f72\uff0c-pxxx \u53ef\u4ee5\u81ea\u5b9a\u4e49\u7aef\u53e3\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[root@obtest bin]# ocp-installer install\nDisable remote ok\nstart Ocp Installer install in 0.0.0.0:8680\nplease open http://172.xx.xx.xx:8680\n"})}),"\n",(0,i.jsx)(s.h2,{id:"\u5f00\u59cb\u90e8\u7f72",children:"\u5f00\u59cb\u90e8\u7f72"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u5411\u5bfc\u9875\u9762\u70b9\u51fb\u5f00\u59cb\u90e8\u7f72"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(82632).A+"",width:"806",height:"314"})}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"\u5148\u9009\u62e9 OCP MetaDB \u7684\u914d\u7f6e\u65b9\u5f0f\uff0c"}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u521b\u5efa\u5168\u65b0\u7684 OceanBase \u6570\u636e\u5e93\uff0c\u4f1a\u5728\u540e\u7eed\u64cd\u4f5c\u4e2d\u9009\u62e9\u673a\u5668\u3001\u914d\u7f6e\u6765\u90e8\u7f72\u96c6\u7fa4\u4ee5\u53ca\u521b\u5efa\u79df\u6237\uff1b"}),"\n",(0,i.jsxs)(s.li,{children:["\u4f7f\u7528\u5df2\u6709\u7684 OceanBase \u6570\u636e\u5e93\uff0c\u5219\u9700\u8981\u586b\u5199\u5df2\u6709\u96c6\u7fa4\u7684\u914d\u7f6e\u4fe1\u606f\u6765\u521b\u5efa MetaDB \u79df\u6237\u3002\n",(0,i.jsx)(s.img,{alt:"image.png",src:n(19491).A+"",width:"2389",height:"710"})]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"\u914d\u7f6e MetaDB \u96c6\u7fa4\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u586b\u5199 MetaDB \u96c6\u7fa4\u90e8\u7f72\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u4e3b\u673a\uff08\u53ef\u4ee5\u591a\u53f0\uff09\u3001\u90e8\u7f72\u7528\u6237\u3001\u8def\u5f84\u7b49\u3002\u7b49\u5f85\u914d\u7f6e\u68c0\u67e5\u5b8c\u6210\u3002"}),"\n",(0,i.jsx)("div",{style:{color:"red"},children:"\u6ce8\u610f\uff1aroot@sys \u5bc6\u7801\u4e00\u5b9a\u8981\u4fdd\u5b58\u597d\uff0c\u540e\u7eed\u767b\u9646 sys \u79df\u6237\u9700\u8981\u7528\u8fd9\u4e2a\u5bc6\u7801\uff0c\u5e76\u4e14\u6ca1\u529e\u6cd5\u4fee\u6539\u548c\u627e\u56de\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(14266).A+"",width:"809",height:"426"})}),"\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsx)(s.li,{children:"MetaDB \u96c6\u7fa4\u8d44\u6e90\u5206\u914d"}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5185\u5b58\u603b\u6570\u4e3a\u7cfb\u7edf\u4e2d free \u7684\u5185\u5b58\u6570\uff0c\u5982\u679c\u7f13\u5b58\u5360\u7528\u592a\u591a\u53ef\u4ee5\u624b\u52a8\u5237\u65b0\u4e00\u4e0b\u3002"}),"\n",(0,i.jsx)(s.li,{children:"memory_limit \u4e3a\u5206\u914d\u7ed9\u96c6\u7fa4\u7684\u5185\u5b58\u5927\u5c0f\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u65e5\u5fd7\u6587\u4ef6\u662f\u6307 CLOG \u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u5efa\u8bae\u662f\u5185\u5b58\u7684 3 \u500d\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u6570\u636e\u6587\u4ef6\u548c\u65e5\u5fd7\u6587\u4ef6\u4f1a\u5148\u9884\u5360\u7528\u5206\u914d\u7684\u7a7a\u95f4\u5927\u5c0f\uff0c\u6240\u4ee5\u5efa\u8bae\u5408\u7406\u5206\u914d\u7a7a\u95f4\uff0c\u5f3a\u70c8\u5efa\u8bae\u65e5\u5fd7\u548c\u6570\u636e\u6587\u4ef6\u5206\u76d8\uff0c\u907f\u514d\u76f8\u4e92\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(72213).A+"",width:"661",height:"814"})}),"\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsx)(s.li,{children:"MetaDB \u96c6\u7fa4\u90e8\u7f72\u9884\u68c0\u67e5"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u6709\u4e00\u4e9b\u68c0\u67e5\u6ca1\u6709\u901a\u8fc7\uff0c\u53ef\u4ee5\u901a\u8fc7\u5931\u8d25\u9879\u5185\u7684\u8be6\u60c5\uff0c\u5230\u5b98\u7f51\u6216\u8005\u8bba\u575b\u5bfb\u627e\u89e3\u51b3\u65b9\u6848\u3002\n",(0,i.jsx)(s.img,{alt:"image.png",src:n(89324).A+"",width:"1606",height:"730"})]}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsx)(s.li,{children:"\u96c6\u7fa4\u90e8\u7f72"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u90e8\u7f72\u65e5\u5fd7\u67e5\u770b\u96c6\u7fa4\u3001\u94fe\u63a5\u3001\u8d26\u5bc6\u4fe1\u606f\u7b49\u3002"}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u90e8\u7f72\u5931\u8d25\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8fd9\u91cc\u67e5\u770b\u62a5\u9519\u6b65\u9aa4\u4ee5\u53ca\u5931\u8d25\u539f\u56e0\uff0c\u4fee\u590d\u5b8c\u6210\u540e\u91cd\u65b0\u90e8\u7f72\u3002\n",(0,i.jsx)(s.img,{alt:"image.png",src:n(74151).A+"",width:"750",height:"391"})]}),"\n",(0,i.jsxs)(s.ol,{start:"7",children:["\n",(0,i.jsx)(s.li,{children:"OCP \u914d\u7f6e"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u914d\u7f6e OCP \u670d\u52a1\u4fe1\u606f\uff0c\u5305\u62ec\u7ba1\u7406\u5458\uff08admin\uff09\u5bc6\u7801\u3001\u8def\u5f84\u3001\u7aef\u53e3\u7b49\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u914d\u7f6e\u5143\u4fe1\u606f\u79df\u6237\u548c\u76d1\u63a7\u79df\u6237\u7684\u8d26\u53f7\u5bc6\u7801\uff0c\u8fd9\u4e24\u4e2a\u79df\u6237\u7684 root \u5bc6\u7801\u5b9e\u9645\u4e3a\u7a7a\uff08\u53ef\u4ee5\u7528\u914d\u7f6e\u7684\u5bc6\u7801\u548c\u7a7a\u5bc6\u7801\u5c1d\u8bd5\uff09\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(86462).A+"",width:"750",height:"388"})}),"\n",(0,i.jsxs)(s.ol,{start:"8",children:["\n",(0,i.jsx)(s.li,{children:"OCP \u670d\u52a1\u53ca\u79df\u6237\u8d44\u6e90\u5206\u914d"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u5305\u62ec OCP \u670d\u52a1\u3001\u5143\u4fe1\u606f\u79df\u6237\u4ee5\u53ca\u76d1\u63a7\u79df\u6237\u7684 CPU \u53ca\u5185\u5b58\u5206\u914d\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5143\u4fe1\u606f\u79df\u6237\u4e0d\u5c0f\u4e8e 1C2G\uff0c\u76d1\u63a7\u79df\u6237\u4e0d\u5c0f\u4e8e 2C4G\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(85353).A+"",width:"661",height:"1008"})}),"\n",(0,i.jsxs)(s.ol,{start:"9",children:["\n",(0,i.jsx)(s.li,{children:"OCP \u670d\u52a1\u9884\u68c0\u67e5"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"image.png",src:n(30528).A+"",width:"2066",height:"944"})," 10. \u90e8\u7f72 OCP \u670d\u52a1"]}),"\n",(0,i.jsx)(s.p,{children:"\u8bbf\u95ee\u5730\u5740\u4e3a\u9875\u9762\u5c55\u793a\u7684\u5730\u5740\u3002"}),"\n",(0,i.jsx)("div",{style:{color:"red"},children:"\u7ba1\u7406\u5458\u5bc6\u7801\u4e00\u5b9a\u8981\u8bb0\u4f4f\uff0c\u5426\u5219\u5c06\u6ca1\u529e\u6cd5\u767b\u5f55 OCP \u5e73\u53f0\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"image.png",src:n(78394).A+"",width:"750",height:"422"})}),"\n",(0,i.jsxs)(s.ol,{start:"11",children:["\n",(0,i.jsx)(s.li,{children:"\u767b\u5f55 OCP"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"image.png",src:n(68227).A+"",width:"750",height:"448"}),"\n",(0,i.jsx)(s.img,{alt:"image.png",src:n(6248).A+"",width:"848",height:"434"})]}),"\n",(0,i.jsx)(s.p,{children:"\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u505a\u521b\u5efa\u96c6\u7fa4\u3001\u96c6\u7fa4\u7ba1\u7406\u7ef4\u62a4\u7b49\u4e00\u7cfb\u5217\u7684\u64cd\u4f5c\u4e86\u3002"})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},82632:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p1-c349055e35ab402f4474514f43d8beff.png"},78394:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p10-43520de3279aa13d6aaec1b49b868a3d.png"},68227:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p11-a5c16ba8466b3a6be5b3ec88ab7cfdbe.png"},6248:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p12-9872cc609a912cda8a249c4795107264.png"},19491:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p2-11161307d4801902b2220de57b3f1a2b.png"},14266:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p3-f30966425a720fcef55a9ee8b3213572.png"},72213:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p4-94a4b6c1cdf97d348947657fd5318424.png"},89324:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p5-2e78a731c8d8bc0ac1b13972464aadea.png"},74151:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p6-199df22eb88722bb03d21e1e38ad1c20.png"},86462:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p7-0b2d9474e82240a066bfa26a60608324.png"},85353:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p8-27f0e4121581b16251d795c2f90f0d96.png"},30528:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/p9-240c03a792fc4e9413921938f98f49c0.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var i=n(96540);const l={},t=i.createContext(l);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);