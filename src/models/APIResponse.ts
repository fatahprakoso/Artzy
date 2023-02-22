/**
 * @interface APIResponse
 *
 * represents needed data for response of API's request
 */
export default interface APIResponse {
  /**
   * result of api request
   * it can be expected data or error data
   */
  data: object;

  /**
   * http request status number
   */
  status: number;

  /**
   * http request status text
   */
  statusText: string;
}
