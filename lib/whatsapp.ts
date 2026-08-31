import { CartItem } from "@/context/CartContext";
import { formatPrice } from "./utils";

const WHATSAPP_NUMBER = "923115901551"; // 03115901551 formatted for WhatsApp API

export function generateWhatsAppLink(cartItems: CartItem[], total: number) {
  let message = "Hello Cheezarilla!\nI would like to place an order:\n\n";

  cartItems.forEach((item) => {
    const variantText = item.selectedVariant ? ` (${item.selectedVariant})` : "";
    const sizeText = item.selectedSize ? ` (${item.selectedSize})` : "";
    const itemTotal = item.price * item.quantity;
    
    message += `${item.quantity}x ${item.name}${variantText}${sizeText} - ${formatPrice(itemTotal)}\n`;
  });

  message += `\nTotal: ${formatPrice(total)}\n\nPlease confirm my order.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
