let BASE_URL = "https://quotes-abackendnew.vercel.app/";
let new_URL = "http://localhost:4000/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://quotes-abackendnew.vercel.app/";
}

export { BASE_URL };
