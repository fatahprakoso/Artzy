/**
 * @interface APIResponse
 *
 * represents error data for response of error API's request
 */
export default interface APIErrorResponse {
  /**
   * error of api request data
   */
  data: string;

  /**
   * http request status number
   */
  status: number;

  /**
   * http request status text
   */
  statusText: string;
}
