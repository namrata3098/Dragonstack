#!/bin/bash 
export PGPASSWORD = 'node_password'

echo "configuring dragonstackdb"

# dropdb -U node_user dragonstackdb
# createdb -U node_user dragonstackdb

# psql -U node_user dragonstackdb < ./bin/sql/generation.sql
# psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

node ./bin/InserTraits.js

echo "dragonstackbd configured"