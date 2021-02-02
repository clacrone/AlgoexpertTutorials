# Tutorials
Uses express.


# Express
npm install express


# NGINX
Install:
    brew install nginx
    https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/

Edit Configs:
    subl /usr/local/etc/nginx/nginx.conf

Check Syntax:
    nginx -t

Reload Server:
    nginx -s reload

Start NGINX:
    nginx


# Postgres
brew install postgresql
Default port 5432

Create Database:
    createdb <DATABASE_NAME>

Delete Database:
    dropdb <DATABASE_NAME>

Open Database Shell:
    psql <DATABASE_NAME>

Start:
    pg_ctl -D /usr/local/var/postgres start

Stop:
    pg_ctl -D /usr/local/var/postgres stop

PSQL Shell Commands:
    \h for help with SQL commands
    \? for help with psql commands
    \g or terminate with semicolon to execute query
    \q to quit


# Redis
brew install redis
npm install redis

Start Redis:
    redis-server


# Axios
npm install axios

# Etcd
pip3 install etcd3