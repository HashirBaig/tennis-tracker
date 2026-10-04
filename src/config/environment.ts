const dev = {
  // API_URL: "http://localhost:5000/api",
  API_URL: "https://tennis-tracker-nodets.vercel.app/api",
};

const prod = {
  API_URL: "https://tennis-tracker-nodets.vercel.app/api",
};

const config = import.meta.env.MODE === "production" ? prod : dev;

export default config;
