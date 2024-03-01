#!/usr/bin python3
import os

# Generate password: (1000,9999]
password = str(1000 + int(os.urandom(2).hex(), 16) % 9000)
os.environ['SERVER_PASSWORD'] = password
print(password)

# Execute shell script
shell_script = f"""
# first notify server status to discord
(sh /root/palworld-server-docker/scripts_host/discord_server_status.sh {password};
)

# then start docker compose
(cd /root/palworld-server-docker;
docker compose pull;
docker compose up --force-recreate --build -d;
docker image prune -f;
)
"""

os.system(shell_script)