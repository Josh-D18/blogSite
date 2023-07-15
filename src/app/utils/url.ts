const environmentURL: () => string = () => {
  const env = process.env.NODE_ENV;
  let backendURL = "";
  if (env === "development") {
    backendURL = process.env.BACKEND_DEV_ENV!;
  } else if (env === "production") {
    backendURL = process.env.BACKEND_PROD_ENV!;
  } else {
    backendURL = process.env.BACKEND_DEV_ENV!;
  }
  console.log(process.env.BACKEND_DEV_ENV, "BE");
  return backendURL;
};

export default environmentURL;
