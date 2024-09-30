"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6750],{62607:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>_});var t=n(74848),r=n(28453);const d={title:"SQL \u5ba1\u8ba1\u89c6\u56fe",weight:2},i="SQL \u5ba1\u8ba1\u89c6\u56fe",c={id:"user_manual/user_best_practices/performance_tuning/sql_audit",title:"SQL \u5ba1\u8ba1\u89c6\u56fe",description:"SQL \u5ba1\u8ba1\u89c6\u56fe\u53ef\u4ee5\u67e5\u770b\u5728 OceanBase \u6570\u636e\u5e93\u91cc\u6267\u884c\u8fc7\u7684\u6240\u6709 SQL\uff08\u5305\u542b\u6267\u884c\u5931\u8d25 SQL\uff09\u3002\u8fd9\u5bf9\u5f00\u53d1\u540c\u5b66\u4e86\u89e3\u81ea\u5df1\u7684\u4e1a\u52a1 SQL \u548c\u5b9a\u4f4d\u95ee\u9898\u7ec6\u8282\u975e\u5e38\u6709\u5e2e\u52a9\u3002",source:"@site/docs/user_manual/user_best_practices/performance_tuning/sql_audit.md",sourceDirName:"user_manual/user_best_practices/performance_tuning",slug:"/user_manual/user_best_practices/performance_tuning/sql_audit",permalink:"/docs-playground/docs/user_manual/user_best_practices/performance_tuning/sql_audit",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/performance_tuning/sql_audit.md",tags:[],version:"current",frontMatter:{title:"SQL \u5ba1\u8ba1\u89c6\u56fe",weight:2},sidebar:"legacySidebar",previous:{title:"SQL \u6027\u80fd\u8c03\u4f18 \u2014\u2014 \u8fde\u63a5\uff08JOIN\uff09\u65b9\u5f0f\u8c03\u4f18",permalink:"/docs-playground/docs/user_manual/user_best_practices/performance_tuning/join_optimize"},next:{title:"OBServer \u8282\u70b9 core \u6389\u540e\u5982\u4f55\u6536\u96c6\u5806\u6808",permalink:"/docs-playground/docs/user_manual/user_best_practices/trouble_shooting/collection_stack"}},l={},_=[{value:"<strong>SQL \u5ba1\u8ba1\u89c6\u56fe\u6982\u8ff0</strong>",id:"sql-\u5ba1\u8ba1\u89c6\u56fe\u6982\u8ff0",level:2},{value:"<strong>\u5982\u4f55\u67e5\u770b SQL \u5ba1\u8ba1\u89c6\u56fe</strong>",id:"\u5982\u4f55\u67e5\u770b-sql-\u5ba1\u8ba1\u89c6\u56fe",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"sql-\u5ba1\u8ba1\u89c6\u56fe",children:(0,t.jsx)(s.strong,{children:"SQL \u5ba1\u8ba1\u89c6\u56fe"})})}),"\n",(0,t.jsx)(s.p,{children:"SQL \u5ba1\u8ba1\u89c6\u56fe\u53ef\u4ee5\u67e5\u770b\u5728 OceanBase \u6570\u636e\u5e93\u91cc\u6267\u884c\u8fc7\u7684\u6240\u6709 SQL\uff08\u5305\u542b\u6267\u884c\u5931\u8d25 SQL\uff09\u3002\u8fd9\u5bf9\u5f00\u53d1\u540c\u5b66\u4e86\u89e3\u81ea\u5df1\u7684\u4e1a\u52a1 SQL \u548c\u5b9a\u4f4d\u95ee\u9898\u7ec6\u8282\u975e\u5e38\u6709\u5e2e\u52a9\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"sql-\u5ba1\u8ba1\u89c6\u56fe\u6982\u8ff0",children:(0,t.jsx)(s.strong,{children:"SQL \u5ba1\u8ba1\u89c6\u56fe\u6982\u8ff0"})}),"\n",(0,t.jsxs)(s.p,{children:["SQL \u5ba1\u8ba1\u89c6\u56fe ",(0,t.jsx)(s.code,{children:"gv$ob_sql_audit"})," \u662f\u865a\u62df\u8868\uff0c\u662f\u5185\u5b58\u4e2d\u4e00\u4e2a FIFO \u961f\u5217\u3002OceanBase \u6570\u636e\u5e93 3.x \u7248\u672c\u662f ",(0,t.jsx)(s.code,{children:"gv$sql_audit"})," \u865a\u62df\u8868\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u529f\u80fd\u7684\u5f00\u542f\u548c\u6570\u636e\u5927\u5c0f\u662f\u901a\u8fc7\u4e0b\u9762\u7684 OceanBase \u96c6\u7fa4\u53c2\u6570\u63a7\u5236\u7684\u3002"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u53c2\u6570\u540d"}),(0,t.jsx)(s.th,{children:"\u53c2\u6570\u503c"}),(0,t.jsx)(s.th,{children:"\u53c2\u6570\u542b\u4e49"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"enable_sql_audit"}),(0,t.jsx)(s.td,{children:"TRUE"}),(0,t.jsx)(s.td,{children:"\u6307\u5b9a\u662f\u5426\u5f00\u542f SQL \u5ba1\u8ba1\u3002\u9ed8\u8ba4 TRUE \u662f\u5f00\u542f\u3002FALSE \u662f\u5173\u95ed\u3002"})]})})]}),"\n",(0,t.jsx)(s.p,{children:"SQL \u5ba1\u8ba1\u80fd\u4fdd\u7559\u7684\u6570\u636e\u5927\u5c0f\u548c\u79df\u6237\u5185\u5b58\u8d44\u6e90\u7684\u5927\u5c0f\u4e5f\u6709\u5173\u7cfb\uff0c\u901a\u5e38\u4e0d\u4f1a\u7279\u522b\u5927\u3002\u5efa\u8bae\u81ea\u884c\u5b9e\u65f6\u5c06 SQL \u5ba1\u8ba1\u89c6\u56fe\u7684\u6570\u636e\u62bd\u53d6\u8d70\uff0c\u4e4b\u540e\u505a\u4e8c\u6b21\u5206\u6790\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u5728\u79df\u6237\u91cc\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5f00\u542f\u6216\u5173\u95ed SQL \u5ba1\u8ba1\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"set global ob_enable_sql_audit = on;\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u89c6\u56fe\u5217\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"\u5217\u540d"}),(0,t.jsx)(s.th,{children:"\u542b\u4e49"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SVR_IP"}),(0,t.jsx)(s.td,{children:"SQL \u6267\u884c\u7684 OBServer \u8282\u70b9 IP"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SVR_PORT"}),(0,t.jsx)(s.td,{children:"SQL \u6267\u884c\u7684 OBServer \u8282\u70b9\u7aef\u53e3"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"REQUEST_ID"}),(0,t.jsx)(s.td,{children:"\u552f\u4e00\u6807\u8bc6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TRACE_ID"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684 TRACE_ID \u4fe1\u606f\uff0c\u5728 OBServer \u8282\u70b9\u65e5\u5fd7\u91cc\u53ef\u4ee5\u5173\u8054\u67e5\u8be2\u76f8\u5173\u65e5\u5fd7"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SID"}),(0,t.jsx)(s.td,{children:"SQL \u6267\u884c\u7684 OBServer \u8282\u70b9\u4e0a\u7684\u4f1a\u8bdd ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"CLIENT_IP"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u5ba2\u6237\u7aef IP\uff0c\u901a\u5e38\u662f OBProxy IP"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TENANT_ID"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u79df\u6237 ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"TENANT_NAME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u79df\u6237\u540d\u79f0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"USER_NAME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u79df\u6237\u5185\u90e8\u7528\u6237\u540d"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"USER_CLIENT_IP"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u5b9e\u9645\u5ba2\u6237\u7aef IP"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DB_ID"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u6570\u636e\u5e93 ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DB_NAME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7684\u6570\u636e\u5e93\u540d\u79f0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"SQL_ID"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684 SQL_ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"QUERY_SQL"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u6587\u672c\uff0c\u5982\u679c\u592a\u957f\u4f1a\u622a\u65ad"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PLAN_ID"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u6267\u884c\u8ba1\u5212 ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"AFFECTED_ROWS"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u5199\u5f71\u54cd\u884c\u6570"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RETURN_ROWS"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u8fd4\u56de\u884c\u6570"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PARTITION_CNT"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u8bbf\u95ee\u7684\u5206\u533a\u6570\u91cf"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"RET_CODE"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u8fd4\u56de\u4ee3\u7801"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"EVENT"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u4e3b\u8981\u7b49\u5f85\u4e8b\u4ef6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"PLAN_TYPE"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u7684\u6267\u884c\u8ba1\u5212\u7c7b\u578b 1\uff1a\u672c\u5730 SQL\uff1b2\uff1a\u8fdc\u7a0b SQL\uff1b3\uff1a\u5206\u5e03\u5f0f SQL"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"IS_HIT_PLAN"}),(0,t.jsx)(s.td,{children:"\u662f\u5426\u547d\u4e2d\u6267\u884c\u8ba1\u5212"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"REQUEST_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u65f6\u95f4\u70b9\uff08\u65f6\u95f4\u6233\u7c7b\u578b\uff0c\u53ef\u901a\u8fc7 usec_to_time \u8f6c\u6362\u4e3a\u53ef\u8bfb\u65f6\u95f4\u683c\u5f0f\uff09"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ELAPSED_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u603b\u8017\u65f6"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"NET_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u7f51\u7edc\u6d88\u8017\u65f6\u95f4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"QUEUE_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u5185\u90e8\u6392\u961f\u65f6\u95f4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DECODE_TIME"}),(0,t.jsx)(s.td,{children:"\u51fa\u961f\u5217\u540e decode \u65f6\u95f4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"GET_PLAN_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u6267\u884c\u8ba1\u5212\u751f\u6210\u65f6\u95f4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"EXECUTE_TIME"}),(0,t.jsx)(s.td,{children:"\u8be5 SQL \u5b9e\u9645\u5185\u90e8\u6267\u884c\u65f6\u95f4\uff08\u4e0d\u5305\u62ec CPU \u6392\u961f\u65f6\u95f4\uff09"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"\u5982\u4f55\u67e5\u770b-sql-\u5ba1\u8ba1\u89c6\u56fe",children:(0,t.jsx)(s.strong,{children:"\u5982\u4f55\u67e5\u770b SQL \u5ba1\u8ba1\u89c6\u56fe"})}),"\n",(0,t.jsx)(s.p,{children:"\u60a8\u53ef\u5728 sys \u79df\u6237\u6216\u4e1a\u52a1\u79df\u6237\u4e2d\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u67e5\u770b SQL \u5ba1\u8ba1\u89c6\u56fe\uff0c\u5728 sys \u79df\u6237\u4e2d\u6267\u884c\u65f6\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u79df\u6237\u7684 SQL \u6570\u636e\uff0c\u5728\u4e1a\u52a1\u79df\u6237\u4e2d\u6267\u884c\u4ec5\u53ef\u67e5\u770b\u81ea\u8eab\u79df\u6237\u7684 SQL \u6570\u636e\u3002"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b\u8fd1\u671f\u6240\u6709 SQL"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT /*+ read_consistency(weak) ob_querytimeout(100000000) */  substr(usec_to_time(request_time),1,19) request_time_, s.svr_ip, s.client_Ip, s.sid,s.tenant_id, s.tenant_name, s.user_name, s.db_name, s.query_sql, s.affected_rows, s.return_rows, s.ret_code, s.event, s.elapsed_time, s.queue_time, s.execute_time, round(s.request_memory_used/1024/1024/1024,2) req_mem_mb, plan_type, is_executor_rpc, is_inner_sql, trace_id \nFROM gv$ob_sql_audit s\nWHERE 1=1  and s.tenant_id = 1002\n and user_name='u_tpcc' \n and request_time >= time_to_usec(DATE_SUB(current_timestamp, INTERVAL 30 MINUTE) )\nORDER BY request_time DESC\nLIMIT 100;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["request_time \u662f\u65f6\u95f4\u6233\uff0c\u53ef\u901a\u8fc7\u51fd\u6570 ",(0,t.jsx)(s.code,{children:"usec_to_time"})," \u548c ",(0,t.jsx)(s.code,{children:"time_to_usec"})," \u8fdb\u884c\u65f6\u95f4\u6233\u548c\u5fae\u79d2\u6570\u7684\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u5206\u6790\u7edf\u8ba1\u8fd1\u671f\u6240\u6709 SQL"}),"\n",(0,t.jsx)(s.p,{children:"\u6839\u636e sql_id \u7edf\u8ba1\u5e73\u5747\u603b\u8017\u65f6\u3001\u5e73\u5747\u6267\u884c\u65f6\u95f4\u7b49\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT sql_id, count(*), round(avg(elapsed_time)) avg_elapsed_time, round(avg(execute_time)) avg_exec_time\nFROM gv$ob_sql_audit s\nWHERE 1=1  and s.tenant_id = 1002\n and user_name='u_tpcc' \n and request_time >= time_to_usec(DATE_SUB(current_timestamp, INTERVAL 30 MINUTE) )\nGROUP BY sql_id\norder by avg_elapsed_time desc \n;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b\u62a5\u9519\u7684 SQL"}),"\n",(0,t.jsx)(s.p,{children:"ret_code \u662f SQL \u6267\u884c\u62a5\u9519\u65f6\u7684\u9519\u8bef\u7801\uff0c\u65e0\u62a5\u9519\u65f6\u4e3a 0\uff0c\u51fa\u73b0\u62a5\u9519\u65f6\u9519\u8bef\u7801\u4e3a\u8d1f\u6570\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT /*+ read_consistency(weak) ob_querytimeout(100000000) */  substr(usec_to_time(request_time),1,19) request_time_, s.svr_ip, s.client_Ip, s.sid,s.tenant_id, s.tenant_name, s.user_name, s.db_name, s.sql_id,  s.query_sql, s.affected_rows, s.return_rows, s.ret_code, s.event, s.elapsed_time, s.queue_time, s.execute_time, round(s.request_memory_used/1024/1024/1024,2) req_mem_mb, plan_type, is_executor_rpc, is_inner_sql, trace_id \nFROM gv$ob_sql_audit s\nWHERE 1=1  and s.tenant_id = 1002\n and user_name='u_tpcc' \n and ret_code < 0\n and request_time >= time_to_usec(DATE_SUB(current_timestamp, INTERVAL 30 MINUTE) )\nORDER BY request_time DESC\nLIMIT 500;\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b\u8fdc\u7a0b SQL \u548c\u5206\u5e03\u5f0f SQL"}),"\n",(0,t.jsx)(s.p,{children:"plan_type \u7684\u503c\u6709\u4e09\u4e2a\uff1a1 \u8868\u793a\u672c\u5730 SQL\uff1b2 \u8868\u793a\u8fdc\u7a0b SQL\uff1b3 \u8868\u793a\u5206\u5e03\u5f0f SQL\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT /*+ read_consistency(weak) ob_querytimeout(100000000) */  substr(usec_to_time(request_time),1,19) request_time_, s.svr_ip, s.client_Ip, s.sid,s.tenant_id, s.tenant_name, s.user_name, s.db_name, s.sql_id,  s.query_sql, s.affected_rows, s.return_rows, s.ret_code, s.event, s.elapsed_time, s.queue_time, s.execute_time, round(s.request_memory_used/1024/1024/1024,2) req_mem_mb, plan_type, is_executor_rpc, is_inner_sql, trace_id \nFROM gv$ob_sql_audit s\nWHERE 1=1  and s.tenant_id = 1002\n and user_name='u_tpcc' \n and plan_type > 1\n and request_time >= time_to_usec(DATE_SUB(current_timestamp, INTERVAL 30 MINUTE) )\nORDER BY request_time DESC\nLIMIT 500;\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u8fdc\u7a0b SQL \u7684\u51fa\u73b0\u9700\u8981\u7ed3\u5408\u4e8b\u52a1\u7684\u4e1a\u52a1\u903b\u8f91\u5206\u6790\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(96540);const r={},d=t.createContext(r);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);