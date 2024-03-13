include .env

build:
	cp docker-compose.yml.sample docker-compose.yml
	sed -i'' -e "s/custom_network/${PROJECT}/" docker-compose.yml
	docker compose up -d
down:
	docker compose down -v
start:
	docker compose start
restart:
	docker compose restart
stop:
	docker compose stop