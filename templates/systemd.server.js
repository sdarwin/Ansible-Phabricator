[Unit]
Description=phabricator-phd
After=syslog.target network.target
Before=nginx.service

[Service]
User={{ users.daemon }}
Group={{ users.daemon }}
Type=oneshot
Enviroment="PATH=/sbin:/usr/sbin:/usr/local/sbin:/usr/local/bin:/usr/bin:/bin"
ExecStart={{ web_root }}/phabricator/bin/phd start
ExecStop={{ web_root }}/phabricator/bin/phd stop
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

