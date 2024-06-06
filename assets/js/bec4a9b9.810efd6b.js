"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2755],{9303:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(74848),o=s(28453);const r={title:"\u6574\u4f53\u67b6\u6784",weight:2},c="\u6574\u4f53\u67b6\u6784",a={id:"about_oceanbase/overall_architecture",title:"\u6574\u4f53\u67b6\u6784",description:"OceanBase \u96c6\u7fa4\u9ed8\u8ba4\u662f n-n-n \u7684\u4e09\u526f\u672c\u67b6\u6784\uff0c\u4ee3\u8868\u4e09\u4e2a\u53ef\u7528\u533a\uff08Zone\uff09\uff0c\u6bcf\u4e2a Zone \u5185\u90fd\u6709 n \u4e2a\u8282\u70b9\u3002",source:"@site/docs/about_oceanbase/overall_architecture.md",sourceDirName:"about_oceanbase",slug:"/about_oceanbase/overall_architecture",permalink:"/docs-playground/docs/about_oceanbase/overall_architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/about_oceanbase/overall_architecture.md",tags:[],version:"current",frontMatter:{title:"\u6574\u4f53\u67b6\u6784",weight:2}},i={},l=[{value:"<strong>\u540d\u8bcd\u5b9a\u4e49</strong>",id:"\u540d\u8bcd\u5b9a\u4e49",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u6574\u4f53\u67b6\u6784",children:(0,t.jsx)(n.strong,{children:"\u6574\u4f53\u67b6\u6784"})}),"\n",(0,t.jsx)(n.p,{children:"OceanBase \u96c6\u7fa4\u9ed8\u8ba4\u662f n-n-n \u7684\u4e09\u526f\u672c\u67b6\u6784\uff0c\u4ee3\u8868\u4e09\u4e2a\u53ef\u7528\u533a\uff08Zone\uff09\uff0c\u6bcf\u4e2a Zone \u5185\u90fd\u6709 n \u4e2a\u8282\u70b9\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4e0b\u56fe\u6240\u793a\u662f 2-2-2 \u7684\u96c6\u7fa4\u67b6\u6784\u56fe\uff0c\u6bcf\u4e2a Zone \u5185\u6709\u4e24\u4e2a\u8282\u70b9\uff0c\u9ed8\u8ba4\u6570\u636e\u5206\u7247\u662f\u4e09\u526f\u672c\u3002\u5e94\u7528\u8bbf\u95ee\u9ed8\u8ba4\u901a\u8fc7 OBProxy \u8fdb\u884c\u8fde\u63a5\uff0cOBProxy \u4f1a\u89e3\u6790 SQL \u5185\u5bb9\uff0c\u81ea\u52a8\u5c06\u8bf7\u6c42\u4e0b\u53d1\u5230\u5bf9\u5e94\u7684 OBServer \u5e76\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image.png",src:s(94853).A+"",width:"750",height:"523"})}),"\n",(0,t.jsx)(n.h2,{id:"\u540d\u8bcd\u5b9a\u4e49",children:(0,t.jsx)(n.strong,{children:"\u540d\u8bcd\u5b9a\u4e49"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u526f\u672c"})}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u7684\u662f\u5b9e\u9645\u7684\u5206\u7247\u6570\u636e\uff0c\u5355\u5206\u7247\u6700\u5927\u7684\u526f\u672c\u6570\u91cf\u4e0d\u4f1a\u8d85\u8fc7 Zone \u7684\u6570\u91cf\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Locality"})}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6765\u63cf\u8ff0\u4e00\u4e2a\u8868\u7684\u526f\u672c\u7c7b\u578b\u4ee5\u53ca\u5206\u5e03\u4f4d\u7f6e\u7684\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Resource Pool"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8d44\u6e90\u6c60\uff0c\u6bcf\u4e2a Unit \u90fd\u5f52\u5c5e\u4e8e\u4e00\u4e2a\u8d44\u6e90\u6c60\uff0c\u6bcf\u4e2a\u8d44\u6e90\u6c60\u7531\u82e5\u5e72\u4e2a Unit \u7ec4\u6210\uff0c\u8d44\u6e90\u6c60\u662f\u8d44\u6e90\u5206\u914d\u7684\u57fa\u672c\u5355\u4f4d\uff0c\u540c\u4e00\u4e2a\u8d44\u6e90\u6c60\u5185\u7684\u5404\u4e2a Unit \u5177\u6709\u76f8\u540c\u7684\u8d44\u6e90\u89c4\u683c\uff0c\u5373\u8be5\u8d44\u6e90\u6c60\u5185 Unit \u7684\u7269\u7406\u8d44\u6e90\u5927\u5c0f\u90fd\u76f8\u540c\u3002\u60a8\u53ef\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-10000000001699432",children:"\u521b\u5efa\u8d44\u6e90\u6c60"})," \u4e00\u6587\u521b\u5efa\u8d44\u6e90\u6c60\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Server"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u4ee3\u8868 OBServer\uff0cOceanBase \u7684\u6570\u636e\u5e93\u670d\u52a1\uff0c\u6bcf\u4e2a Zone \u5185\u6709 1~n \u4e2a Server\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tablet"})}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5206\u7247\uff0c\u5b58\u50a8\u5c42\u4ee5\u4e00\u5f20\u8868\u6216\u8005\u4e00\u4e2a\u5206\u533a\u4e3a\u7c92\u5ea6\u63d0\u4f9b\u6570\u636e\u5b58\u50a8\u4e0e\u8bbf\u95ee\uff0c\u6bcf\u4e2a\u5206\u533a\u5bf9\u5e94\u4e00\u4e2a\u7528\u4e8e\u5b58\u50a8\u6570\u636e\u7684 Tablet\uff0c\u7528\u6237\u5b9a\u4e49\u7684\u975e\u5206\u533a\u8868\u4e5f\u4f1a\u5bf9\u5e94\u4e00\u4e2a Tablet\uff0c\u6bcf\u4e2a\u5206\u7247\u7684\u526f\u672c\u6570\u91cf\u7531 Locality \u5b9a\u4e49\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Tenant"})}),"\n",(0,t.jsx)(n.p,{children:"\u79df\u6237\uff0c\u7c7b\u4f3c\u4e8e\u4f20\u7edf\u6570\u636e\u5e93\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\uff0c\u79df\u6237\u901a\u8fc7\u8d44\u6e90\u6c60\u4e0e\u8d44\u6e90\u5173\u8054\uff0c\u4ece\u800c\u72ec\u5360\u4e00\u5b9a\u7684\u8d44\u6e90\u914d\u989d\uff0c\u53ef\u4ee5\u52a8\u6001\u8c03\u6574\u8d44\u6e90\u914d\u989d\u3002\u5728\u79df\u6237\u4e0b\u53ef\u4ee5\u521b\u5efa Database\u3001\u8868\u3001\u7528\u6237\u7b49\u6570\u636e\u5e93\u5bf9\u8c61\u3002\u90e8\u7f72 OceanBase \u6570\u636e\u5e93\u65f6\u9ed8\u8ba4\u521b\u5efa sys \u79df\u6237\uff0csys \u79df\u6237\u4ec5\u505a\u96c6\u7fa4\u7ba1\u7406\u4f7f\u7528\uff0c\u4e1a\u52a1\u4f7f\u7528\u6216\u8005\u538b\u6d4b\u5efa\u8bae\u521b\u5efa\u81ea\u5df1\u7684\u4e1a\u52a1\u79df\u6237\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u79df\u6237\u65f6\u5fc5\u987b\u5148\u521b\u5efa Unit \u548c Resource Pool\uff0c\u6216\u8005\u4f7f\u7528\u5df2\u6709\u7684 Unit \u548c Resource Pool\uff0c\u60a8\u53ef\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-10000000001702215",children:"\u521b\u5efa\u7528\u6237\u79df\u6237"})," \u4e00\u6587\u521b\u5efa\u7528\u6237\u79df\u6237\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Unit"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8d44\u6e90\u5355\u5143\uff0cOceanBase \u6570\u636e\u5e93\u6309\u7167 Unit \u6765\u7ba1\u7406\u7269\u7406\u8d44\u6e90\uff0c\u662f CPU\u3001\u5185\u5b58\u3001\u5b58\u50a8\u7a7a\u95f4\u3001IOPS \u7b49\u7269\u7406\u8d44\u6e90\u7684\u96c6\u5408\u3002\u60a8\u53ef\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-cn-10000000001699430",children:"\u521b\u5efa\u8d44\u6e90\u5355\u5143"})," \u4e00\u6587\u521b\u5efa\u8d44\u6e90\u5355\u5143\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Zone"})}),"\n",(0,t.jsx)(n.p,{children:"\u96c6\u7fa4\u7684\u53ef\u7528\u533a\uff0c\u4e0d\u540c\u7684\u53ef\u7528\u533a\u53ef\u4ee5\u5728\u540c\u4e00\u673a\u623f\uff0c\u4e5f\u53ef\u4ee5\u5728\u4e0d\u540c\u673a\u623f\uff1b\u6bcf\u4e2a Zone \u5185\u7684\u670d\u52a1\u5668\u4e5f\u540c\u6837\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u673a\u623f\u4e5f\u53ef\u4ee5\u4e0d\u540c\u673a\u623f\uff0c\u5efa\u8bae\u6bcf\u4e2a Zone \u5185\u7684\u670d\u52a1\u5668\u90fd\u90e8\u7f72\u5728\u540c\u4e00\u673a\u623f\uff0c\u5e76\u4e14\u5efa\u8bae Zone \u4e4b\u95f4\u7684\u7f51\u7edc\u5ef6\u8fdf\u4e0d\u8981\u592a\u9ad8\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},94853:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/framework1-4373bf8bf856c9b64705c3b13f37e4b6.jpeg"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var t=s(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);