"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[6077],{4813:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var a=n(4848),o=n(8453);const t={slug:"io-isolation",title:"IO Isolation in OceanBase Database"},i=void 0,r={permalink:"/docs-playground/zh-Hans/blog/io-isolation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/io-isolation.md",source:"@site/blog/io-isolation.md",title:"IO Isolation in OceanBase Database",description:"Sun Jianyun, an OceanBase technical expert",date:"2024-06-03T12:05:44.278Z",formattedDate:"2024\u5e746\u67083\u65e5",tags:[],readingTime:9.065,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"io-isolation",title:"IO Isolation in OceanBase Database"},unlisted:!1,prevItem:{title:"OceanBase 4.0 interpretation: Reduce the threshold of distributed database use, talk about our thinking on small specifications",permalink:"/docs-playground/zh-Hans/blog/miniaturization"},nextItem:{title:"Challenges facing AP performance improvement",permalink:"/docs-playground/zh-Hans/blog/challenges-facing-AP-performance-improvement"}},c={authorsImageUrls:[]},l=[{value:"I. Why is disk I/O isolation necessary?",id:"i-why-is-disk-io-isolation-necessary",level:2},{value:"II. What is good disk I/O isolation?",id:"ii-what-is-good-disk-io-isolation",level:2},{value:"III. How do we configure disk I/O isolation in OceanBase Database?",id:"iii-how-do-we-configure-disk-io-isolation-in-oceanbase-database",level:2},{value:"IV. Disk I/O isolation performance testing of OceanBase Database V4.x",id:"iv-disk-io-isolation-performance-testing-of-oceanbase-database-v4x",level:2},{value:"<strong>Verify the disk I/O isolation capability</strong>",id:"verify-the-disk-io-isolation-capability",level:3},{value:"<strong>Adjust disk I/O isolation configurations in real time</strong>",id:"adjust-disk-io-isolation-configurations-in-real-time",level:3},{value:"V. Afterword",id:"v-afterword",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Sun Jianyun, an OceanBase technical expert"})}),"\n",(0,a.jsx)(s.p,{children:"He used to be a member of the TPC-C project and the technical support team for Double 11 shopping festivals, and is now engaged in the design, research, and development of I/O scheduling, DDL capabilities, and other work related to storage engines."}),"\n",(0,a.jsxs)(s.p,{children:["In ",(0,a.jsx)(s.a,{href:"https://open.oceanbase.com/blog/10900412",children:"Why resource isolation matters to HTAP? "}),", we talked about why hybrid transaction/analytical processing (HTAP) relies on resource isolation and how to implement it. Resource isolation is a capability. Many scenarios can be derived from it, such as HTAP, multitenancy, and pay-as-you-go. Based on resource isolation and cloud-based resource pools, all kinds of resources can be allocated on demand. Isolation of resources such as CPU and memory is already supported in OceanBase Database V4.0. OceanBase Database V4.1 supports enhanced disk I/O isolation and provides users a simple and flexible way to use this feature."]}),"\n",(0,a.jsx)(s.p,{children:"We believe that disk I/O isolation is an essential part of resource isolation. Disk I/O isolation enhances and completes the resource control capabilities for users. This article describes some thoughts of the OceanBase team on disk I/O isolation, how it is configured in OceanBase Database, and the disk I/O isolation performance testing of OceanBase Database V4.1."}),"\n",(0,a.jsx)(s.h2,{id:"i-why-is-disk-io-isolation-necessary",children:"I. Why is disk I/O isolation necessary?"}),"\n",(0,a.jsx)(s.p,{children:'Some may ask, "Is resource isolation, especially disk I/O isolation, really necessary?" Why not directly divide the loads among different servers? For example, transaction processing (TP) and analytical processing (AP) loads can be routed to different replicas on different servers, and different tenants can be deployed on different servers to implement physical isolation. As I see it, that is truly a simple and convenient solution. However, it has many limitations, and cost is the biggest concern. Assume that a game company has two tenants A and B, where tenant A processes services outside China and tenant B processes services inside China. The load peaks of one tenant coincide with the load troughs of the other and vice versa due to the time zone difference. Although each of them can exclusively occupy separate server resources, half of the resources are wasted.'}),"\n",(0,a.jsx)(s.p,{children:"For disk I/O resources, loads whose data is tightly coupled cannot be simply divided among different servers. For example, operations such as backup, migration, and reorganization in a database strongly depend on intensive data reads and writes. Without disk I/O isolation, these tasks can affect the service throughput and response time. Actually, it is difficult to divide TP and AP loads on different servers as desired. TP and AP loads cannot be clearly demarcated sometimes. Even loads of the same type, such as TP loads, have different priorities based on services. What can we do in this situation?"}),"\n",(0,a.jsx)(s.p,{children:"Disk I/O is a type of flexible resources, and loads can contend for disk I/O resources. Resources such as memory are rigid and described as scalars. A memory block occupied by Load A cannot be simultaneously allocated to Load B. Disk I/O is a type of flexible resources and described as the processing capability within a unit time. Loads A and B can read data from and write data to the disk at the same time. Rigid resources can be clearly isolated like cutting a cake. However, for flexible resources, contention between loads must be considered. Assume that you have two fields A and B irrigated by the same river. When the water that flows to Field A is reduced, the water that flows to Field B can be increased."}),"\n",(0,a.jsx)(s.h2,{id:"ii-what-is-good-disk-io-isolation",children:"II. What is good disk I/O isolation?"}),"\n",(0,a.jsx)(s.p,{children:"To answer this question, we need to figure out customers' expectations of disk I/O isolation, which vary from one customer to another."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Some customers want to implement exclusive resource usage through I/O isolation, such as an exclusive disk bandwidth of 200 Mbit/s."}),"\n",(0,a.jsx)(s.li,{children:"Some customers want to limit the resource usage of some loads to specified thresholds through disk I/O isolation."}),"\n",(0,a.jsx)(s.li,{children:"Others only want to allocate resources by weight when resources are insufficient. Resource isolation is not a concern when resources are sufficient."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"In the technical field of resource isolation, the preceding three types of requirements correspond to three isolation semantics: reservation, limitation, and proportion. They are also what disk I/O isolation is supposed to implement in OceanBase Database."}),"\n",(0,a.jsx)(s.h2,{id:"iii-how-do-we-configure-disk-io-isolation-in-oceanbase-database",children:"III. How do we configure disk I/O isolation in OceanBase Database?"}),"\n",(0,a.jsx)(s.p,{children:"OceanBase Database allows you to configure disk I/O isolation between tenants or between loads in a tenant."}),"\n",(0,a.jsxs)(s.p,{children:["The former is quite easy. For input/output operations per second (IOPS), you can specify the ",(0,a.jsx)(s.code,{children:"MIN_IOPS"}),", ",(0,a.jsx)(s.code,{children:"MAX_IOPS"}),", and ",(0,a.jsx)(s.code,{children:"IOPS_WEIGHT"})," parameters for a tenant in the unit config to meet the foregoing three types of isolation requirements. Here is an example."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"alter resource unit set tp_unit min_iops=20000, max_iops=40000, iops_weight=500;\n"})}),"\n",(0,a.jsx)(s.p,{children:"Then, how to configure disk I/O isolation between loads in a tenant? OceanBase Database extends the ResourceManager package of Oracle to adapt to the use habits of users."}),"\n",(0,a.jsx)(s.p,{children:"The following example shows you how to use ResourceManager to isolate the disk I/O resources for TP and AP loads."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["First, create a resource management plan named ",(0,a.jsx)(s.code,{children:"htap_plan"})," and two resource consumer groups named ",(0,a.jsx)(s.code,{children:"tp_group"})," and ",(0,a.jsx)(s.code,{children:"ap_group"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:["Second, bind ",(0,a.jsx)(s.code,{children:"tp_group"})," and ",(0,a.jsx)(s.code,{children:"ap_group"})," to ",(0,a.jsx)(s.code,{children:"htap_plan"}),". Allocate more resources to ",(0,a.jsx)(s.code,{children:"tp_group"})," and fewer resources to ",(0,a.jsx)(s.code,{children:"ap_group"}),". The value of each of ",(0,a.jsx)(s.code,{children:"MIN_IOPS"}),", ",(0,a.jsx)(s.code,{children:"MAX_IOPS"}),", and ",(0,a.jsx)(s.code,{children:"WEIGHT_IOPS"})," is a resource percentage of the unit config of the tenant."]}),"\n",(0,a.jsxs)(s.li,{children:["Third, set the mapping rule between the loads and resource consumer groups. In this example, loads are mapped to consumer groups by username. For example, all loads of the ",(0,a.jsx)(s.code,{children:"trade"})," user use resources of the ",(0,a.jsx)(s.code,{children:"tp_group"})," resource consumer group."]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"# Create a resource management plan\nBEGIN DBMS_RESOURCE_MANAGER.CREATE_PLAN(\n  PLAN => 'htap_plan');\nEND; /\n\n# Create resource consumer groups\nBEGIN DBMS_RESOURCE_MANAGER.CREATE_CONSUMER_GROUP(\n  CONSUMER_GROUP => 'tp_group',\n  COMMENT => 'resource group for oltp applications');\nEND;/\n\nBEGIN DBMS_RESOURCE_MANAGER.CREATE_CONSUMER_GROUP(\n  CONSUMER_GROUP => 'ap_group',\n  COMMENT => 'resource group for olap applications');\nEND;/\n\n# Allocate resources\nBEGIN DBMS_RESOURCE_MANAGER.CREATE_PLAN_DIRECTIVE(\n  PLAN => 'htap_plan',\n  GROUP_OR_SUBPLAN => 'tp_group' ,\n  COMMENT => 'more resource for tp_group',\n  MGMT_P1 => 100,\n  MIN_IOPS => 60,\n  MIX_IOPS => 100,\n  WEIGHT_IOPS => 100);\nEND; /\n\nBEGIN DBMS_RESOURCE_MANAGER.CREATE_PLAN_DIRECTIVE(\n  PLAN => 'htap_plan',\n  GROUP_OR_SUBPLAN => 'ap_group' ,\n  COMMENT => 'less resource for ap_group',\n  MGMT_P1 => 20,\n  MIN_IOPS => 0,\n  MIX_IOPS => 80,\n  WEIGHT_IOPS => 20);\nEND; /\n\n# Map loads to resource consumer groups\nBEGIN\nDBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n  ('FUNCTION', 'CAOPACTION_HIGH', 'background_group');\nEND;/\n\n# Map specific SQL statements to a resource consumer group\nBEGIN\n  DBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n    ('COLUMN', 'test.t1.c1 = 3', 'big1_group');\nEND;/\nBEGIN\n  DBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n    ('USER', 'trade', 'tp_group');\nEND;/\n\nBEGIN\n  DBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n    ('USER', 'analysis', 'ap_group');\nEND;/\n"})}),"\n",(0,a.jsx)(s.p,{children:"Mapping rules for resource consumer groups also support function names and column names. In function name-based mapping, the resource usage of backend tasks can be controlled by using ResourceManager. In column name-based mapping, resource isolation can be refined to the SQL statement level. Here is an example."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-SQL",children:"# Map backend tasks to a resource consumer group\nBEGIN\n  DBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n      ('FUNCTION', 'CAOPACTION_HIGH', 'background_group');\nEND;/\n\n# Map specific SQL statements to a resource consumer group\nBEGIN\n  DBMS_RESOURCE_MANAGER.SET_CONSUMER_GROUP_MAPPING\n      ('COLUMN', 'test.t1.c1 = 3', 'big1_group');\nEND;/\n"})}),"\n",(0,a.jsx)(s.h2,{id:"iv-disk-io-isolation-performance-testing-of-oceanbase-database-v4x",children:"IV. Disk I/O isolation performance testing of OceanBase Database V4.x"}),"\n",(0,a.jsx)(s.h3,{id:"verify-the-disk-io-isolation-capability",children:(0,a.jsx)(s.strong,{children:"Verify the disk I/O isolation capability"})}),"\n",(0,a.jsx)(s.p,{children:"Create four tenants for a simulation test. Each tenant starts 64 threads to send I/O requests that perform 16 KB random reads. The loads of tenants 1, 2, and 4 last for 20 seconds, and the load of tenant 3 begins from the 10th second and lasts for 10 seconds. In this test, the maximum IOPS is about 60,000. Without limitations, any tenant can use up the disk resources."}),"\n",(0,a.jsx)(s.p,{children:"We first verified the disk I/O isolation between tenants. Table 1 describes the resource configurations of the tenants and Figure 1 shows the test results of the tenants."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["When the disk resources are used up, the newly joined tenant 3 still has an IOPS of 10,000, which is reserved by using the ",(0,a.jsx)(s.code,{children:"MIN_IOPS"})," parameter."]}),"\n",(0,a.jsxs)(s.li,{children:["The IOPS of tenant 4 does not exceed 5,000 because its maximum IOPS is limited by using the ",(0,a.jsx)(s.code,{children:"MAX_IOPS"})," parameter."]}),"\n",(0,a.jsx)(s.li,{children:"Regardless of the load changes, the IOPS ratio between tenant 1 and tenant 2 is always 2:1 as defined."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-05/1683280561708.png",alt:"1683280561"}),(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-05/1683280562322.png",alt:"1683280562"})]}),"\n",(0,a.jsx)(s.p,{children:"Then, we verified the disk I/O isolation between loads in a tenant. Set four types of loads in tenant 2. Table 2 describes the resource configurations of the loads. Figure 2 shows the test results."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["The IOPS of Load B remains about 2,000, even if its weight is 0. This is because 97% of the minimum IOPS resources of the tenant is reserved for Load B by using the ",(0,a.jsx)(s.code,{children:"MIN_PERCENT"})," parameter."]}),"\n",(0,a.jsxs)(s.li,{children:["The IOPS of Load A remains about 1,000. This is because the ",(0,a.jsx)(s.code,{children:"MAX_PERCENT"})," parameter is set to ",(0,a.jsx)(s.code,{children:"1"})," for Load A. In this way, Load A can use only 1% of the maximum resources of the tenant."]}),"\n",(0,a.jsx)(s.li,{children:"The IOPS ratio between Load C and Load D is always 2:1, which conforms to their weight ratio of 50:25."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-05/1683280606307.png",alt:"1683280606"}),(0,a.jsx)(s.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2023-05/1683280606875.png",alt:"1683280606"})]}),"\n",(0,a.jsx)(s.p,{children:"The preceding tests show that OceanBase Database supports disk I/O isolation between tenants and between loads in a tenant, and meets the three isolation semantics of reservation, limitation, and proportion."}),"\n",(0,a.jsx)(s.h3,{id:"adjust-disk-io-isolation-configurations-in-real-time",children:(0,a.jsx)(s.strong,{children:"Adjust disk I/O isolation configurations in real time"})}),"\n",(0,a.jsx)(s.p,{children:'Some may have noticed that the disk I/O isolation configurations remain unchanged in the preceding tests. Does OceanBase Database support real-time adjustment of the isolation configurations? The answer is "Yes". The following test will prove it.'}),"\n",(0,a.jsxs)(s.p,{children:["Prepare a large table and perform a full-table scan with a parallel query. During the scan, change the value of the ",(0,a.jsx)(s.code,{children:"MAX_IOPS"})," parameter for the tenant repeatedly as the administrator. The video shows that the IOPS monitored by the operating system changes constantly."]}),"\n",(0,a.jsx)(s.p,{children:"You may have noticed that the IOPS monitored by the operating system is always lower than the value specified by the administrator. This is because OceanBase Database normalizes the overhead of I/O requests."}),"\n",(0,a.jsx)(s.p,{children:"For example, the overhead of 64 KB random reads is different from that of 4 KB random reads. The baseline IOPS overhead specified in the unit config of the tenant is 16 KB random reads. However, the actual size of I/O requests is about 20 KB. After overhead calculation, the IOPS monitored by the operating system is different. For more information, see the related code of ob_io_manager."}),"\n",(0,a.jsx)(s.h2,{id:"v-afterword",children:"V. Afterword"}),"\n",(0,a.jsx)(s.p,{children:"The resource isolation capability of OceanBase Database V4.x allows you to flexibly control the resources allocated to different loads. We will make every effort to improve this capability to address user concerns, such as the unit config and number of resource units of the tenant. OceanBase Database is devoted to providing a better resource isolation capability and user experience. When the business traffic changes, OceanBase Database can automatically allocate the required resources, like a standalone database with unlimited resources. It must be a long haul to reach that goal, but we are resolved and ready to push through all the challenges."}),"\n",(0,a.jsx)(s.p,{children:"Finally, feel free to share with us your comments on disk I/O isolation."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(6540);const o={},t=a.createContext(o);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);