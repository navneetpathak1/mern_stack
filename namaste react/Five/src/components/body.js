import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { restaurantList } from "../constant";

// SearchBar Component
const SearchBar = ({ searchTab, setSearchTab, handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search restaurants..."
        value={searchTab}
        onChange={(e) => 
          setSearchTab(e.target.value)
        }
      />
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

// Restaurant Card Component
const RestaurantComponent = ({ name, cuisines, imageId, lastMileMin }) => {
  return (
    <div className="restaurant-card">
      <img src={imageId} alt={name} className="restaurant-image" />
      <h2 className="restaurant-name">{name}</h2>
      <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
      <h3 className="restaurant-time">{lastMileMin} mins</h3>
    </div>
  );
};

// Main Body Component
export const Body = () => {
  const [searchTab, setSearchTab] = useState("");
  const [restaurants, setRestaurants] = useState([]);


  useEffect(()=>{
    // console.log("This will load after body render");
    fetchData();
  }, [])

  const fetchData = async () =>{
   try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();

      console.log(json);
    // optional chaining
      setRestaurants(json?.data?.cards[2].data?.data?.cards);

   }
    catch (error) {
    console.error("Error fetching data:", error);
  }
    
  }

  if(restaurants.length === 0) {
    return <Shimmer />
  }

  console.log("This will load before useEffect")
  const handleSearch = () => {
    const filtered = restaurantList.filter((res) =>
      res.data.name.toLowerCase().includes(searchTab.toLowerCase())
    );
    setRestaurants(filtered);
  };

  return (
    <>
      <SearchBar
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        handleSearch={handleSearch}
      />

      <div className="body">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantComponent
              {...restaurant.data}
              key={restaurant.data.id}
            />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};
