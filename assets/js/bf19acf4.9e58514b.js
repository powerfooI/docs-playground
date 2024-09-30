"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[1703],{97846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>_,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453);const a={title:"\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0",weight:7},c="\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0",i={id:"user_manual/user_best_practices/operation_maintenance/statistical_info_update",title:"\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0",description:"OceanBase \u6570\u636e\u5e93\u4e2d\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u8fc7\u671f\u5224\u65ad\u6807\u51c6\u4e3a\uff1a\u5982\u679c\u5f53\u524d\u8868\u589e\u91cf\u7684 DML \u6b21\u6570\uff08\u4e0a\u4e00\u6b21\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6 DML \u6b21\u6570\u5230\u672c\u6b21\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u671f\u95f4\u53d1\u751f\u7684\u589e/\u5220/\u6539\u603b\u6b21\u6570\uff09\u8d85\u8fc7\u8bbe\u7f6e\u7684\u9608\u503c\u65f6\u5c31\u4f1a\u8fc7\u671f\u3002\u9608\u503c\u7684\u9ed8\u8ba4\u503c\u662f 10%\u3002",source:"@site/docs/user_manual/user_best_practices/operation_maintenance/statistical_info_update.md",sourceDirName:"user_manual/user_best_practices/operation_maintenance",slug:"/user_manual/user_best_practices/operation_maintenance/statistical_info_update",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/statistical_info_update",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/operation_maintenance/statistical_info_update.md",tags:[],version:"current",frontMatter:{title:"\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0",weight:7},sidebar:"legacySidebar",previous:{title:"\u6269\u7f29\u5bb9",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/scale_in_out"},next:{title:"\u67e5\u770b\u53ca\u4fee\u6539\u53c2\u6570",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/view_modify_parameters"}},d={},l=[{value:"<strong>\u624b\u52a8\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f</strong>",id:"\u624b\u52a8\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0",children:(0,s.jsx)(t.strong,{children:"\u7edf\u8ba1\u4fe1\u606f\u66f4\u65b0"})})}),"\n",(0,s.jsx)(t.p,{children:"OceanBase \u6570\u636e\u5e93\u4e2d\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u8fc7\u671f\u5224\u65ad\u6807\u51c6\u4e3a\uff1a\u5982\u679c\u5f53\u524d\u8868\u589e\u91cf\u7684 DML \u6b21\u6570\uff08\u4e0a\u4e00\u6b21\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6 DML \u6b21\u6570\u5230\u672c\u6b21\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u671f\u95f4\u53d1\u751f\u7684\u589e/\u5220/\u6539\u603b\u6b21\u6570\uff09\u8d85\u8fc7\u8bbe\u7f6e\u7684\u9608\u503c\u65f6\u5c31\u4f1a\u8fc7\u671f\u3002\u9608\u503c\u7684\u9ed8\u8ba4\u503c\u662f 10%\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u624b\u52a8\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",children:(0,s.jsx)(t.strong,{children:"\u624b\u52a8\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"})}),"\n",(0,s.jsx)(t.p,{children:"\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"analyze_stmt:\nANALYZE TABLE table_name UPDATE HISTOGRAM ON column_name_list WITH INTNUM BUCKETS\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u793a\u4f8b\uff1a\u6536\u96c6\u8868 tbl1 \u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u5217\u7684\u6876\u4e2a\u6570\u4e3a 30 \u4e2a\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"ANALYZE TABLE tbl1 UPDATE HISTOGRAM ON a, b, c, d WITH 30 BUCKETS;\n"})}),"\n",(0,s.jsx)(t.p,{children:"OceanBase \u6570\u636e\u5e93 MySQL \u6a21\u5f0f\u4e0b\u7528\u4e8e\u67e5\u8be2\u76f8\u5173\u7edf\u8ba1\u4fe1\u606f\u7684\u89c6\u56fe\u5982\u4e0b\u8868\u6240\u793a:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\u89c6\u56fe\u540d\u79f0"}),(0,s.jsx)(t.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_TAB_STATISTICS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2\u8868\u7ea7\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_TAB_COL_STATISTICS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 GLOBAL \u7ea7\u522b\u7684\u5217\u7ea7\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_PART_COL_STATISTICS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 PARTITON \u7ea7\u522b\u7684\u5217\u7ea7\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_SUBPART_COL_STATISTICS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 SUBPARTITON \u7ea7\u522b\u7684\u5217\u7ea7\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_TAB_HISTOGRAMS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 GLOBAL \u7ea7\u522b\u7684\u5217\u7ea7\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_PART_HISTOGRAMS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 PARTITON \u7ea7\u522b\u7684\u5217\u7ea7\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_SUBPART_HISTOGRAMS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2 SUBPARTITON \u7ea7\u522b\u7684\u5217\u7ea7\u76f4\u65b9\u56fe\u7edf\u8ba1\u4fe1\u606f\u3002"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OCEANBASE.DBA_IND_STATISTICS"}),(0,s.jsx)(t.td,{children:"\u7528\u4e8e\u67e5\u8be2\u7d22\u5f15\u7edf\u8ba1\u4fe1\u606f\u3002"})]})]})]})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);