import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/product_card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get('query') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/laptops/search?query=${query}`);
        console.log("✅ Search Results:", res.data);
        setResults(res.data);
      } catch (error) {
        console.error("❌ Error fetching search results:", error);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <>
    <Navbar />
    <div className="container-fluid py-4">
      <h4 className="text-primary fw-bold mb-4 ms-3">
        🔍 Search Results for: <strong>{query}</strong>
      </h4>
      <div className="row g-4 px-3 px-md-4">
        {results.length > 0 ? (
          results.map((laptop, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <ProductCard
                id={laptop._id}
                image={laptop.images?.[0]}
                title={`${laptop.brand} ${laptop.modelName}`}
                description={`${laptop.cpuModel}, ${laptop.ramMemory}, ${laptop.screenSize}`}
                price={laptop.price}
                buttonText="View Details"
                variant="primary"
              />
            </div>
          ))
        ) : (
          <p className="ms-3">No laptops found.</p>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default SearchResults;
