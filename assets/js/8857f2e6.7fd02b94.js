"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6194],{61121:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>_,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=a(74848),t=a(28453);const i={title:"\u96c6\u7fa4\u8fd0\u7ef4",weight:2},o=void 0,r={id:"user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/cluster_operations",title:"\u96c6\u7fa4\u8fd0\u7ef4",description:"\u83b7\u53d6 OceanBase \u8be6\u7ec6\u7248\u672c\u4fe1\u606f",source:"@site/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/02_cluster_operations.md",sourceDirName:"user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql",slug:"/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/cluster_operations",permalink:"/docs-playground/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/cluster_operations",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/02_cluster_operations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u96c6\u7fa4\u8fd0\u7ef4",weight:2},sidebar:"operation_and_maintenanceSidebar",previous:{title:"\u524d\u8a00",permalink:"/docs-playground/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/introduction"},next:{title:"\u79df\u6237\u7ba1\u7406",permalink:"/docs-playground/docs/user_manual/operation_and_maintenance/operations_and_maintenance/commonly_used_sql/tenant_management"}},_={},c=[{value:"\u83b7\u53d6 OceanBase \u8be6\u7ec6\u7248\u672c\u4fe1\u606f",id:"\u83b7\u53d6-oceanbase-\u8be6\u7ec6\u7248\u672c\u4fe1\u606f",level:2},{value:"\u67e5\u8be2 cluster_name \u4e0e cluster_id",id:"\u67e5\u8be2-cluster_name-\u4e0e-cluster_id",level:2},{value:"\u83b7\u53d6\u96c6\u7fa4\u652f\u6301\u7684\u5b57\u7b26\u96c6",id:"\u83b7\u53d6\u96c6\u7fa4\u652f\u6301\u7684\u5b57\u7b26\u96c6",level:2},{value:"\u67e5\u8be2\u6240\u6709 zone \u4fe1\u606f",id:"\u67e5\u8be2\u6240\u6709-zone-\u4fe1\u606f",level:2},{value:"\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001\u4fe1\u606f",id:"\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001\u4fe1\u606f",level:2},{value:"\u67e5\u770b\u670d\u52a1\u5668\u8d44\u6e90\u914d\u7f6e",id:"\u67e5\u770b\u670d\u52a1\u5668\u8d44\u6e90\u914d\u7f6e",level:2},{value:"\u83b7\u53d6\u79df\u6237\u7684\u964d\u7ea7\u65e5\u5fd7\u6d41",id:"\u83b7\u53d6\u79df\u6237\u7684\u964d\u7ea7\u65e5\u5fd7\u6d41",level:2},{value:"\u83b7\u53d6\u96c6\u7fa4\u7684\u4ef2\u88c1\u670d\u52a1\u4fe1\u606f",id:"\u83b7\u53d6\u96c6\u7fa4\u7684\u4ef2\u88c1\u670d\u52a1\u4fe1\u606f",level:2},{value:"\u83b7\u53d6\u79df\u6237\u7684\u5408\u5e76\u8fdb\u5ea6",id:"\u83b7\u53d6\u79df\u6237\u7684\u5408\u5e76\u8fdb\u5ea6",level:2}];function d(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u83b7\u53d6-oceanbase-\u8be6\u7ec6\u7248\u672c\u4fe1\u606f",children:"\u83b7\u53d6 OceanBase \u8be6\u7ec6\u7248\u672c\u4fe1\u606f"}),"\n",(0,s.jsx)(e.p,{children:"\u4efb\u610f\u7528\u6237 (MySQL \u6a21\u5f0f\u6216 Oracle \u6a21\u5f0f) \u767b\u5f55\u901a\u8fc7\u5982\u4e0b SQL \u67e5\u8be2 OceanBase \u5b89\u88c5\u5305\u7684\u7248\u672c:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SHOW VARIABLES LIKE '%version_comment%';\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u8be2-cluster_name-\u4e0e-cluster_id",children:"\u67e5\u8be2 cluster_name \u4e0e cluster_id"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  *\nFROM\n  gv$ob_parameters\nWHERE\n  name IN ('cluster', 'cluster_id');\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u83b7\u53d6\u96c6\u7fa4\u652f\u6301\u7684\u5b57\u7b26\u96c6",children:"\u83b7\u53d6\u96c6\u7fa4\u652f\u6301\u7684\u5b57\u7b26\u96c6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  `collation_name` AS collation,\n  `character_set_name` AS charset,\n  `id`,\n  `is_default`\nFROM\n  information_schema.collations;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u8be2\u6240\u6709-zone-\u4fe1\u606f",children:"\u67e5\u8be2\u6240\u6709 zone \u4fe1\u606f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  *\nFROM\n  dba_ob_zones;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001\u4fe1\u606f",children:"\u67e5\u770b\u670d\u52a1\u5668\u72b6\u6001\u4fe1\u606f"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  /*+READ_CONSISTENCY(WEAK), QUERY_TIMEOUT(100000000)*/\n  zone,\n  svr_ip,\n  with_rootserver,\n  start_service_time,\n  stop_time,\n  status,\n  substr(\n    build_version,\n    1,\n    instr(build_version, '-') - 1\n  ) build_version\nFROM\n  dba_ob_servers\nORDER BY\n  zone,\n  svr_ip;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u67e5\u770b\u670d\u52a1\u5668\u8d44\u6e90\u914d\u7f6e",children:"\u67e5\u770b\u670d\u52a1\u5668\u8d44\u6e90\u914d\u7f6e"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"root@sys"})," \u767b\u9646\u67e5\u8be2\uff0c"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  /* MONITOR_AGENT */\n  svr_ip,\n  svr_port,\n  cpu_capacity_max AS cpu_total,\n  cpu_assigned_max AS cpu_assigned,\n  round(mem_capacity / 1024 / 1024 / 1024) mem_total_gb,\n  round(mem_assigned / 1024 / 1024 / 1024) mem_assigned_gb,\n  round((cpu_assigned_max / cpu_capacity_max), 2) AS cpu_assigned_percent,\n  round((mem_assigned / mem_capacity), 2) AS mem_assigned_percent,\n  round(data_disk_capacity / 1024 / 1024 / 1024) data_disk_capacity_gb,\n  round(data_disk_in_use / 1024 / 1024 / 1024) data_disk_in_use_gb,\n  round(\n    (data_disk_capacity - data_disk_in_use) / 1024 / 1024 / 1024\n  ) data_disk_free_gb,\n  round(log_disk_capacity / 1024 / 1024 / 1024) log_disk_capacity_gb,\n  round(log_disk_assigned / 1024 / 1024 / 1024) log_disk_assigned_gb,\n  round(log_disk_in_use / 1024 / 1024 / 1024) log_disk_in_use_gb\nFROM\n  gv$ob_servers\nORDER BY\n  svr_ip,\n  svr_port;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u83b7\u53d6\u79df\u6237\u7684\u964d\u7ea7\u65e5\u5fd7\u6d41",children:"\u83b7\u53d6\u79df\u6237\u7684\u964d\u7ea7\u65e5\u5fd7\u6d41"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  a.tenant_id,\n  ls_id,\n  svr_ip,\n  svr_port,\n  role,\n  arbitration_member,\n  degraded_list\nFROM\n  gv$ob_log_stat a,\n  dba_ob_tenants b\nWHERE\n  degraded_list <> ''\n  AND a.tenant_id = b.tenant_id\n  AND tenant_type != 'META'\nORDER BY\n  a.tenant_id,\n  svr_ip,\n  svr_port;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u83b7\u53d6\u96c6\u7fa4\u7684\u4ef2\u88c1\u670d\u52a1\u4fe1\u606f",children:"\u83b7\u53d6\u96c6\u7fa4\u7684\u4ef2\u88c1\u670d\u52a1\u4fe1\u606f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  arbitration_service_key,\n  arbitration_service,\n  previous_arbitration_service,\n  type\nFROM\n  dba_ob_arbitration_service;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u83b7\u53d6\u79df\u6237\u7684\u5408\u5e76\u8fdb\u5ea6",children:"\u83b7\u53d6\u79df\u6237\u7684\u5408\u5e76\u8fdb\u5ea6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SELECT\n  tenant_id,\n  compaction_scn,\n  100 * (\n    1 - SUM(unfinished_tablet_count) / SUM(total_tablet_count)\n  ) progress_pct\nFROM\n  gv$ob_compaction_progress\nGROUP BY\n  tenant_id,\n  compaction_scn\nORDER BY\n  compaction_scn\nLIMIT\n  20;\n"})})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>o,x:()=>r});var s=a(96540);const t={},i=s.createContext(t);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);