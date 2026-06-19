function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">

      <img
        src={food.image}
        alt={food.name}
      />

      <div className="food-info">

        <h2>{food.name}</h2>

        <div className="rating">
          ⭐ {food.rating}
        </div>

        <div className="price-cart">

          <h3>
            ₹{food.price}
          </h3>

          <button
            onClick={() =>
              addToCart(food)
            }
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;