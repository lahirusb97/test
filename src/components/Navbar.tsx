import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector((state) => state.cartReducer.cartItems.length);
  const username = useAppSelector((state) => state.authReducer.username);
  const { requireAuth } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setSelectedBrand("");
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(event.target.value);
    setSelectedCategory("");
  };

  const handleSearch = () => {
    if (selectedCategory) {
      // Implement your search logic here
      console.log("Searching for category:", selectedCategory);
    } else if (selectedBrand) {
      // Implement your search logic here
      console.log("Searching for brand:", selectedBrand);
    } else {
      // Implement your search logic here
      console.log("Searching for all products");
    }
  };

  return (
    <div className="py-4 bg-white top-0 sticky z-10 shadow-lg font-karla">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-4xl font-bold" data-test="main-logo">
            <img src="/logo.png" alt="logo" className="w-10 h-10 mr-2" />
            <span className="text-[#007BFF]">Pets Square</span>
          </Link>

          {/* Dropdown Menus */}
          <div className="hidden lg:flex w-full max-w-[500px] ml-4">
            <select
              className="border-2 border-blue-500 px-4 py-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="cats">Cats</option>
              <option value="dogs">Dogs</option>
              {/* Add more options here */}

            </select>

            <div
              className="bg-blue-500 text-white text-[26px] grid place-items-center px-4 cursor-pointer"
              onClick={handleSearch}
            >
              <BsSearch />
            </div>
           
          </div>


          <div className="flex gap-4 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-xl font-bold"
              data-test="main-products"
            >
              Products
            </Link>
            <div className="flex items-center gap-2">
              {username !== "" ? (
                <img
                  src="https://robohash.org/Terry.png?set=set4"
                  alt="avatar"
                  className="w-6"
                />
              ) : (
                <FaUser className="text-gray-500 text-2xl" />
              )}
              <div className="text-gray-500 text-2xl">
                {username !== "" ? (
                  <CustomPopup />
                ) : (
                  <span
                    className="cursor-pointer hover"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    Login
                  </span>
                )}
              </div>
            </div>
            <div
              className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
              onClick={showCart}
              data-test="cart-btn"
            >
              <AiOutlineShoppingCart />
              <div
                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                data-test="cart-item-count"
              >
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






