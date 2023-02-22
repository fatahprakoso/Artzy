import { fakeApi } from "../../config/axios";
import APIResponse from "../../models/APIResponse";

/**
 * @function getAllProducts
 * @async get all products request
 * @method GET
 * @returns {Promise<APIResponse>} Promise of APIResponse that represents data returned from api or error
 */
const getAllProducts = async (): Promise<APIResponse> => {
  return await fakeApi.get("products");
};

/**
 * @function getDetailProducts
 * @async get detail product request
 * @method GET
 * @param {number} id id of targeted product
 * @returns {Promise<object>} Promise of object that represents data returned from api or error
 */
const getDetailProduct = async (id: number): Promise<object> => {
  try {
    return await fakeApi.get("products/" + id);
  } catch (error) {
    return error;
  }
};

export { getAllProducts, getDetailProduct };
