const axios = require("axios");

async function httpCheck(url) {
    const agora = Date.now();

    try {
        await axios.get(url, { timeout: 3000 });

        return {
            status: true,
            latencia: Date.now() - agora
        };
    }
    catch {
        return {
            status: false,
            latencia: null
        };
    }
}

module.exports = httpCheck;