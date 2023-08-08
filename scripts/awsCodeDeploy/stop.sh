cd /home/ubuntu/dima

if [[ -f pid ]]
then
  kill `cat pid`
fi
