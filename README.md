# redis-getting-started
https://redis.io/commands/

### Redis Conf

appendfile on

### Master Start
.\redis-server.exe 'C:\Program Files\Redis\redis.windows.conf'

### Slave Start
.\redis-server.exe 'C:\Program Files\Redis\redis2.windows.conf'

### Master
requirepass temppass

### Slave 
masterauth temppass

### CLI
redis-cli -a temppass

### Data
set address 456

incr address

get address -> 457

incrby address 10

get address -> 467

decr address

get address -> 466

set country "North America"

get country -> North America

getset name Sasidaran -> Sasidaran

mset name "Sasidaran R" country India

mget name country -> 

1) Sasidaran R
2) India

exists country -> 1 (true)

del country -> 1

exists country -> 0

expire country 10 -> expires country in 10 seconds

set country India ex 10


### Subscribe Publish

subscribe messages news -> subscribe to two channels

publish messages test
 
publish news temp
