# Laptops

Quintel has some laptops that are used for workshops, presentations etc and it is not possible to use the live servers. The laptops run a copy of the entire ET stack:

* ETEngine
* ETSource
* ETModel
* ETFlex
* Gasmixer

## Network Setup

All laptops come with a separate Airport Extreme Base. The base assigns the laptop a reserved IP address (10.0.0.2 usually - the address reservation is MAC-Address based) and create an unprotected Wi-Fi LAN, that will be used by clients.

## Hardware Setup

All laptops are 13" Macbook Pros with 8GB RAM. CK has an excel file that lists them all.

## Software Setup

All laptops run the same OS image, a standard OSX Lion setup with some custom configuration:

* There's an utility that prevents the laptop to enter sleep mode when the display lid is closed
* There's an extensive launchd setup that takes care of running all the required services, namely:
  * Apache web server for ETE (listening on port 8080)
  * Nginx web server listening on the 8090, 8091 and 8092 ports
  * Unicorn web server running the individual apps (ETM, Gasmixer and ETFlex)
  * Memcached

### Application-specific issues

Most applications rely on external services: since these laptops won't have external internet access, all remote-based services must be disabled:

* Google Analytics
* Websocket-based services
* Youtube/Vimeo videos
* Airbrake/NewRelic

Most applications have an optional `offline` setting (usually defined in the `config.yml` file) that will take care of disabling the external dependencies.

#### ETM

The offline ETM shows a local copy of the videos.

## Update process

The standard workflow consists in updating a single laptop, making an image of it using SuperDuper and then applying the image to the other laptops as soon as they're available.

You'll have to update:

* ETE: git pull and copy the db
* ETM: git pull and copy the db
* ETFlex: git pull and copy the db
* GasMixer: git pull and copy the db
* ETSource: git pull

Make sure you precompile the application assets! There's no capistrano here.

## Issues

* OSX makes full hard-disk encryption possible but painful to setup: if you're using the SuperDuper image you can't run the encryption process, but you have to *reinstall OSX* on top of the existing installation, hope that everything works fine (especially the launchd setup) and then start the FileVault encryption process (that might take 8-10 hours).
* Web server setup: we're still using Apache/mod_passenger with ETE because it's the way the ETE was running when the laptops were first needed (~2 years ago). It might be a good idea to remove it and use nginx/unicorn everywhere.
* Sometimes launchd won't start the nginx service, and I've never been able to find a way to reproduce the issue in a stable fashion. Most of the times a laptop reboot solves the issue, otherwise there's a shell script that restarts all the services. It's called `restart_apps.sh`.
