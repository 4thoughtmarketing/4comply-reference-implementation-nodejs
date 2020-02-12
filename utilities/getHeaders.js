const getHeaders = () => {
  return {
    Authorization: "Bearer " + process.env.API_KEY,
    tenant_id: process.env.TENANT_ID
  };
};
