import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

// export default axios.create({
//   baseURL: "https://api.themoviedb.org/3",
// });

