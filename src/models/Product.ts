/**
 * model used for one of Product's properties
 *
 * @interface {@link ProductRating}
 * @private private interface used for Product interface
 */
interface ProductRating {
  /**
   * Product's rate
   */
  rate: number;

  /**
   * count of Product's rate
   */
  count: number;
}

/**
 * Product Model based on Fake Api's Product data
 *
 * @interface {@link Product}
 * @see {@link https://fakestoreapi.com api documentation}
 * @see {@link https://fakestoreapi.com/products/1 api example}
 */
export default interface Product {
  /**
   * Product's id
   */
  id: number;

  /**
   * Product's title
   */
  title: string;

  /**
   * Product's price
   */
  price: number;

  /**
   * Product's description
   */
  description: string;

  /**
   * Product's category
   */
  category: string;

  /**
   * link of Product's image
   */
  image: string;

  /**
   * product's rating
   *
   * @type {ProductRating}
   * @see {@link ProductRating} for type detail
   */
  rating: ProductRating;
}
