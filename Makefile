down:
	sudo docker-compose down

up:
	sudo docker-compose up -d --force-recreate --no-deps

restart: down up

test:
	go test ./...

build-and-restart: test restart
