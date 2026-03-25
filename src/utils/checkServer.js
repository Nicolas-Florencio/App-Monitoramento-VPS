const axios = require("axios");

async function verificaServer(url) {
    const agora = Date.now();

    try {
        await axios.get(url, { timeout: 3000 });

        return {
            status: "online",
            latencia: Date.now() - agora
        };
    }
    catch {
        return {
            status: "offline",
            latencia: null
        };
    }
}

module.exports = verificaServer;