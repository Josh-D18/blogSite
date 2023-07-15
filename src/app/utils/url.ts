const getBackendURL = (): string => {
  switch (process.env.NODE_ENV) {
    case "production":
      return process.env.NEXT_PUBLIC_BACKEND_PROD_ENV!;
    case "development":
    default:
      return process.env.NEXT_PUBLIC_BACKEND_DEV_ENV!;
  }
};

const environmentURL = getBackendURL();

export default environmentURL;
