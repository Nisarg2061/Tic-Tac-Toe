down:
	sudo docker-compose down

up:
	sudo docker-compose up --force-recreate --no-deps -d

restart: down up

test:
	go test ./...

build-and-restart: test restart
