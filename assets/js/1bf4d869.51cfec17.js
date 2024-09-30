"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2991],{93460:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=r(74848),o=r(28453);const i={title:"\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",weight:1},t=void 0,l={id:"user_manual/user_best_practices/operation_maintenance/dic_struct",title:"\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",description:"admin \u7528\u6237\u90e8\u7f72\u7684 OBServer \u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u4e3a /home/admin/oceanbase\uff0cOBProxy \u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u4e3a /home/admin/obproxy\u3002",source:"@site/docs/user_manual/user_best_practices/operation_maintenance/dic_struct.md",sourceDirName:"user_manual/user_best_practices/operation_maintenance",slug:"/user_manual/user_best_practices/operation_maintenance/dic_struct",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/dic_struct",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/operation_maintenance/dic_struct.md",tags:[],version:"current",frontMatter:{title:"\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",weight:1},sidebar:"legacySidebar",previous:{title:"\u8fde\u63a5\u7ba1\u7406",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/connection_management"},next:{title:"\u65c1\u8def\u5bfc\u5165",permalink:"/docs-playground/docs/user_manual/user_best_practices/operation_maintenance/export"}},c={},a=[{value:"OB \u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",id:"ob-\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",level:2},{value:"OBProxy \u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",id:"obproxy-\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"admin \u7528\u6237\u90e8\u7f72\u7684 OBServer \u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u4e3a /home/admin/oceanbase\uff0cOBProxy \u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u4e3a /home/admin/obproxy\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"ob-\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",children:"OB \u5b89\u88c5\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[root@iZ0jlih98gpa0qilgrps38Z oceanbase]# tree -d\n.\n\u251c\u2500\u2500 admin\n\u251c\u2500\u2500 audit\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 cgroup -> /sys/fs/cgroup/cpu/oceanbase\n\u251c\u2500\u2500 etc\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 log\n\u251c\u2500\u2500 run\n\u251c\u2500\u2500 store\n\u2502   \u2514\u2500\u2500 test_cluster\n\u2502       \u251c\u2500\u2500 clog -> /data/log1/test_cluster/clog\n\u2502       \u251c\u2500\u2500 slog -> /data/1/test_cluster/slog\n\u2502       \u2514\u2500\u2500 sstable -> /data/1/test_cluster/sstable\n\u2514\u2500\u2500 wallet\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"admin \u76ee\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e3b\u8981\u662f\u4e00\u4e9b\u7cfb\u7edf\u5305\u7684\u6784\u5efa SQL\uff0c\u5305\u540d\u5bf9\u5e94 SQL \u6587\u4ef6\u524d\u7f00\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"bin \u76ee\u5f55"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"observer\uff1aOB \u670d\u52a1\u542f\u52a8\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ob_admin \u662f OceanBase \u6570\u636e\u5e93\u7684\u914d\u5957\u8fd0\u7ef4\u5de5\u5177\uff08ocp \u90e8\u7f72\u96c6\u7fa4\u4f1a\u81ea\u52a8\u5b89\u88c5\uff09\uff0cob_admin \u63d0\u4f9b\u4e86 slog_tool\u3001log_tool\u3001dumpsst \u548c dump_backup \u529f\u80fd\uff0c\u4e3b\u8981\u7528\u4e8e\u6392\u67e5\u6570\u636e\u4e0d\u4e00\u81f4\u3001\u4e22\u6570\u636e\u3001\u9519\u8bef\u6570\u636e\u7b49\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ob_error \u662f OceanBase \u6570\u636e\u5e93\u7684\u4e00\u4e2a\u9519\u8bef\u7801\u89e3\u6790\u5de5\u5177\uff0cob_error \u53ef\u4ee5\u6839\u636e\u60a8\u8f93\u5165\u7684\u9519\u8bef\u7801\u8fd4\u56de\u76f8\u5bf9\u5e94\u7684\u539f\u56e0\u548c\u89e3\u51b3\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"etc \u76ee\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u76ee\u5f55\u4e3b\u8981\u5173\u6ce8 observer.config.bin\u3002"}),"\n",(0,s.jsx)(n.p,{children:"observer.config.bin \u662f\u4e8c\u8fdb\u5236\u52a0\u5bc6\u6587\u4ef6\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u8981\u67e5\u770b\u5b8c\u6574\u5185\u5bb9\u9700\u8981   strings observer.config.bin\uff0c\u5e76\u4e14\u4e0d\u80fd\u624b\u52a8\u4fee\u6539\u6587\u4ef6\uff0c\u53ea\u80fd\u901a\u8fc7\u4fee\u6539\u53d8\u91cf\u4ee5\u53ca\u542f\u52a8\u65f6 -o \u6307\u5b9a\u53d8\u91cf\u4fee\u6539\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4 observer \u8d77\u4e0d\u6765\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"lib \u76ee\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"OBServer \u4f9d\u8d56\u7684 lib \u5e93\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"log"})}),"\n",(0,s.jsx)(n.p,{children:"observer \u8fd0\u884c\u65e5\u5fd7\u6587\u4ef6\u76ee\u5f55\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"observer.log\uff1aobserver \u8fd0\u884c\u65e5\u5fd7\uff0c\u540e\u7eed\u95ee\u9898\u6392\u969c\u90fd\u9700\u8981\u4f9d\u8d56\u8fd9\u4e2a\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(n.li,{children:"rootservice.log\uff1aRS \u65e5\u5fd7\uff0cRS \u4e3b\u8981\u8d1f\u8d23\u5904\u7406\u96c6\u7fa4\u7ba1\u7406\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"election.log\uff1a\u9009\u4e3e\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(n.li,{children:".wf \u65e5\u5fd7\uff1a\u6bcf\u79cd\u65e5\u5fd7 WARN \u7ea7\u522b\u4ee5\u4e0a\u7684\u65e5\u5fd7\u4f1a\u590d\u5236\u5230\u5bf9\u5e94\u7684 wf \u65e5\u5fd7\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5e26\u65e5\u671f\u7684\u65e5\u5fd7\uff1a\u6bcf\u79cd\u65e5\u5fd7\u7684\u5f52\u6863\u65e5\u5fd7\uff0c\u662f\u5426\u81ea\u52a8\u56de\u6536\u4ee5\u53ca\u4fdd\u7559\u6570\u91cf\u53ef\u4ee5\u901a\u8fc7 enable_syslog_recycle \u548c max_syslog_file_count \u6765\u63a7\u5236\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"run \u76ee\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"\u670d\u52a1\u8fd0\u884c\u7684\u4e34\u65f6\u6587\u4ef6\uff0c\u5305\u62ec socket \u4ee5\u53ca pid \u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"store \u76ee\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u5e94\u7684\u662f\u96c6\u7fa4\u7684 sstable\u3001slog\u3001clog \u505a\u7684\u8f6f\u8fde\u63a5\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"sstable \uff1a\u6570\u636e\u76ee\u5f55"}),"\n",(0,s.jsx)(n.li,{children:"slog\uff1a\u4e00\u4e9b\u5168\u5c40\u4fe1\u606f\u53d8\u66f4\u64cd\u4f5c\uff08\u5982\u65b0\u589e\u79df\u6237\u3001\u5206\u533a\u521b\u5efa\u3001\u65b0\u589e SSTable \u7b49\uff09\u7684 redolog"}),"\n",(0,s.jsx)(n.li,{children:"clog\uff1a\u4e8b\u52a1\u65e5\u5fd7\uff0c\u6570\u636e\u53d8\u66f4\u4ea7\u751f\u7684\u65e5\u5fd7\u90fd\u5728\u8fd9\u91cc"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"obproxy-\u5b89\u88c5\u76ee\u5f55\u7ed3\u6784",children:"OBProxy \u5b89\u88c5\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[root@iZ0jlih98gpa0qilgrps38Z obproxy]# tree -d\n.\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 control-config\n\u251c\u2500\u2500 etc\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 log\n\u2514\u2500\u2500 sharding-config\n"})}),"\n",(0,s.jsx)(n.p,{children:"bin\u3001etc\u3001lib \u8fd9\u4e09\u4e2a\u76ee\u5f55\u8ddf OBServer \u76ee\u5f55\u76f8\u4f3c\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"log \u76ee\u5f55"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"obproxy.log\uff1aobproxy \u8fd0\u884c\u65e5\u5fd7\uff0c\u540e\u7eed\u95ee\u9898\u6392\u969c\u90fd\u9700\u8981\u4f9d\u8d56\u8fd9\u4e2a\u65e5\u5fd7\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_error.log\uff1a\u9519\u8bef\u65e5\u5fd7\uff0c\u4f1a\u8bb0\u5f55\u6267\u884c\u9519\u8bef\u7684\u8bf7\u6c42\uff0c\u5305\u62ec ODP \u81ea\u8eab\u9519\u8bef\u548c OBServer \u8fd4\u56de\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_digest.log\uff1a\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u8bb0\u5f55\u6267\u884c\u65f6\u95f4\u5927\u4e8e\u53c2\u6570 query_digest_time_threshold \u9608\u503c\uff08\u9ed8\u8ba4 100ms\uff09\u7684\u8bf7\u6c42\u548c\u9519\u8bef\u54cd\u5e94\u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_slow.log\uff1a\u6162\u65e5\u5fd7\uff0c\u8bb0\u5f55\u6267\u884c\u65f6\u95f4\u5927\u4e8e slow_query_time_threshold \u9608\u503c\uff08\u9ed8\u8ba4 500ms\uff09\u7684\u8bf7\u6c42\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_stat.log\uff1a\u7edf\u8ba1\u65e5\u5fd7\uff0c\u9ed8\u8ba4\u6bcf\u5206\u949f\uff08monitor_stat_dump_interval \u53c2\u6570\u63a7\u5236\uff09\u8f93\u51fa\u4e00\u6b21\u3002\u901a\u8fc7\u8be5\u65e5\u5fd7\u53ef\u4ee5\u67e5\u770b ODP \u4e00\u5206\u949f\u5185 SQL \u7684\u6267\u884c\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_limit.log\uff1aOBProxy \u9650\u6d41\u65e5\u5fd7\uff0c\u5982\u679c\u53d1\u751f\u9650\u6d41\uff0c\u88ab\u9650\u6d41\u7684\u8bf7\u6c42\u5c06\u6253\u5370\u5230\u8be5\u65e5\u5fd7\u4e2d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_xflush.log\uff1a \u662f\u5bf9 WARN \u548c ERROR \u65e5\u5fd7\u7684\u8be6\u7ec6\u8865\u5145\u3002"}),"\n",(0,s.jsx)(n.li,{children:"obproxy_diagnosis.log\uff1a \u662f\u8fde\u63a5\u8bca\u65ad\u63a5\u5165\u76d1\u63a7\u7cfb\u7edf\u7684\u65e5\u5fd7\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(96540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);