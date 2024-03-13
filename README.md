## Installation Guide

```
$ make build

## Execute this script if other hosts cannot login to mysql database
$ ./scripts/mysqllogin
$ ALTER USER '<your user>'@'%' IDENTIFIED WITH mysql_native_password BY '<your password>';

## Create test table for integration testing
$ ./scripts/createTestDB
```
