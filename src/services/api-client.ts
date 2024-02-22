import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ebae5a9206914c3288c70907613385c5"
  },
});
