---
sidebar_position: 1
---

# Servereinstellungen

Ändern von Servereinstellungen mithilfe von Umgebungsvariablen.

## Umgebungsvariablen

Sie können die folgenden Werte verwenden, um die Einstellungen des Servers beim Start zu ändern.
Es wird dringend empfohlen, die folgenden Umgebungsvariablen festzulegen, bevor der Server gestartet wird:

* PLAYERS
* PORT
* PUID
* PGID

| Variable           | Info                                                                                                                                                                                                | Standardwerte | Erlaubte Werte |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|---------------------------------------------------------------------------------------|
| TZ                 | Zeitzone, die für die Zeitstempel des Backup-Servers verwendet wird                                                                                                                                                       | UTC            | Siehe [TZ-Identifikatoren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#Time_Zone_abbreviations) |
| PLAYERS*           | Maximale Anzahl von Spielern, die dem Server beitreten können                                                                                                                                              | 16             | 1-32                                                                                                       |
| PORT*              | UDP-Port, den der Server freigibt                                                                                                                                                                | 8211           | 1024-65535                                                                                                 |
| PUID*              | Die Benutzer-ID des Benutzers, unter dem der Server ausgeführt werden soll                                                                                                                                                        | 1000           | !0                                                                                                         |
| PGID*              | Die Gruppen-ID der Gruppe, unter der der Server ausgeführt werden soll                                                                                                                                                       | 1000           | !0                                                                                                         |
| MULTITHREADING**   | Verbessert die Leistung in Umgebungen mit mehreren Threads. Es ist bis zu einer maximalen Anzahl von etwa 4 Threads effektiv, und das Zuweisen von mehr Threads als dieser Anzahl macht nicht viel Sinn.              | false          | true/false                                                                                                 |
| COMMUNITY          | Ob der Server im Community-Server-Browser angezeigt wird (VERWENDEN SIE ES AUSSCHLIEẞLICH MIT SERVER_PASSWORD!)                                                                                                       | false          | true/false                                                                                                 |
| PUBLIC_IP          | Sie können die globale IP-Adresse des Netzwerks angeben, auf dem der Server ausgeführt wird. Wenn nicht angegeben, wird sie automatisch erkannt. Wenn dies nicht gut funktioniert, versuchen Sie eine manuelle Konfiguration. |                | x.x.x.x                                                                                                    |
| PUBLIC_PORT        | Sie können die Portnummer des Netzwerks angeben, auf dem der Server ausgeführt wird. Wenn nicht angegeben, wird sie automatisch erkannt. Wenn dies nicht gut funktioniert, versuchen Sie eine manuelle Konfiguration.       |                | 1024-65535                                                                                                 |
| SERVER_NAME        | Ein Name für Ihren Server                                                                                                                                                                              |                | "string"                                                                                                   |
| SERVER_DESCRIPTION | Ihre Serverbeschreibung                                                                                                                                                                             |                | "string"                                                                                                   |
| SERVER_PASSWORD    | Sichern Sie Ihren Community-Server mit einem Passwort                                                                                                                                                        |                | "string"                                                                                                   |
| ADMIN_PASSWORD     | Sichern Sie den Administrationszugriff auf dem Server mit einem Passwort                                                                                                                                          |                | "string"                                                                                                   |
| UPDATE_ON_BOOT**   | Update/Installieren Sie den Server, wenn der Docker-Container gestartet wird (DIESES MUSS BEIM ERSTEN MAL, WENN SIE DEN CONTAINER AUSFÜHREN, AKTIVIERT WERDEN)                                                                            | true           | true/false                                                                                                 |
| RCON_ENABLED***    | Aktivieren Sie RCON für den Palworld-Server                                                                                                                                                                 | true           | true/false                                                                                                 |
| RCON_PORT          | RCON-Port, um eine Verbindung herzustellen                                                                                                                                                                             | 25575          | 1024-65535                                                                                                 |
| QUERY_PORT         | Abfrageport, der zur Kommunikation mit Steam-Servern verwendet wird                                                                                                                                                   | 27015          | 1024-65535                                                                                                 |
| BACKUP_CRON_EXPRESSION  | Einstellung beeinflusst die Häufigkeit automatischer Backups. | 0 0 \* \* \* | Erfordert einen Cron-Ausdruck - Siehe [Konfigurieren automatischer Backups mit Cron](https://palworld-server-docker.loef.dev/de/guides/backup/automated-backup) |
| BACKUP_ENABLED | Aktiviert automatische Backups | true | true/false |
| DELETE_OLD_BACKUPS | Löscht Backups nach einer bestimmten Anzahl von Tagen                                                                                                                                                       | false          | true/false                                                                                                 |
| OLD_BACKUP_DAYS    | Wie viele Tage sollen Backups aufbewahrt werden                                                                                                                                                                       | 30             | jede positive Ganzzahl                                                                                       |
| AUTO_UPDATE_CRON_EXPRESSION  | Einstellung beeinflusst die Häufigkeit automatischer Updates. | 0 \* \* \* \* | Erfordert einen Cron-Ausdruck - Siehe [Konfigurieren automatischer Updates mit Cron](https://palworld-server-docker.loef.dev/de/guides/automatic-updates) |
| AUTO_UPDATE_ENABLED | Aktiviert automatische Updates | false | true/false |
| AUTO_UPDATE_WARN_MINUTES | Wie lange soll gewartet werden, um den Server zu aktualisieren, nachdem die Spieler informiert wurden. | 30 | !0 |
| AUTO_REBOOT_CRON_EXPRESSION  | Einstellung beeinflusst die Häufigkeit automatischer Neustarts. | 0 0 \* \* \* | Erfordert einen Cron-Ausdruck - Siehe [Konfigurieren automatischer Neustarts mit Cron](https://palworld-server-docker.loef.dev/de/guides/automatic-reboots) |
| AUTO_REBOOT_ENABLED | Aktiviert automatische Neustarts | false | true/false |
| AUTO_REBOOT_WARN_MINUTES | Wie lange soll gewartet werden, um den Server neu zu starten, nachdem die Spieler informiert wurden. | 5 | !0 |
| AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE | Starten Sie den Server neu, auch wenn Spieler online sind. | false | true/false |
| DISCORD_WEBHOOK_URL | Discord-Webhook-URL, die nach Erstellung eines Webhooks auf einem Discord-Server gefunden werden kann | | `https://discord.com/api/webhooks/<webhook_id>` |
| DISCORD_CONNECT_TIMEOUT | Discord-Befehlsverbindungstimeout | 30 | !0 |
| DISCORD_MAX_TIMEOUT | Discord-Webhook Timeout | 30 | !0 |
| DISCORD_PRE_UPDATE_BOOT_MESSAGE | Discord-Nachricht, die gesendet wird, wenn der Server mit dem Update beginnt | Server wird aktualisiert... | "string" |
| DISCORD_POST_UPDATE_BOOT_MESSAGE | Discord-Nachricht, die gesendet wird, wenn der Server das Update abgeschlossen hat | Serverupdate abgeschlossen! | "string" |
| DISCORD_PRE_START_MESSAGE | Discord-Nachricht, die gesendet wird, wenn der Server mit dem Starten beginnt | Server wurde gestartet! | "string" |
| DISCORD_PRE_SHUTDOWN_MESSAGE | Discord-Nachricht, die gesendet wird, wenn der Server mit dem Herunterfahren beginnt | Server wird heruntergefahren... | "string" |
| DISCORD_POST_SHUTDOWN_MESSAGE | Discord-Nachricht, die gesendet wird, wenn der Server gestoppt wurde | Server wurde gestoppt! | "string" |

*dringend empfohlen, festzulegen

** Stellen Sie sicher, dass Sie wissen, was Sie tun, wenn Sie diese Option aktivieren

*** Erforderlich für das Speichern und ordnungsgemäße Herunterfahren des Servers bei `docker stop`

### Spieleports

Der Server benötigt standardmäßig die folgenden Ports.

| Port  | Info             |
|-------|------------------|
| 8211  | Spielport (UDP)  |
| 27015 | Abfrageport (UDP) |
| 25575 | RCON-Port (TCP)  |
