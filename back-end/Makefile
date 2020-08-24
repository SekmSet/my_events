composer:
	composer install

database:
	php bin/console doctrine:database:create --if-not-exists -n

migration:
	php bin/console make:migration -n

migrate:
	php bin/console doctrine:migrations:migrate -n

fixture:
	php bin/console hautelook:fixtures:load -n --purge-with-truncate

start:
	symfony server:start