include .env

build:
	@if [ -f docker-compose.yml ]; then \
		rm docker-compose.yml; \
	fi
	cp docker-compose.yml.sample docker-compose.yml
	sed -i'' -e "s/custom_network/${PROJECT}/" docker-compose.yml
	docker compose up -d
test-startup:
	cp startup/api.js app/api/app.js
	cp startup/client.js app/client/app.js
	cp startup/admin.js app/admin/app.js
down:
	docker compose down -v
	sudo rm -rf mysql
	rm docker-compose.yml
start:
	docker compose start
restart:
	docker compose restart
stop:
	docker compose stop