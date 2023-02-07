import { api } from "../../config/axios";

const getAllProducts = async () => {
  try {
    return await api.get("products");
  } catch (error) {
    return error;
  }
};

export { getAllProducts };
