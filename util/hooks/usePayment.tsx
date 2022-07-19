
import { useShoppingCart } from "use-shopping-cart";

export const usePayment = () => {
  const cart = useShoppingCart()

  return {  cart }
}