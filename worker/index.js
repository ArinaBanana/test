var crypto = require('crypto');

let pool = 2;

class Worker {
    constructor() {
        if (pool === 0) {
            throw 'No pool';
        }
        pool -= 1;
    }
    delete() {
        pool += 1;
    }
    postMessage(text) {
        setTimeout(() =>  this.onMessage({data: crypto.createHash('md5').update(text).digest("hex")}), 100 * Math.random());
    }
}

const doOneWork = (text, index, onHash) => {
    const worker = new Worker("./worker");

    worker.onMessage = ({data}) => { // подписываемся на его сообщение
        // тут работа выполнена, используем data и освобождаем процесс
        worker.delete();
        onHash(data, index);
    };

    worker.postMessage(text); // отправляем сообщение подпрограмме, чтобы он начал работу
};

function doParallelHash(input, last) {
    return  new Promise((resolve, reject) => {
        if (input.length === 0) {
            return resolve('0');
        }
        let nextIndex = 0;
        const lastIndex = input.length - 1;
        const next = {};
        const results = [];

        const doWorkers = () => {
            for (let i = nextIndex; i < input.length; i++) {
                try {
                    nextIndex = i;
                    doOneWork(input[i], i, handleHash);
                    nextIndex = i + 1;
                } catch (e) {
                    break;
                }
            }
        }

        const handleHash = (hash, index) => {

            if (input.length === 1) {
                return resolve(hash);
            }


            results[index] = hash;
            const isEven = (index % 2) === 0;
            const neighbourIndex = isEven ? index + 1 : index - 1;

            const isLast = index === lastIndex;
            const neighbour = (isLast && isEven) ? hash : results[neighbourIndex];

            if (neighbour) {
                const concate = isEven ? hash + neighbour : neighbour + hash;

                const nextIndex = Math.floor(index / 2);
                next[nextIndex] = concate;

                if (Object.keys(next).length === Math.ceil(input.length / 2)) {
                    const nextInput = Object.entries(next).reduce((acc, [index, hash]) => {
                        acc[index] = hash;
                        return acc;
                    }, []);

                    return doParallelHash(nextInput).then(result => {
                        resolve(result);
                    });
                }
            }

            doWorkers();
        }

        doWorkers();
    });
}

module.exports = (input) => doParallelHash(input);

const data = [
    "easy to get started",
];

doParallelHash(data).then(console.log);
