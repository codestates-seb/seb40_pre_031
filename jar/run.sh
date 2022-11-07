#!/bin/sh
SERVICE_NAME=pre031-0.0.1-SNAPSHOT
PATH_TO_JAR=pre031-0.0.1-SNAPSHOT.jar
PID_PATH_NAME=./pre031-0.0.1-SNAPSHOT.pid
case $1 in
	start)
		echo "Starting $SERVICE_NAME ..."
		if [ ! -f $PID_PATH_NAME ] 
		then
			nohup java -jar $PATH_TO_JAR --spring.profiles.active=dev > /dev/null 2>&1 &
			echo $! > $PID_PATH_NAME
			echo "$SERVICE_NAME started ..."
		else
			echo "$SERVICE_NAME is already running ..."
		fi
	;;
	stop)
		if [ -f $PID_PATH_NAME ]
		then
			PID=$(cat $PID_PATH_NAME);
			echo "$SERVICE_NAME stoping ..."
			kill $PID;
			echo "$SERVICE_NAME stopped ..."
			rm $PID_PATH_NAME
		else
			echo "$SERVICE_NAME is not running ..."
		fi
	;;
	restart)
		if [ -f $PID_PATH_NAME ]
		then
			PID=$(cat $PID_PATH_NAME)
			echo "$SERVICE_NAME stopping ..."
			kill $PID
			echo "$SERVICE_NAME stopped ..."
			rm $PID_PATH_NAME
			echo "$SERVICE_NAME starting ..."
			nohup java -jar $PATH_TO_JAR --spring.profiles.active=dev > /dev/null 2>&1 &
			echo $! > $PID_PATH_NAME
			echo "$SERVICE_NAME started ..."
		else
			echo "$SERVICE_NAME is not running ..."
        	fi
    	;;
esac