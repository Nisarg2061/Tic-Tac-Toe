down:
	sudo docker-compose down

up:
	sudo docker-compose up --force-recreate --no-deps --remove-orphans -d

restart: down up
