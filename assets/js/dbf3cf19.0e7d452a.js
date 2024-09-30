"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[489],{74506:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),t=n(28453);const r={title:"Set parameters and variables",weight:9},i="2.8 Set parameters and variables",o={id:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/set-parameters",title:"Set parameters and variables",description:"Parameters",source:"@site/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/08_set-parameters.md",sourceDirName:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database",slug:"/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/set-parameters",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/set-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/08_set-parameters.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Set parameters and variables",weight:9},sidebar:"quick_starts_and_hands_on_practices_in_englishSidebar",previous:{title:"Connect to a tenant",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_02_deploy_oceanbase_database/connecting-tenants"},next:{title:"Introduction",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_03_test_oceanbase_database/introduction"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Classification of parameters",id:"classification-of-parameters",level:3},{value:"View parameters",id:"view-parameters",level:3},{value:"View parameters in OCP",id:"view-parameters-in-ocp",level:4},{value:"View parameters in OBD",id:"view-parameters-in-obd",level:4},{value:"View parameters by using SQL statements",id:"view-parameters-by-using-sql-statements",level:4},{value:"Modify parameters",id:"modify-parameters",level:3},{value:"Modify parameters in OCP",id:"modify-parameters-in-ocp",level:4},{value:"Modify parameters in OBD",id:"modify-parameters-in-obd",level:4},{value:"Modify parameters by using SQL statements",id:"modify-parameters-by-using-sql-statements",level:4},{value:"Variables",id:"variables",level:2},{value:"Classification of system variables",id:"classification-of-system-variables",level:3},{value:"View variables",id:"view-variables",level:3},{value:"Modify variables",id:"modify-variables",level:3},{value:"Comparison between parameters and variables",id:"comparison-between-parameters-and-variables",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"28-set-parameters-and-variables",children:"2.8 Set parameters and variables"})}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(s.p,{children:"This section describes the classification of parameters and how to view and modify parameters."}),"\n",(0,a.jsx)(s.h3,{id:"classification-of-parameters",children:"Classification of parameters"}),"\n",(0,a.jsx)(s.p,{children:"In OceanBase Database, parameters are classified into cluster-level parameters and tenant-level parameters."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Cluster-level parameters specify the basic information as well as performance and security options of an entire OceanBase cluster."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Tenant-level parameters specify configurations and optimizations for one or more tenants. Typical tenant-level parameters are those used for the storage engine, SQL execution strategies, and access control. Usually, tenant-level parameters are specified when you create and manage a tenant, and can be modified as needed at any time."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"view-parameters",children:"View parameters"}),"\n",(0,a.jsx)(s.p,{children:"At present, you can view parameters by using OceanBase Cloud Platform (OCP), OceanBase Deployer (OBD), or SQL statements. You can select an appropriate method as needed."}),"\n",(0,a.jsx)(s.h4,{id:"view-parameters-in-ocp",children:"View parameters in OCP"}),"\n",(0,a.jsxs)(s.p,{children:["This section briefly describes how to view cluster parameters in OCP. For more information, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483787",children:"View parameters"}),"."]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Log on to the OCP console."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the left-side navigation pane, click ",(0,a.jsx)(s.strong,{children:"Clusters"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.strong,{children:"Clusters"})," list on the page that appears, find the target cluster and click its name."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the left-side navigation pane of the page that appears, click ",(0,a.jsx)(s.strong,{children:"Parameter Management"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"view-parameters-in-obd",children:"View parameters in OBD"}),"\n",(0,a.jsxs)(s.p,{children:["You can run the following command to view parameters. This command displays only the parameters specified in the configuration file, not all parameters of OceanBase Database. For more information about the parameters managed by OBD, see ",(0,a.jsx)(s.a,{href:"https://github.com/oceanbase/obdeploy/blob/master/plugins/oceanbase/4.2.1.4/parameter.yaml",children:"parameter.yaml"})," in the GitHub repository."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"obd cluster edit-config obtest\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In this command, ",(0,a.jsx)(s.code,{children:"obtest"})," is a sample cluster name. You can run the ",(0,a.jsx)(s.code,{children:"obd cluster list"})," command to query the actual cluster name and replace ",(0,a.jsx)(s.code,{children:"obtest"})," with the actual name."]}),"\n",(0,a.jsx)(s.h4,{id:"view-parameters-by-using-sql-statements",children:"View parameters by using SQL statements"}),"\n",(0,a.jsx)(s.p,{children:"There are two methods for viewing parameters by using SQL statements. Pay attention to the following fields in the output:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"SCOPE"}),": indicates the parameter level. The value ",(0,a.jsx)(s.code,{children:"CLUSTER"})," indicates that the parameter is a cluster-level parameter. The value ",(0,a.jsx)(s.code,{children:"TENANT"})," indicates that the parameter is a tenant-level parameter."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"EDIT_LEVEL"}),": indicates whether the parameter can be modified and the effective mode."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"READONLY"}),": The parameter is read-only and cannot be modified."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"STATIC_EFFECTIVE"}),": The parameter can be modified and the modification takes effect upon a restart."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"DYNAMIC_EFFECTIVE"}),": The parameter can be modified and the modification takes effect dynamically."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notice"})}),"\n",(0,a.jsxs)(s.p,{children:["Some parameters with an ",(0,a.jsx)(s.code,{children:"EDIT_LEVEL"})," value of ",(0,a.jsx)(s.code,{children:"DYNAMIC_EFFECTIVE"})," cannot actually be modified. Pay special attention to such parameters during modification."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Execute the ",(0,a.jsx)(s.code,{children:"show parameters"})," statement to query parameters. Here are some examples:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"show parameters like '%memory%';\nshow parameters like 'enable_rebalance' tenant='test3';\nshow parameters where name like 'cpu_count';\nshow parameters where name in ('memory_limit','cpu_count');\n"})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Note"})}),"\n",(0,a.jsxs)(s.p,{children:["When you execute the ",(0,a.jsx)(s.code,{children:"show parameters"})," statement to query parameters, some parameters can be queried from all tenants, while others can be queried only from the sys tenant."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Query the ",(0,a.jsx)(s.code,{children:"GV$OB_PARAMETERS"})," view for parameters. Here is an example:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM oceanbase.GV$OB_PARAMETERS WHERE NAME LIKE '%memstore%';\n"})}),"\n",(0,a.jsx)(s.p,{children:"The output is as follows:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"+---------------+----------+-------+---------+-----------+---------------------------+-----------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------+-------------------+\n| SVR_IP        | SVR_PORT | ZONE  | SCOPE   | TENANT_ID | NAME                      | DATA_TYPE | VALUE | INFO                                                                                                                                                                                                         | SECTION | EDIT_LEVEL        |\n+---------------+----------+-------+---------+-----------+---------------------------+-----------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------+-------------------+\n| 10.10.10.1    |     2882 | zone1 | CLUSTER |      NULL | memstore_limit_percentage | NULL      | 50    | used in calculating the value of MEMSTORE_LIMIT parameter: memstore_limit_percentage = memstore_limit / memory_size,memory_size, where MEMORY_SIZE is determined when the tenant is created. Range: (0, 100) | TENANT  | DYNAMIC_EFFECTIVE |\n+---------------+----------+-------+---------+-----------+---------------------------+-----------+-------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+---------+-------------------+\n"})}),"\n",(0,a.jsxs)(s.p,{children:["This method supports flexible filtering and allows queries from all tenants. For more information about the columns in the output, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001104422",children:"GV$OB_PARAMETERS"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"modify-parameters",children:"Modify parameters"}),"\n",(0,a.jsx)(s.p,{children:"At present, you can modify parameters by using OCP, OBD, or SQL statements. You can select an appropriate method as needed."}),"\n",(0,a.jsx)(s.h4,{id:"modify-parameters-in-ocp",children:"Modify parameters in OCP"}),"\n",(0,a.jsxs)(s.p,{children:["This section briefly describes how to modify cluster parameters. For more information, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483789",children:"Modify parameters"}),"."]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Log on to the OCP console."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the left-side navigation pane, click ",(0,a.jsx)(s.strong,{children:"Clusters"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the ",(0,a.jsx)(s.strong,{children:"Clusters"})," list on the page that appears, find the target cluster and click its name."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the left-side navigation pane of the page that appears, click ",(0,a.jsx)(s.strong,{children:"Parameter Management"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["(Optional) In the search box of the ",(0,a.jsx)(s.strong,{children:"Parameters"})," page, enter a parameter name to perform a fuzzy search."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Find the parameter to be modified and click ",(0,a.jsx)(s.strong,{children:"Change Value"})," in the ",(0,a.jsx)(s.strong,{children:"Actions"})," column."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["In the dialog box that appears, modify the parameter value, effective scope, and effective objects. Then, click ",(0,a.jsx)(s.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"modify-parameters-in-obd",children:"Modify parameters in OBD"}),"\n",(0,a.jsxs)(s.p,{children:["For the parameters that can be modified in OBD, see ",(0,a.jsx)(s.a,{href:"https://github.com/oceanbase/obdeploy/blob/master/plugins/oceanbase/4.2.1.4/parameter.yaml",children:"parameter.yaml"})," in GitHub."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notice"})}),"\n",(0,a.jsxs)(s.p,{children:["After you modify parameters with a ",(0,a.jsx)(s.code,{children:"need_redeploy"})," value of ",(0,a.jsx)(s.code,{children:"true"}),", you need to run the ",(0,a.jsx)(s.code,{children:"obd cluster redeploy"})," command for the modifications to take effect. This command will destroy the current cluster and deploy a new one. Proceed with caution."]}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Run the following command to open the configuration file:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"obd cluster edit-config obtest\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In this command, ",(0,a.jsx)(s.code,{children:"obtest"})," is a sample cluster name. You can run the ",(0,a.jsx)(s.code,{children:"obd cluster list"})," command to query the actual cluster name and replace ",(0,a.jsx)(s.code,{children:"obtest"})," with the actual name."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Modify parameters, save the configuration file, and exit. Then, run the reload command provided in the output."}),"\n",(0,a.jsxs)(s.p,{children:["Here is a sample output. You need to run the ",(0,a.jsx)(s.code,{children:"obd cluster reload obtest"})," command for the modifications to take effect."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'Search param plugin and load ok\nSearch param plugin and load ok\nParameter check ok\nSave deploy "obtest" configuration\nUse `obd cluster reload obtest` to make changes take effect.\n'})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notice"})}),"\n",(0,a.jsxs)(s.p,{children:["If OBD prompts you to run the ",(0,a.jsx)(s.code,{children:"obd cluster redeploy"})," command after you modify a parameter, be sure to contact OceanBase Technical Support for confirmation. This is to prevent data loss that could occur due to the cluster redeployment initiated by the ",(0,a.jsx)(s.code,{children:"obd cluster redeploy"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h4,{id:"modify-parameters-by-using-sql-statements",children:"Modify parameters by using SQL statements"}),"\n",(0,a.jsxs)(s.p,{children:["For more information about how to modify parameters by using SQL statements, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103822",children:"Set parameters"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"alter system set Parameter name='Parameter value' [tenant='xxx'];\n"})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Notice"})}),"\n",(0,a.jsx)(s.p,{children:"For a cluster deployed by OBD, if you execute an SQL statement to view a parameter that has been modified by an OBD command, the parameter value returned is the new one. However, if you modify a parameter in the configuration file by using an SQL statement and then view this parameter by using an OBD command, the parameter value returned is the original one."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,a.jsx)(s.p,{children:"System variables allow you to control behaviors of a database system, such as the cache size, number of concurrent connections, CPU utilization, and memory usage. You can also use system variables to configure various features of the database system."}),"\n",(0,a.jsx)(s.h3,{id:"classification-of-system-variables",children:"Classification of system variables"}),"\n",(0,a.jsx)(s.p,{children:"The system variables of OceanBase Database can be classified into global variables and session-level variables."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"A global variable is used to implement a global modification. Different users of the same database tenant share the settings of global variables. Modifications to global variables remain effective after you exit the session. In addition, modifications to global variables do not take effect on the currently open session and take effect only after a new session is established."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"A session-level variable is used to implement a session-level modification. When a client is connected to the database, the database copies global variables to automatically generate session-level variables. Modifications made to session-level variables apply to the current session only."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["At present, you cannot query a table or view to determine whether a variable is read-only. Instead, you need to obtain this information from the source code package of the corresponding version. You can run the following command to query the read-only variables from the ",(0,a.jsx)(s.code,{children:"ob_system_variable_init.json"})," file in the ",(0,a.jsx)(s.code,{children:"src/share/system_variable/"})," directory."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'cat ob_system_variable_init.json  | jq ". [] | {name,flags}" | grep -C 2 "READONLY" | grep -v "ORACLE_ONLY"\n'})}),"\n",(0,a.jsx)(s.h3,{id:"view-variables",children:"View variables"}),"\n",(0,a.jsxs)(s.p,{children:["In OCP, tenant parameters are variables. To view variables in OCP, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483741",children:"View the parameters"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"To view variables by using SQL statements, use any of the following methods:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Query the ",(0,a.jsx)(s.code,{children:"CDB_OB_SYS_VARIABLES"})," view"]}),"\n",(0,a.jsxs)(s.p,{children:["You can query this view for the variables of all tenants only from the sys tenant. For more information about the ",(0,a.jsx)(s.code,{children:"CDB_OB_SYS_VARIABLES"})," view, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001167271",children:"oceanbase.CDB_OB_SYS_VARIABLES"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"select * from oceanbase.CDB_OB_SYS_VARIABLES where name='ob_query_timeout' and tenant_id=x;\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Execute the ",(0,a.jsx)(s.code,{children:"SHOW VARIABLES"})," statement"]}),"\n",(0,a.jsxs)(s.p,{children:["You can execute the ",(0,a.jsx)(s.code,{children:"SHOW VARIABLES"})," statement to view variables only of the current tenant."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"SHOW VARIABLES LIKE 'ob_query_timeout';\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Query the ",(0,a.jsx)(s.code,{children:"DBA_OB_SYS_VARIABLES"})," view"]}),"\n",(0,a.jsxs)(s.p,{children:["You can query this view for the variables only of the current tenant. For more information about the ",(0,a.jsx)(s.code,{children:"DBA_OB_SYS_VARIABLES"})," view, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001167780",children:"oceanbase.DBA_OB_SYS_VARIABLES"}),"."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Note"})}),"\n",(0,a.jsx)(s.p,{children:"This view is introduced since OceanBase Database V4.2.2."}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"select * from oceanbase.DBA_OB_SYS_VARIABLES where name='ob_query_timeout';\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"modify-variables",children:"Modify variables"}),"\n",(0,a.jsxs)(s.p,{children:["In OCP, tenant parameters are variables. To modify variables in OCP, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-ocp-10000000001483740",children:"Modify a parameter"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["To modify variables by using SQL statements, use either of the following methods as needed. For more information, see ",(0,a.jsx)(s.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001103825",children:"Set variables"}),"."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you set a global variable, the setting does not take effect for the current session but for new sessions."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"set global ob_query_timeout=10000000;\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"If you set a session-level variable, the setting takes effect only for the current session, and not for other sessions."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"set session ob_query_timeout=10000000;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"comparison-between-parameters-and-variables",children:"Comparison between parameters and variables"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Comparison item"}),(0,a.jsx)(s.th,{children:"Parameter"}),(0,a.jsx)(s.th,{children:"System variable"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Effective scope"}),(0,a.jsx)(s.td,{children:"Effective in a cluster, zone, server, or tenant."}),(0,a.jsx)(s.td,{children:"Effective globally or at the session level in a tenant."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Effective method"}),(0,a.jsx)(s.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Dynamically take effect: The value of ",(0,a.jsx)("code",{children:"edit_level"})," is ",(0,a.jsx)("code",{children:"dynamic_effective"}),"."]}),(0,a.jsxs)("li",{children:["Take effect upon restart: The value of ",(0,a.jsx)("code",{children:"edit_level"})," is ",(0,a.jsx)("code",{children:"static_effective"}),"."]})]})}),(0,a.jsx)(s.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"A session-level variable takes effect only for the current session. "}),(0,a.jsx)("li",{children:" A global variable does not take effect for the current session but for new sessions established upon re-logon. "})]})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Modification"}),(0,a.jsx)(s.td,{children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Modification can be performed by using SQL statements. Example: ",(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"ALTER SYSTEM SET schema_history_expire_time='1h';"}),"."]}),(0,a.jsxs)("li",{children:["Modification can be performed by using startup parameters. Example: ",(0,a.jsx)("br",{}),(0,a.jsx)("code",{children:"cd /home/admin/oceanbase && ./bin/observer -o \"schema_history_expire_time='1h'\";"}),". "]})]})}),(0,a.jsxs)(s.td,{children:["Modification can only be performed by using SQL statements. Examples: ",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("code",{children:"SET ob_query_timeout = 20000000;"})}),(0,a.jsx)("li",{children:(0,a.jsx)("code",{children:"SET GLOBAL ob_query_timeout = 20000000;"})})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Query"}),(0,a.jsxs)(s.td,{children:["You can query a parameter by using the ",(0,a.jsx)(s.code,{children:"SHOW PARAMETERS"})," statement. Example: ",(0,a.jsx)(s.code,{children:"SHOW PARAMETERS LIKE 'schema_history_expire_time';"})]}),(0,a.jsxs)(s.td,{children:["You can query a variable by using the ",(0,a.jsx)(s.code,{children:"SHOW [GLOBAL] VARIABLES"})," statement. Examples: ",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("code",{children:"SHOW VARIABLES LIKE 'ob_query_timeout';"})}),(0,a.jsx)("li",{children:(0,a.jsx)("code",{children:"SHOW GLOBAL VARIABLES LIKE 'ob_query_timeout';"})})]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Persistence"}),(0,a.jsxs)(s.td,{children:["Parameters are persisted into internal tables and configuration files and can be queried from the ",(0,a.jsx)("code",{children:"/home/admin/oceanbase/etc/observer.config.bin"})," and ",(0,a.jsx)("code",{children:"/home/admin/oceanbase/etc/observer.config.bin.history"})," files."]}),(0,a.jsx)(s.td,{children:"Only global variables are persisted."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Lifecycle"}),(0,a.jsx)(s.td,{children:"Long. A parameter remains effective for the entire duration of a process."}),(0,a.jsx)(s.td,{children:"Short. A system variable takes effect only after the tenant schema is created."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var a=n(96540);const t={},r=a.createContext(t);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);