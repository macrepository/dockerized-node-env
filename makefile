include .env

build:
	@if [ -f docker-compose.yml ]; then \
		rm docker-compose.yml; \
	fi
	cp docker-compose.yml.sample docker-compose.yml
	sed -i'' -e "s/custom_network/${PROJECT}/" docker-compose.yml
	docker compose up -d
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