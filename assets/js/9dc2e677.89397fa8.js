"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[9852],{81115:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=s(74848),i=s(28453);const r={},t="Error codes",l={id:"obd/error-messages-in-obd",title:"Error codes",description:"This topic summarizes the errors that may occur during the use of OBD.",source:"@site/docs/obd/600.error-messages-in-obd.md",sourceDirName:"obd",slug:"/obd/error-messages-in-obd",permalink:"/docs-playground/docs/obd/error-messages-in-obd",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/obd/600.error-messages-in-obd.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{}},d={},c=[{value:"General errors",id:"general-errors",level:2},{value:"OBD-1000: Configuration conflict x.x.x.x: xxx port is used for x.x.x.x",id:"obd-1000-configuration-conflict-xxxx-xxx-port-is-used-for-xxxx",level:3},{value:"OBD-1001: x.x.x.x port is already used",id:"obd-1001-xxxx-port-is-already-used",level:3},{value:"OBD-1002: Fail to init x.x.x.x path",id:"obd-1002-fail-to-init-xxxx-path",level:3},{value:"OBD-1003: fail to clean x.x.x.x",id:"obd-1003-fail-to-clean-xxxx",level:3},{value:"OBD-1004: Configuration conflict x.x.x.x: xxx is used for x.x.x.x",id:"obd-1004-configuration-conflict-xxxx-xxx-is-used-for-xxxx",level:3},{value:"OBD-1005: Some of the servers in the cluster have been stopped",id:"obd-1005-some-of-the-servers-in-the-cluster-have-been-stopped",level:3},{value:"OBD-1006: Failed to connect to xxx",id:"obd-1006-failed-to-connect-to-xxx",level:3},{value:"OBD-1007: (x.x.x.x) xxx must not be less than xxx (Current value: xxx)",id:"obd-1007-xxxx-xxx-must-not-be-less-than-xxx-current-value-xxx",level:3},{value:"OceanBase deployment errors",id:"oceanbase-deployment-errors",level:2},{value:"OBD-2000: x.x.x.x not enough memory",id:"obd-2000-xxxx-not-enough-memory",level:3},{value:"OBD-2001: server can not migrate in",id:"obd-2001-server-can-not-migrate-in",level:3},{value:"OBD-2002: failed to start x.x.x.x observer",id:"obd-2002-failed-to-start-xxxx-observer",level:3},{value:"OBD-2003: not enough disk space for clog. Use redo_dir to set other disk for clog, or reduce the value of datafile_size",id:"obd-2003-not-enough-disk-space-for-clog-use-redo_dir-to-set-other-disk-for-clog-or-reduce-the-value-of-datafile_size",level:3},{value:"OBD-2004: Invalid: xxx is not a single server configuration item",id:"obd-2004-invalid-xxx-is-not-a-single-server-configuration-item",level:3},{value:"Test errors",id:"test-errors",level:2},{value:"OBD-3000: parse cmd failed",id:"obd-3000-parse-cmd-failed",level:3},{value:"OBD-3001: xxx.sql not found",id:"obd-3001-xxxsql-not-found",level:3},{value:"OBD-3002: Failed to load data",id:"obd-3002-failed-to-load-data",level:3},{value:"OBD-3003: Failed to run TPC-C benchmark",id:"obd-3003-failed-to-run-tpc-c-benchmark",level:3},{value:"OBAgent errors",id:"obagent-errors",level:2},{value:"OBD-4000: Fail to reload x.x.x.x",id:"obd-4000-fail-to-reload-xxxx",level:3},{value:"OBD-4001: Fail to send config file to x.x.x.x",id:"obd-4001-fail-to-send-config-file-to-xxxx",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"error-codes",children:"Error codes"}),"\n",(0,o.jsx)(n.p,{children:"This topic summarizes the errors that may occur during the use of OBD."}),"\n",(0,o.jsx)(n.h2,{id:"general-errors",children:"General errors"}),"\n",(0,o.jsx)(n.h3,{id:"obd-1000-configuration-conflict-xxxx-xxx-port-is-used-for-xxxx",children:"OBD-1000: Configuration conflict x.x.x.x: xxx port is used for x.x.x.x"}),"\n",(0,o.jsx)(n.p,{children:"Cause: Port conflicts occur in the configuration file."}),"\n",(0,o.jsx)(n.p,{children:"Solution: Check and modify the configuration."}),"\n",(0,o.jsxs)(n.h3,{id:"obd-1001-xxxx-port-is-already-used",children:["OBD-1001: x.x.x.x",":xxx"," port is already used"]}),"\n",(0,o.jsx)(n.p,{children:"Cause: The port has been occupied."}),"\n",(0,o.jsx)(n.p,{children:"Solution: Check the configuration and change the port."}),"\n",(0,o.jsx)(n.h3,{id:"obd-1002-fail-to-init-xxxx-path",children:"OBD-1002: Fail to init x.x.x.x path"}),"\n",(0,o.jsx)(n.p,{children:"Cause:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"user"})," in the configuration file (the current user by default, if unspecified) does not have the write permission on the corresponding directory."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"home_path is not empty."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can determine the cause based on the error information."}),"\n",(0,o.jsx)(n.p,{children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"For case 1, you can resolve the problem in two ways."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the following command to add or modify ",(0,o.jsx)(n.code,{children:"user"})," information:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd cluster edit-config <deploy name>\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log on to the target server and grant the current account the write permission on the corresponding directory."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For case 2, you can also resolve the problem in two ways."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select another directory."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you are sure that the current directory can be cleared, you can use the ",(0,o.jsx)(n.code,{children:"-f"})," option. OBD will clear this directory by using the current user."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"obd-1003-fail-to-clean-xxxx",children:["OBD-1003: fail to clean x.x.x.x",":xxx"]}),"\n",(0,o.jsxs)(n.p,{children:["Cause: ",(0,o.jsx)(n.code,{children:"user"})," in the configuration file (the current user by default, if unspecified) does not have the write permission on the home_path directory."]}),"\n",(0,o.jsx)(n.p,{children:"Solution: You can resolve the problem in two ways."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the following command to add or modify ",(0,o.jsx)(n.code,{children:"user"})," information:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd cluster edit-config <deploy name>\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log on to the target server and grant the current account the write permission on the corresponding directory."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"obd-1004-configuration-conflict-xxxx-xxx-is-used-for-xxxx",children:"OBD-1004: Configuration conflict x.x.x.x: xxx is used for x.x.x.x"}),"\n",(0,o.jsx)(n.p,{children:"Cause: Path conflicts occur in the configuration file."}),"\n",(0,o.jsx)(n.p,{children:"Solution: Check and modify the configuration."}),"\n",(0,o.jsx)(n.h3,{id:"obd-1005-some-of-the-servers-in-the-cluster-have-been-stopped",children:"OBD-1005: Some of the servers in the cluster have been stopped"}),"\n",(0,o.jsx)(n.p,{children:"Cause: Some servers in the current configuration have been stopped, but subsequent operations require the services of all servers to be online."}),"\n",(0,o.jsxs)(n.p,{children:["Solution: Run the ",(0,o.jsx)(n.code,{children:"obd cluster start <deploy_name> --wop"})," command to start all services without loading parameters."]}),"\n",(0,o.jsx)(n.h3,{id:"obd-1006-failed-to-connect-to-xxx",children:"OBD-1006: Failed to connect to xxx"}),"\n",(0,o.jsx)(n.p,{children:"Cause:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"OceanBase Deployer (OBD) and the specified server are disconnected."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The corresponding component process has exited or does not provide service."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The account and password do not match."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"If the error is due to cause 1, you need to solve the network connection issue."}),"\n",(0,o.jsxs)(n.p,{children:["If the error is due to cause 2, you can try restarting the component first. If the startup still fails, please refer to the error of startup failure for troubleshooting, such as ",(0,o.jsx)(n.strong,{children:"OBD-2002"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If the error is due to cause 3, it is likely that you have changed the password by executing SQL statements, and the account password is different from that stored in the configuration file. As a result, OBD cannot connect to the component. In this case, you can use any of the following two solutions:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Execute SQL statements to change the password back to that stored in the configuration file of OBD."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the ",(0,o.jsx)(n.code,{children:"vi ~/.obd/cluster/<deploy name>/config.yaml"})," command to change the password to the one that is in use for the component."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"obd-1007-xxxx-xxx-must-not-be-less-than-xxx-current-value-xxx",children:"OBD-1007: (x.x.x.x) xxx must not be less than xxx (Current value: xxx)"}),"\n",(0,o.jsx)(n.p,{children:"Cause: The configuration of the ulimit parameter does not meet the requirements."}),"\n",(0,o.jsx)(n.p,{children:"Solution: You can modify the corresponding files in the /etc/security/limits.d/ directory and the limits.conf file in the /etc/security/ directory as needed."}),"\n",(0,o.jsx)(n.h2,{id:"oceanbase-deployment-errors",children:"OceanBase deployment errors"}),"\n",(0,o.jsx)(n.h3,{id:"obd-2000-xxxx-not-enough-memory",children:"OBD-2000: x.x.x.x not enough memory"}),"\n",(0,o.jsx)(n.p,{children:"Cause: The memory is insufficient."}),"\n",(0,o.jsx)(n.p,{children:"Solution: When OBD starts, the memory is strictly calculated based on MemAvailable. If any cached memory can be released, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"echo 3 > /proc/sys/vm/drop_caches\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If the memory is still insufficient, run ",(0,o.jsx)(n.code,{children:"edit-config"})," and then adjust ",(0,o.jsx)(n.code,{children:"memory_limt"})," and ",(0,o.jsx)(n.code,{children:"system_memory"}),". Ensure that the following condition is met: ",(0,o.jsx)(n.code,{children:"memory_limt/3 \u2264 system_memory \u2264 memory_limt/2"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"memory_limt"})," cannot be lower than 8 GB. In other words, your available memory must be greater than 8 GB."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"obd-2001-server-can-not-migrate-in",children:"OBD-2001: server can not migrate in"}),"\n",(0,o.jsxs)(n.p,{children:["Cause: The number of available units is smaller than ",(0,o.jsx)(n.code,{children:"--unit-num"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Solution: Modify the passed value of ",(0,o.jsx)(n.code,{children:"--unit-num"}),". Run the following command to view the number of available units:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select count(*) num from oceanbase.__all_server where status = 'active' and start_service_time > 0\n"})}),"\n",(0,o.jsx)(n.h3,{id:"obd-2002-failed-to-start-xxxx-observer",children:"OBD-2002: failed to start x.x.x.x observer"}),"\n",(0,o.jsx)(n.p,{children:"Cause: There are multiple causes for this error. Two most common causes are as follows."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"memory_limit"})," is lower than 8 GB."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"system_memory"})," is too large or small. Generally, the following condition must be met: ",(0,o.jsx)(n.code,{children:"memory_limt/3 \u2264 system_memory \u2264 memory_limt/2"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Solution:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the problem is caused by either of the preceding reasons, take actions accordingly."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If the problem persists, submit an issue on ",(0,o.jsx)(n.a,{href:"https://github.com/oceanbase/obdeploy/issues",children:"GitHub"}),", and designated professionals will help you fix the issue."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"obd-2003-not-enough-disk-space-for-clog-use-redo_dir-to-set-other-disk-for-clog-or-reduce-the-value-of-datafile_size",children:"OBD-2003: not enough disk space for clog. Use redo_dir to set other disk for clog, or reduce the value of datafile_size"}),"\n",(0,o.jsx)(n.p,{children:"Cause: The disk usage exceeds the limit."}),"\n",(0,o.jsx)(n.p,{children:"Solution: Adjust the storage of disks."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For automatic deployment, the disk usage cannot exceed 72%."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For manual deployment, the disk usage cannot exceed 64%, if the configuration is not modified."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note"})}),"\n",(0,o.jsx)(n.p,{children:"If redo_dir and data_dir are on the same disk, the space to be occupied by data files is included when the disk usage is calculated."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"obd-2004-invalid-xxx-is-not-a-single-server-configuration-item",children:"OBD-2004: Invalid: xxx is not a single server configuration item"}),"\n",(0,o.jsx)(n.p,{children:"Cause: The modified parameter is a global one and cannot be separately modified for a single server."}),"\n",(0,o.jsx)(n.p,{children:"Solution: Place the parameter to modify under global."}),"\n",(0,o.jsx)(n.h2,{id:"test-errors",children:"Test errors"}),"\n",(0,o.jsx)(n.h3,{id:"obd-3000-parse-cmd-failed",children:"OBD-3000: parse cmd failed"}),"\n",(0,o.jsxs)(n.p,{children:["Cause: The mysqltest initialization file is not an ",(0,o.jsx)(n.code,{children:".sql"})," file."]}),"\n",(0,o.jsxs)(n.p,{children:["Solution: Check the ",(0,o.jsx)(n.code,{children:"--init-sql-files"})," parameter."]}),"\n",(0,o.jsx)(n.h3,{id:"obd-3001-xxxsql-not-found",children:"OBD-3001: xxx.sql not found"}),"\n",(0,o.jsx)(n.p,{children:"Cause: The initialization file cannot be found during the initialization of mysqltest."}),"\n",(0,o.jsxs)(n.p,{children:["Solution: Check whether the file declared by ",(0,o.jsx)(n.code,{children:"--init-sql-files"})," is located under the ",(0,o.jsx)(n.code,{children:"--init-sql-dir"})," directory."]}),"\n",(0,o.jsx)(n.h3,{id:"obd-3002-failed-to-load-data",children:"OBD-3002: Failed to load data"}),"\n",(0,o.jsx)(n.p,{children:"Cause: There are multiple causes for this error. Two most common causes are as follows."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The tenant has insufficient resources or is under excessive test stress."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"An error occurred in the data build script."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Solution:"}),"\n",(0,o.jsx)(n.p,{children:"If the error is due to cause 1, you can use a tenant with larger resource specifications or adjust parameters such as warehouses and load-workers to reduce the test stress."}),"\n",(0,o.jsxs)(n.p,{children:["If the error is due to cause 2, you can rerun the test because the data build script is obtained from the TPC official website. If the issue persists, submit an issue on ",(0,o.jsx)(n.a,{href:"https://github.com/oceanbase/obdeploy/issues",children:"GitHub"}),", and designated professionals will help you fix the issue."]}),"\n",(0,o.jsx)(n.h3,{id:"obd-3003-failed-to-run-tpc-c-benchmark",children:"OBD-3003: Failed to run TPC-C benchmark"}),"\n",(0,o.jsx)(n.p,{children:"Cause:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The test process was stuck and then terminated due to timeout."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"An error occurred for the TPC-C test command."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Solution:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You can try to rerun the test directly, or you can adjust parameters such as terminals to reduce the test pressure before you rerun the test."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you did not use the obtpcc package provided on the OceanBase Database official website, use obtpcc for testing."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If the issue persists, submit an issue on ",(0,o.jsx)(n.a,{href:"https://github.com/oceanbase/obdeploy/issues",children:"GitHub"}),", and designated professionals will help you fix the issue."]}),"\n",(0,o.jsx)(n.h2,{id:"obagent-errors",children:"OBAgent errors"}),"\n",(0,o.jsx)(n.h3,{id:"obd-4000-fail-to-reload-xxxx",children:"OBD-4000: Fail to reload x.x.x.x"}),"\n",(0,o.jsxs)(n.p,{children:["Cause: The ",(0,o.jsx)(n.code,{children:"http_basic_auth_password"})," of the node is not the same as that stored in OBD, which causes OBD to fail to access OBAgent."]}),"\n",(0,o.jsx)(n.p,{children:"Solution: If the two passwords are the same, check whether an unsupported parameter is included among the modified options, or whether the name of a parameter is incorrect."}),"\n",(0,o.jsx)(n.h3,{id:"obd-4001-fail-to-send-config-file-to-xxxx",children:"OBD-4001: Fail to send config file to x.x.x.x"}),"\n",(0,o.jsx)(n.p,{children:"Cause: (Check whether the error is caused by either of the reasons.)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The disk space for the home_path directory on OBAgent is insufficient."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"user"})," in the configuration file (the current user by default, if unspecified) does not have the write permission on the home_path directory on OBAgent."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Solution: You can resolve the problem in two ways."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the following command to add or modify ",(0,o.jsx)(n.code,{children:"user"})," information:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"obd cluster edit-config <deploy name>\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log on to the target server and grant the current account the write permission on the corresponding directory."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var o=s(96540);const i={},r=o.createContext(i);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);