import axios from "axios";
let API_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
const search = (filter) => {
  let formedUrl = API_URL;
  if (filter) {
    if (filter.launchYear) {
      formedUrl += `&launch_year=${filter.launchYear}`;
    }
    if (filter.successFulLaunch) {
      formedUrl += `&launch_success=${
        filter.successFulLaunch ? "true" : "false"
      }`;
    }
    if (filter.successFulLaing) {
      formedUrl += `&land_success=${filter.successFulLaing ? "true" : "false"}`;
    }
  }
  return axios.get(formedUrl).then((response) => {
    return response.data;
  });
};

export default {
  search
};
