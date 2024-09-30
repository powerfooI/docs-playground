"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[2453],{56355:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var r=o(74848),n=o(28453);const a={slug:"distributed-push-down",title:"OceanBase Distributed Pushdown Technology"},s=void 0,i={id:"blogs/tech/distributed-push-down",title:"OceanBase Distributed Pushdown Technology",description:'I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. Therefore, I want to write some blog posts about the SQL executor as a supplement to this book. In my last post Adaptive Techniques in the OceanBase Database Execution Engine, I introduced some representative adaptive techniques in the executor, based on the assumption that you have a basic understanding of the two-phase pushdown technique for HASH GROUP BY. If you are unfamiliar with the multi-phase pushdown technique of the executor, you are welcome to read this post to learn about common adaptive distributed pushdown techniques in OceanBase Database.',source:"@site/docs/blogs/tech/distributed-push-down.md",sourceDirName:"blogs/tech",slug:"/blogs/tech/distributed-push-down",permalink:"/docs-playground/docs/blogs/tech/distributed-push-down",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/blogs/tech/distributed-push-down.md",tags:[],version:"current",frontMatter:{slug:"distributed-push-down",title:"OceanBase Distributed Pushdown Technology"},sidebar:"blogsSidebar",previous:{title:"Adaptive Techniques in the OceanBase SQL Execution Engine",permalink:"/docs-playground/docs/blogs/tech/adaptive-sql-execution-engine"},next:{title:"OceanBase Technical Insights for High-Concurrency Scenarios",permalink:"/docs-playground/docs/blogs/tech/high-concurrency"}},d={},h=[{value:"What is distributed pushdown?",id:"what-is-distributed-pushdown",level:2},{value:"LIMIT pushdown",id:"limit-pushdown",level:2},{value:"AGGREGATION pushdown",id:"aggregation-pushdown",level:2},{value:"JOIN FILTER pushdown",id:"join-filter-pushdown",level:2},{value:"Pre-filtering",id:"pre-filtering",level:3},{value:"Partition pruning",id:"partition-pruning",level:3},{value:"Other distributed pushdown techniques",id:"other-distributed-pushdown-techniques",level:2},{value:"Preview of the next post",id:"preview-of-the-next-post",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:['I have been studying the book "An Interpretation of OceanBase Database Source Code" and noticed that it contains very little content about the SQL executor. Therefore, I want to write some blog posts about the SQL executor as a supplement to this book. In my last post ',(0,r.jsx)(t.a,{href:"https://open.oceanbase.com/blog/5250647552",children:"Adaptive Techniques in the OceanBase Database Execution Engine"}),", I introduced some representative adaptive techniques in the executor, based on the assumption that you have a basic understanding of the two-phase pushdown technique for HASH GROUP BY. If you are unfamiliar with the multi-phase pushdown technique of the executor, you are welcome to read this post to learn about common adaptive distributed pushdown techniques in OceanBase Database."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-distributed-pushdown",children:"What is distributed pushdown?"}),"\n",(0,r.jsx)(t.p,{children:"To better utilize parallel execution capabilities and reduce CPU and network overheads during distributed execution, the optimizer often pushes down some operators to lower-layer compute nodes when it generates execution plans. This is to make full use of the computing resources of the cluster to improve the execution efficiency. Next, I'm going to introduce the most common distributed pushdown techniques in OceanBase Database."}),"\n",(0,r.jsx)(t.h2,{id:"limit-pushdown",children:"LIMIT pushdown"}),"\n",(0,r.jsxs)(t.p,{children:["Let me first talk about the pushdown of the LIMIT operator. The following are two SQL statements for creating a table named ",(0,r.jsx)(t.code,{children:"order"})," and reading 100 rows from the ",(0,r.jsx)(t.code,{children:"orders"})," table, respectively."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"CREATE TABLE `orders` (\n    `o_orderkey` bigint(20) NOT NULL,\n    `o_custkey` bigint(20) NOT NULL,\n    `o_orderdate` date NOT NULL,\n    PRIMARY KEY (`o_orderkey`, `o_orderdate`, `o_custkey`),\n    KEY `o_orderkey` (`o_orderkey`) LOCAL  BLOCK_SIZE 16384\n)  partition by range columns(o_orderdate)\n    subpartition by hash(o_custkey) subpartitions 64\n(partition ord1 values less than ('1992-01-01'),\npartition ord2 values less than ('1992-02-01'),\npartition ord3 values less than ('1992-03-01'),\npartition ord77 values less than ('1998-05-01'),\npartition ord78 values less than ('1998-06-01'),\npartition ord79 values less than ('1998-07-01'),\npartition ord80 values less than ('1998-08-01'),\npartition ord81 values less than (MAXVALUE));\n\nselect * from orders limit 100;\n"})}),"\n",(0,r.jsx)(t.p,{children:"The following plan shows a very common scenario of distributed pushdown."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"explain select * from orders limit 100;\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Query Plan                                                                                                                                                      |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| =================================================================                                                                                               |\n| |ID|OPERATOR                     |NAME    |EST.ROWS|EST.TIME(us)|                                                                                               |\n| -----------------------------------------------------------------                                                                                               |\n| |0 |LIMIT                        |        |1       |2794        |                                                                                               |\n| |1 |\u2514\u2500PX COORDINATOR             |        |1       |2794        |                                                                                               |\n| |2 |  \u2514\u2500EXCHANGE OUT DISTR       |:EX10000|1       |2793        |                                                                                               |\n| |3 |    \u2514\u2500LIMIT                  |        |1       |2792        |                                                                                               |\n| |4 |      \u2514\u2500PX PARTITION ITERATOR|        |1       |2792        |                                                                                               |\n| |5 |        \u2514\u2500TABLE FULL SCAN    |orders  |1       |2792        |                                                                                               |\n| =================================================================                                                                                               |\n| Outputs & filters:                                                                                                                                              |\n| -------------------------------------                                                                                                                           |\n|   0 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       limit(100), offset(nil)                                                                                                                                   |\n|   1 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|   2 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       dop=1                                                                                                                                                     |\n|   3 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       limit(100), offset(nil)                                                                                                                                   |\n|   4 - output([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), filter(nil)                                                                        |\n|       force partition granule                                                                                                                                   |\n|   5 - output([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), filter(nil)                                                                        |\n|       access([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), partitions(p0sp[0-63], p1sp[0-63], p2sp[0-63], p3sp[0-63], p4sp[0-63], p5sp[0-63], |\n|        p6sp[0-63], p7sp[0-63])                                                                                                                                  |\n|       limit(100), offset(nil), is_index_back=false, is_global_index=false,                                                                                      |\n|       range_key([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), range(MIN,MIN,MIN ; MAX,MAX,MAX)always true                                     |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can see that Operators 0 and 3 in the plan are both LIMIT. Operator 0 is pushed down to generate Operator 3 to reduce the number of rows scanned by Operator 5, a TABLE SCAN operator, from each partition of the ",(0,r.jsx)(t.code,{children:"orders"})," table. Each thread of the TABLE SCAN operator scans at most 100 rows. This reduces the overhead in data scan by the TABLE SCAN operator and the network overhead in sending data to Operator 1 for aggregation. At present in OceanBase Database, the EXCHANGE operator will send a packet after it receives 64 KB data from a lower-layer operator. If the LIMIT operator is not pushed down, massive data may be scanned, leading to a high network overhead."]}),"\n",(0,r.jsx)(t.p,{children:"In actual business scenarios, a LIMIT operator is usually used in combination with the ORDER BY keyword. If the ORDER BY keyword is used in the preceding example, a TOP-N SORT operator with much higher performance than a SORT operator will be generated in the plan."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"explain select * from orders order by o_orderdate limit 100;\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Query Plan                                                                                                                                                      |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| =================================================================                                                                                               |\n| |ID|OPERATOR                     |NAME    |EST.ROWS|EST.TIME(us)|                                                                                               |\n| -----------------------------------------------------------------                                                                                               |\n| |0 |LIMIT                        |        |1       |2794        |                                                                                               |\n| |1 |\u2514\u2500PX COORDINATOR MERGE SORT  |        |1       |2794        |                                                                                               |\n| |2 |  \u2514\u2500EXCHANGE OUT DISTR       |:EX10000|1       |2793        |                                                                                               |\n| |3 |    \u2514\u2500TOP-N SORT             |        |1       |2792        |                                                                                               |\n| |4 |      \u2514\u2500PX PARTITION ITERATOR|        |1       |2792        |                                                                                               |\n| |5 |        \u2514\u2500TABLE FULL SCAN    |orders  |1       |2792        |                                                                                               |\n| =================================================================                                                                                               |\n| Outputs & filters:                                                                                                                                              |\n| -------------------------------------                                                                                                                           |\n|   0 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       limit(100), offset(nil)                                                                                                                                   |\n|   1 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       sort_keys([orders.o_orderdate, ASC])                                                                                                                      |\n|   2 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       dop=1                                                                                                                                                     |\n|   3 - output([orders.o_orderkey], [orders.o_custkey], [orders.o_orderdate]), filter(nil)                                                                        |\n|       sort_keys([orders.o_orderdate, ASC]), topn(100)                                                                                                           |\n|   4 - output([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), filter(nil)                                                                        |\n|       force partition granule                                                                                                                                   |\n|   5 - output([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), filter(nil)                                                                        |\n|       access([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), partitions(p0sp[0-63], p1sp[0-63], p2sp[0-63], p3sp[0-63], p4sp[0-63], p5sp[0-63], |\n|        p6sp[0-63], p7sp[0-63])                                                                                                                                  |\n|       is_index_back=false, is_global_index=false,                                                                                                               |\n|       range_key([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), range(MIN,MIN,MIN ; MAX,MAX,MAX)always true                                     |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If the LIMIT operator is not pushed down, Operator 3 will be a SORT operator. In this case, each thread needs to sort and send all the scanned data to the upper-layer data flow object (DFO). A DFO is a sub-plan. Adjacent DFOs are separated with an EXCHANGE operator. For more information, see ",(0,r.jsx)(t.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-database-1000000000034037",children:"https://www.oceanbase.com/docs/common-oceanbase-database-1000000000034037"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The purpose of pushing down the LIMIT operator is to end execution in advance to reduce calculation and network overheads."}),"\n",(0,r.jsx)(t.h2,{id:"aggregation-pushdown",children:"AGGREGATION pushdown"}),"\n",(0,r.jsx)(t.p,{children:"Let me take the following statement that contains GROUP BY as an example to describe distributed pushdown in aggregation."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"select count(o_totalprice), sum(o_totalprice) from orders group by o_orderdate;\n"})}),"\n",(0,r.jsx)(t.p,{children:"This SQL statement queries the daily order count and sales amount. If you want to execute the statement in parallel, the most straightforward approach would be to distribute data in the table based on the hash values of the GROUP BY column (o_orderdate). This way, all rows with the same o_orderdate value are sent to the same thread. The threads can aggregate received data in parallel."}),"\n",(0,r.jsx)(t.p,{children:"However, this plan requires to perform a shuffle on all data in the table, which may lead to a very high network overhead. Moreover, if data skew occurs in the table, for example, a large number of orders were placed on a specific day, the workload of the thread responsible for processing orders of this day will be much higher than that of other threads. This long-tail task may directly lead to a long execution time for the query."}),"\n",(0,r.jsx)(t.p,{children:"To address these issues, the GROUP BY operator is pushed down to generate the following plan:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"explain select count(o_totalprice), sum(o_totalprice) from orders group by o_orderdate;\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------+\n| Query Plan                                                                                                                                                |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------+\n| =====================================================================                                                                                     |\n| |ID|OPERATOR                         |NAME    |EST.ROWS|EST.TIME(us)|                                                                                     |\n| ---------------------------------------------------------------------                                                                                     |\n| |0 |PX COORDINATOR                   |        |1       |2796        |                                                                                     |\n| |1 |\u2514\u2500EXCHANGE OUT DISTR             |:EX10001|1       |2795        |                                                                                     |\n| |2 |  \u2514\u2500HASH GROUP BY                |        |1       |2795        |                                                                                     |\n| |3 |    \u2514\u2500EXCHANGE IN DISTR          |        |1       |2794        |                                                                                     |\n| |4 |      \u2514\u2500EXCHANGE OUT DISTR (HASH)|:EX10000|1       |2794        |                                                                                     |\n| |5 |        \u2514\u2500HASH GROUP BY          |        |1       |2793        |                                                                                     |\n| |6 |          \u2514\u2500PX PARTITION ITERATOR|        |1       |2792        |                                                                                     |\n| |7 |            \u2514\u2500TABLE FULL SCAN    |orders  |1       |2792        |                                                                                     |\n| =====================================================================                                                                                     |\n| Outputs & filters:                                                                                                                                        |\n| -------------------------------------                                                                                                                     |\n|   0 - output([INTERNAL_FUNCTION(T_FUN_COUNT_SUM(T_FUN_COUNT(orders.o_totalprice)), T_FUN_SUM(T_FUN_SUM(orders.o_totalprice)))]), filter(nil)              |\n|   1 - output([INTERNAL_FUNCTION(T_FUN_COUNT_SUM(T_FUN_COUNT(orders.o_totalprice)), T_FUN_SUM(T_FUN_SUM(orders.o_totalprice)))]), filter(nil)              |\n|       dop=1                                                                                                                                               |\n|   2 - output([T_FUN_COUNT_SUM(T_FUN_COUNT(orders.o_totalprice))], [T_FUN_SUM(T_FUN_SUM(orders.o_totalprice))]), filter(nil)                               |\n|       group([orders.o_orderdate]), agg_func([T_FUN_COUNT_SUM(T_FUN_COUNT(orders.o_totalprice))], [T_FUN_SUM(T_FUN_SUM(orders.o_totalprice))])             |\n|   3 - output([orders.o_orderdate], [T_FUN_COUNT(orders.o_totalprice)], [T_FUN_SUM(orders.o_totalprice)]), filter(nil)                                     |\n|   4 - output([orders.o_orderdate], [T_FUN_COUNT(orders.o_totalprice)], [T_FUN_SUM(orders.o_totalprice)]), filter(nil)                                     |\n|       (#keys=1, [orders.o_orderdate]), dop=1                                                                                                              |\n|   5 - output([orders.o_orderdate], [T_FUN_COUNT(orders.o_totalprice)], [T_FUN_SUM(orders.o_totalprice)]), filter(nil)                                     |\n|       group([orders.o_orderdate]), agg_func([T_FUN_COUNT(orders.o_totalprice)], [T_FUN_SUM(orders.o_totalprice)])                                         |\n|   6 - output([orders.o_orderdate], [orders.o_totalprice]), filter(nil)                                                                                    |\n|       force partition granule                                                                                                                             |\n|   7 - output([orders.o_orderdate], [orders.o_totalprice]), filter(nil)                                                                                    |\n|       access([orders.o_orderdate], [orders.o_totalprice]), partitions(p0sp[0-63], p1sp[0-63], p2sp[0-63], p3sp[0-63], p4sp[0-63], p5sp[0-63], p6sp[0-63], |\n|        p7sp[0-63])                                                                                                                                        |\n|       is_index_back=false, is_global_index=false,                                                                                                         |\n|       range_key([orders.o_orderkey], [orders.o_orderdate], [orders.o_custkey]), range(MIN,MIN,MIN ; MAX,MAX,MAX)always true                               |\n+-----------------------------------------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(t.p,{children:"In this plan, each thread will pre-aggregate the data it reads before distributing the data. The pre-aggregate job is done by Operator 5, a GROUP BY operator. Then, Operator 5 will send the aggregation results to its upper-layer operator. Operator 2, another GROUP BY operator, will aggregate the received data again. After Operator 5 pre-aggregates the data, the data amount will remarkably decrease. This can decrease the network overhead caused by data shuffle and reduce the impact of data skew on the execution time."}),"\n",(0,r.jsx)(t.p,{children:"Then, let me demonstrate the execution process of the preceding SQL statement."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"select count(o_totalprice), sum(o_totalprice) from orders group by o_orderdate;\n"})}),"\n",(0,r.jsx)(t.p,{children:"The original data comprises seven rows. The amount of each order is CNY 10. The orders were placed on June 1, June 2, and June 3."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705644329067.png",alt:"1705644329"})}),"\n",(0,r.jsx)(t.p,{children:"The following figure shows the execution process, where the DOP is set to 2."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705644337050.png",alt:"1705644337"})}),"\n",(0,r.jsx)(t.p,{children:"The first thread in the upper-left corner scans three rows, and the second thread in the lower-left corner scans four rows. Data with the same date, namely, data in the same group, is marked with the same color."}),"\n",(0,r.jsx)(t.p,{children:"The first thread aggregates the three rows it scans, which are distributed in two groups. The dates of two rows are June 1. Therefore, for June 1, the order count is 2 and the sales amount is 20. The date of one row is June 3. Therefore, for June 3, the order count is 1 and the sales amount is 10. The four rows scanned by the second thread are also distributed in two groups. Two rows are generated after aggregation. The job of this part is completed by Operator 5 in the plan."}),"\n",(0,r.jsx)(t.p,{children:"Then, the two threads distribute the data based on the hash values of the o_orderdate column. Data with the same date is sent to the same thread. The job of this part is completed by Operators 3 and 4 in the plan."}),"\n",(0,r.jsx)(t.p,{children:"Each thread on the right side will aggregate the received data again. The two rows of June 3 scanned by the two threads on the left side, which are marked red, are sent to the thread in the lower-right corner. The two rows are aggregated again by the operator on the right side. After aggregation, the order count is 2 and the sales amount is 20. The two rows are finally aggregated into one row. The job of this part is completed by Operator 2 in the plan."}),"\n",(0,r.jsx)(t.p,{children:"Then, all data is sent to the coordinator, which will summarize the data and send the final calculation results to the client."}),"\n",(0,r.jsx)(t.h2,{id:"join-filter-pushdown",children:"JOIN FILTER pushdown"}),"\n",(0,r.jsx)(t.p,{children:"In a JOIN operator, the join filters of the left-side table will be pushed down to the right-side table to perform pre-filtering and partition pruning for data in the right-side table."}),"\n",(0,r.jsx)(t.h3,{id:"pre-filtering",children:"Pre-filtering"}),"\n",(0,r.jsx)(t.p,{children:"When a hash join is executed, the data in the left-side table is always read first to build a hash table. Then, the data in the right-side table is used to probe the hash table, and if successful, the data will be sent to the upper-layer operator. If a reshuffle is performed on the data in the right-side table of the hash join, the network overhead may be high, which is subject to the data amount of the right-side table. In this case, join filters can be used to reduce the network overhead caused by data shuffle."}),"\n",(0,r.jsx)(t.p,{children:"Take the plan shown in the following figure as an example."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705644346491.png",alt:"1705644346"})}),"\n",(0,r.jsx)(t.p,{children:"In the plan, Operator 2, a HASH JOIN operator, reads data from the left-side table. During the read, it will use the t1.c1 join key to create a join filter, which is done by Operator 3, a JOIN FILTER CREATE operator. The most common form of join filter is Bloom filter. After the join filter is created, it is sent to the right-side DFO, which contains Operator 6 and other lower-layer operators."}),"\n",(0,r.jsx)(t.p,{children:"Operator 10, a TABLE SCAN operator, has a filter sys_op_bloom_filter(t2.c1), which specifies to use values of t2.c1 in the right-side table to quickly probe the hash table based on the Bloom filter. If a value of t2.c1 does not match any value of t1.c1, the row where the t2.c1 value is located in the t2 table can be pre-filtered and does not need to be sent to the HASH JOIN operator."}),"\n",(0,r.jsx)(t.h3,{id:"partition-pruning",children:"Partition pruning"}),"\n",(0,r.jsx)(t.p,{children:"Join filters can be used not only for row filtering but also for partition pruning (or filtering). Assume that t1 is a partitioned table and the join key is also its partitioning key. A plan shown in the following figure can be generated."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://obcommunityprod.oss-cn-shanghai.aliyuncs.com/prod/blog/2024-01/1705644359718.png",alt:"1705644359"})}),"\n",(0,r.jsx)(t.p,{children:"In this plan, Operator 3 is a PARTITION JOIN FILTER CREATE operator. It will detect the partitioning method of the right-side t1 table of the hash join. When it obtains a row in the left-side table from the lower-layer operator, it will use the c1 value to calculate the partition to which this row belongs in the right-side t1 table, and record the partition ID in the join filter. The join filter that contains the partition ID will be used on Operator 8 for partition pruning for the right-side table of the hash join. When the table scan operator scans each partition in the right-side table, it will verify whether the partition ID exists in the join filter. If no, it can skip the entire partition."}),"\n",(0,r.jsx)(t.p,{children:"A join filter can be used for data pre-filtering and partition pruning, thereby reducing the overheads in data scan, network transmission, and hash table probe. At present, OceanBase Database supports only Bloom filters in versions earlier than V4.2. OceanBase Database supports two new types of join filters since V4.2: In filter and Range filter. The new join filters can help significantly improve the performance in some scenarios, especially when the left-side table contains a few distinct values or contains continuous values."}),"\n",(0,r.jsx)(t.h2,{id:"other-distributed-pushdown-techniques",children:"Other distributed pushdown techniques"}),"\n",(0,r.jsx)(t.p,{children:"Apart from the preceding common distributed pushdown techniques that are easy to understand, OceanBase Database also supports more adaptive distributed pushdown techniques, such as adaptive two-phase pushdown for window functions and three-phase pushdown for aggregate functions."}),"\n",(0,r.jsx)(t.p,{children:"This post will not provide a detailed introduction to the more complex distributed pushdown techniques of OceanBase Database. Below are sample execution plans of the two distributed pushdown techniques mentioned earlier for those who are interested in conducting further research."}),"\n",(0,r.jsx)(t.p,{children:"Adaptive two-phase pushdown for window functions:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"select /*+parallel(3) */\n        c1, sum(c2) over (partition by c1) from t1 order by c1;\nQuery Plan\n===================================================\n|ID|OPERATOR                             |NAME    |\n---------------------------------------------------\n|0 |PX COORDINATOR MERGE SORT            |        |\n|1 | EXCHANGE OUT DISTR                  |:EX10001|\n|2 |  MATERIAL                           |        |\n|3 |   WINDOW FUNCTION CONSOLIDATOR      |        |\n|4 |    EXCHANGE IN MERGE SORT DISTR     |        |\n|5 |     EXCHANGE OUT DISTR (HASH HYBRID)|:EX10000|\n|6 |      WINDOW FUNCTION                |        |\n|7 |       SORT                          |        |\n|8 |        PX BLOCK ITERATOR            |        |\n|9 |         TABLE SCAN                  |t1      |\n===================================================\n"})}),"\n",(0,r.jsx)(t.p,{children:"Three-phase pushdown for aggregate functions:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-SQL",children:"select /*+ parallel(2) */\n    c1, sum(distinct c2),count(distinct c3), sum(c4) from t group by c1;\nQuery Plan\n===========================================================================\n|ID|OPERATOR                               |NAME    |EST.ROWS|EST.TIME(us)|\n---------------------------------------------------------------------------\n|0 |PX COORDINATOR                         |        |1       |8           |\n|1 |\u2514\u2500EXCHANGE OUT DISTR                   |:EX10002|1       |7           |\n|2 |  \u2514\u2500HASH GROUP BY                      |        |1       |6           |\n|3 |    \u2514\u2500EXCHANGE IN DISTR                |        |2       |6           |\n|4 |      \u2514\u2500EXCHANGE OUT DISTR (HASH)      |:EX10001|2       |6           |\n|5 |        \u2514\u2500HASH GROUP BY                |        |2       |4           |\n|6 |          \u2514\u2500EXCHANGE IN DISTR          |        |2       |4           |\n|7 |            \u2514\u2500EXCHANGE OUT DISTR (HASH)|:EX10000|2       |3           |\n|8 |              \u2514\u2500HASH GROUP BY          |        |2       |2           |\n|9 |                \u2514\u2500PX BLOCK ITERATOR    |        |1       |1           |\n|10|                  \u2514\u2500TABLE FULL SCAN    |t       |1       |1           |\n===========================================================================\n"})}),"\n",(0,r.jsx)(t.h2,{id:"preview-of-the-next-post",children:"Preview of the next post"}),"\n",(0,r.jsxs)(t.p,{children:["This post introduces several typical distributed pushdown techniques in the executor of OceanBase Database, based on the assumption that you have a basic understanding of distributed execution of the database. If you are unfamiliar with parallel execution techniques of the executor, please look forward to the next post ",(0,r.jsx)(t.a,{href:"https://open.oceanbase.com/blog/5558373888",children:"Parallel Execution Techniques of OceanBase Database"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);