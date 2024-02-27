"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[825],{8960:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>n,metadata:()=>t,toc:()=>a});var r=o(4848),i=o(8453);const n={sidebar_position:1},d="Using discord webhooks",t={id:"guides/discord/discord-webhooks",title:"Using discord webhooks",description:"1. Generate a webhook url for your discord server in your discord's server settings.",source:"@site/docs/guides/discord/discord-webhooks.md",sourceDirName:"guides/discord",slug:"/guides/discord/discord-webhooks",permalink:"/guides/discord/discord-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/discord/discord-webhooks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Discord integration",permalink:"/category/discord-integration"},next:{title:"Automatic Reboots",permalink:"/guides/automatic-reboots"}},c={},a=[];function u(e){const s={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"using-discord-webhooks",children:"Using discord webhooks"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Generate a webhook url for your discord server in your discord's server settings."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Set the environment variable with the unique token at the end of the discord webhook url example: ",(0,r.jsx)(s.code,{children:"https://discord.com/api/webhooks/1234567890/abcde"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"send discord messages with docker run:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'-e DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/1234567890/abcde" \\\n-e DISCORD_PRE_UPDATE_BOOT_MESSAGE="Server is updating..." \\\n'})}),"\n",(0,r.jsx)(s.p,{children:"send discord messages with docker compose:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1234567890/abcde\n- DISCORD_PRE_UPDATE_BOOT_MESSAGE=Server is updating...\n"})})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>d,x:()=>t});var r=o(6540);const i={},n=r.createContext(i);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);