cd /home/ubuntu/dono

if [[ -f pid ]]
then
  kill `cat pid`
fi
