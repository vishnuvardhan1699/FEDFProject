function Cart({
  cart,
  changeQuantity,
  itemTotal,
  grandTotal,
  setShowCheckout,
}) {
  if (cart.length === 0)
    return null;

  return (
    <div className="floating-cart">

      <div className="mini-cart-header">

        <h3>
          🛒 Cart
        </h3>

        <button
          className="checkout-btn"
          onClick={() =>
            setShowCheckout(true)
          }
        >
          Checkout
        </button>

      </div>

      {cart.map((item) => (
        <div
          className="cart-item"
          key={item.id}
        >

          <div>

            <h4>
              {item.name}
            </h4>

            <span>
              ₹
              {item.price *
                item.quantity}
            </span>

          </div>

          <div className="cart-controls">

            <button
              onClick={() =>
                changeQuantity(
                  item.id,
                  -1
                )
              }
            >
              -
            </button>

            <span>
              {item.quantity}
            </span>

            <button
              onClick={() =>
                changeQuantity(
                  item.id,
                  1
                )
              }
            >
              +
            </button>

          </div>

        </div>
      ))}

      <div className="bill-box">

        <div className="bill-row">
          <span>
            Food Total
          </span>

          <span>
            ₹{itemTotal}
          </span>
        </div>

        <div className="bill-row">
          <span>
            Convenience Fee
          </span>

          <span>
            ₹20
          </span>
        </div>

        <div className="bill-row total-row">
          <span>
            Grand Total
          </span>

          <span>
            ₹{grandTotal}
          </span>
        </div>

      </div>

      <button
        className="order-btn"
        onClick={() =>
          setShowCheckout(true)
        }
      >
        Place Order
      </button>

    </div>
  );
}

export default Cart;