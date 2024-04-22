const { PRODUCTS } = require("./DATA");

export const GET = async () => {
  return Response.json(PRODUCTS);
};
