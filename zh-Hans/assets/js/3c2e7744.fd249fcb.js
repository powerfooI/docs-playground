"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[5840],{6527:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=n(4848),s=n(8453);const o={slug:"io-isolation",title:"IO Isolation in OceanBase Database"},i=void 0,r={permalink:"/docs-playground/zh-Hans/blog/io-isolation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/io-isolation.md",source:"@site/blog/io-isolation.md",title:"IO Isolation in OceanBase Database",description:"Sun Jianyun, an OceanBase technical expert",date:"2024-06-03T12:05:44.278Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:9.065,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"io-isolation",title:"IO Isolation in OceanBase Database"},unlisted:!1,prevItem:{title:"OceanBase 4.0 interpretation: Reduce the threshold of distributed database use, talk about our thinking on small specifications",permalink:"/docs-playground/zh-Hans/blog/miniaturization"},nextItem:{title:"Challenges facing AP performance improvement",permalink:"/docs-playground/zh-Hans/blog/challenges-facing-AP-performance-improvement"}},c={authorsImageUrls:[]},l=[];function d(e){const a={a:"a",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Sun Jianyun, an OceanBase technical expert"})}),"\n",(0,t.jsx)(a.p,{children:"He used to be a member of the TPC-C project and the technical support team for Double 11 shopping festivals, and is now engaged in the design, research, and development of I/O scheduling, DDL capabilities, and other work related to storage engines."}),"\n",(0,t.jsxs)(a.p,{children:["In ",(0,t.jsx)(a.a,{href:"https://open.oceanbase.com/blog/10900412",children:"Why resource isolation matters to HTAP? "}),", we talked about why hybrid transaction/analytical processing (HTAP) relies on resource isolation and how to implement it. Resource isolation is a capability. Many scenarios can be derived from it, such as HTAP, multitenancy, and pay-as-you-go. Based on resource isolation and cloud-based resource pools, all kinds of resources can be allocated on demand. Isolation of resources such as CPU and memory is already supported in OceanBase Database V4.0. OceanBase Database V4.1 supports enhanced disk I/O isolation and provides users a simple and flexible way to use this feature."]}),"\n",(0,t.jsx)(a.p,{children:"We believe that disk I/O isolation is an essential part of resource isolation. Disk I/O isolation enhances and completes the resource control capabilities for users. This article describes some thoughts of the OceanBase team on disk I/O isolation, how it is configured in OceanBase Database, and the disk I/O isolation performance testing of OceanBase Database V4.1."})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>r});var t=n(6540);const s={},o=t.createContext(s);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);