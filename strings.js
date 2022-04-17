const Strings = (redis) => {
    redis.set('name', 'Sasidaran');
    redis.get('name', (err, result) => {
        console.log(result);
    });

    redis.set('country', 'Inida', 'EX', '5');

    redis.set('address', '456');
    redis.incr('address');
    redis.get('address', (err, result) => {
        console.log(result);
    });


    redis.mset('street', 'test', 'doorno', '21');
    redis.mget('street', 'doorno', (err, result) => {
        console.log(result);
    });
}

export default Strings;
