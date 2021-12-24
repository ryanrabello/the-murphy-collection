const prod = process.env.NODE_ENV === "production";
const basePath = prod ? "/the-murphy-collection" : "";

module.exports = {
  env: {
    basePath,
  },
  basePath,
};
