import request from "../utils/request";

const URL = process.env.REACT_APP_WEATHER_API;
const APP_ID = process.env.REACT_APP_WEATHER_APPID;

export default {
  byCity: {
    fetch: function(city) {
      return request(`${URL}?q=${city}&appid=${APP_ID}`);
    },
  },
};
