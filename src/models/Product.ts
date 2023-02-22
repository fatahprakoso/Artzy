/**
 * @interface ProductRating
 *
 * model used for one of Product's properties
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
 * @interface Product
 *
 * Product Model based on Fake Api's Product data
 *
 * @see documentation {@link https://fakestoreapi.com}
 * @see example {@link https://fakestoreapi.com/products/1}
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
