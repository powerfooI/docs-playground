"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9056],{16436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(74848),a=n(28453);const s={slug:"resource-isolation",title:"Why is resource isolation important for HTAP?"},i=void 0,r={permalink:"/docs-playground/zh-Hans/blog/resource-isolation",editUrl:"https://github.com/powerfooi/docs-playground/tree/main/blog/feat-resource-isolation.md",source:"@site/blog/feat-resource-isolation.md",title:"Why is resource isolation important for HTAP?",description:"About the author: Xi Huafeng, an OceanBase technical expert, has been dedicated to optimizing the high availability and scalability of databases for 11 years. He helped with the implementation of the Paxos protocol in OceanBase Database and was a member of the OceanBase TPC-C project team. He is now a member of the OceanBase system group, dedicated to building HTAP infrastructure and working on isolation of resources for AP and TP tasks.",date:"2024-06-03T13:23:07.000Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:18.305,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"resource-isolation",title:"Why is resource isolation important for HTAP?"},unlisted:!1,prevItem:{title:"OceanBase 4.3 - Milestone release for real-time AP analysis",permalink:"/docs-playground/zh-Hans/blog/ob-430"},nextItem:{title:"Flink CDC + OceanBase integration solution for full and incremental synchronization",permalink:"/docs-playground/zh-Hans/blog/flink-and-ob"}},c={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",blockquote:"blockquote",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"About the author: Xi Huafeng, an OceanBase technical expert, has been dedicated to optimizing the high availability and scalability of databases for 11 years. He helped with the implementation of the Paxos protocol in OceanBase Database and was a member of the OceanBase TPC-C project team. He is now a member of the OceanBase system group, dedicated to building HTAP infrastructure and working on isolation of resources for AP and TP tasks."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.a,{href:"https://open.oceanbase.com/blog/10900410",children:"Technical thoughts on the benefits of vectorized engines to HTAP"}),", we shared views of the OceanBase team on vectorized engines and introduced our ideas of dealing with complex queries by using a vectorized engine."]}),"\n",(0,o.jsx)(t.p,{children:"Hybrid transaction and analytical processing (HTAP) is supposed to run online transaction processing (OLTP) and online analytical processing (OLAP) in the same system for better performance. It helps with making business decisions in real time and facilitates innovation at lower operational costs. However, parallel running of OLTP and OLAP tends to cause resource contention because they use database resources, such as CPU, memory, and disk, in different ways. Minimizing such contention is the key to achieve HTAP and also the issue to resolve through resource isolation \u2014 the technology to be introduced in this article."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);