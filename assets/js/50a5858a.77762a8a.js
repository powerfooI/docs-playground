"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9402],{16620:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>_,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=s(74848),t=s(28453);const a={title:"\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528SQL",weight:4},_="\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528 SQL",o={id:"operation_maintenance/common_sql/cluster_resource",title:"\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528SQL",description:"\u672c\u6587\u4ecb\u7ecd\u67e5\u8be2\u96c6\u7fa4\u8d44\u6e90\u7684\u5e38\u7528 SQL\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u8be2\u96c6\u7fa4\u5f53\u524d\u5206\u914d\u60c5\u51b5\uff0c\u4ee5\u53ca\u5404\u79df\u6237\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002",source:"@site/docs/operation_maintenance/common_sql/cluster_resource.md",sourceDirName:"operation_maintenance/common_sql",slug:"/operation_maintenance/common_sql/cluster_resource",permalink:"/docs-playground/docs/operation_maintenance/common_sql/cluster_resource",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/operation_maintenance/common_sql/cluster_resource.md",tags:[],version:"current",frontMatter:{title:"\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528SQL",weight:4}},r={},c=[];function d(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528-sql",children:(0,i.jsx)(e.strong,{children:"\u96c6\u7fa4\u8d44\u6e90\u5e38\u7528 SQL"})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u4ecb\u7ecd\u67e5\u8be2\u96c6\u7fa4\u8d44\u6e90\u7684\u5e38\u7528 SQL\uff0c\u4e3b\u8981\u7528\u4e8e\u67e5\u8be2\u96c6\u7fa4\u5f53\u524d\u5206\u914d\u60c5\u51b5\uff0c\u4ee5\u53ca\u5404\u79df\u6237\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b OceanBase \u96c6\u7fa4 CPU \u5206\u914d\u603b\u91cf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'show parameters where name="cpu_count";\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b OceanBase \u96c6\u7fa4\u5185\u5b58\u5206\u914d\u603b\u91cf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show parameters where name in ('memory_limit','memory_limit_percentage','system_memory');\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b OceanBase \u96c6\u7fa4\u6570\u636e\u548c\u65e5\u5fd7\u5206\u914d\u603b\u91cf"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"show parameters where name in ('log_disk_size','log_disk_percentage','datafile_size','datafile_disk_percentage');\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b OceanBase \u96c6\u7fa4 CPU\u3001\u5185\u5b58\u3001CLOG\u3001DATA \u7b49\u603b\u91cf\u548c\u5206\u914d\u60c5\u51b5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select zone,concat(SVR_IP,':',SVR_PORT) observer,\ncpu_capacity_max cpu_total,cpu_assigned_max cpu_assigned,\ncpu_capacity-cpu_assigned_max as cpu_free,\nround(memory_limit/1024/1024/1024,2) as memory_total,\nround((memory_limit-mem_capacity)/1024/1024/1024,2) as system_memory,\nround(mem_assigned/1024/1024/1024,2) as mem_assigned,\nround((mem_capacity-mem_assigned)/1024/1024/1024,2) as memory_free,\nround(log_disk_capacity/1024/1024/1024,2) as log_disk_capacity,\nround(log_disk_assigned/1024/1024/1024,2) as log_disk_assigned,\nround((log_disk_capacity-log_disk_assigned)/1024/1024/1024,2) as log_disk_free,\nround((data_disk_capacity/1024/1024/1024),2) as data_disk,\nround((data_disk_in_use/1024/1024/1024),2) as data_disk_used,\nround((data_disk_capacity-data_disk_in_use)/1024/1024/1024,2) as data_disk_free\nfrom gv$ob_servers;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select c.tenant_name,b.tenant_id,a.name as unit_config_name,\nconcat(b.svr_ip,':',b.svr_port) as observer,\nb.status,b.resource_pool_id, b.zone,\nb.unit_config_id,b.max_cpu,b.min_cpu,\nCAST(b.memory_size/1024/1024/1024 as DECIMAL(15,2)) memory_GB,\nCAST(b.log_disk_size/1024/1024/1024 as DECIMAL(15,2)) log_disk_size_GB,\nb.max_iops,b.min_iops,b.iops_weight \nfrom __all_unit_config a, DBA_OB_UNITS b, DBA_OB_TENANTS c\nwhere a.unit_config_id = b.unit_config_id\nand c.tenant_id = b.tenant_id\nand b.tenant_id=1;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b\u5404\u79df\u6237\u8d44\u6e90\u5206\u914d\u60c5\u51b5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select t1.name resource_pool_name, t2.`name` unit_config_name, \nt2.max_cpu, t2.min_cpu, \nround(t2.memory_size/1024/1024/1024,2) mem_size_gb,\nround(t2.log_disk_size/1024/1024/1024,2) log_disk_size_gb, t2.max_iops, \nt2.min_iops, t3.unit_id, t3.zone, concat(t3.svr_ip,':',t3.`svr_port`) observer,\nt4.tenant_id, t4.tenant_name\nfrom __all_resource_pool t1\njoin __all_unit_config t2 on (t1.unit_config_id=t2.unit_config_id)\njoin __all_unit t3 on (t1.`resource_pool_id` = t3.`resource_pool_id`)\nleft join __all_tenant t4 on (t1.tenant_id=t4.tenant_id)\norder by t1.`resource_pool_id`, t2.`unit_config_id`, t3.unit_id;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67e5\u770b\u79df\u6237\u78c1\u76d8\u4f7f\u7528\u7ec6\u8282"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select a.svr_ip,a.svr_port,a.tenant_id,b.tenant_name,\nCAST(a.data_disk_in_use/1024/1024/1024 as DECIMAL(15,2)) data_disk_use_G, \nCAST(a.log_disk_size/1024/1024/1024 as DECIMAL(15,2)) log_disk_size, \nCAST(a.log_disk_in_use/1024/1024/1024 as DECIMAL(15,2)) log_disk_use_G \nfrom __all_virtual_unit a,dba_ob_tenants b \nwhere a.tenant_id=b.tenant_id;\n"})}),"\n"]}),"\n"]})]})}function l(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>_,x:()=>o});var i=s(96540);const t={},a=i.createContext(t);function _(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:_(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);