"use strict";(self.webpackChunkmy_docs_website=self.webpackChunkmy_docs_website||[]).push([[4194],{85902:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>r});var s=a(74848),c=a(28453);const t={},l="\u79df\u6237\u5907\u4efd",i={id:"ob-operator/ob-operator-user-guide/high-availability/tenant-backup-of-ob-operator",title:"\u79df\u6237\u5907\u4efd",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u8fdb\u884c\u79df\u6237\u6570\u636e\u5907\u4efd\u3002\u79df\u6237\u6570\u636e\u5907\u4efd\u7684\u5173\u952e\u8d44\u6e90\u4e3a OBTenantBackupPolicy \u548c OBTenantBackup\uff0c\u5206\u522b\u8868\u793a\u5907\u4efd\u7b56\u7565\u548c\u5907\u4efd\u4efb\u52a1\u3002\u901a\u8fc7\u5907\u4efd\u7b56\u7565\uff0c\u53ef\u4ee5\u4e3a OceanBase \u96c6\u7fa4\u5f53\u4e2d\u67d0\u4e2a\u79df\u6237\u6307\u5b9a\u5468\u671f\u6027\u7684\u65e5\u5fd7\u5f52\u6863\u548c\u6570\u636e\u5907\u4efd\u914d\u7f6e\u3002\u5907\u4efd\u7b56\u7565\u4f1a\u901a\u8fc7\u521b\u5efa\u5907\u4efd\u4efb\u52a1\u7684\u65b9\u5f0f\u6765\u6267\u884c\u5177\u4f53\u7684\u4efb\u52a1\u3002\u5907\u4efd\u76ee\u7684\u5730\u652f\u6301 NFS \u548c OSS \u4e24\u79cd\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/ob-operator/500.ob-operator-user-guide/300.high-availability/400.tenant-backup-of-ob-operator.md",sourceDirName:"ob-operator/500.ob-operator-user-guide/300.high-availability",slug:"/ob-operator/ob-operator-user-guide/high-availability/tenant-backup-of-ob-operator",permalink:"/docs-playground/zh-Hans/docs/ob-operator/ob-operator-user-guide/high-availability/tenant-backup-of-ob-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/powerfooi/docs-playground/tree/main/docs/ob-operator/500.ob-operator-user-guide/300.high-availability/400.tenant-backup-of-ob-operator.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{}},o={},r=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u5907\u4efd\u7b56\u7565\u7684\u914d\u7f6e",id:"\u5907\u4efd\u7b56\u7565\u7684\u914d\u7f6e",level:2},{value:"\u53c2\u8003\u914d\u7f6e",id:"\u53c2\u8003\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u5e38\u7528\u64cd\u4f5c",id:"\u5e38\u7528\u64cd\u4f5c",level:2},{value:"\u53d1\u8d77\u5907\u4efd",id:"\u53d1\u8d77\u5907\u4efd",level:3},{value:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u72b6\u6001",id:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u72b6\u6001",level:3},{value:"\u67e5\u770b\u5907\u4efd\u4efb\u52a1\u72b6\u6001",id:"\u67e5\u770b\u5907\u4efd\u4efb\u52a1\u72b6\u6001",level:3},{value:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u8be6\u7ec6\u4fe1\u606f",id:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u8be6\u7ec6\u4fe1\u606f",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u79df\u6237\u5907\u4efd",children:"\u79df\u6237\u5907\u4efd"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u8fdb\u884c\u79df\u6237\u6570\u636e\u5907\u4efd\u3002\u79df\u6237\u6570\u636e\u5907\u4efd\u7684\u5173\u952e\u8d44\u6e90\u4e3a OBTenantBackupPolicy \u548c OBTenantBackup\uff0c\u5206\u522b\u8868\u793a\u5907\u4efd\u7b56\u7565\u548c\u5907\u4efd\u4efb\u52a1\u3002\u901a\u8fc7\u5907\u4efd\u7b56\u7565\uff0c\u53ef\u4ee5\u4e3a OceanBase \u96c6\u7fa4\u5f53\u4e2d\u67d0\u4e2a\u79df\u6237\u6307\u5b9a\u5468\u671f\u6027\u7684\u65e5\u5fd7\u5f52\u6863\u548c\u6570\u636e\u5907\u4efd\u914d\u7f6e\u3002\u5907\u4efd\u7b56\u7565\u4f1a\u901a\u8fc7\u521b\u5efa\u5907\u4efd\u4efb\u52a1\u7684\u65b9\u5f0f\u6765\u6267\u884c\u5177\u4f53\u7684\u4efb\u52a1\u3002\u5907\u4efd\u76ee\u7684\u5730\u652f\u6301 NFS \u548c OSS \u4e24\u79cd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5907\u4efd\u5230 NFS \u7684\u65b9\u5f0f\u9700\u8981\u786e\u4fdd\u90e8\u7f72 OceanBase \u96c6\u7fa4\u65f6\u8bbe\u7f6e\u4e86\u5907\u4efd\u7684 volume\uff0c\u5bf9\u5e94\u7684 NFS \u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u5e76\u6709\u8bfb\u5199\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5907\u4efd\u7b56\u7565\u7684\u914d\u7f6e",children:"\u5907\u4efd\u7b56\u7565\u7684\u914d\u7f6e"}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u79df\u6237\u5907\u4efd\u7b56\u7565\u4e3a\u7279\u5b9a\u7684\u79df\u6237\u914d\u7f6e\uff0c\u53ef\u4ee5\u53c2\u8003\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenantBackupPolicy\nmetadata:\n  name: backup-policy-example\n  namespace: oceanbase\nspec:\n  obClusterName: "test"\n  tenantName: "t1"\n  tenantSecret: "t1-credential"\n  tenantCRName: "tenant-cr"\n  jobKeepWindow: "1d"\n  suspend: false\n  dataClean:\n    recoveryWindow: "8d"\n  logArchive:\n    destination:\n      type: "OSS"\n      path: "oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com"\n      ossAccessSecret: "oss-access"\n      # type: "NFS"\n      # path: "t1/logArchive"\n    switchPieceInterval: "1d"\n    binding: Optional\n  dataBackup:\n    destination:\n      type: "OSS"\n      path: "oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com"\n      ossAccessSecret: "oss-access"\n      # type: "NFS"\n      # path: "t1/dataBackup"\n    fullCrontab: "30 0 * * 6"\n    incrementalCrontab: "30 1 * * *"\n    encryptionSecret: t1-encryption\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u5907\u4efd\u7b56\u7565\u914d\u7f6e\u8bf4\u660e\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"obClusterName\uff1a \u540c namespace \u4e0b OB \u96c6\u7fa4\u8d44\u6e90\u7684\u540d\u79f0"}),"\n",(0,s.jsx)(n.li,{children:"tenantName\uff1a \u6570\u636e\u5e93\u4e2d\u7684\u79df\u6237\u540d"}),"\n",(0,s.jsx)(n.li,{children:"tenantSecret\uff1a \u5305\u542b\u540d\u4e3a tenantName \u7684\u79df\u6237 root \u7528\u6237\u5bc6\u7801\u7684 Secret \u8d44\u6e90\u540d"}),"\n",(0,s.jsx)(n.li,{children:"tenantCRName\uff1a OBTenant \u79df\u6237\u8d44\u6e90\u540d\uff0c\u82e5\u6307\u5b9a\u4e86\u8be5\u5b57\u6bb5\uff0c\u5219\u65e0\u9700\u6307\u5b9a tenantName \u548c tenantSecret"}),"\n",(0,s.jsx)(n.li,{children:"jobKeepWindow\uff1a \u5907\u4efd\u4efb\u52a1\u8d44\u6e90\u4fdd\u7559\u65f6\u95f4\u7a97\u53e3"}),"\n",(0,s.jsxs)(n.li,{children:["suspend\uff1a \u5907\u4efd\u4efb\u52a1\u662f\u5426\u6682\u505c\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:["dataClean\uff1a \u8fc7\u671f\u5907\u4efd\u6570\u636e\u6e05\u7406\u914d\u7f6e","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"recoveryWindow\uff1a \u6570\u636e\u6062\u590d\u7684\u65f6\u95f4\u7a97\u53e3"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["logArchive\uff1a \u65e5\u5fd7\u5f52\u6863\u914d\u7f6e","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"destination\uff1a \u5907\u4efd\u76ee\u7684\u5730\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.li,{children:["switchPieceInterval\uff1a \u65e5\u5fd7\u5f52\u6863\u4e2d ",(0,s.jsx)(n.code,{children:"piece"})," \u7684\u5207\u6362\u5468\u671f\uff0c\u53d6\u503c\u8303\u56f4\u4e3a ",(0,s.jsx)(n.code,{children:"[1d, 7d]"}),"\u3002\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"1d"})]}),"\n",(0,s.jsxs)(n.li,{children:["binding\uff1a \u8bbe\u7f6e\u5f52\u6863\u548c\u4e1a\u52a1\u7684\u4f18\u5148\u6a21\u5f0f\u3002\u76ee\u524d\u652f\u6301 ",(0,s.jsx)(n.code,{children:"Optional"})," \u548c ",(0,s.jsx)(n.code,{children:"Mandatory"})," \u4e24\u79cd\u6a21\u5f0f\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"Optional"})," \u6a21\u5f0f"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["dataBackup\uff1a \u6570\u636e\u5907\u4efd\u914d\u7f6e","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"destination\uff1a \u5907\u4efd\u76ee\u7684\u5730\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.li,{children:["fullCrontab\uff1a \u5168\u91cf\u5907\u4efd\u7684\u5b9a\u65f6\u89e6\u53d1\u914d\u7f6e\uff0c",(0,s.jsx)(n.a,{href:"https://crontab.guru/",children:"\u91c7\u7528 cron expression \u683c\u5f0f"})]}),"\n",(0,s.jsxs)(n.li,{children:["incrementalCrontab\uff1a \u589e\u91cf\u5907\u4efd\u7684\u5b9a\u65f6\u89e6\u53d1\u914d\u7f6e\uff0c",(0,s.jsx)(n.a,{href:"https://crontab.guru/",children:"\u91c7\u7528 cron expression \u683c\u5f0f"})]}),"\n",(0,s.jsx)(n.li,{children:"encryptionSecret\uff1a \u6570\u636e\u5907\u4efd\u52a0\u5bc6\u914d\u7f6e\u7684 Secret \u8d44\u6e90\u540d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5907\u4efd\u76ee\u7684\u5730\u914d\u7f6e\u8bf4\u660e\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"destination\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"type\uff1a\u76ee\u7684\u5730\u7c7b\u578b\uff0c\u652f\u6301 NFS \u548c OSS \u4e24\u79cd\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["path\uff1a\u76ee\u7684\u5730\u7684\u5907\u4efd\u8def\u5f84\uff0c\u5982\u679c\u662f OSS \u7c7b\u578b\uff0c\u5219\u9700\u8981\u4ee5 ",(0,s.jsx)(n.code,{children:"oss://"})," \u5f00\u5934\uff1b\u5982\u679c\u662f NFS \u7c7b\u578b\uff0c\u5219\u662f\u975e ",(0,s.jsx)(n.code,{children:"/"})," \u5f00\u5934\u7684\u76f8\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"ossAccessSecret\uff1a \u5b58\u653e\u8bbf\u95ee OSS \u51ed\u8bc1\u7684 Secret \u8d44\u6e90\u540d\uff0c\u5982\u679c\u5907\u4efd\u76ee\u7684\u5730\u7c7b\u578b\u4e3a OSS\uff0c\u8be5\u5b57\u6bb5\u5fc5\u987b\u63d0\u4f9b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"tenantSecret \u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: tenant-root\n  namespace: oceanbase\ndata:\n  # base64 encoded\n  password: ******\n"})}),"\n",(0,s.jsx)(n.p,{children:"encryptionSecret \u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: tenant-backup-encryption\n  namespace: oceanbase\ndata:\n  # base64 encoded\n  password: ******\n"})}),"\n",(0,s.jsx)(n.p,{children:"ossAccessSecret \u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: oss-access\n  namespace: obcluster\ndata:\n  # base64 encoded\n  accessId: ******\n  accessKey: ******\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u7528\u64cd\u4f5c",children:"\u5e38\u7528\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.h3,{id:"\u53d1\u8d77\u5907\u4efd",children:"\u53d1\u8d77\u5907\u4efd"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u5907\u4efd\u76f8\u5173\u7684 Secret \u8d44\u6e90\uff0c\u6587\u4ef6\u540d\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u6307\u5b9a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f tenant-secret.yaml\nkubectl apply -f backup-encryption.yaml\nkubectl apply -f oss-access.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u521b\u5efa\u79df\u6237\u5907\u4efd\u7b56\u7565\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f backup-policy.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u72b6\u6001",children:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u72b6\u6001"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u5907\u4efd\u7b56\u7565\u7684\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenantbackuppolicies.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NAME                       STATUS    AGE     TENANTNAME   NEXTFULL              NEXTINCREMENTAL   FULLCRONTAB    INCREMENTALCRONTAB\nbackup-policy-example      RUNNING   2m46s   t1           2023-11-10 11:07:58                     */60 * * * *   */25 * * * *\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u5907\u4efd\u4efb\u52a1\u72b6\u6001",children:"\u67e5\u770b\u5907\u4efd\u4efb\u52a1\u72b6\u6001"}),"\n",(0,s.jsx)(n.p,{children:"\u5907\u4efd\u7b56\u7565\u4f1a\u901a\u8fc7\u521b\u5efa\u5907\u4efd\u4efb\u52a1\u7684\u5f62\u5f0f\u6765\u6267\u884c\u5177\u4f53\u7684\u5907\u4efd\u64cd\u4f5c\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5907\u4efd\u4efb\u52a1\u7684\u72b6\u6001\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get obtenantbackups.oceanbase.oceanbase.com -n oceanbase\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"NAME                                              TYPE      STATUS       TENANTNAME   STARTEDAT                    ENDEDAT\nbackup-policy-example-clean-20231110110746        CLEAN     RUNNING      t1                                        \nbackup-policy-example-full-20231110110756         FULL      SUCCESSFUL   t1           2023-11-10 11:08:06.952711   2023-11-10 11:13:31.079246\nbackup-policy-example-archive-20231110110746      ARCHIVE   RUNNING      t1           2023-11-10 11:07:50.139978   2023-11-10 11:13:50.128627\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u8be6\u7ec6\u4fe1\u606f",children:"\u67e5\u770b\u5907\u4efd\u7b56\u7565\u8be6\u7ec6\u4fe1\u606f"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u5907\u4efd\u7b56\u7565\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"kubectl get -o yaml"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get -n oceanbase obtenantbackuppolicies.oceanbase.oceanbase.com backup-policy-example -o yaml \n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: oceanbase.oceanbase.com/v1alpha1\nkind: OBTenantBackupPolicy\nmetadata:\n  creationTimestamp: "2023-11-10T03:07:39Z"\n  finalizers:\n  - obtenantbackuppolicy.finalizers.oceanbase.com\n  generation: 1\n  name: backup-policy-example\n  namespace: oceanbase\n  resourceVersion: "775461"\n  uid: 7ab40200-f849-434d-b1a5-6aad888cf42e\nspec:\n  dataBackup:\n    destination:\n      ossAccessSecret: oss-access\n      path: oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com\n      type: OSS\n    fullCrontab: \'*/60 * * * *\'\n    incrementalCrontab: \'*/25 * * * *\'\n    encryptionSecret: t1-encryption\n  dataClean:\n    recoveryWindow: 8d\n  jobKeepWindow: 1d\n  logArchive:\n    destination:\n      ossAccessSecret: oss-access\n      path: oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com\n      type: OSS\n    switchPieceInterval: 1d\n  obClusterName: test\n  tenantName: t1\n  tenantSecret: t1-credential\nstatus:\n  latestArchiveLogJob:\n    fields: values...\n  latestFullBackupJob:\n    fields: values...\n  nextFull: "2023-11-10 12:00:00"\n  nextIncremental: "2023-11-10 11:25:00"\n  observedGeneration: 1\n  status: RUNNING\n  tenantCR:\n    fields: values...\n  tenantInfo:\n    fields: values...\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"kubectl describe"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl describe -n oceanbase obtenantbackuppolicies.oceanbase.oceanbase.com backup-policy-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Name:         backup-policy-example\nNamespace:    oceanbase\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  oceanbase.oceanbase.com/v1alpha1\nKind:         OBTenantBackupPolicy\nMetadata:\n  Creation Timestamp:  2023-11-10T03:07:39Z\n  Finalizers:\n    obtenantbackuppolicy.finalizers.oceanbase.com\n  Generation:        1\n  Resource Version:  775477\n  UID:               7ab40200-f849-434d-b1a5-6aad888cf42e\nSpec:\n  Data Backup:\n    Destination:\n      Oss Access Secret:  oss-access\n      Path:               oss://bucket/backup?host=oss-cn-hangzhou.aliyuncs.com\n      Type:               OSS\n    Full Crontab:         */60 * * * *\n    Incremental Crontab:  */25 * * * *\n    Encryption Secret:    t1-encryption\n  Data Clean:\n    Recovery Window:  8d\n  Job Keep Window:    1d\n  Log Archive:\n    Destination:\n      Oss Access Secret:    oss-access\n      Path:                 oss://bucket/archive?host=oss-cn-hangzhou.aliyuncs.com\n      Type:                 OSS\n    Switch Piece Interval:  1d\n  Ob Cluster Name:          test\n  Tenant Name:              t1\n  Tenant Secret:            t1-credential\nStatus:\n  Latest Archive Log Job:\n    fields: values...\n  Latest Full Backup Job:\n    fields: values...\n  Next Full:             2023-11-10 12:00:00\n  Next Incremental:      2023-11-10 11:25:00\n  Observed Generation:   1\n  Status:                RUNNING\n  Tenant CR:\n    fields: values...\n  Tenant Info:\n    fields: values...\nEvents:\n  Type    Reason  Age   From                             Message\n  ----    ------  ----  ----                             -------\n  Normal          12m   obtenantbackuppolicy-controller  init status\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var s=a(96540);const c={},t=s.createContext(c);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);