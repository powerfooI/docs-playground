"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2278],{36783:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var i=n(74848),t=n(28453);const a={title:"MySQL \u8fc1\u79fb\u5230 OB",weight:1},c=void 0,d={id:"user_manual/user_best_practices/data_migration/oms/mysql2ob",title:"MySQL \u8fc1\u79fb\u5230 OB",description:"\u5bf9\u4e8e\u65e0\u4e3b\u952e\u8868\uff0c\u73b0\u5728 OMS \u4e0d\u652f\u6301\u589e\u91cf\u540c\u6b65\u4ee5\u53ca\u6570\u636e\u6821\u9a8c\uff0c\u6240\u4ee5\u5982\u679c\u8981\u540c\u6b65\u7684\u8868\u5305\u62ec\u4e3b\u952e\u8868+\u65e0\u4e3b\u952e\u8868\uff0c\u90a3\u4e48\u540e\u7eed\u589e\u91cf\u540c\u6b65\u4efb\u52a1\uff0c\u9700\u8981\u5c06\u65e0\u4e3b\u952e\u8868\u5254\u9664\u6389\uff0c\u6216\u8005\u4fdd\u8bc1\u65e0\u4e3b\u952e\u8868\u6ca1\u6709\u53d8\u66f4\u3002",source:"@site/docs/user_manual/user_best_practices/data_migration/oms/mysql2ob.md",sourceDirName:"user_manual/user_best_practices/data_migration/oms",slug:"/user_manual/user_best_practices/data_migration/oms/mysql2ob",permalink:"/docs-playground/docs/user_manual/user_best_practices/data_migration/oms/mysql2ob",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/data_migration/oms/mysql2ob.md",tags:[],version:"current",frontMatter:{title:"MySQL \u8fc1\u79fb\u5230 OB",weight:1},sidebar:"legacySidebar",previous:{title:"OBLogProxy",permalink:"/docs-playground/docs/user_manual/user_best_practices/data_migration/oblogproxy"},next:{title:"TiDB \u8fc1\u79fb\u5230 OB",permalink:"/docs-playground/docs/user_manual/user_best_practices/data_migration/oms/tidb2ob"}},g={},r=[{value:"\u521b\u5efa\u5305\u542b\u65e0\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u4efb\u52a1",id:"\u521b\u5efa\u5305\u542b\u65e0\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u4efb\u52a1",level:2},{value:"\u521b\u5efa\u4e3b\u952e\u8868\u8fc1\u79fb\u4efb\u52a1",id:"\u521b\u5efa\u4e3b\u952e\u8868\u8fc1\u79fb\u4efb\u52a1",level:2}];function p(s){const e={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e\u65e0\u4e3b\u952e\u8868\uff0c\u73b0\u5728 OMS \u4e0d\u652f\u6301\u589e\u91cf\u540c\u6b65\u4ee5\u53ca\u6570\u636e\u6821\u9a8c\uff0c\u6240\u4ee5\u5982\u679c\u8981\u540c\u6b65\u7684\u8868\u5305\u62ec\u4e3b\u952e\u8868+\u65e0\u4e3b\u952e\u8868\uff0c\u90a3\u4e48\u540e\u7eed\u589e\u91cf\u540c\u6b65\u4efb\u52a1\uff0c\u9700\u8981\u5c06\u65e0\u4e3b\u952e\u8868\u5254\u9664\u6389\uff0c\u6216\u8005\u4fdd\u8bc1\u65e0\u4e3b\u952e\u8868\u6ca1\u6709\u53d8\u66f4\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\u505a\u53cd\u5411\u589e\u91cf\uff0c\u4e5f\u5c31\u662f\u540e\u7eed\u5207\u6362\u4ee5\u540e\uff0cOB \u6570\u636e\u53cd\u5411\u540c\u6b65\u5230 MySQL\uff0c\u90a3\u4e48\u9700\u8981\u7ed1\u5b9a OCP\uff0c\u4ece OCP \u83b7\u53d6 Config Url\uff0c\u5e76\u4e14\u96c6\u7fa4\u9700\u8981\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u3002\u7528\u6237\u4fe1\u606f\u9700\u8981\u7528 sys \u79df\u6237\u4e0b\u7684\u7528\u6237\u53ca\u5bc6\u7801\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u60f3\u8981\u76f4\u63a5\u7528 OMS \u505a\u6307\u5b9a\u4f4d\u70b9\u7684\u589e\u91cf\u540c\u6b65\uff0c\u73b0\u5728\u8fd8\u4e0d\u652f\u6301\uff0c\u73b0\u5728\u53ea\u80fd\u6307\u5b9a\u67d0\u4e2a\u65f6\u95f4\u6233\uff0c\u4e0d\u80fd\u660e\u786e\u5230\u67d0\u4e2a position \u6216\u8005 GTID\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u8fc1\u79fb\u4efb\u52a1\u4e3b\u8981\u5305\u542b\u4e24\u79cd\uff0c\u5305\u542b\u65e0\u4e3b\u952e\u8868+\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u548c\u4ec5\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u521b\u5efa\u5305\u542b\u65e0\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u4efb\u52a1",children:"\u521b\u5efa\u5305\u542b\u65e0\u4e3b\u952e\u8868\u7684\u8fc1\u79fb\u4efb\u52a1"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4e00\u3001\u521b\u5efa\u8fc1\u79fb\u4efb\u52a1"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u8fc1\u79fb\u4efb\u52a1\uff0c\u9009\u62e9\u5168\u90e8\u8868\u8fc1\u79fb"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(26625).A+"",width:"964",height:"527"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u9009\u62e9\u8fc1\u79fb\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u5305\u542b\u4e3b\u952e\u8868\uff0c\u5e76\u4e14\u9700\u8981\u589e\u91cf\u540c\u6b65\uff0c\u53ef\u4ee5\u6309\u9700\u9009\u62e9\uff1b\u5426\u5219\u7684\u8bdd\u53ef\u4ee5\u4e0d\u9009\u62e9\u589e\u91cf\u540c\u6b65\u548c\u5168\u91cf\u68c0\u9a8c\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(69010).A+"",width:"951",height:"615"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u9009\u62e9\u8fc1\u79fb\u5bf9\u8c61"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(60183).A+"",width:"958",height:"625"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u8fc1\u79fb\u4efb\u52a1"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u91cc\u4e00\u5b9a\u8981\u6ce8\u610f\u4e0b\u9762\u7684\u8d44\u6e90\uff0c\u9009\u62e9\u5f53\u524d\u673a\u5668\u6ee1\u8db3\u7684\u901f\u5ea6\uff0c\u6bd4\u5982\u9009\u62e9\u4e86\u5feb\u901f\uff0c\u4f46\u662f\u673a\u5668\u5185\u5b58\u4f4e\u4e8e8G\uff0c\u90a3\u4e48\u8fc1\u79fb\u4efb\u52a1\u4f1a\u5931\u8d25\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(12824).A+"",width:"956",height:"614"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(8435).A+"",width:"846",height:"428"})]}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsx)(e.li,{children:"\u9884\u68c0\u67e5\uff0c\u68c0\u67e5\u901a\u8fc7\u540e\uff0c\u4efb\u52a1\u542f\u52a8"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(40005).A+"",width:"962",height:"615"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4e8c\u3001\u5f00\u59cb\u6570\u636e\u8fc1\u79fb"})}),"\n",(0,i.jsxs)(e.p,{children:["\u4efb\u52a1\u542f\u52a8\u540e\uff0c\u4f1a\u6309\u7167\u4efb\u52a1\u987a\u5e8f\u6765\u64cd\u4f5c\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(19860).A+"",width:"980",height:"595"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e\u6709\u4e3b\u952e\u7684\u8868\uff0c\u589e\u91cf\u8fc1\u79fb\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(41327).A+"",width:"750",height:"327"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u60f3\u8981\u770b\u5230 DDL \u548c DML \u7684\u7edf\u8ba1\uff0c\u9700\u8981\u6682\u505c\u4efb\u52a1\u518d\u5f00\u542f\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(59782).A+"",width:"962",height:"571"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5168\u91cf\u6821\u9a8c\u53ea\u4f1a\u6821\u9a8c\u6709\u4e3b\u952e\u8868\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(62201).A+"",width:"976",height:"610"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(55952).A+"",width:"2830",height:"682"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u65e0\u4e3b\u952e\u8868\u8fdb\u884c\u53d8\u66f4\uff0c\u90a3\u4e48\u4e0d\u4f1a\u505a\u589e\u91cf\u540c\u6b65\uff0c\u5e76\u4e14\u4efb\u52a1\u4f1a\u62a5\u9519\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(69771).A+"",width:"750",height:"300"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(95618).A+"",width:"974",height:"626"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u89e3\u51b3\u65b9\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u66f4\u65b0\u589e\u91cf\u540c\u6b65\u7ec4\u4ef6\u7684\u914d\u7f6e\uff0c\u5c06\u65e0\u4e3b\u952e\u8868\u53bb\u6389\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(645).A+"",width:"965",height:"399"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(64732).A+"",width:"971",height:"615"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(44462).A+"",width:"750",height:"542"})]}),"\n",(0,i.jsx)(e.p,{children:"\u53bb\u6389\u4ee5\u540e\uff0c\u8be5\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u91cd\u542f\uff0c\u6062\u590d\u6b63\u5e38\uff0c\u5bf9\u4e8e\u53bb\u9664\u6389\u7684\u65e0\u4e3b\u952e\u8868\u7684\u65b0\u589e\u53d8\u66f4\u5c06\u81ea\u52a8\u5ffd\u7565\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5f53\u786e\u8ba4\u6570\u636e\u540c\u6b65\u6ca1\u95ee\u9898\uff0c\u51c6\u5907\u5e94\u7528\u5207\u6362\uff0c\u53ef\u4ee5\u624b\u52a8\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u3002\n\u9ed8\u8ba4\u4e0d\u4f1a\u8fdb\u884c\u81ea\u52a8\u6b63\u5411\u5207\u6362\uff0c\u9700\u8981\u914d\u5408\u5e94\u7528\u5207\u6362\u624b\u52a8\u6267\u884c\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(43959).A+"",width:"981",height:"633"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(36380).A+"",width:"961",height:"618"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(72293).A+"",width:"935",height:"622"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(1866).A+"",width:"917",height:"486"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(33779).A+"",width:"920",height:"409"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u53cd\u5411\u589e\u91cf\u6548\u679c\u9a8c\u8bc1\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(38168).A+"",width:"974",height:"523"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(59297).A+"",width:"1779",height:"591"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u521b\u5efa\u4e3b\u952e\u8868\u8fc1\u79fb\u4efb\u52a1",children:"\u521b\u5efa\u4e3b\u952e\u8868\u8fc1\u79fb\u4efb\u52a1"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u8fc1\u79fb\u4efb\u52a1\uff0c\u4ec5\u652f\u6301\u552f\u4e00\u952e\u8868\u8fc1\u79fb"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(91121).A+"",width:"968",height:"586"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u6309\u9700\u9009\u62e9\u8fc1\u79fb\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(70010).A+"",width:"959",height:"625"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e2d\u95f4\u8fc7\u7a0b\u540c\u4e0a\uff0c\u8fd9\u91cc\u7701\u7565..."}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u4efb\u52a1\u542f\u52a8"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u6570\u636e\u5e93\u4e2d\u5305\u542b\u552f\u4e00\u952e\u8868\u548c\u975e\u552f\u4e00\u952e\u8868\uff0c\u53ea\u4f1a\u8fc1\u79fb\u552f\u4e00\u952e\u8868\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:n(17763).A+"",width:"970",height:"521"})]}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"\u6548\u679c\u9a8c\u8bc1"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:n(57868).A+"",width:"846",height:"629"})}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u7eed\u6b65\u9aa4\u4e5f\u540c\u4e0a\uff0c\u8fd9\u91cc\u5ffd\u7565..."})]})}function h(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(p,{...s})}):p(s)}},26625:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-1-1-9127447864b0b9a90c49631cc73c534c.png"},69010:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-2-1-00a44ac4e5df46b852bc5ded8744dae1.png"},60183:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-3-1-97d5cb284a557d512f1f2bcd3c522ad2.png"},12824:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-4-1-e049f630077820994e3bfea8bb1eb90c.png"},8435:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-4-2-96b70ef41f34a0fd0696184b49894d06.png"},40005:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p1-5-1-a47e9a97eaf5dcc8bbbeb88bc62d75b2.png"},19860:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-1-8e1afdf74a1a970e06ead0fe6deb6353.png"},44462:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-10-c9f9bc3ea4fda92c3d3b9449d095e46c.png"},43959:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-11-d88425857550ebd06ea7175825c48db4.png"},36380:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-12-0d8374b30dea862205177c79f7e9b43a.png"},72293:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-13-75f390da12506098a6d4b28709ecc582.png"},1866:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-14-7adf01078e0a5efc93d0306991fb753e.png"},33779:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-15-5164fb65a63729204ebad0f1d48e870b.png"},38168:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-16-867a6925cd825fe08eb8383995a5a702.png"},59297:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-17-07c6b2ba4fb9cee14d81878ec9092377.png"},41327:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-2-883c68a135540f3cdc9da693a9962a93.png"},59782:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-3-ed9b20e0d42b940ea33278903650ac31.png"},62201:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-4-957eae4d71cea9c3a1b6ee34dfbc2675.png"},55952:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-5-3562c056a20d664cbb0857050d985a9d.png"},69771:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-6-871583bf6a4922df765424ecd471c5f1.png"},95618:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-7-7613605abb6cb4efca1066ac4f1f262b.png"},645:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-8-bf6c1b43fe3488859c74a9762d3f55b5.png"},64732:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p2-9-7b091eefa505bcad851c4371bfe2984f.png"},91121:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p3-1-cf9bd1ad4ecba989e6bc29ca3b08e527.png"},70010:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p3-2-e56dad93b7f5c4689b931102a792a33b.png"},17763:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p3-3-6e36f76f83a55ffb80b5aee195d426cb.png"},57868:(s,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/p3-4-fc8afa1b57079cc52ff0bef7a39faee4.png"},28453:(s,e,n)=>{n.d(e,{R:()=>c,x:()=>d});var i=n(96540);const t={},a=i.createContext(t);function c(s){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function d(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:c(s.components),i.createElement(a.Provider,{value:e},s.children)}}}]);