const CarFilter = ({ filters, setFilters }) => {
  return (
    <div className="card p-3 shadow-sm mb-4">
      <div className="mb-3">
        <label className="form-label fw-bold">Search</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by model or brand..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Max Price</label>
          <select
            className="form-select"
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          >
            <option value="">All</option>
            <option value="1500000">Up to ₹15 Lakh</option>
            <option value="2000000">Up to ₹20 Lakh</option>
            <option value="3000000">Up to ₹30 Lakh</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-bold">Min Range</label>
          <select
            className="form-select"
            value={filters.range}
            onChange={(e) => setFilters({ ...filters, range: e.target.value })}
          >
            <option value="">All</option>
            <option value="300">300+ km</option>
            <option value="400">400+ km</option>
            <option value="500">500+ km</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-outline-secondary mt-2"
        onClick={() => setFilters({ search: "", price: "", range: "" })}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default CarFilter;
