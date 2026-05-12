import React, { useState, useEffect, useRef } from "react";
import "./SearchBar.css";

const PROPERTY_TYPES = [
  { label: "Apartment", icon: "🏢" },
  { label: "Villa", icon: "🏠" },
  { label: "Plot / Land", icon: "🗺️" },
  { label: "Commercial", icon: "💼" },
  { label: "Penthouse", icon: "🏙️" },
];

const LOCATIONS = [
  "Chennai",
  "Coimbatore",
  "Bangalore",
  "Hyderabad",
  "Mumbai",
  "Delhi NCR",
  "Pune",
  "Madurai",
  "Trichy",
  "Salem",
];

const PRICE_PRESETS = [
  { label: "Under ₹50L", value: 50 },
  { label: "Under ₹1Cr", value: 100 },
  { label: "Under ₹2Cr", value: 200 },
  { label: "₹5Cr+", value: 500 },
];

function formatPrice(val) {
  val = parseInt(val);
  if (val >= 500) return "₹5Cr+";
  if (val >= 100) return `Up to ₹${(val / 100).toFixed(1)}Cr`;
  return `Up to ₹${val}L`;
}

export default function SearchBar({ onSearch }) {
  const [activeTab, setActiveTab] = useState("Buy");
  const [query, setQuery] = useState("");
  const [propType, setPropType] = useState(null);
  const [priceVal, setPriceVal] = useState(null);
  const [priceSlider, setPriceSlider] = useState(50);
  const [location, setLocation] = useState(null);
  const [locSearch, setLocSearch] = useState("");
  const [openDrop, setOpenDrop] = useState(null); // 'prop' | 'price' | 'loc' | null

  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenDrop(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggleDrop(name) {
    setOpenDrop((prev) => (prev === name ? null : name));
  }

  function clearFilter(key) {
    if (key === "prop") setPropType(null);
    if (key === "price") { setPriceVal(null); setPriceSlider(50); }
    if (key === "loc") { setLocation(null); setLocSearch(""); }
  }

  function handleSearch() {
    const filters = { tab: activeTab, query, propType, price: priceVal, location };
    if (onSearch) onSearch(filters);
    else console.log("Search:", filters);
  }

  const filteredLocs = LOCATIONS.filter((l) =>
    l.toLowerCase().includes(locSearch.toLowerCase())
  );

  const chips = [
    propType && { key: "prop", label: propType },
    priceVal && { key: "price", label: priceVal },
    location && { key: "loc", label: location },
  ].filter(Boolean);

  const sliderPct = ((priceSlider - 5) / (500 - 5)) * 100;

  return (
    <div className="sb-wrap" ref={wrapRef}>
      <div className="sb-card">
        {/* Top row */}
        <div className="sb-top">
          <div className="sb-headline">
            Find the perfect place to call <span>Home</span>
          </div>
          <div className="type-tabs">
            {["Buy", "Rent", "New Launch"].map((t) => (
              <button
                key={t}
                className={`type-tab${activeTab === t ? " active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Search input row */}
        <div className="sb-search-row">
          <span className="sb-search-icon">🔍</span>
          <input
            className="sb-input"
            type="text"
            placeholder="Search by city, locality, or project…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="sb-input-btn" onClick={handleSearch}>
            → Search
          </button>
        </div>

        {/* Filter row */}
        <div className="sb-filters">
          <div className="sb-filters-left">

            {/* Property Type */}
            <div className="filter-group">
              <div className="filter-label">Property Type</div>
              <div
                className={`filter-trigger${openDrop === "prop" ? " open" : ""}`}
                onClick={() => toggleDrop("prop")}
              >
                <span className="ft-icon">🏢</span>
                <span className={`ft-text${!propType ? " placeholder" : ""}`}>
                  {propType || "Select type"}
                </span>
                <span className="ft-arrow">▾</span>
              </div>
              {openDrop === "prop" && (
                <div className="dropdown open">
                  {PROPERTY_TYPES.map((p) => (
                    <div
                      key={p.label}
                      className={`dd-option${propType === p.label ? " selected" : ""}`}
                      onClick={() => {
                        setPropType(p.label);
                        setOpenDrop(null);
                      }}
                    >
                      <span>{p.icon}</span> {p.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <div className="filter-label">Price Range</div>
              <div
                className={`filter-trigger${openDrop === "price" ? " open" : ""}`}
                onClick={() => toggleDrop("price")}
              >
                <span className="ft-icon">₹</span>
                <span className={`ft-text${!priceVal ? " placeholder" : ""}`}>
                  {priceVal || "Any budget"}
                </span>
                <span className="ft-arrow">▾</span>
              </div>
              {openDrop === "price" && (
                <div className="dropdown open">
                  <div className="price-range-dd">
                    <div className="pr-value">{formatPrice(priceSlider)}</div>
                    <input
                      type="range"
                      min="5"
                      max="500"
                      step="5"
                      value={priceSlider}
                      style={{
                        background: `linear-gradient(to right, #dd0011 0%, #dd0011 ${sliderPct}%, #e0e0e0 ${sliderPct}%, #e0e0e0 100%)`,
                      }}
                      onChange={(e) => {
                        const v = parseInt(e.target.value);
                        setPriceSlider(v);
                        setPriceVal(formatPrice(v));
                      }}
                    />
                    <div className="pr-label">
                      <span>₹5L</span>
                      <span>₹5Cr+</span>
                    </div>
                    <div className="price-presets">
                      {PRICE_PRESETS.map((p) => (
                        <button
                          key={p.label}
                          className={`price-preset${priceSlider === p.value ? " active" : ""}`}
                          onClick={() => {
                            setPriceSlider(p.value);
                            setPriceVal(formatPrice(p.value));
                            setOpenDrop(null);
                          }}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Location */}
            <div className="filter-group">
              <div className="filter-label">Location</div>
              <div
                className={`filter-trigger${openDrop === "loc" ? " open" : ""}`}
                onClick={() => toggleDrop("loc")}
              >
                <span className="ft-icon">📍</span>
                <span className={`ft-text${!location ? " placeholder" : ""}`}>
                  {location || "Select city"}
                </span>
                <span className="ft-arrow">▾</span>
              </div>
              {openDrop === "loc" && (
                <div className="dropdown open">
                  <div className="location-search">
                    <input
                      type="text"
                      placeholder="Search city or locality…"
                      value={locSearch}
                      onChange={(e) => setLocSearch(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                    />
                  </div>
                  <div className="loc-list">
                    {filteredLocs.map((l) => (
                      <div
                        key={l}
                        className={`dd-option${location === l ? " selected" : ""}`}
                        onClick={() => {
                          setLocation(l);
                          setLocSearch("");
                          setOpenDrop(null);
                        }}
                      >
                        📍 {l}
                      </div>
                    ))}
                    {filteredLocs.length === 0 && (
                      <div className="dd-option" style={{ color: "#aaa", cursor: "default" }}>
                        No results found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Big search button */}
          <button className="search-big-btn" onClick={handleSearch}>
            🔍 Find Properties
          </button>
        </div>

        {/* Active filter chips */}
        {chips.length > 0 && (
          <div className="active-chips">
            {chips.map((c) => (
              <div key={c.key} className="chip">
                {c.label}
                <span className="chip-x" onClick={() => clearFilter(c.key)}>
                  ×
                </span>
              </div>
            ))}
            <span
              className="chip-clear-all"
              onClick={() => { clearFilter("prop"); clearFilter("price"); clearFilter("loc"); }}
            >
              Clear all
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
