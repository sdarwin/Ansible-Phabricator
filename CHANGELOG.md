
Version 1.0.0

- add support for Ubuntu 16.04 + PHP 7.1
- service scripts for phd daemons. upstart and systemd.
- start and enable all services on boot
- configure mysql variables which appear as phabricator config issues after the install.
- optional feature "auth email domains"
- add external file storage, which showed as a config issue
- set metamta.default-address and metamta.domain, which is usually necessary
- switch from sendmail to exim4
- test and add support for Centos 7.3 and 6.9
- https as well as http
- travis-ci integration
- test-kitchen integration
- OS specific variables, moved to separate var files
