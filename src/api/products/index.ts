import { fakeApi } from "../../config/axios";
import APIResponse from "../../models/APIResponse";

/**
 * @function {@link getAllProducts}
 * @async get all products request
 * @method GET
 * @returns {Promise<APIResponse>} Promise of APIResponse that represents data returned from api or error
 */
const getAllProducts = async (): Promise<APIResponse> => {
  return await fakeApi.get("products");
};

/**
 * @function {@link getDetailProduct}
 * @async get detail product request
 * @method GET
 * @param {number} id id of targeted product
 * @returns {Promise<APIResponse>} Promise of object that represents data returned from api or error
 */
const getDetailProduct = async (id: number): Promise<APIResponse> => {
  return await fakeApi.get("products/" + id);
};

export { getAllProducts, getDetailProduct };
