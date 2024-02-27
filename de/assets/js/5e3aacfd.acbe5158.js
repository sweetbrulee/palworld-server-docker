"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3],{2412:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>s,toc:()=>h});var r=d(4848),i=d(8453);const t={sidebar_position:2},l="Spiel-Einstellungen",s={id:"getting-started/configuration/game-settings",title:"Spiel-Einstellungen",description:"\xc4ndern von Spiel-Einstellungen mit Umgebungsvariablen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/configuration/game-settings.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/game-settings",permalink:"/de/getting-started/configuration/game-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/game-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Servereinstellungen",permalink:"/de/getting-started/configuration/server-settings"},next:{title:"Serverbefehle (RCON)",permalink:"/de/getting-started/configuration/server-commands"}},c={},h=[{value:"Mit Umgebungsvariablen",id:"mit-umgebungsvariablen",level:2},{value:"Manuell",id:"manuell",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spiel-einstellungen",children:"Spiel-Einstellungen"}),"\n",(0,r.jsx)(n.p,{children:"\xc4ndern von Spiel-Einstellungen mit Umgebungsvariablen."}),"\n",(0,r.jsx)(n.h2,{id:"mit-umgebungsvariablen",children:"Mit Umgebungsvariablen"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Diese Umgebungsvariablen und Einstellungen k\xf6nnen sich \xe4ndern, da das Spiel noch in der Beta-Phase ist."}),(0,r.jsxs)(n.p,{children:["\xdcberpr\xfcfen Sie die ",(0,r.jsx)(n.a,{href:"https://tech.palworldgame.com/optimize-game-balance",children:"offizielle Webseite f\xfcr unterst\xfctzte Parameter."})]})]}),"\n",(0,r.jsx)(n.p,{children:"Um Servereinstellung in Umgebungsvariablen zu konvertieren m\xfcssen folgende Regeln eingehalten werden:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"alle Buchstaben gro\xdf schreiben"}),"\n",(0,r.jsx)(n.li,{children:"W\xf6rter durch Einf\xfcgen eines Unterstrichs trennen"}),"\n",(0,r.jsx)(n.li,{children:"falls die Einstellung mit einem einzelnen Buchstaben beginnt, muss dieser entfernt werden (z.B. 'b')"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Beispiele:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Difficulty -> DIFFICULTY"}),"\n",(0,r.jsx)(n.li,{children:"PalSpawnNumRate -> PAL_SPAWN_NUM_RATE"}),"\n",(0,r.jsx)(n.li,{children:"bIsPvP -> IS_PVP"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Beschreibung"}),(0,r.jsx)(n.th,{children:"Standardwert"}),(0,r.jsx)(n.th,{children:"Erlaubte Werte"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DIFFICULTY"}),(0,r.jsx)(n.td,{children:"Spiel-Schwierigkeitsgrad"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"None"}),",",(0,r.jsx)(n.code,{children:"Normal"}),",",(0,r.jsx)(n.code,{children:"Difficult"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DAYTIME_SPEEDRATE"}),(0,r.jsx)(n.td,{children:"Tageszeit-Geschwindigkeit - Kleinerer Wert bedeutet k\xfcrzere Tage"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NIGHTTIME_SPEEDRATE"}),(0,r.jsx)(n.td,{children:"Nachtszeit-Geschwindigkeit - Kleinerer Wert bedeutet k\xfcrzere N\xe4chte"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EXP_RATE"}),(0,r.jsx)(n.td,{children:"EXP-Sammelrate"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_CAPTURE_RATE"}),(0,r.jsx)(n.td,{children:"Pal-Fangrate"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_SPAWN_NUM_RATE"}),(0,r.jsx)(n.td,{children:"Pal-Erscheinungsrate"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_DAMAGE_RATE_ATTACK"}),(0,r.jsx)(n.td,{children:"Schadensmultiplikator von Pals"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_DAMAGE_RATE_DEFENSE"}),(0,r.jsx)(n.td,{children:"Verteidigungsmultiplikator von Pals"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_DAMAGE_RATE_ATTACK"}),(0,r.jsx)(n.td,{children:"Schadensmultiplikator von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_DAMAGE_RATE_DEFENSE"}),(0,r.jsx)(n.td,{children:"Verteidigungsmultiplikator von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_STOMACH_DECREASE_RATE"}),(0,r.jsx)(n.td,{children:"Rate der Hungerabnahme von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_STAMINA_DECREASE_RATE"}),(0,r.jsx)(n.td,{children:"Rate der Ausdauerreduktion von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_AUTO_HP_REGEN_RATE"}),(0,r.jsx)(n.td,{children:"Rate der automatischen HP-Regeneration von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PLAYER_AUTO_HP_REGEN_RATE_IN_SLEEP"}),(0,r.jsx)(n.td,{children:"Rate der Schlaf-HP-Regeneration von Spielern"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_STOMACH_DECREASE_RATE"}),(0,r.jsx)(n.td,{children:"Rate der Hungerabnahme von Pals"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_STAMINA_DECREASE_RATE"}),(0,r.jsx)(n.td,{children:"Rate der Ausdauerreduktion von Pals"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_AUTO_HP_REGEN_RATE"}),(0,r.jsx)(n.td,{children:"Rate der automatischen HP-Regeneration von Pals"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_AUTO_HP_REGEN_RATE_IN_SLEEP"}),(0,r.jsx)(n.td,{children:"Rate der Schlaf-HP-Regeneration von Pals (im Palbox)"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BUILD_OBJECT_DAMAGE_RATE"}),(0,r.jsx)(n.td,{children:"Schadensmultiplikator f\xfcr Strukturen"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BUILD_OBJECT_DETERIORATION_DAMAGE_RATE"}),(0,r.jsx)(n.td,{children:"Strukturverschlechterungsrate"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COLLECTION_DROP_RATE"}),(0,r.jsx)(n.td,{children:"Multiplikator f\xfcr sammelbare Gegenst\xe4nde"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COLLECTION_OBJECT_HP_RATE"}),(0,r.jsx)(n.td,{children:"Multiplikator f\xfcr HP sammelbarer Objekte"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COLLECTION_OBJECT_RESPAWN_SPEED_RATE"}),(0,r.jsx)(n.td,{children:"Respawn-Intervall sammelbarer Objekte - Je kleiner die Zahl, desto schneller die Regeneration"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENEMY_DROP_ITEM_RATE"}),(0,r.jsx)(n.td,{children:"Multiplikator f\xfcr fallengelassene Gegenst\xe4nde"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DEATH_PENALTY"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"None"}),": Keine ",(0,r.jsx)(n.code,{children:"Item"}),": Wirft Gegenst\xe4nde au\xdfer Ausr\xfcstung ab ",(0,r.jsx)(n.code,{children:"ItemAndEquipment"}),": Wirft alle Gegenst\xe4nde ab ",(0,r.jsx)(n.code,{children:"All"}),": Wirft alle PALs und alle Gegenst\xe4nde ab."]}),(0,r.jsx)(n.td,{children:"All"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"None"}),",",(0,r.jsx)(n.code,{children:"Item"}),",",(0,r.jsx)(n.code,{children:"ItemAndEquipment"}),",",(0,r.jsx)(n.code,{children:"All"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_PLAYER_TO_PLAYER_DAMAGE"}),(0,r.jsx)(n.td,{children:"Erlaubt Spielern, anderen Spielern Schaden zuzuf\xfcgen"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_FRIENDLY_FIRE"}),(0,r.jsx)(n.td,{children:"Erlaubt Friendly Fire"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_INVADER_ENEMY"}),(0,r.jsx)(n.td,{children:"Eindringlinge aktivieren"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ACTIVE_UNKO"}),(0,r.jsx)(n.td,{children:"UNKO aktivieren (?)"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_AIM_ASSIST_PAD"}),(0,r.jsx)(n.td,{children:"Aktiviert Aim Assist f\xfcr Controller"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_AIM_ASSIST_KEYBOARD"}),(0,r.jsx)(n.td,{children:"Aktiviert Aim Assist f\xfcr Tastatur"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DROP_ITEM_MAX_NUM"}),(0,r.jsx)(n.td,{children:"Maximale Anzahl von Drops in der Welt"}),(0,r.jsx)(n.td,{children:"3000"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DROP_ITEM_MAX_NUM_UNKO"}),(0,r.jsx)(n.td,{children:"Maximale Anzahl von UNKO-Drops in der Welt"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BASE_CAMP_MAX_NUM"}),(0,r.jsx)(n.td,{children:"Maximale Anzahl von Basislagern"}),(0,r.jsx)(n.td,{children:"128"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BASE_CAMP_WORKER_MAX_NUM"}),(0,r.jsx)(n.td,{children:"Maximale Anzahl von Arbeitern"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DROP_ITEM_ALIVE_MAX_HOURS"}),(0,r.jsx)(n.td,{children:"Zeit, bis Gegenst\xe4nde in Stunden verschwinden"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AUTO_RESET_GUILD_NO_ONLINE_PLAYERS"}),(0,r.jsx)(n.td,{children:"Gilde automatisch zur\xfccksetzen, wenn keine Spieler online sind"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Bool"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AUTO_RESET_GUILD_TIME_NO_ONLINE_PLAYERS"}),(0,r.jsx)(n.td,{children:"Zeit zum automatischen Zur\xfccksetzen der Gilde, wenn keine Spieler online sind"}),(0,r.jsx)(n.td,{children:"72.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GUILD_PLAYER_MAX_NUM"}),(0,r.jsx)(n.td,{children:"Maximale Spieleranzahl der Gilde"}),(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PAL_EGG_DEFAULT_HATCHING_TIME"}),(0,r.jsx)(n.td,{children:"Zeit (h), um riesiges Ei auszubr\xfcten"}),(0,r.jsx)(n.td,{children:"72.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WORK_SPEED_RATE"}),(0,r.jsx)(n.td,{children:"Arbeitsgeschwindigkeitsmultiplikator"}),(0,r.jsx)(n.td,{children:"1.000000"}),(0,r.jsx)(n.td,{children:"Float"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IS_MULTIPLAY"}),(0,r.jsx)(n.td,{children:"Mehrspieler aktivieren"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IS_PVP"}),(0,r.jsx)(n.td,{children:"PVP aktivieren"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CAN_PICKUP_OTHER_GUILD_DEATH_PENALTY_DROP"}),(0,r.jsx)(n.td,{children:"Erlaubt Spielern anderer Gilden, Todesstrafe-Gegenst\xe4nde aufzuheben"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_NON_LOGIN_PENALTY"}),(0,r.jsx)(n.td,{children:"Nicht-Anmeldestrafe aktivieren"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_FAST_TRAVEL"}),(0,r.jsx)(n.td,{children:"Schnellreisen aktivieren"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IS_START_LOCATION_SELECT_BY_MAP"}),(0,r.jsx)(n.td,{children:"Startposition per Karte ausw\xe4hlen"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"EXIST_PLAYER_AFTER_LOGOUT"}),(0,r.jsx)(n.td,{children:"Spieler behalten nach dem Ausloggen umschalten"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ENABLE_DEFENSE_OTHER_GUILD_PLAYER"}),(0,r.jsx)(n.td,{children:"Verteidigung gegen Spieler anderer Gilden erm\xf6glichen"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"COOP_PLAYER_MAX_NUM"}),(0,r.jsx)(n.td,{children:"Maximale Anzahl von Spielern in einer Gilde"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"Integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"REGION"}),(0,r.jsx)(n.td,{children:"Region"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"USEAUTH"}),(0,r.jsx)(n.td,{children:"Authentifizierung verwenden"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"Boolean"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BAN_LIST_URL"}),(0,r.jsx)(n.td,{children:"Welche Sperrliste verwenden"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://api.palworldgame.com/api/banlist.txt",children:"https://api.palworldgame.com/api/banlist.txt"})}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TARGET_MANIFEST_ID"}),(0,r.jsx)(n.td,{children:"Legt die Spielversion entsprechend der Manifest-ID aus dem Steam-Download-Depot fest."}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Siehe ",(0,r.jsx)(n.a,{href:"https://palworld-server-docker.loef.dev/de/guides/pinning-game-version",children:"Manifest IDs"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"manuell",children:"Manuell"}),"\n",(0,r.jsxs)(n.p,{children:["Beim Start des Servers wird eine ",(0,r.jsx)(n.code,{children:"PalWorldSettings.ini"}),"-Datei im folgenden Pfad erstellt:\n",(0,r.jsx)(n.code,{children:"<mount_folder>/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini"})]}),"\n",(0,r.jsxs)(n.p,{children:["Bitte beachten Sie, dass die ENV-Variablen immer die \xc4nderungen an ",(0,r.jsx)(n.code,{children:"PalWorldSettings.ini"})," \xfcberschreiben."]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\xc4nderungen k\xf6nnen nur an ",(0,r.jsx)(n.code,{children:"PalWorldSettings.ini"})," vorgenommen werden, w\xe4hrend der Server ausgeschaltet ist."]}),(0,r.jsx)(n.p,{children:"Alle \xc4nderungen die vorgenommen werden, w\xe4hrend der Server aktiv ist, werden \xfcberschrieben wenn der Server gestoppt wird."})]}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr eine detailliertere Liste von Servereinstellungen gehen Sie zu: ",(0,r.jsx)(n.a,{href:"https://palworld.wiki.gg/wiki/PalWorldSettings.ini",children:"Palworld Wiki"})]}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr ausf\xfchrlichere Erkl\xe4rungen zu Servereinstellungen gehen Sie zu: ",(0,r.jsx)(n.a,{href:"https://shockbyte.com/billing/knowledgebase/1189/How-to-Configure-your-Palworld-server.html",children:"shockbyte"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>s});var r=d(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);