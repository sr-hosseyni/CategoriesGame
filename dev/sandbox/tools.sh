#!/usr/bin/env bash

IP=`echo $SSH_CLIENT | awk '{ print $1}'`

PARAM_TERMINAL=
if [ -t 0 ]
then
    PARAM_TERMINAL=-t
fi

XDEBUG_VERSION=`docker exec -u 1000  php php --ri xdebug | fgrep 'Version' | awk '{print $3}' | awk -F'.' '{print $1}'`

case `basename $0` in
    blackfire)
        docker exec php blackfire "$@"
        ;;
    composer)
        docker exec -i $PARAM_TERMINAL -w $( pwd -P ) -u 1000 php composer "$@"
        ;;
    node)
        docker-compose -f /hitmeister/shop/current/src/docker-compose.yml run -w $( pwd -P ) -T node /bin/bash -c "cd /hitmeister/shop/current/src && node $@"
        ;;
    npm)
        docker-compose -f /hitmeister/shop/current/src/docker-compose.yml run -w $( pwd -P ) -T node /bin/bash -c "npm $*"
        ;;
    php)
        docker exec -i $PARAM_TERMINAL -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}" php php "$@"
        ;;
    phpre)
        docker exec -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}"  php php "$@"
        ;;
    xphp)
        if [ $XDEBUG_VERSION -eq 3 ]; then
          docker exec -i $PARAM_TERMINAL -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}" -e XDEBUG_CONFIG="client_host=${IP}" -e PHP_IDE_CONFIG="serverName=`hostname -f`" php php -dxdebug.idekey=PHPSTORM "$@"
        else
          docker exec -i $PARAM_TERMINAL -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}" -e XDEBUG_CONFIG="remote_host=${IP}" -e PHP_IDE_CONFIG="serverName=`hostname -f`" php php -d xdebug.remote_enable=1 "$@"
        fi
        ;;
    xphpre)
        if [ $XDEBUG_VERSION -eq 3 ]; then
          docker exec -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}" -e XDEBUG_CONFIG="client_host=${IP}" -e PHP_IDE_CONFIG="serverName=`hostname -f`" php php -dxdebug.idekey=PHPSTORM "$@"
        else
          docker exec -w $( pwd -P ) -u 1000 -e HTTP_X_STOREFRONT="${HTTP_X_STOREFRONT}" -e XDEBUG_CONFIG="remote_host=${IP}" -e PHP_IDE_CONFIG="serverName=`hostname -f`" php php -d xdebug.remote_enable=1 "$@"
        fi
        ;;
    *)
        echo "Nothing to execute"
        ;;
esac
