"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9356],{82975:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(74848),l=r(28453);const i={title:"\u673a\u5668\u7ef4\u62a4",weight:3},c="\u673a\u5668\u7ef4\u62a4",o={id:"user_manual/user_best_practices/operation_maintenance/machine_maintenance",title:"\u673a\u5668\u7ef4\u62a4",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u673a\u5668\u8fdb\u884c\u4e34\u65f6\u505c\u673a\u7ef4\u62a4\u3002",source:"@site/docs/user_manual/user_best_practices/operation_maintenance/machine_maintenance.md",sourceDirName:"user_manual/user_best_practices/operation_maintenance",slug:"/user_manual/user_best_practices/operation_maintenance/machine_maintenance",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/machine_maintenance",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/operation_maintenance/machine_maintenance.md",tags:[],version:"current",frontMatter:{title:"\u673a\u5668\u7ef4\u62a4",weight:3},sidebar:"legacySidebar",previous:{title:"OceanBase\u5982\u4f55\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/how_to_split_read_write"},next:{title:"Online DDL \u548c Offline DDL",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/online_offline_ddl"}},a={},d=[{value:"<strong>OBServer \u8282\u70b9\u505c\u673a\u7ef4\u62a4</strong>",id:"observer-\u8282\u70b9\u505c\u673a\u7ef4\u62a4",level:2},{value:"<strong>\u64cd\u4f5c\u6b65\u9aa4</strong>",id:"\u64cd\u4f5c\u6b65\u9aa4",level:3},{value:"<strong>OBProxy \u505c\u673a\u7ef4\u62a4</strong>",id:"obproxy-\u505c\u673a\u7ef4\u62a4",level:2},{value:"<strong>\u505c\u6b62 obproxy \u8fdb\u7a0b</strong>",id:"\u505c\u6b62-obproxy-\u8fdb\u7a0b",level:3},{value:"<strong>\u542f\u52a8 obproxy \u8fdb\u7a0b</strong>",id:"\u542f\u52a8-obproxy-\u8fdb\u7a0b",level:3},{value:"<strong>\u80cc\u666f\u4fe1\u606f</strong>",id:"\u80cc\u666f\u4fe1\u606f",level:4},{value:"<strong>\u64cd\u4f5c\u6b65\u9aa4</strong>",id:"\u64cd\u4f5c\u6b65\u9aa4-1",level:4},{value:"<strong>Prometheus</strong>",id:"prometheus",level:2},{value:"<strong>OBAgent</strong>",id:"obagent",level:2},{value:"<strong>OCP</strong>",id:"ocp",level:2}];function t(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u673a\u5668\u7ef4\u62a4",children:(0,s.jsx)(e.strong,{children:"\u673a\u5668\u7ef4\u62a4"})})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u673a\u5668\u8fdb\u884c\u4e34\u65f6\u505c\u673a\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"observer-\u8282\u70b9\u505c\u673a\u7ef4\u62a4",children:(0,s.jsx)(e.strong,{children:"OBServer \u8282\u70b9\u505c\u673a\u7ef4\u62a4"})}),"\n",(0,s.jsx)(e.h3,{id:"\u64cd\u4f5c\u6b65\u9aa4",children:(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c\u6b65\u9aa4"})}),"\n",(0,s.jsx)(e.p,{children:"\u91cd\u542f\u8282\u70b9\u7684\u4e3b\u8981\u6d41\u7a0b\u4e3a\uff1a\u505c\u6b62\u670d\u52a1 -> \u8f6c\u50a8 -> \u5173\u95ed\u8fdb\u7a0b -> \u542f\u52a8\u8fdb\u7a0b -> \u542f\u52a8\u670d\u52a1\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u9884\u4f30\u7ef4\u62a4\u65f6\u95f4\u8c03\u6574 server_permanent_offline_time"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"alter system server_permanent_offline_time='2h';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 OceanBase \u6570\u636e\u5e93\u4e2d\uff0cserver_permanent_offline_time \u914d\u7f6e\u9879\u7684\u540d\u79f0\u4e3a\u201c\u6c38\u4e45\u4e0b\u7ebf\u65f6\u957f\u201d\uff0c\u662f\u7528\u6765\u63a7\u5236\u96c6\u7fa4\u4e2d\u67d0\u4e2a\u8282\u70b9\u7684\u4e0d\u53ef\u7528\u65f6\u957f\uff0c\u8d85\u8fc7\u8bbe\u7f6e\u7684\u65f6\u957f\u540e\uff0cOceanBase \u6570\u636e\u5e93\u4f1a\u5c06\u5176\u8e22\u51fa\u6210\u5458\u5217\u8868\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 root \u7528\u6237\u767b\u5f55\u5230\u96c6\u7fa4\u7684 sys \u79df\u6237\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"obclient -h10.xx.xx.xx -P2883 -uroot@sys -p -A\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u8fdb\u884c\u8282\u70b9\u9694\u79bb\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8bf4\u660e"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u53ef\u4ee5\u63a5\u53d7\u8282\u70b9\u505c\u6b62\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u8df3\u8fc7\u672c\u6b65\u9aa4\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"obclient [(none)]> ALTER SYSTEM STOP SERVER 'svr_ip:svr_port';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7aef\u53e3\u9ed8\u8ba4\u4e3a 2882\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u67e5\u8be2 oceanbase.DBA_OB_SERVERS \u89c6\u56fe\u4e2d\u8be5 Server \u7684 STATUS \u5b57\u6bb5\uff0c\u53ef\u4ee5\u770b\u5230\u5b57\u6bb5\u503c\u4ecd\u4e3a ACTIVE \u4e0d\u53d8\uff0c\u4f46 STOP_TIME \u5b57\u6bb5\u7684\u503c\u7531 NULL \u53d8\u4e3a\u505c\u6b62\u670d\u52a1\u7684\u65f6\u95f4\u70b9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"STOP SERVER \u547d\u4ee4\u5728\u591a\u526f\u672c\u67b6\u6784\u7684\u57fa\u7840\u4e0a\u80fd\u591f\u8fbe\u5230\u4e1a\u52a1\u65e0\u635f\u7684\u91cd\u542f\u6548\u679c\uff0cSTOP SERVER \u547d\u4ee4\u6267\u884c\u4ee5\u4e0b\u903b\u8f91\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5c06\u5f85\u91cd\u542f\u8282\u70b9\u4e0a\u7684 Leader \u5168\u90e8\u5207\u8d70\uff0c\u5e76\u4fdd\u8bc1\u9664\u4e86\u91cd\u542f\u8282\u70b9\u4ee5\u5916\u7684\u5176\u4ed6\u8282\u70b9\u4e0a\u7684\u526f\u672c\u6ee1\u8db3\u591a\u6570\u6d3e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 Root Service \u4e0a\u5c06\u5f85\u91cd\u542f\u8282\u70b9\u6807\u8bb0\u4e3a stopped\uff08\u8282\u70b9\u72b6\u6001\u4e3a ACTIVE \u72b6\u6001\u4e14 stop_time \u5b57\u6bb5\u5927\u4e8e 0\uff09\uff0c\u5ba2\u6237\u7aef\u8bc6\u522b\u540e\uff0c\u4e0d\u4f1a\u5c06\u4e1a\u52a1\u8bf7\u6c42\u8def\u7531\u5230\u8be5\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u7ec8\u6210\u529f Stop Server \u540e\uff0c\u91cd\u542f\u8282\u70b9\u4e0d\u4f1a\u5f15\u8d77\u65e0\u4e3b\u9009\u4e3e\u53ca\u5ba2\u6237\u7aef\u62a5\u9519\u7b49\u95ee\u9898\uff0c\u5bf9\u4e1a\u52a1\u6d41\u91cf\u5b8c\u5168\u900f\u660e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5bf9\u5f85\u91cd\u542f\u7684\u8282\u70b9\u8fdb\u884c\u8f6c\u50a8\u64cd\u4f5c\uff0c\u4ee5\u4fbf\u7f29\u77ed\u91cd\u542f\u540e\u56de\u653e Redo Log \u7684\u65f6\u95f4\uff0c\u52a0\u901f\u91cd\u542f\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"obclient [(none)]> ALTER SYSTEM MINOR FREEZE SERVER = ('svr_ip:svr_port');\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u786e\u8ba4\u662f\u5426\u8f6c\u50a8\u6210\u529f\uff0c\u9700\u8981\u7b49\u5f85\u8f6c\u50a8\u7ed3\u675f\u65b9\u53ef\u6267\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM oceanbase.GV$OB_TABLET_COMPACTION_PROGRESS WHERE TYPE='MINI_MERGE'\\G\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u505c\u6b62 observer \u8fdb\u7a0b\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 admin \u7528\u6237\u767b\u5f55\u5f85\u505c\u6b62\u8fdb\u7a0b\u7684\u8282\u70b9\u6240\u5728\u7684\u673a\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u5165 /home/admin/oceanbase/bin \u76ee\u5f55\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u505c\u6b62 observer \u8fdb\u7a0b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u8fdb\u7a0b\u662f\u5426\u5df2\u505c\u6b62\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"kill `pidof observer`\nps -ef | grep observer | grep -v grep\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\uff08\u53ef\u9009\uff09\u5982\u679c\u9700\u8981\u7ef4\u4fee\u673a\u5668\uff0c\u5728\u672c\u6b65\u9aa4\u5bf9\u673a\u5668\u8fdb\u884c\u77ed\u6682\u7684\u7ef4\u4fee\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 observer \u8fdb\u7a0b\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 admin \u7528\u6237\u767b\u5f55\u5f85\u542f\u52a8\u8fdb\u7a0b\u7684\u8282\u70b9\u6240\u5728\u7684\u673a\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8 observer \u8fdb\u7a0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"[admin@xxx oceanbase]$ cd /home/admin/oceanbase  &&  ./bin/observer\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8\u8282\u70b9\u670d\u52a1\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"obclient [(none)]> ALTER SYSTEM START SERVER 'svr_ip:svr_port';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u67e5\u8be2 oceanbase.DBA_OB_SERVERS \u89c6\u56fe\u4e2d\u7684 START_SERVICE_TIME \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u8868\u793a\u8282\u70b9\u542f\u52a8\u670d\u52a1\u7684\u65f6\u95f4\u3002\u5982\u679c\u8be5\u503c\u4e3a NULL\uff0c\u5219\u8868\u793a\u8be5\u8282\u70b9\u7684\u670d\u52a1\u8fd8\u6ca1\u6709\u542f\u52a8\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"obproxy-\u505c\u673a\u7ef4\u62a4",children:(0,s.jsx)(e.strong,{children:"OBProxy \u505c\u673a\u7ef4\u62a4"})}),"\n",(0,s.jsx)(e.p,{children:"OceanBase Database Proxy\uff08\u7b80\u79f0 ODP\uff09\u662f OceanBase \u6570\u636e\u5e93\u4e13\u7528\u7684\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u6b63\u5e38\u60c5\u51b5\u4e0b\u5355\u8282\u70b9\u91cd\u542f\u5bf9\u4e1a\u52a1\u6ca1\u6709\u5f71\u54cd\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u505c\u6b62-obproxy-\u8fdb\u7a0b",children:(0,s.jsx)(e.strong,{children:"\u505c\u6b62 obproxy \u8fdb\u7a0b"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 admin \u7528\u6237\u767b\u5f55\u5230 obproxy \u8fdb\u7a0b\u6240\u5728\u7684\u673a\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b obproxy \u8fdb\u7a0b\u7684\u8fdb\u7a0b\u53f7\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ps -ef | grep obproxy\nadmin     37360      0  6 11:35 ?        00:00:09 bin/obproxy\nadmin     43055  36750  0 11:37 pts/10   00:00:00 grep --color=auto obproxy\nroot      85623      1  0 Jun02 ?        00:15:19 /home/admin/ocp_agent/obagent/obstat2 -o http://xx.xx.xx.xx:81 -c test323 __obproxy__ -f 20\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\u4e2d\u67e5\u8be2\u5230 ODP \u7684\u8fdb\u7a0b\u53f7\u4e3a 37360\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u6839\u636e\u67e5\u8be2\u5230\u7684\u8fdb\u7a0b\u53f7\uff0c\u505c\u6b62 obproxy \u8fdb\u7a0b\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$kill -9 37360\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u505c\u6b62\u6210\u529f\u540e\uff0c\u518d\u6b21\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4 obproxy \u8fdb\u7a0b\u5df2\u4e0d\u5b58\u5728\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ps -ef|grep obproxy\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u542f\u52a8-obproxy-\u8fdb\u7a0b",children:(0,s.jsx)(e.strong,{children:"\u542f\u52a8 obproxy \u8fdb\u7a0b"})}),"\n",(0,s.jsx)(e.h4,{id:"\u80cc\u666f\u4fe1\u606f",children:(0,s.jsx)(e.strong,{children:"\u80cc\u666f\u4fe1\u606f"})}),"\n",(0,s.jsx)(e.p,{children:"\u652f\u6301\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u6765\u542f\u52a8 obproxy \u8fdb\u7a0b\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u6307\u5b9a -r \u53c2\u6570\u6765\u6307\u5b9a OceanBase \u96c6\u7fa4\u7684 RootServer \u4fe1\u606f\u3002\u8be5\u542f\u52a8\u65b9\u5f0f\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\uff0c\u4e00\u822c\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\u9636\u6bb5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u6307\u5b9a obproxy_config_server_url \u53c2\u6570\u9879\u6765\u67e5\u8be2\u83b7\u53d6 OceanBase \u96c6\u7fa4\u7684 RootServer \u4fe1\u606f\u3002\u8be5\u65b9\u5f0f\u9700\u8981\u914d\u7f6e obproxy_config_server_url\uff0c\u6545\u4f1a\u4f9d\u8d56 Config Server \u7684\u542f\u52a8\uff0c\u5efa\u8bae\u4f7f\u7528\u8be5\u65b9\u5f0f\u542f\u52a8 ODP\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u64cd\u4f5c\u6b65\u9aa4-1",children:(0,s.jsx)(e.strong,{children:"\u64cd\u4f5c\u6b65\u9aa4"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 admin \u7528\u6237\u767b\u5f55\u5230\u5f85\u542f\u52a8\u7684 ODP \u6240\u5728\u7684\u673a\u5668\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8fdb\u5165 ODP \u7684\u5b89\u88c5\u76ee\u5f55\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u52a8 ODP\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u6307\u5b9a -r \u53c2\u6570\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$./bin/obproxy -p6789 -r'ip:port' -e -n appname -o obproxy_config_server_url='' -c cluster_name\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$./bin/obproxy -r'10.10.10.1:26506;10.10.10.2:26506' -n test -c mycluster\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u542f\u52a8\u547d\u4ee4\u4e2d\u6307\u5b9a obproxy_config_server_url \u53c2\u6570\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$./bin/obproxy -p6789 -e -n appname -o obproxy_config_server_url='your_config_url'\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$./bin/obproxy -n test -o obproxy_config_server_url='http://xx.xx.xx.xx:8877/obproxy_config'\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u542f\u52a8\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b obproxy \u8fdb\u7a0b\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ps -ef|grep obproxy\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"prometheus",children:(0,s.jsx)(e.strong,{children:"Prometheus"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u76f4\u63a5\u91cd\u542f\uff0c\u4f46\u662f\u8fd9\u6bb5\u65f6\u95f4\u7684\u76d1\u63a7\u544a\u8b66\u4f1a\u6ca1\u529e\u6cd5\u53d1\u51fa\u3002\u6216\u8005\u91cd\u65b0\u90e8\u7f72\u4e00\u4e2a Prometheus\uff0c\u8ba9\u5176\u63a5\u7ba1\u8fd9\u4e2a\u96c6\u7fa4\uff0c\u5e76\u5c06\u5f53\u524d Prometheus \u4e0b\u7ebf\u6389\u3002\u4f46\u662f\u4f7f\u7528\u6b64\u65b9\u6cd5\u540e\u5386\u53f2\u7684\u76d1\u63a7\u6570\u636e\u53ef\u80fd\u5c31\u6ca1\u529e\u6cd5\u67e5\u770b\u4e86\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"obagent",children:(0,s.jsx)(e.strong,{children:"OBAgent"})}),"\n",(0,s.jsx)(e.p,{children:"OBAgent \u662f\u4e00\u4e2a\u76d1\u63a7\u91c7\u96c6\u6846\u67b6\u3002OBAgent \u652f\u6301\u63a8\u3001\u62c9\u4e24\u79cd\u6570\u636e\u91c7\u96c6\u6a21\u5f0f\uff0c\u53ef\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\u3002\u6b63\u5e38\u60c5\u51b5\u4e0b\u505c\u6b62\u673a\u5668\u7684 OBAgent \u4f1a\u5bfc\u81f4\u76d1\u63a7\u4e0d\u5230\u5bf9\u5e94\u673a\u5668\u7684\u4fe1\u606f\uff0c\u673a\u5668\u7ef4\u62a4\u76f4\u63a5\u505c\u5c31\u53ef\u4ee5\u4e86\uff0c\u91cd\u542f\u540e\u6062\u590d\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"ocp",children:(0,s.jsx)(e.strong,{children:"OCP"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f85\u8865\u5145\uff0c\u656c\u8bf7\u671f\u5f85\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>o});var s=r(96540);const l={},i=s.createContext(l);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);