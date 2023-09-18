import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0524a3f3e8f4428f811c83be4d3517e2",
  },
});
