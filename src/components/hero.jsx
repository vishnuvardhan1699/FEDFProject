function Hero({ search, setSearch }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Delicious Food on campus
          <br />
        </h1>

        <p>
          Fast • Fresh • Delicious
        </p>

        <input
          type="text"
          placeholder="Search your favourite food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>
    </section>
  );
}

export default Hero;