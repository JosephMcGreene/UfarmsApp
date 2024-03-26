import { CardElement, PaymentElement } from '@stripe/react-stripe-js'

export default function CheckoutForm() {
  return (
    <form
      action="/create-checkout-session"
      className="bg-white p-4 mt-4"
      method="POST">
      <CardElement />
      {/* <PaymentElement /> */}

      <button className="text-black" type="submit">
        Check Out
      </button>
    </form>
  )
}
