cd /home/ubuntu/duma

if [[ -f pid ]]
then
  kill `cat pid`
fi
