function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const fetchData = (param, isOnError) => {
    return new Promise((resolve, reject) => {
        if (isOnError) {
            setTimeout(() => {
                reject('je suis pas ton père en fait');
            });
        } else {
            setTimeout(() => {
                resolve('Je suis ' + param);
            }, getRandomArbitrary(1000, 3000));
        }
    });
};
const handleFetchData = (res) => {
    return fetchData(res).then((res) => {
        console.log(res);
    });
};

// const handleError = (e) => {
//     console.error('Error', e);
// };

const run = async () => {
    console.log('Luc');
    try {
        console.time();
        const res = await fetchData('ton père').then((res) => 'toto');
        console.log(res);

        const res2 = await fetchData('ta mère');
        console.log(res2);

        // const results = await Promise.all([res, res2]);

        // console.log(results);
        console.timeEnd();
        // await promises;
    } catch (e) {
        console.error('Error:', e);
    }

    console.log('Point final');
};

run();
