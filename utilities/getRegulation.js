const axios = require('axios');

export async const getRegulationFromId = id => {
 
    const regulation = axios.get(process.env.API_URL + '/regulations/' + id, getHeaders())

    return regulation;

};
