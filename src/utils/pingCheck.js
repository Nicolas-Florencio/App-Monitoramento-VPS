const ping = require('ping');

async function pingCheck(ip) {
    const resposta = await ping.promise.probe(ip);
    
    if(ip === '' || resposta === null) {
        return {
            status: false,
            latencia: null
        };
    }

    return {
        status: resposta.alive,
        latencia: resposta.time == 'unknown' ? null : Number(resposta.time)
    };
}

module.exports = pingCheck;