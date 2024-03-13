## Prerequisites

* **For Makefiles**

  You need to have GNU Make installed on your system.

  * Linux: Usually pre-installed; if not, you can install it using your package manager, for example, `sudo apt-get install make` on Debian/Ubuntu.
  * macOS: Comes pre-installed with Command Line Tools for Xcode, which can be installed via `xcode-select --install`.
  * Windows: Consider using WSL, Cygwin, or a similar environment that supports GNU Make.
* **For Docker**

  Check the latest installation guide on the official Docker website.

  * Docker Engine ([https://docs.docker.com/engine/install/]())
  * Docker Compose v2 ([https://docs.docker.com/compose/install/linux/#install-the-plugin-manually]())

## Installation Guide

1. Configure the .env file and change the desired environment details.

   ```
   cp .env.sample .env
   ```

   ```
   PROJECT=node
   API_PORT=3001
   CLIENT_PORT=5173
   ADMIN_PORT=3002

   #MySQL
   MYSQL_ROOT_PASSWORD=pwdnac255
   MYSQL_DATABASE=node
   MYSQL_USER=node
   MYSQL_PASSWORD=pwdnac255

   ```
2. Build the docker environment

   ```
   make build
   ```

   Verify if the server is running. Open your browser and visit [http://localhost:3000/]()
3. Verify app startup across environments.

   ```
   make test-startup
   ```

   This will add a temporary Node.js server startup to the *app/* directory.
4. By default, it includes three environments within the *app/* directory.

   * api/
     Verify api environment

     ```
     ./scripts/api node app.js
     ```

     Open your browser and visit [http://localhost:3001/]()
   * client/
     Verify client environment

     ```
     ./scripts/client node app.js
     ```

     Open your browser and visit [http://localhost:5173/]()
   * admin/
     Verify admin environment

     ```
     ./scripts/admin node app.js
     ```

     Open your browser and visit [http://localhost:3002/]()

## Other Information

* Execute this script if other docker container hosts cannot log in to the MySQL database.

  ```
  ./scripts/mysqllogin
  ```
  ```
  ALTER USER '<your user>'@'%' IDENTIFIED WITH mysql_native_password BY '<your password>';
  ```
  ```
  make restart
  ```
* Create a test table for integration testing.

  ```
  ./scripts/createTestDB
  ```
* Verify node version

  ```
  ./scripts/node -v
  ```
* Verify npm version

  ```
  ./scripts/npm -v
  ```
* Start server

  ```
  make start
  ```
* Stop server

  ```
  make stop
  ```
* Restart server

  ```
  make restart
  ```
