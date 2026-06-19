function CheckoutModal({
  showCheckout,
  cart,
  grandTotal,
  placeOrder,
  setShowCheckout,
}) {
  if (!showCheckout) return null;

  return (
    <div className="popup">

      <div className="popup-content">

        <h1>Checkout</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="receipt-item"
          >
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}

        <h2>
          Grand Total : ₹{grandTotal}
        </h2>

        <button
          className="order-btn"
          onClick={placeOrder}
        >
          Confirm Order
        </button>

        <button
          className="close-btn"
          onClick={() =>
            setShowCheckout(false)
          }
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default CheckoutModal;