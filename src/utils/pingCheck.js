const ping = require('ping');

async function pingCheck(ip) {
    if(ip === '' || resposta === null) {
        return {
            status: false,
            latencia: null
        };
    }

    const resposta = await ping.promise.probe(ip);
    
    return {
        status: resposta.alive,
        latencia: resposta.time == 'unknown' ? null : Number(resposta.time)
    };
}

module.exports = pingCheck;