#!/bin/sh

# Ensures the script exits if any command fails
set -e

# Webhook URL for Discord integration
WEBHOOK="${DISCORD_WEBHOOK_BACKUP_ASSISTANT}"
# Username displayed in Discord messages
USERNAME='Backup Assistant'
# Maximum file size Discord allows (8MB for non-Nitro users)
DISCORD_MAX_FILESIZE=8388608

# Find the most recent backup file in the specified directory
BACKUP_FILE=$(ls -Art /mnt/palworld/backups/ | tail -n 1)
BACKUP_FILE_PATH="/mnt/palworld/backups/$BACKUP_FILE"

# Check if the backup file actually exists
if [ -f "$BACKUP_FILE_PATH" ]; then
    # Get the file size of the backup file
    FILESIZE=$(stat -c%s "$BACKUP_FILE_PATH")

    # If the file size exceeds Discord's limit, send a message instead of the file
    if [ $FILESIZE -gt $DISCORD_MAX_FILESIZE ]; then
        # Construct the message indicating the file is too large
        MESSAGE="The backup file $BACKUP_FILE exceeds the Discord file size limit of 8MB."
        # Send the message to Discord
        curl -X POST -F "content=${MESSAGE}" -F "username=${USERNAME}" "${WEBHOOK}"
    else
        # If the file is within the size limit, upload and send the file to Discord
        curl -X POST -F "file=@$BACKUP_FILE_PATH" -F "username=${USERNAME}" "${WEBHOOK}"
    fi
else
    # If no backup file is found, send a message indicating so
    MESSAGE="Backup file not found."
    curl -X POST -F "content=${MESSAGE}" -F "username=${USERNAME}" "${WEBHOOK}"
fi
