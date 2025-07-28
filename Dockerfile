FROM php:8.2-apache

# Install composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Updated apt-get to allow to be used
RUN apt-get update

# Git required to allow composer to fetch / install packages
RUN apt-get install -y git

# Use the default development php.ini configuration
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# Install basic extensions
RUN docker-php-ext-install pdo pdo_mysql