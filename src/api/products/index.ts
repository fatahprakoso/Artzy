import { fakeApi } from "../../config/axios";

/**
 * @function getAllProducts
 * @async get all products request
 * @method GET
 * @returns {Promise<object>} promise of object that represents data returned from api or error
 */
const getAllProducts = async (): Promise<object> => {
  try {
    return await fakeApi.get("products");
  } catch (error) {
    return error;
  }
};

/**
 * @function getDetailProducts
 * @async get detail product request
 * @method GET
 * @param {number} id id of targeted product
 * @returns {Promise<object>} promise of object that represents data returned from api or error
 */
const getDetailProduct = async (id: number): Promise<object> => {
  try {
    return await fakeApi.get("products/" + id);
  } catch (error) {
    return error;
  }
};

export { getAllProducts, getDetailProduct };
