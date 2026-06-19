function ReceiptModal({
  showReceipt,
  orderId,
  total,
  setShowReceipt,
}) {
  if (!showReceipt) return null;

  return (
    <div className="popup">
      <div className="popup-content">

        <h1>✅ Order Placed Successfully</h1>

        <br />

        <h2>
          Order ID : #{orderId}
        </h2>

        <br />

        <h3>
          Please show this Order ID at the cafeteria.
        </h3>

        <br />

        <h3 style={{ color: "#6A1E2D" }}>
          Payment Status : Pay at Counter
        </h3>

        <br />

        <h2>
          Total Bill : ₹{total}
        </h2>

        <br />

        <button
          className="order-btn"
          onClick={() => setShowReceipt(false)}
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default ReceiptModal;