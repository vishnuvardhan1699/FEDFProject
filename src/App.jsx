import { useState } from "react";
import "./App.css";

import foods from "./data/foods";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import ReceiptModal from "./components/ReceiptModal";
import OrdersModal from "./components/OrdersModal";
import Footer from "./components/Footer";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

 const [universityId, setUniversityId] = useState("");
const [password, setPassword] = useState("");
const [page, setPage] = useState("login");

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [showCheckout, setShowCheckout] = useState(false);

const [showReceipt, setShowReceipt] = useState(false);

const [orderId, setOrderId] = useState("");

const [finalAmount, setFinalAmount] = useState(0);

const [orders, setOrders] = useState([]);

 const loginUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (
    user &&
    universityId === user.universityId &&
    password === user.password
  ) {
    setLoggedIn(true);
  } else {
    alert("Invalid University ID or Password");
  }
};
  const addToCart = (food) => {
    const existing = cart.find((item) => item.id === food.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const changeQuantity = (id, value) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + value,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const itemTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const grandTotal = itemTotal + 20;
const placeOrder = () => {
  const id = Math.floor(Math.random() * 90000) + 10000;

  setOrderId(id);

  // Save the amount before clearing cart
  setFinalAmount(grandTotal);

  setOrders([
    ...orders,
    {
      id,
      total: grandTotal,
    },
  ]);

  setShowCheckout(false);

  setShowReceipt(true);

  setCart([]);
};
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );
if (!loggedIn) {

  if (page === "register") {
    return (
      <Register
        setPage={setPage}
      />
    );
  }

  if (page === "forgot") {
    return (
      <ForgotPassword
        setPage={setPage}
      />
    );
  }

  return (
   <Login
  universityId={universityId}
  password={password}
  setUniversityId={setUniversityId}
  setPassword={setPassword}
  loginUser={loginUser}
  setPage={setPage}
/>
  );
}

  return (
    <>
      <Navbar cart={cart} />

      <Hero search={search} setSearch={setSearch} />

      <Categories />

      <section className="menu" id="menu">
        <div className="food-container">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <Cart
        cart={cart}
        changeQuantity={changeQuantity}
        itemTotal={itemTotal}
        grandTotal={grandTotal}
        setShowCheckout={setShowCheckout}
      />

      <CheckoutModal
        showCheckout={showCheckout}
        cart={cart}
        grandTotal={grandTotal}
        placeOrder={placeOrder}
        setShowCheckout={setShowCheckout}
      />

      <ReceiptModal
  showReceipt={showReceipt}
  orderId={orderId}
  total={finalAmount}
  setShowReceipt={setShowReceipt}
/>

      <OrdersModal orders={orders} />

      <Footer />
    </>
  );
}

export default App;