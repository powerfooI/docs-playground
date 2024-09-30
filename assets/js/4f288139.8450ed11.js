"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[4994],{98615:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var r=s(74848),t=s(28453);const d={title:"\u901a\u8fc7 OBD \u90e8\u7f72\u96c6\u7fa4",weight:3},i=void 0,o={id:"user_manual/user_best_practices/deploy_oceanbase/obd_deploy",title:"\u901a\u8fc7 OBD \u90e8\u7f72\u96c6\u7fa4",description:"OBD \u521b\u5efa\u96c6\u7fa4\u9002\u7528\u4e8e\u5feb\u901f\u90e8\u7f72\u96c6\u7fa4\u7528\u6765\u6d4b\u8bd5\uff0c\u5982\u679c\u662f\u7ebf\u4e0a\u73af\u5883\uff0c\u5efa\u8bae\u4f7f\u7528 OCP\u3002",source:"@site/docs/user_manual/user_best_practices/deploy_oceanbase/obd_deploy.md",sourceDirName:"user_manual/user_best_practices/deploy_oceanbase",slug:"/user_manual/user_best_practices/deploy_oceanbase/obd_deploy",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/obd_deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/oceanbase/oceanbase.github.io/tree/main/docs/user_manual/user_best_practices/deploy_oceanbase/obd_deploy.md",tags:[],version:"current",frontMatter:{title:"\u901a\u8fc7 OBD \u90e8\u7f72\u96c6\u7fa4",weight:3},sidebar:"legacySidebar",previous:{title:"\u90e8\u7f72\u65b9\u5f0f",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/deploy_method"},next:{title:"\u901a\u8fc7 OCP \u90e8\u7f72&\u63a5\u7ba1\u96c6\u7fa4",permalink:"/docs-playground/docs/user_manual/user_best_practices/deploy_oceanbase/ocp_deploy"}},l={},a=[{value:"<strong>\u673a\u5668\u521d\u59cb\u5316\uff08\u5f3a\u70c8\u5efa\u8bae\uff09</strong>",id:"\u673a\u5668\u521d\u59cb\u5316\u5f3a\u70c8\u5efa\u8bae",level:2},{value:"<strong>\u68c0\u6d4b\u53ca\u5b89\u88c5 NTP \u670d\u52a1</strong>",id:"\u68c0\u6d4b\u53ca\u5b89\u88c5-ntp-\u670d\u52a1",level:3},{value:"<strong>\u914d\u7f6e limits.conf</strong>",id:"\u914d\u7f6e-limitsconf",level:3},{value:"<strong>\u914d\u7f6e sysctl.conf</strong>",id:"\u914d\u7f6e-sysctlconf",level:3},{value:"<strong>\u5173\u95ed\u9632\u706b\u5899</strong>",id:"\u5173\u95ed\u9632\u706b\u5899",level:3},{value:"<strong>\u5173\u95ed SELinux</strong>",id:"\u5173\u95ed-selinux",level:3},{value:"<strong>\u5173\u95ed\u900f\u660e\u5927\u9875\uff1a</strong>",id:"\u5173\u95ed\u900f\u660e\u5927\u9875",level:3},{value:"<strong>\u89c4\u5212\u76ee\u5f55</strong>",id:"\u89c4\u5212\u76ee\u5f55",level:3},{value:"<strong>\u521b\u5efa admin \u7528\u6237</strong>",id:"\u521b\u5efa-admin-\u7528\u6237",level:3},{value:"<strong>\u4e2d\u63a7\u673a\u914d\u7f6e admin \u7528\u6237 SSH\u514d\u5bc6</strong>",id:"\u4e2d\u63a7\u673a\u914d\u7f6e-admin-\u7528\u6237-ssh\u514d\u5bc6",level:3},{value:"<strong>\u521b\u5efa\u96c6\u7fa4</strong>",id:"\u521b\u5efa\u96c6\u7fa4",level:2},{value:"<strong>\u8fde\u63a5\u96c6\u7fa4</strong>",id:"\u8fde\u63a5\u96c6\u7fa4",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OBD \u521b\u5efa\u96c6\u7fa4\u9002\u7528\u4e8e\u5feb\u901f\u90e8\u7f72\u96c6\u7fa4\u7528\u6765\u6d4b\u8bd5\uff0c\u5982\u679c\u662f\u7ebf\u4e0a\u73af\u5883\uff0c\u5efa\u8bae\u4f7f\u7528 OCP\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u673a\u5668\u521d\u59cb\u5316\u5f3a\u70c8\u5efa\u8bae",children:(0,r.jsx)(n.strong,{children:"\u673a\u5668\u521d\u59cb\u5316\uff08\u5f3a\u70c8\u5efa\u8bae\uff09"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f3a\u70c8\u5efa\u8bae\u505a\u673a\u5668\u521d\u59cb\u5316\uff0c\u9632\u6b62\u540e\u9762\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u56e0\u4e3a\u914d\u7f6e\u95ee\u9898\u5bfc\u81f4\u7684\u6570\u636e\u5e93\u5f02\u5e38\uff0c\u907f\u514d\u7c7b\u4f3c\u4e8e\u53e5\u67c4\u4e0d\u8db3\u3001\u5185\u5b58\u6cc4\u6f0f\u7b49\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u64cd\u4f5c\u9700\u8981\u767b\u5f55\u5230\u6bcf\u53f0\u673a\u5668\uff0c\u5728 root \u7528\u6237\u4e0b\u5b8c\u6210\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u68c0\u6d4b\u53ca\u5b89\u88c5-ntp-\u670d\u52a1",children:(0,r.jsx)(n.strong,{children:"\u68c0\u6d4b\u53ca\u5b89\u88c5 NTP \u670d\u52a1"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5982\u679c\u8f93\u51fa running \u8868\u793a NTP \u670d\u52a1\u6b63\u5728\u8fd0\u884c\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl status ntpd.service\nntpd.service - Network Time Service\nLoaded: loaded (/usr/lib/systemd/system/ntpd.service; disabled; vendor preset: disabled)\nActive: active (running) since \u4e00 2017-12-18 13:13:19 CST; 3s ago\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u82e5\u8fd4\u56de\u62a5\u9519\u4fe1\u606f Unit ntpd.service could not be found.\uff0c\u8bf7\u5c1d\u8bd5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ee5\u67e5\u770b\u4e0e NTP \u8fdb\u884c\u65f6\u949f\u540c\u6b65\u6240\u4f7f\u7528\u7684\u7cfb\u7edf\u914d\u7f6e\u662f chronyd \u8fd8\u662f ntpd\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl status chronyd.service\nchronyd.service - NTP client/server\nLoaded: loaded (/usr/lib/systemd/system/chronyd.service; enabled; vendor preset: enabled)\nActive: active (running) since Mon 2021-04-05 09:55:29 EDT; 3 days ago\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u82e5\u53d1\u73b0\u7cfb\u7edf\u65e2\u6ca1\u6709\u914d\u7f6e chronyd \u4e5f\u6ca1\u6709\u914d\u7f6e ntpd\uff0c\u5219\u8868\u793a\u7cfb\u7edf\u5c1a\u672a\u5b89\u88c5\u4efb\u4e00\u670d\u52a1\u3002\u6b64\u65f6\uff0c\u5e94\u5148\u5b89\u88c5\u5176\u4e2d\u4e00\u4e2a\u670d\u52a1\uff0c\u5e76\u4fdd\u8bc1\u5b83\u53ef\u4ee5\u81ea\u52a8\u542f\u52a8\uff0c\u9ed8\u8ba4\u4f7f\u7528 ntpd\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u7cfb\u7edf\u914d\u7f6e\u662f chronyd\uff0c\u8bf7\u76f4\u63a5\u6267\u884c\u6b65\u9aa4 3\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c ntpstat \u547d\u4ee4\u68c0\u6d4b\u662f\u5426\u4e0e NTP \u670d\u52a1\u5668\u540c\u6b65\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a Ubuntu \u7cfb\u7edf\u9700\u5b89\u88c5 ntpstat \u8f6f\u4ef6\u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ntpstat\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u8f93\u51fa synchronised to NTP server\uff0c\u8868\u793a\u6b63\u5728\u4e0e NTP \u670d\u52a1\u5668\u6b63\u5e38\u540c\u6b65\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"synchronised to NTP server (85.199.214.101) at stratum 2\ntime correct to within 91 ms\npolling server every 1024 s\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ee5\u4e0b\u60c5\u51b5\u8868\u793a NTP \u670d\u52a1\u672a\u6b63\u5e38\u540c\u6b65\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"unsynchronised\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ee5\u4e0b\u60c5\u51b5\u8868\u793a NTP \u670d\u52a1\u672a\u6b63\u5e38\u8fd0\u884c\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Unable to talk to NTP daemon. Is it running?\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c chronyc tracking \u547d\u4ee4\u67e5\u770b Chrony \u670d\u52a1\u662f\u5426\u4e0e NTP \u670d\u52a1\u5668\u540c\u6b65\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u8be5\u64cd\u4f5c\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528 Chrony \u7684\u7cfb\u7edf\uff0c\u4e0d\u9002\u7528\u4e8e\u4f7f\u7528 NTPd \u7684\u7cfb\u7edf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chronyc tracking\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u8be5\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u4e3a Leap status : Normal\uff0c\u5219\u4ee3\u8868\u540c\u6b65\u8fc7\u7a0b\u6b63\u5e38\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Reference ID    : 5EC69F0A (ntp1.time.nl)\nStratum         : 2\nRef time (UTC)  : Thu May 20 15:19:08 2021\nSystem time     : 0.000022151 seconds slow of NTP time\nLast offset     : -0.000041040 seconds\nRMS offset      : 0.000053422 seconds\nFrequency       : 2.286 ppm slow\nResidual freq   : -0.000 ppm\nSkew            : 0.012 ppm\nRoot delay      : 0.012706812 seconds\nRoot dispersion : 0.000430042 seconds\nUpdate interval : 1029.8 seconds\nLeap status     : Normal\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u8be5\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff0c\u5219\u8868\u793a\u540c\u6b65\u8fc7\u7a0b\u51fa\u9519\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Leap status    : Not synchronised\t\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u8be5\u547d\u4ee4\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff0c\u5219\u8868\u793a Chrony \u670d\u52a1\u672a\u6b63\u5e38\u8fd0\u884c\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"506 Cannot talk to daemon\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u4f7f NTP \u670d\u52a1\u5c3d\u5feb\u5f00\u59cb\u540c\u6b65\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u53ef\u4ee5\u5c06 pool.ntp.org \u66ff\u6362\u4e3a\u4f60\u7684 NTP \u670d\u52a1\u5668\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl stop ntpd.service && \\\nsudo ntpdate pool.ntp.org && \\\nsudo systemctl start ntpd.service\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u8981\u5728 CentOS 7 \u7cfb\u7edf\u4e0a\u624b\u52a8\u5b89\u88c5 NTP \u670d\u52a1\uff0c\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo yum install ntp ntpdate && \\\nsudo systemctl start ntpd.service && \\\nsudo systemctl enable ntpd.service\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e-limitsconf",children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e limits.conf"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 /etc/security/limits.conf \u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root soft nofile 655350\nroot hard nofile 655350\n* soft nofile 655350\n* hard nofile 655350\n* soft stack 20480\n* hard stack 20480\n* soft nproc 655360\n* hard nproc 655360\n* soft core unlimited\n* hard core unlimited\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9000\u51fa\u5f53\u524d\u4f1a\u8bdd\uff0c\u91cd\u65b0\u767b\u5f55\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u914d\u7f6e\u662f\u5426\u751f\u6548\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ulimit -a\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e-sysctlconf",children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e sysctl.conf"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728 /etc/sysctl.conf \u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# for oceanbase\n## \u4fee\u6539\u5185\u6838\u5f02\u6b65 I/O \u9650\u5236\nfs.aio-max-nr=1048576\n\n## \u7f51\u7edc\u4f18\u5316\nnet.core.somaxconn = 2048\nnet.core.netdev_max_backlog = 10000 \nnet.core.rmem_default = 16777216 \nnet.core.wmem_default = 16777216 \nnet.core.rmem_max = 16777216 \nnet.core.wmem_max = 16777216\n\nnet.ipv4.ip_local_port_range = 3500 65535 \nnet.ipv4.ip_forward = 0 \nnet.ipv4.conf.default.rp_filter = 1 \nnet.ipv4.conf.default.accept_source_route = 0 \nnet.ipv4.tcp_syncookies = 0 \nnet.ipv4.tcp_rmem = 4096 87380 16777216 \nnet.ipv4.tcp_wmem = 4096 65536 16777216 \nnet.ipv4.tcp_max_syn_backlog = 16384 \nnet.ipv4.tcp_fin_timeout = 15 \nnet.ipv4.tcp_max_syn_backlog = 16384 \nnet.ipv4.tcp_tw_reuse = 1 \nnet.ipv4.tcp_tw_recycle = 1 \nnet.ipv4.tcp_slow_start_after_idle=0\n\nvm.swappiness = 0\nvm.min_free_kbytes = 2097152\n# \u4fee\u6539\u8fdb\u7a0b\u53ef\u4ee5\u62e5\u6709\u7684\u865a\u62df\u5185\u5b58\u533a\u57df\u6570\u91cf\nvm.max_map_count = 655360\n\n# \u6b64\u5904\u4e3a OceanBase \u6570\u636e\u5e93\u7684 data \u76ee\u5f55\nkernel.core_pattern = /data/core-%e-%p-%t\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0ckernel.core_pattern \u4e2d\u7684 /data \u4e3a OceanBase \u6570\u636e\u5e93\u7684 data \u76ee\u5f55\u3002\n\u6ce8\u610f\uff1amax_map_count \u914d\u7f6e\u4e0d\u5408\u7406\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684\u5185\u5b58\u6cc4\u9732\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u52a0\u8f7d\u914d\u7f6e"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sysctl -p\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5173\u95ed\u9632\u706b\u5899",children:(0,r.jsx)(n.strong,{children:"\u5173\u95ed\u9632\u706b\u5899"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl disable firewalld \nsystemctl stop firewalld \nsystemctl status firewalld\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5173\u95ed-selinux",children:(0,r.jsx)(n.strong,{children:"\u5173\u95ed SELinux"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 /etc/selinux/config \u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\u5bf9\u5e94\u914d\u7f6e\u9879\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SELINUX=disabled\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6216\u91cd\u542f\u670d\u52a1\u5668\uff0c\u4f7f\u66f4\u6539\u751f\u6548\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"setenforce 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u67e5\u770b\u66f4\u6539\u662f\u5426\u751f\u6548\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sestatus\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5173\u95ed\u900f\u660e\u5927\u9875",children:(0,r.jsx)(n.strong,{children:"\u5173\u95ed\u900f\u660e\u5927\u9875\uff1a"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e Red Hat \u64cd\u4f5c\u7cfb\u7edf\uff0c\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u624b\u52a8\u5173\u95ed\u900f\u660e\u5927\u9875\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo never > /sys/kernel/mm/redhat_transparent_hugepage/enabled\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e CentOS \u64cd\u4f5c\u7cfb\u7edf\uff0c\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u624b\u52a8\u5173\u95ed\u900f\u660e\u5927\u9875\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"echo never > /sys/kernel/mm/transparent_hugepage/enabled\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u89c4\u5212\u76ee\u5f55",children:(0,r.jsx)(n.strong,{children:"\u89c4\u5212\u76ee\u5f55"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u521b\u5efa\u7684\u76ee\u5f55\uff08\u53ef\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u60c5\u51b5\u8c03\u6574\uff09"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/data \u4e3a\u6570\u636e\u76d8\u3002"}),"\n",(0,r.jsx)(n.li,{children:"/redo \u5b58\u653e redo \u65e5\u5fd7\u3002"}),"\n",(0,r.jsx)(n.li,{children:"/home/admin/oceanbase \u5b58\u653e OceanBase \u6570\u636e\u5e93\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u8fd0\u884c\u65e5\u5fd7\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff0c\u6570\u636e\u76d8\u548c\u65e5\u5fd7\u76d8\u5efa\u8bae\u5206\u76d8\uff0c\u907f\u514d\u76f8\u4e92\u5f71\u54cd\uff1b\u65e5\u5fd7\u76d8\u5927\u5c0f\u5efa\u8bae\u662f OB \u5185\u5b58\u7684 3-4\u500d\uff1b\u78c1\u76d8\u7a7a\u95f4\u9ed8\u8ba4\u4f1a\u9884\u5360\u7528\uff0c\u540e\u7eed\u6570\u636e\u65b0\u589e\u4f1a\u81ea\u52a8\u4ece\u8fd9\u91cc\u9762\u5206\u914d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa-admin-\u7528\u6237",children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa admin \u7528\u6237"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u8d26\u6237 admin\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"useradd -U admin -d /home/admin -s /bin/bash\nmkdir -p /home/admin\nchown -R admin:admin /home/admin\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4e3a\u8d26\u6237 admin \u8bbe\u7f6e\u5bc6\u7801\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"passwd admin\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u4e3a\u8d26\u6237 admin \u8bbe\u7f6e sudo \u6743\u9650\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6253\u5f00 /etc/sudoers \u6587\u4ef6\uff0c\u5728 /etc/sudoers \u6587\u4ef6\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[root@test001 ~]# vim /etc/sudoers\n# \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a\n## Same thing without a password\n# %wheel        ALL=(ALL)       NOPASSWD: ALL\nadmin       ALL=(ALL)       NOPASSWD: ALL\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u6388\u6743\u76ee\u5f55"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chown -R admin:admin /data\nchown -R admin:admin /redo\nchown -R admin:admin /home/admin\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4e2d\u63a7\u673a\u914d\u7f6e-admin-\u7528\u6237-ssh\u514d\u5bc6",children:(0,r.jsx)(n.strong,{children:"\u4e2d\u63a7\u673a\u914d\u7f6e admin \u7528\u6237 SSH\u514d\u5bc6"})}),"\n",(0,r.jsx)(n.p,{children:"admin \u7528\u6237\u767b\u5f55 OBD \u6240\u5728\u673a\u5668"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u4e2d\u63a7\u673a\u5668\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 SSH \u516c\u94a5\u548c\u79c1\u94a5\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh-keygen -t rsa\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u5c06\u4e2d\u63a7\u673a\u7684\u516c\u94a5\u590d\u5236\u5230\u76ee\u6807\u673a\u5668\u7684 authorized_keys \u6587\u4ef6\u4e2d\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ssh-copy-id -i ~/.ssh/id_rsa.pub <user>@<server_ip>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u521b\u5efa\u96c6\u7fa4",children:(0,r.jsx)(n.strong,{children:"\u521b\u5efa\u96c6\u7fa4"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728 ~/.oceanbase-all-in-one/conf \u4e0b\u6709\u5e38\u7528\u7684\u914d\u7f6e\u6a21\u7248"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5355\u673a\u90e8\u7f72\u914d\u7f6e\u6837\u4f8b\uff1amini-single-example.yaml\u3001single-example.yaml"}),"\n",(0,r.jsx)(n.li,{children:"\u5355\u673a\u90e8\u7f72 + ODP \u914d\u7f6e\u6837\u4f8b\uff1amini-single-with-obproxy-example.yaml\u3001single-with-obproxy-example.yaml"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u90e8\u7f72\u914d\u7f6e\u6837\u4f8b\uff1amini-distributed-example.yaml\u3001distributed-example.yaml"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u90e8\u7f72 + ODP \u914d\u7f6e\u6837\u4f8b\uff1amini-distributed-with-obproxy-example.yaml\u3001distributed-with-obproxy-example.yaml"}),"\n",(0,r.jsx)(n.li,{children:"\u5206\u5e03\u5f0f\u90e8\u7f72\u5168\u90e8\u7ec4\u4ef6\uff1aall-components-min.yaml\u3001all-components.yaml"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u4e8b\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'## Only need to configure when remote login is required\nuser:\n  username: admin\n  password: \n#   key_file: your ssh-key file path if need\n#   port: your ssh port, default 22\n#   timeout: ssh connection timeout (second), default 30\noceanbase-ce:\n  servers:\n    - name: server1\n      # Please don\'t use hostname, only IP can be supported\n      ip: 192.168.1.2\n    - name: server2\n      ip: 192.168.1.3\n    - name: server3\n      ip: 192.168.1.4\n  global:\n    production_mode: true\n    # Please set devname as the network adaptor\'s name whose ip is  in the setting of severs.\n    # if set severs as "127.0.0.1", please set devname as "lo"\n    # if current ip is 192.168.1.10, and the ip\'s network adaptor\'s name is "eth0", please use "eth0"\n    devname: eth0\n    # if current hardware\'s memory capacity is smaller than 50G, please use the setting of "mini-single-example.yaml" and do a small adjustment.\n    memory_limit: 64G # The maximum running memory for an observer\n    # The reserved system memory. system_memory is reserved for general tenants. The default value is 30G.\n    system_memory: 30G\n    cpu_count: 32\n    datafile_size: 300G # Size of the data file.\n    log_disk_size: 200G # The size of disk space used by the clog files.\n    enable_syslog_wf: false # Print system logs whose levels are higher than WARNING to a separate log file. The default value is true.\n    enable_syslog_recycle: true # Enable auto system log recycling or not. The default value is false.\n    max_syslog_file_count: 4 # The maximum number of reserved log files before enabling auto recycling. The default value is 0.\n    # observer cluster name, consistent with obproxy\'s cluster_name\n    appname: obtest\n    # root_password: # root user password, can be empty\n    root_password: *********\n    # proxyro_password: # proxyro user pasword, consistent with obproxy\'s observer_sys_password, can be empty\n    proxyro_password: *********\n  # In this example , support multiple ob process in single node, so different process use different ports.\n  # If deploy ob cluster in multiple nodes, the port and path setting can be same.\n  server1:\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881. DO NOT change this value after the cluster is started.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882. DO NOT change this value after the cluster is started.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /home/admin/observer\n    # The directory for data storage. The default value is $home_path/store.\n    data_dir: /data\n    # The directory for clog, ilog, and slog. The default value is the same as the data_dir value.\n    redo_dir: /redo\n    zone: zone1\n  server2:\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881. DO NOT change this value after the cluster is started.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882. DO NOT change this value after the cluster is started.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /home/admin/observer\n    # The directory for data storage. The default value is $home_path/store.\n    data_dir: /data\n    # The directory for clog, ilog, and slog. The default value is the same as the data_dir value.\n    redo_dir: /redo\n    zone: zone2\n  server3:\n    mysql_port: 2881 # External port for OceanBase Database. The default value is 2881. DO NOT change this value after the cluster is started.\n    rpc_port: 2882 # Internal port for OceanBase Database. The default value is 2882. DO NOT change this value after the cluster is started.\n    #  The working directory for OceanBase Database. OceanBase Database is started under this directory. This is a required field.\n    home_path: /home/admin/observer\n    # The directory for data storage. The default value is $home_path/store.\n    data_dir: /data\n    # The directory for clog, ilog, and slog. The default value is the same as the data_dir value.\n    redo_dir: /redo\n    zone: zone3\nobproxy-ce:\n  # Set dependent components for the component.\n  # When the associated configurations are not done, OBD will automatically get the these configurations from the dependent components.\n  depends:\n    - oceanbase-ce\n  servers:\n    - 192.168.1.2\n    - 192.168.1.3\n    - 192.168.1.4\n  global:\n    listen_port: 2883 # External port. The default value is 2883.\n    prometheus_listen_port: 2884 # The Prometheus port. The default value is 2884.\n    home_path: /home/admin/obproxy\n    # oceanbase root server list\n    # format: ip:mysql_port;ip:mysql_port. When a depends exists, OBD gets this value from the oceanbase-ce of the depends.\n    # rs_list: 192.168.1.2:2881;192.168.1.3:2881;192.168.1.4:2881\n    enable_cluster_checkout: false\n    # observer cluster name, consistent with oceanbase-ce\'s appname. When a depends exists, OBD gets this value from the oceanbase-ce of the depends.\n    cluster_name: obtest\n    skip_proxy_sys_private_check: true\n    enable_strict_kernel_release: false\n    # obproxy_sys_password: # obproxy sys user password, can be empty. When a depends exists, OBD gets this value from the oceanbase-ce of the depends.\n    obproxy_sys_password: *********\n    # observer_sys_password: # proxyro user pasword, consistent with oceanbase-ce\'s proxyro_password, can be empty. When a depends exists, OBD gets this value from the oceanbase-ce of the depends.\n    observer_sys_password: *********\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u5173\u6ce8\u7684\u914d\u7f6e\u9879\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u3010user\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u8be6\u60c5"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password"}),(0,r.jsx)(n.td,{children:"\u5982\u679c\u5df2\u7ecf\u8bbe\u7f6e\u514d\u5bc6\uff0c\u5219\u4e3a\u7a7a"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"\u3010oceanbase-ce\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u8be6\u60c5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"production_mode"}),(0,r.jsx)(n.td,{children:"\u5982\u679c\u7ed9\u5230OB\u7684\u5185\u5b58\u5c0f\u4e8e 16G\uff0c\u9700\u8981\u6539\u6210 false\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"memory_limit"}),(0,r.jsx)(n.td,{children:"\u7ed9\u5230 OBServer \u7684\u5185\u5b58\u5927\u5c0f\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"system_memory"}),(0,r.jsx)(n.td,{children:"\u4fdd\u7559\u7684\u7cfb\u7edf\u5185\u5b58\uff0c\u8be5\u53c2\u6570\u503c\u4f1a\u5360\u7528 memory_limit \u7684\u5185\u5b58\uff0c\u4e0d\u5efa\u8bae\u7ed9\u592a\u5c0f\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cpu_count"}),(0,r.jsx)(n.td,{children:"\u7ed9\u5230 OBServer \u7684 CPU \u6570\u91cf\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"datafile_size"}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u76d8\u5927\u5c0f\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"log_disk_size"}),(0,r.jsx)(n.td,{children:"\u65e5\u5fd7\u76d8\u5927\u5c0f\uff0c\u5efa\u8bae\u662f\u5185\u5b58\u7684 3-4 \u500d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"appname"}),(0,r.jsx)(n.td,{children:"\u96c6\u7fa4\u540d\u5b57\uff0c\u8ddf\u4e0b\u9762 [obproxy-ce] - [cluster_name] \u7684\u5b9a\u4e49\u4fdd\u6301\u4e00\u81f4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"root_password"}),(0,r.jsx)(n.td,{children:"\u5efa\u8bae\u624b\u52a8\u5b9a\u4e49\uff0c\u5bc6\u7801\u8ddf [obproxy-ce] - [obproxy_sys_password] \u4ee5\u53ca [obproxy-ce] - [observer_sys_password] \u4fdd\u6301\u4e00\u81f4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"proxyro_password"}),(0,r.jsx)(n.td,{children:"\u5efa\u8bae\u8ddf root_password \u4fdd\u6301\u4e00\u81f4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"home_path"}),(0,r.jsx)(n.td,{children:"\u5b89\u88c5\u76ee\u5f55\uff0cOB \u7684\u672c\u5730\u914d\u7f6e\u4ee5\u53ca\u8fd0\u884c\u65e5\u5fd7\u90fd\u5728\u8fd9\u91cc\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"data_dir"}),(0,r.jsx)(n.td,{children:"\u6570\u636e\u76ee\u5f55\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"redo_dir"}),(0,r.jsx)(n.td,{children:"\u65e5\u5fd7\u76ee\u5f55\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"\u903b\u8f91\u6982\u5ff5\uff0c\u5982\u679c\u76f8\u540c\u7684\u8bdd\u5219\u53ea\u80fd\u5355\u526f\u672c\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u53ef\u7528\u6027\u3002\u5efa\u8bae\u81f3\u5c113\u4e2a\u4ee5\u4e0a\u3002"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u76d1\u63a7\u3001\u544a\u8b66\uff0c\u53ef\u4ee5\u589e\u52a0 prometheus \u548c obagent \u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u90e8\u7f72\u96c6\u7fa4\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"obd cluster deploy obtest -c obtest-config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u8fd9\u91cc\u7684 obtest \u662f\u6307 OBD \u90e8\u7f72\u96c6\u7fa4\u540d\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u96c6\u7fa4\u522b\u540d\uff0c\u8ddf\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u96c6\u7fa4\u540d\u4e0d\u662f\u4e00\u4e2a\uff0c\u5efa\u8bae\u4fdd\u6301\u4e00\u81f4\u9632\u6b62\u540e\u9762\u5f04\u6df7\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u542f\u52a8\u96c6\u7fa4\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"obd cluster start obtest\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u56e0\u4e3a\u914d\u7f6e\u95ee\u9898\u5bfc\u81f4\u542f\u52a8\u5931\u8d25\uff0c\u53ef\u4ee5\u901a\u8fc7 obd cluster edit-config obtest \u4fee\u6539\u914d\u7f6e\u91cd\u8bd5\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# \u67e5\u770b OBD \u7ba1\u7406\u7684\u96c6\u7fa4\u5217\u8868\nobd cluster list \n\n# \u67e5\u770b obtest \u96c6\u7fa4\u72b6\u6001\nobd cluster display obtest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8fde\u63a5\u96c6\u7fa4",children:(0,r.jsx)(n.strong,{children:"\u8fde\u63a5\u96c6\u7fa4"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 obd cluster display obtest \u53ef\u4ee5\u67e5\u8be2\u5230 sys \u79df\u6237 root \u7528\u6237\u7684\u8fde\u63a5\u4e32"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# \u901a\u8fc7 OBServer \u8fde\u63a5\u5230\u96c6\u7fa4\nmysql -h192.168.1.2 -P2881 -uroot@sys -p'*********' -Doceanbase -A\n\n# \u901a\u8fc7 OBProxy \u8fde\u63a5\u5230\u96c6\u7fa4\nmysql -h192.168.1.2 -P2883 -uroot@sys#obtest -p'*********' -Doceanbase -A\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u81f3\u6b64\uff0c\u96c6\u7fa4\u521b\u5efa\u5b8c\u6210\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},d=r.createContext(t);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);