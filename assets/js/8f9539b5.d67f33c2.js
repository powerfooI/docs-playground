"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[7864],{62308:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var i=s(74848),r=s(28453);const c={title:"\u901a\u8fc7 OCP \u90e8\u7f72&\u63a5\u7ba1\u96c6\u7fa4",weight:4},d=void 0,l={id:"user_manual/user_best_practices/deploy_oceanbase/ocp_deploy",title:"\u901a\u8fc7 OCP \u90e8\u7f72&\u63a5\u7ba1\u96c6\u7fa4",description:"\u5f53\u524d\u4f7f\u7528\u7248\u672c\uff1a\u793e\u533a\u7248 OCP-4.2.0",source:"@site/docs/user_manual/user_best_practices/deploy_oceanbase/ocp_deploy.md",sourceDirName:"user_manual/user_best_practices/deploy_oceanbase",slug:"/user_manual/user_best_practices/deploy_oceanbase/ocp_deploy",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/ocp_deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/deploy_oceanbase/ocp_deploy.md",tags:[],version:"current",frontMatter:{title:"\u901a\u8fc7 OCP \u90e8\u7f72&\u63a5\u7ba1\u96c6\u7fa4",weight:4},sidebar:"legacySidebar",previous:{title:"\u901a\u8fc7 OBD \u90e8\u7f72\u96c6\u7fa4",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/obd_deploy"},next:{title:"\u751f\u4ea7\u90e8\u7f72\u6700\u4f73\u5b9e\u8df5",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/production_deployment"}},a={},t=[{value:"<strong>\u524d\u7f6e\u51c6\u5907</strong>",id:"\u524d\u7f6e\u51c6\u5907",level:2},{value:"<strong>\u89c4\u5212\u76ee\u5f55</strong>",id:"\u89c4\u5212\u76ee\u5f55",level:3},{value:"<strong>\u521b\u5efa admin \u7528\u6237</strong>",id:"\u521b\u5efa-admin-\u7528\u6237",level:3},{value:"<strong>\u5b89\u88c5 MySQL Client</strong>",id:"\u5b89\u88c5-mysql-client",level:3},{value:"<strong>\u4e0a\u4f20\u8f6f\u4ef6\u5305</strong>",id:"\u4e0a\u4f20\u8f6f\u4ef6\u5305",level:2},{value:"<strong>\u6dfb\u52a0\u4e3b\u673a</strong>",id:"\u6dfb\u52a0\u4e3b\u673a",level:2},{value:"<strong>\u521b\u5efa\u96c6\u7fa4</strong>",id:"\u521b\u5efa\u96c6\u7fa4",level:2},{value:"<strong>\u5173\u8054 OBProxy \u96c6\u7fa4</strong>",id:"\u5173\u8054-obproxy-\u96c6\u7fa4",level:2},{value:"<strong>\u63a5\u7ba1\u5df2\u6709\u96c6\u7fa4</strong>",id:"\u63a5\u7ba1\u5df2\u6709\u96c6\u7fa4",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u5f53\u524d\u4f7f\u7528\u7248\u672c\uff1a\u793e\u533a\u7248 OCP-4.2.0"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u521b\u5efa\u96c6\u7fa4\u4e3b\u8981\u6b65\u9aa4\uff1a"})}),"\n",(0,i.jsx)(e.p,{children:"\u524d\u7f6e\u51c6\u5907\uff1a\u673a\u5668\u521d\u59cb\u5316\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0a\u4f20\u8f6f\u4ef6\u5305\uff1a\u7b2c\u4e00\u6b21\u521b\u5efa\u9700\u8981\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6dfb\u52a0\u4e3b\u673a\uff1a\u5305\u62ec\u8d26\u53f7\u5bc6\u7801\u3001\u673a\u623f\u7b49\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u96c6\u7fa4\uff1a\u5b9a\u4e49\u96c6\u7fa4\u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5173\u8054 OBProxy \u96c6\u7fa4\uff1aOB \u4ee3\u7406\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u524d\u7f6e\u51c6\u5907",children:(0,i.jsx)(e.strong,{children:"\u524d\u7f6e\u51c6\u5907"})}),"\n",(0,i.jsx)(e.h3,{id:"\u89c4\u5212\u76ee\u5f55",children:(0,i.jsx)(e.strong,{children:"\u89c4\u5212\u76ee\u5f55"})}),"\n",(0,i.jsx)(e.p,{children:"\u9700\u8981\u521b\u5efa\u7684\u76ee\u5f55\uff08\u53ef\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u60c5\u51b5\u8c03\u6574\uff09"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"/data \u4e3a\u6570\u636e\u76d8\u3002"}),"\n",(0,i.jsx)(e.li,{children:"/redo \u5b58\u653e redo \u65e5\u5fd7\u3002"}),"\n",(0,i.jsx)(e.li,{children:"/home/admin/oceanbase \u5b58\u653e OceanBase \u6570\u636e\u5e93\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u8fd0\u884c\u65e5\u5fd7\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4e2d\uff0c\u6570\u636e\u76d8\u548c\u65e5\u5fd7\u76d8\u5efa\u8bae\u5206\u76d8\uff0c\u907f\u514d\u76f8\u4e92\u5f71\u54cd\uff1b\u65e5\u5fd7\u76d8\u5927\u5c0f\u5efa\u8bae\u662f OB \u5185\u5b58\u7684 3-4 \u500d\uff1b\u78c1\u76d8\u7a7a\u95f4\u9ed8\u8ba4\u4f1a\u9884\u5360\u7528\uff0c\u540e\u7eed\u6570\u636e\u65b0\u589e\u4f1a\u81ea\u52a8\u4ece\u8fd9\u91cc\u9762\u5206\u914d\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u521b\u5efa-admin-\u7528\u6237",children:(0,i.jsx)(e.strong,{children:"\u521b\u5efa admin \u7528\u6237"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u8d26\u6237 admin\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"useradd -U admin -d /home/admin -s /bin/bash\nmkdir -p /home/admin\nchown -R admin:admin /home/admin\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4e3a\u8d26\u6237 admin \u8bbe\u7f6e\u5bc6\u7801\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"passwd admin\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u4e3a\u8d26\u6237 admin \u8bbe\u7f6e sudo \u6743\u9650\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6253\u5f00 /etc/sudoers \u6587\u4ef6\uff0c\u5728 /etc/sudoers \u6587\u4ef6\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"[root@test001 ~]# vim /etc/sudoers\n# \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a\n## Same thing without a password\n# %wheel        ALL=(ALL)       NOPASSWD: ALL\nadmin       ALL=(ALL)       NOPASSWD: ALL\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"\u6388\u6743\u76ee\u5f55"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"chown -R admin:admin /data\nchown -R admin:admin /redo\nchown -R admin:admin /home/admin\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5b89\u88c5-mysql-client",children:(0,i.jsx)(e.strong,{children:"\u5b89\u88c5 MySQL Client"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"centos\uff1a yum install mysql -y\nubuntu\uff1aapt-get install mariadb-client -y\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0a\u4f20\u8f6f\u4ef6\u5305",children:(0,i.jsx)(e.strong,{children:"\u4e0a\u4f20\u8f6f\u4ef6\u5305"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8f6f\u4ef6\u5305\u4e0b\u8f7d\u5730\u5740\uff1a",(0,i.jsx)(e.a,{href:"https://www.oceanbase.com/softwarecenter",children:"https://www.oceanbase.com/softwarecenter"})]}),"\n",(0,i.jsx)(e.p,{children:"\u9700\u8981\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"OceanBase \u6570\u636e\u5e93 (OBServer \u670d\u52a1)"}),"\n",(0,i.jsx)(e.li,{children:"\u4f9d\u8d56\u5e93 (OceanBase Libs)"}),"\n",(0,i.jsx)(e.li,{children:"\u5de5\u5177\u96c6\u6210\u5305 (OceanBase Utils)"}),"\n",(0,i.jsx)(e.li,{children:"OceanBase \u6570\u636e\u5e93\u4ee3\u7406 (OBProxy)"}),"\n",(0,i.jsx)(e.li,{children:"OCP \u76d1\u63a7\u5de5\u5177 (OCP-Agent)"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"OCP-Agent \u9700\u8981\u5230 OCP \u670d\u52a1\u6240\u5728\u7684\u670d\u52a1\u5668\u4e0b\u8f7d\uff0c\u7136\u540e\u4e0a\u4f20"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'[root@obtest ~]# find /  -name "t-oceanbase-ocp-agent*"\n/root/.ocp-server-all-in-one/ocp-installer/usr/ocp-installer/rpm/t-oceanbase-ocp-agent-4.2.0-20231017100200.alios7.aarch64.rpm\n/root/.ocp-server-all-in-one/ocp-installer/usr/ocp-installer/rpm/t-oceanbase-ocp-agent-4.2.0-20231017100200.alios7.x86_64.rpm\n/root/ocp-server-all-in-one/rpms/t-oceanbase-ocp-agent-4.2.0-20231017100200.alios7.aarch64.rpm\n/root/ocp-server-all-in-one/rpms/t-oceanbase-ocp-agent-4.2.0-20231017100200.alios7.x86_64.rpm\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u67e5\u770b\u6240\u6709\u8f6f\u4ef6\u5305\uff1a\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(83958).A+"",width:"1106",height:"515"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u6dfb\u52a0\u4e3b\u673a",children:(0,i.jsx)(e.strong,{children:"\u6dfb\u52a0\u4e3b\u673a"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u586b\u5199\u4e3b\u673a\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6d89\u53ca\u5230\u7684\u64cd\u4f5c\uff1a\u3010\u65b0\u589e\u673a\u578b\u3011\u3001\u3010\u65b0\u589e\u673a\u623f\u3011\u3001\u3010\u65b0\u589e\u533a\u57df\u3011\u3001\u3010\u65b0\u589e\u51ed\u636e\u3011"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u673a\u623f\u5bf9\u5e94 IDC\uff0c\u533a\u57df\u5bf9\u5e94 REGION\uff0c\u53ef\u4ee5\u662f\u5b9e\u9645\u7684\u4e5f\u53ef\u4ee5\u662f\u865a\u62df\u7684\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u51ed\u8bc1\u4e3a\u7528\u6237\u5bc6\u7801\uff0c\u5efa\u8bae\u4f7f\u7528 admin \u7528\u6237\uff1b"}),"\n",(0,i.jsx)(e.li,{children:"\u6dfb\u52a0\u5b8c\u6210\uff0c\u5efa\u8bae\u5b8c\u6210\u4e3b\u673a\u6807\u51c6\u5316\uff0c\u76f8\u5f53\u4e8e\u5c06 OBD \u521d\u59cb\u5316\u64cd\u4f5c\u96c6\u6210\u5230\u4e86\u8fd9\u4e2a\u529f\u80fd\uff0c\u800c\u4e0d\u9700\u8981\u624b\u52a8\u64cd\u4f5c\uff0c\u907f\u514d\u56e0\u914d\u7f6e\u4e0d\u6b63\u786e\u5f71\u54cd\u7ebf\u4e0a\u7a33\u5b9a\u6027\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(15725).A+"",width:"1432",height:"1982"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u67e5\u770b\u4e3b\u673a\u72b6\u6001"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6dfb\u52a0\u4e3b\u673a\u5b8c\u6210\u540e\uff0c\u9700\u8981\u7b49\u5f85\u4e3b\u673a\u521b\u5efa\u5b8c\u6210"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u65b0\u63d0\u4ea4\uff1a\u8868\u793a\u6dfb\u52a0\u4e3b\u673a\u4efb\u52a1\u8fd8\u5728\u8fdb\u884c\u4e2d"}),"\n",(0,i.jsx)(e.li,{children:"\u7a7a\u95f2\uff1a\u8868\u793a\u6dfb\u52a0\u4e3b\u673a\u4efb\u52a1\u5df2\u7ecf\u5b8c\u6210"}),"\n",(0,i.jsxs)(e.li,{children:["\u7a7a\u95f2\uff08\u9ec4\u8272\u53f9\u53f7\uff09\uff1a\u8868\u793a\u672a\u505a\u4e3b\u673a\u6807\u51c6\u5316\uff0c",(0,i.jsx)(e.strong,{children:"\u5f3a\u70c8\u5efa\u8bae\u8fdb\u884c\u4e3b\u673a\u6807\u51c6\u5316\u64cd\u4f5c\uff0c\u8fdb\u884c\u98ce\u9669\u68c0\u67e5\u4ee5\u53ca\u81ea\u52a8\u4fee\u590d\u3002"})]}),"\n",(0,i.jsx)(e.li,{children:"\u5931\u8d25\uff1a\u6dfb\u52a0\u4e3b\u673a\u4efb\u52a1\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7\u4efb\u52a1\u4e2d\u5fc3\u67e5\u770b\u8be6\u60c5"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"image.png",src:s(52484).A+"",width:"1120",height:"339"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(7291).A+"",width:"750",height:"242"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(85746).A+"",width:"830",height:"286"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u6bd4\u5982\u627e\u4e0d\u5230 OCP-Agent\uff0c\u5c06\u4e0a\u9762\u63d0\u5230\u7684\u5b89\u88c5\u5305\u4e0a\u4f20\u91cd\u8bd5\u5373\u53ef\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(33929).A+"",width:"750",height:"475"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u521b\u5efa\u96c6\u7fa4",children:(0,i.jsx)(e.strong,{children:"\u521b\u5efa\u96c6\u7fa4"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u70b9\u51fb\u521b\u5efa\u96c6\u7fa4"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(9728).A+"",width:"1116",height:"476"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u5b9a\u4e49\u96c6\u7fa4\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(53959).A+"",width:"1116",height:"681"})}),"\n",(0,i.jsx)(e.p,{children:"\u53c2\u6570\u9ed8\u8ba4\u4e0d\u9700\u8981\u8bbe\u7f6e\uff0c\u4f1a\u81ea\u52a8\u5360\u7528 80% - 90% \u7684\u8d44\u6e90\uff0c\u5982\u679c\u53ea\u662f\u6d4b\u8bd5\u6216\u8005\u4e0d\u60f3\u5168\u90e8\u5360\u7528\uff0c\u53ef\u4ee5\u81ea\u5df1\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53ef\u4ee5\u53c2\u8003\u3010\u901a\u8fc7 OBD \u90e8\u7f72\u96c6\u7fa4\u3011\u91cc\u7684\u53c2\u6570\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(78174).A+"",width:"1100",height:"650"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u63d0\u4ea4\u8868\u5355"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63d0\u4ea4\u4f1a\u8ba9\u4e8c\u6b21\u786e\u8ba4\u4fe1\u606f\uff0c\u6ca1\u95ee\u9898\u540e\u5219\u4f1a\u771f\u6b63\u7684\u5f00\u59cb\u521b\u5efa\u4efb\u52a1\u3002\u53ef\u4ee5\u5230\u4efb\u52a1\u4e2d\u5fc3\u67e5\u770b\u4efb\u52a1\u8fdb\u5ea6\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(14980).A+"",width:"1110",height:"571"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(68877).A+"",width:"750",height:"444"})]}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\u521b\u5efa\u4efb\u52a1\u5b8c\u6210\u540e\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(54902).A+"",width:"1113",height:"464"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u8054-obproxy-\u96c6\u7fa4",children:(0,i.jsx)(e.strong,{children:"\u5173\u8054 OBProxy \u96c6\u7fa4"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u70b9\u51fb\u5f00\u59cb\u521b\u5efa"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(51839).A+"",width:"1099",height:"648"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa OBProxy \u96c6\u7fa4\uff0c\u5e76\u5173\u8054 OB \u96c6\u7fa4"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8bae\u4f7f\u7528 ConfigUrl\uff0c\u540e\u7eed OMS \u7b49\u5de5\u5177\u9700\u8981\u7528\u5230\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(512).A+"",width:"1111",height:"662"}),"\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(17366).A+"",width:"680",height:"440"})]}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\u8868\u5355\u63d0\u4ea4\u540e\u53ef\u4ee5\u901a\u8fc7\u4efb\u52a1\u4e2d\u5fc3\u67e5\u770b\u8fdb\u5ea6\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(64018).A+"",width:"1112",height:"651"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u63a5\u7ba1\u5df2\u6709\u96c6\u7fa4",children:(0,i.jsx)(e.strong,{children:"\u63a5\u7ba1\u5df2\u6709\u96c6\u7fa4"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6dfb\u52a0\u4e3b\u673a\uff08\u540c\u4e0a\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63a5\u7ba1\u96c6\u7fa4"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image.png",src:s(78843).A+"",width:"1110",height:"485"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"\u586b\u5199\u96c6\u7fa4\u8fde\u63a5\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["proxyro \u5bc6\u7801\uff0c\u5efa\u8bae\u586b\u5199\u3002\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(98956).A+"",width:"1100",height:"648"})]}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\u9884\u68c0\u67e5\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(34869).A+"",width:"1110",height:"658"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u51fa\u73b0 IDC\u3001REGION \u4e0d\u4e00\u81f4\u7684\u62a5\u9519\uff0c\u53ef\u4ee5\u624b\u52a8\u4fee\u6539\u4e3b\u673a\u4e0a\u7684\u3010\u673a\u623f\u3011\u4ee5\u53ca\u3010\u533a\u57df\u3011\u6765\u5bf9\u5e94\u96c6\u7fa4\u5b9e\u9645\u7684 IDC \u548c REGION\u3002\u6216\u8005\u4fee\u6539\u96c6\u7fa4\u7684 IDC \u4e0e REGION \u4fe1\u606f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u67e5\u8be2\u96c6\u7fa4 IDC \u4e0e REGION \u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"obclient [oceanbase]> select * from dba_ob_zones;\n+-------+----------------------------+----------------------------+--------+-----+------------+-----------+\n| ZONE  | CREATE_TIME                | MODIFY_TIME                | STATUS | IDC | REGION     | TYPE      |\n+-------+----------------------------+----------------------------+--------+-----+------------+-----------+\n| zone1 | 2023-08-23 16:56:33.745432 | 2023-08-23 16:56:33.745432 | ACTIVE |     | sys_region | ReadWrite |\n| zone2 | 2023-08-23 16:56:33.745432 | 2023-08-23 16:56:33.745432 | ACTIVE |     | sys_region | ReadWrite |\n| zone3 | 2023-08-23 16:56:33.745432 | 2023-08-23 16:56:33.745432 | ACTIVE |     | sys_region | ReadWrite |\n+-------+----------------------------+----------------------------+--------+-----+------------+-----------+\n3 rows in set (0.095 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4fee\u6539 IDC \u4e0e REGION \u4fe1\u606f\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"ALTER SYSTEM MODIFY zone zone1 SET IDC='old2',REGION='sys_region';\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["\u7b49\u5f85\u63a5\u7ba1\u4efb\u52a1\u5b8c\u6210\uff0c\u53ef\u4ee5\u67e5\u770b\u96c6\u7fa4\u83b7\u53d6\u96c6\u7fa4\u4fe1\u606f\n",(0,i.jsx)(e.img,{alt:"image.png",src:s(43929).A+"",width:"1107",height:"287"})]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},83958:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p1-720a01a3d57bedc24a1075cb22106924.png"},14980:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p10-377782a6440ea0eba09df91a1e526a55.png"},68877:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p11-fdb17b630feebd751aa942e0d390ceaf.png"},54902:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p12-ae8c5bde71fb083ef5b970e2ce6a0251.png"},51839:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p13-8e884702f163fc65aeb4e2699caaabab.png"},512:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p14-e35e01e362d4de40d64bee0704d83867.png"},17366:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p15-a55e60894be394f3f87d9a59a75af4a6.png"},64018:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p16-618dcc5e9d718a78d4c5da2c2046307c.png"},78843:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p17-18939e9e99b05ba9a0402386db7afe1f.png"},98956:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p18-c10e718117dff0c0a10e7c6287c1c60a.png"},34869:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p19-9a2f936dc88f3b61d30c273266361770.png"},15725:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p2-5e59727eb7a1bb5d6b7d8b60cdc76853.png"},43929:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p20-73b79e6321d3ca3c80bf8f86abf103c9.png"},52484:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p3-2cd369d61c21855480e719db88dbf80d.png"},7291:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p4-701b5f8584d44098faefe443aa938d97.png"},85746:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p5-3db8f222e2dac327288a20ae02632982.png"},33929:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p6-36ce304b2926757b8ae125ca5f301240.png"},9728:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p7-86ba42af8d08a5d8317b146e29d56566.png"},53959:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p8-3d875f3911b346a1b9f91d0e3c221b6f.png"},78174:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/p9-c9375f289610c50838623325d215f66f.png"},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var i=s(96540);const r={},c=i.createContext(r);function d(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);