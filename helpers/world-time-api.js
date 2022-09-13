const axios = require("axios");

class worldTimeAPI {
  async getResponse(q) {
    const response = axios.get(`http://worldtimeapi.org/api/timezone/${q}`);
    return response;
  }

  async getData(q) {
    const response = await this.getResponse(q);
    return response.data;
  }
}

module.exports = new worldTimeAPI();
