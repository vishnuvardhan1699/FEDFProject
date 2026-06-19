function OrdersModal({ orders }) {
  return (
    <div
      className="orders-section"
      id="orders"
    >
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No Orders Yet</h3>
      ) : (
        orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >
            <h3>
              Order ID : #{order.id}
            </h3>

            <h2>
              ₹{order.total}
            </h2>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersModal;