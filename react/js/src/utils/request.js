import axios from "axios";

let instance;
function createAxiosInstance() {
  if (instance) return instance;

  console.log(import.meta.env.VITE_HTTP_BASE_URL, "base url")
  instance = axios.create({
    baseURL: import.meta.env.VITE_HTTP_BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  instance.interceptors.request.use(
    function (request) {
      if (request.method === "get") {
        request.headers = {
          "Content-Type": "application/json",
        };
      }
      console.log(request, "request");
      return request;
    },
    function (err) {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      console.log(response, "response");
      return response.data;
    },
    function (err) {
      console.log(err);
    }
  );

  console.log(instance);

  return instance;
}

export default createAxiosInstance();
