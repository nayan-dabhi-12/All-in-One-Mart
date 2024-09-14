import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BottomHeader() {
  // Define theme state
  const [theme, setTheme] = useState("light");

  // UseEffect to set the initial theme from localStorage
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      setTheme(currentTheme);
    }
  }, []);

  // Function to handle theme change
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark"); // Update theme state
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light"); // Update theme state
    }
  };

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    if (window.paypals && window.paypals.minicarts) {
      window.paypals.minicarts.render();

      window.paypals.minicarts.cart.on('checkout', function (evt) {
        const items = this.items();
        let total = 0;

        items.forEach(item => {
          total += item.get('quantity');
        });

        if (total < 3) {
          alert('The minimum order quantity is 3. Please add more to your shopping cart before checking out.');
          evt.preventDefault();
        }
      });
    }
  }, []);

  return (
    <>
      <div className="header-bot my-md-4 my-3" id="site-header">
        <div className="container">
          <div className="row header-bot_inner_wthreeinfo_header_mid align-items-center">
            {/* logo */}
            <div className="col-lg-3 col-md-4 logo_agile">
              <h1>
                <Link to="/">
                  <span>A</span>ll <span>i</span>n <span>O</span>ne <span>M</span>art
                </Link>
              </h1>
            </div>
            {/* //logo */}
            {/* header-bot */}
            <div className="col-lg-9 col-md-8 header">
              <div className="row">
                {/* search */}
                <div className="col-lg-9 col-sm-8 agileits_search">
                  <form
                    onSubmit={handleSearch}
                    className="form-inline"
                    method="post"
                    style={{ maxWidth: 800 }}
                  >
                    <input
                      className="form-control"
                      type="text"
                      value={query}
                      placeholder="Search for products, brands and more"
                      // aria-label="Search"
                      // required
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
                {/* //search */}
                {/* cart details */}
                <div className="col-lg-3 col-sm-4 top_nav_right text-center mt-sm-0 mt-2 d-flex align-items-center justify-content-between">
                  <div className="cart-store">
                    {/* toggle switch for light and dark theme */}
                    <div className="cont-ser-position">
                      <nav className="navigation">
                        <div className="theme-switch-wrapper">
                          <label className="theme-switch" htmlFor="checkbox">
                            <input
                              type="checkbox"
                              id="checkbox"
                              checked={theme === "dark"}
                              onChange={switchTheme} // Use React event handler
                            />
                            <div className="mode-container">
                              <i className="gg-sun" />
                              <i className="gg-moon" />
                            </div>
                          </label>
                        </div>
                      </nav>
                    </div>
                    {/* //toggle switch for light and dark theme */}
                  </div>
                  <div className="cart-store">
                    <Link to="/checkout">
                      <i className="far fa-heart" />
                    </Link>
                  </div>
                  <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                    <form
                      action="/checkout"
                      method="post"
                      className="last text-right"
                    >
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="display" defaultValue={1} />
                      <button
                        className="btn w3view-cart p-0"
                        type="submit"
                        name="submit"
                        value
                      >
                        <img src="images/cart.png" className="img-fluid" /> Cart
                      </button>
                    </form>
                  </div>
                </div>
                {/* //cart details */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
