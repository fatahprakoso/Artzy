import { fakeApi } from "../../config/axios";

const getAllProducts = async () => {
  try {
    return await fakeApi.get("products");
  } catch (error) {
    return error;
  }
};

const getDetailProduct = async (id) => {
  try {
    return await fakeApi.get("products/" + id);
  } catch (error) {
    return error;
  }
};

export { getAllProducts, getDetailProduct };
