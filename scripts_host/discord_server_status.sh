#!/bin/sh

# Ensures the script exits if any command fails
set -e

# Webhook URL for Discord integration
WEBHOOK="${DISCORD_WEBHOOK_SERVER_STATUS}"
# Username displayed in Discord messages
USERNAME='Server Status'

PUBLIC_IP=$(curl -s ifconfig.me)
PASSWORD=$1

MESSAGE="
Server has been started!

**Server IP and Port**: ${PUBLIC_IP}:8211
**Server Password**: ${PASSWORD}
"

curl -X POST -F "content=${MESSAGE}" -F "username=${USERNAME}" "${WEBHOOK}"
