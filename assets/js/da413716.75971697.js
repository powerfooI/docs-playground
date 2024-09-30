"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2748],{1613:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=a(74848),s=a(28453);const i={title:"Ecosystem components for data migration and synchronization",weight:3},o="4.2 Ecosystem components for data migration and synchronization",r={id:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/ecological_tools_of_migration_synchronization",title:"Ecosystem components for data migration and synchronization",description:"Database O&M engineers often need to migrate or synchronize data in the event of database replacement, IDC relocation, business testing, database upgrade, and other routine database O&M operations. You can perform operations such as inter-table data archiving, disk usage balancing, and resource unit migration within an OceanBase cluster by using simple commands. However, you need tools to, for example, synchronize data between clusters or with heterogeneous data sources.",source:"@site/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/02_ecological_tools_of_migration_synchronization.md",sourceDirName:"user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase",slug:"/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/ecological_tools_of_migration_synchronization",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/ecological_tools_of_migration_synchronization",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/02_ecological_tools_of_migration_synchronization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Ecosystem components for data migration and synchronization",weight:3},sidebar:"quick_starts_and_hands_on_practices_in_englishSidebar",previous:{title:"Compatibility between OceanBase Database and MySQL",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/compatibility_introduction"},next:{title:"Use OMS for data migration and synchronization",permalink:"/docs-playground/docs/user_manual/quick_starts_and_hands_on_practices_in_english/chapter_04_migration_and_synchronization_oceanbase/migration_and_synchronization_through_oms"}},d={},c=[{value:"OMS",id:"oms",level:2},{value:"OBLogProxy",id:"oblogproxy",level:2},{value:"OBLOADER &amp; OBDUMPER",id:"obloader--obdumper",level:2},{value:"SQL statements for data migration",id:"sql-statements-for-data-migration",level:2},{value:"Other migration tools",id:"other-migration-tools",level:2},{value:"Canal",id:"canal",level:3},{value:"Flink CDC",id:"flink-cdc",level:3},{value:"DataX",id:"datax",level:3},{value:"SeaTunnel",id:"seatunnel",level:3}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"42-ecosystem-components-for-data-migration-and-synchronization",children:"4.2 Ecosystem components for data migration and synchronization"})}),"\n",(0,t.jsx)(n.p,{children:"Database O&M engineers often need to migrate or synchronize data in the event of database replacement, IDC relocation, business testing, database upgrade, and other routine database O&M operations. You can perform operations such as inter-table data archiving, disk usage balancing, and resource unit migration within an OceanBase cluster by using simple commands. However, you need tools to, for example, synchronize data between clusters or with heterogeneous data sources."}),"\n",(0,t.jsx)(n.p,{children:"This topic describes several frequently used data migration methods and tools."}),"\n",(0,t.jsx)(n.p,{children:"The following table lists the migration solutions supported by OceanBase Database."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Migration solution"}),(0,t.jsx)(n.th,{children:"Schema migration"}),(0,t.jsx)(n.th,{children:"Full data migration"}),(0,t.jsx)(n.th,{children:"Incremental migration"}),(0,t.jsx)(n.th,{children:"Data verification"}),(0,t.jsx)(n.th,{children:"Supported data source"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OceanBase Migration Service (OMS)"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"OceanBase"}),(0,t.jsx)("li",{children:"MySQL"}),(0,t.jsx)("li",{children:"MariaDB"}),(0,t.jsx)("li",{children:"PostgreSQL"}),(0,t.jsx)("li",{children:"GreenPlum"}),(0,t.jsx)("li",{children:"HBase"}),(0,t.jsx)("li",{children:"TiDB"}),(0,t.jsx)("li",{children:"Kafka"}),(0,t.jsx)("li",{children:"RocketMQ"})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OBLogProxy"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"OceanBase"}),(0,t.jsx)("li",{children:"MySQL binlog tools"}),(0,t.jsx)("li",{children:"CDC tools"}),(0,t.jsx)("li",{children:"OBLogClient"})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OBLOADER & OBDUMPER"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"OceanBase"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SQL statements"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Mainstream databases"}),(0,t.jsx)("li",{children:"SQL text"}),(0,t.jsx)("li",{children:"CSV files"})]})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DataX"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsxs)(n.td,{children:["Many data sources are supported. For more information, see ",(0,t.jsx)(n.a,{href:"https://github.com/alibaba/DataX/blob/master/introduction.md",children:"official introduction"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Canal"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsxs)(n.td,{children:["Many data sources are supported. For more information, see ",(0,t.jsx)(n.a,{href:"https://github.com/alibaba/canal/wiki",children:"official introduction"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Flink CDC"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsxs)(n.td,{children:["Many data sources are supported. For more information, see ",(0,t.jsx)(n.a,{href:"https://github.com/apache/flink-cdc",children:"official introduction"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SeaTunnel"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Supported"}),(0,t.jsx)(n.td,{children:"Not supported"}),(0,t.jsxs)(n.td,{children:["Many data sources are supported. For more information, see ",(0,t.jsx)(n.a,{href:"https://seatunnel.apache.org/docs/about/",children:"official introduction"})]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"oms",children:"OMS"}),"\n",(0,t.jsx)(n.p,{children:"OMS is a service that supports data interaction between a homogeneous or heterogeneous data source and OceanBase Database. OMS provides the capabilities for online migration of existing data and real-time synchronization of incremental data."}),"\n",(0,t.jsx)(n.p,{children:"OMS Community Edition provides a visualized and centralized management platform. You can migrate data in real time with simple configurations. OMS Community Edition aims to implement real-time data migration and synchronization from homogeneous or heterogeneous databases to OceanBase Database with low risks, low costs, and high efficiency."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/oms-en",children:"OceanBase Migration Service"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"oblogproxy",children:"OBLogProxy"}),"\n",(0,t.jsx)(n.p,{children:"OBLogProxy is the incremental log proxy service of OceanBase Database. It establishes connections with OceanBase Database to read incremental logs and provides downstream services with change data capture (CDC) capabilities."}),"\n",(0,t.jsx)(n.p,{children:"OBLogProxy supports the following two modes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The binlog mode of OBLogProxy is designed for compatibility with MySQL binlogs. It allows you to use MySQL binlog incremental parsing tools to synchronize OceanBase Database logs in real time. Thereby, you can smoothly use MySQL binlog tools with OceanBase Database."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"OBLogProxy in CDC mode subscribes to data changes in OceanBase Database and synchronizes these data changes to downstream services in real time for real-time or quasi-realtime data replication and synchronization."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/common-oceanbase-database-10000000001239311",children:"OBLogProxy"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"obloader--obdumper",children:"OBLOADER & OBDUMPER"}),"\n",(0,t.jsx)(n.p,{children:"OBLOADER & OBDUMPER are client tools that are developed in Java. At present, they apply only to OceanBase Database. You can use OBLOADER to import the definition files and table data files of database objects in storage media to OceanBase Database, or use OBDUMPER to export them to storage media."}),"\n",(0,t.jsx)(n.p,{children:"We recommend that you use OBLOADER in combination with OBDUMPER. OBLOADER is compatible with the CSV files exported by using client tools such as mysqldump and Mydumper. Therefore, you can use OBLOADER in data migration. You can integrate OBDUMPER into a database O&M system for logical backup. OBLOADER provides various types of built-in data preprocessing functions to improve its data import performance. The automatic fault tolerance mechanism ensures data import stability. Rich monitoring information is provided for you to observe the import performance and progress in real time."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://en.oceanbase.com/docs/obloader-obdumper-en",children:"OceanBase Loader and Dumper"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"sql-statements-for-data-migration",children:"SQL statements for data migration"}),"\n",(0,t.jsx)(n.p,{children:"Executing SQL statements is a common and simple way to export data to an external file or import data from an external file to a database. You can also use SQL statements to migrate data from one table to another and process the data accordingly."}),"\n",(0,t.jsx)(n.p,{children:"Supported statements include SELECT INTO OUTFILE, LOAD DATA, and INSERT INTO. Direct load is also supported to accelerate data import. For more information, see 'Use SQL statements for data migration' in 'migration-and-synchronization-through-sql'."}),"\n",(0,t.jsx)(n.h2,{id:"other-migration-tools",children:"Other migration tools"}),"\n",(0,t.jsx)(n.h3,{id:"canal",children:"Canal"}),"\n",(0,t.jsx)(n.p,{children:"Canal parses the incremental logs of a MySQL database and provides incremental data subscription and consumption."}),"\n",(0,t.jsx)(n.p,{children:"In its early days, Alibaba needed to synchronize data between the two IDCs deployed in China and the United States, and the incremental data was collected based on business triggers. Since 2010, the company has gradually switched the method to obtaining and synchronizing incremental data by parsing database logs, giving rise to a large number of database services that are based on the subscription and consumption of incremental logs. Canal supports using a MySQL 5.1.x, 5.5.x, 5.6.x, 5.7.x, or 8.0.x database as the source."}),"\n",(0,t.jsx)(n.p,{children:"Canal works in the following way:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Canal disguises itself as a MySQL slave by simulating the communication protocol of the MySQL slave, and sends a dump request to the MySQL master."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The MySQL master receives the dump request, and pushes binary logs to the slave, which is Canal."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Canal parses the binary logs into a stream of bytes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see the ",(0,t.jsx)(n.a,{href:"https://github.com/alibaba/canal?tab=readme-ov-file",children:"introduction to Canal"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"flink-cdc",children:"Flink CDC"}),"\n",(0,t.jsx)(n.p,{children:"Flink CDC is a streaming data processing technology based on Flink."}),"\n",(0,t.jsx)(n.p,{children:"It monitors and captures changes of the data source, extracts the changes into the data streams of Flink, and sends the data streams to downstream systems in real time, so that downstream systems can process the data changes in a timely manner. Flink CDC supports multiple data sources, such as relational databases, NoSQL databases, and message queues."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/flink-cdc",children:"introduction to Flink CDC"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"datax",children:"DataX"}),"\n",(0,t.jsx)(n.p,{children:"DataX is a tool for offline synchronization between heterogeneous data sources. You can use it to stably and efficiently synchronize data between many types of heterogeneous data sources, such as relational databases (like MySQL, Oracle, and OceanBase Database), HDFS, Hive, ODPS, HBase, and FTP."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"DataX architecture",src:a(89852).A+"",width:"1037",height:"315"})}),"\n",(0,t.jsx)(n.p,{children:"To address issues of data synchronization between heterogeneous data sources in a complex mesh topology, DataX introduces the star topology and serves as the transmission hub that connects to various data sources. This way, you can connect a new data source to DataX and start synchronizing data between the new data source and the existing data sources right away."}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"https://github.com/alibaba/DataX/blob/master/introduction.md",children:"the introduction of DataX"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"seatunnel",children:"SeaTunnel"}),"\n",(0,t.jsx)(n.p,{children:"SeaTunnel is an easy-to-use distributed data integration platform that supports real-time synchronization of massive amounts of data with ultra-high performance. It can stably and efficiently synchronize tens of billions of data records every day and has been deployed by nearly 100 enterprises for their production."}),"\n",(0,t.jsx)(n.p,{children:"SeaTunnel is specifically developed for data integration and synchronization, and solves the following data integration challenges:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Diverse data sources: While hundreds of types of incompatible data sources are in use in the industry, emerging technologies keep bringing new data source types. Users require a tool that efficiently supports most if not all of the data sources."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Complex synchronization scenarios: For example, offline full synchronization, offline incremental synchronization, CDC data synchronization, real-time synchronization, and database synchronization are involved."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"High resource consumption: Existing data integration and synchronization tools often consume a great amount of computing resources or Java Database Connectivity (JDBC) resources for real-time synchronization of numerous small tables, which increases the resource costs of enterprises."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Lack of quality monitoring: Data loss and duplication are common issues during the process of a data integration or synchronization task, which lacks monitoring, making it impossible to observe the data quality of the task."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Complex technology stacks: Enterprises use different technical components, therefore users must develop corresponding synchronization programs for data integration."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Difficulties in management and maintenance: As different underlying technical components, such as Flink and Spark, are used, offline and real-time synchronization processes are often separately developed and managed, making the synchronization management and maintenance more difficult."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following diagram describes the workflow of SeaTunnel."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"SeaTunnel workflow",src:a(47959).A+"",width:"946",height:"593"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see the ",(0,t.jsx)(n.a,{href:"https://seatunnel.apache.org/docs/about/",children:"introduction to SeaTunnel"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},89852:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/001-6625144f7fd29667c2bb3df07dfc0624.png"},47959:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/002-564893e08f9a542c572d44b6a0efdb8b.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var t=a(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);