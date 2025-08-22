// import React from "react";

// function Home() {
//   return <div>Home</div>;
// }
// export default Home;












































import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #f8f9fa, #e3f2fd)",
        minHeight: "100vh",
        padding: "40px 0"
      }}
    >
      <div className="container text-center">
        {/* Heading */}
        <h1 className="display-4 fw-bold mb-3 text-primary">
          📊 Product Sales & Profit Tracker
        </h1>

        {/* Subheading */}
        <p className="lead mb-5 text-secondary">
          Track your products, adjust prices, and see your profits instantly.
        </p>

        {/* How It Works Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div
              className="card shadow-lg border-0"
              style={{ backgroundColor: "#ffffffcc", backdropFilter: "blur(5px)" }}
            >
              <div className="card-body">
                <h4 className="card-title mb-4 text-success">💡 How It Works</h4>
                <ul className="text-start fs-5">
                  <li>
                    <strong>Products Page:</strong> Enter full product info — name, cost price, selling price, and quantity.
                  </li>
                  <li>
                    <strong>Adjust Values:</strong> Change selling prices anytime to instantly update profit results.
                  </li>
                  <li>
                    <strong>New Products Page:</strong> View detailed profit breakdown and total earnings.
                  </li>
                </ul>
                <p className="mt-3 text-muted">
                  Simple, fast, and perfect for managing your sales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action buttons */}
        <div>
          <Link to="/products" className="btn btn-success btn-lg mx-2 shadow">
            ➕ Add Products
          </Link>
          <Link to="/newProduct" className="btn btn-primary btn-lg mx-2 shadow">
            📈 View Profit Report
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

