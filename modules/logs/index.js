const log = {
    info: (msg) => {
        console.log(`INFO: ${msg}`);
    },
    error: () => {
        const date = new Date();
        console.log(`ERROR GENERAL [${date}]`);
    }
};

module.exports = log;