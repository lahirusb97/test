import { FC, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import { useAppDispatch } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productList: Product[] = [
      {
        id: 1,
        title: "Product 1",
        images: ["/public/st1.jpg"],
        price: 7.99,
        rating: 4.5,
        thumbnail: "/public/st1.jpg",
        description: "Description for product 1",
        category: "Category 1",
        discountPercentage: 10,
      },
      {
        id: 2,
        title: "Product 2",
        images: ["/public/st2.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st2.jpg",
        description: "Description for product 2",
        category: "Category 2",
        discountPercentage: 15,
      },
      {
        id: 3,
        title: "Product 3",
        images: ["/public/st3.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st3.jpg",
        description: "Description for product 3",
        category: "Category 3",
        discountPercentage: 15,
      },
      {
        id: 4,
        title: "Product 4",
        images: ["/public/st4.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st4.jpg",
        description: "Description for product 4",
        category: "Category 5",
        discountPercentage: 15,
      },
      {
        id: 5,
        title: "Product 5",
        images: ["/public/st5.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st5.jpg",
        description: "Description for product 5",
        category: "Category 5",
        discountPercentage: 15,
      },
      {
        id: 6,
        title: "Product 6",
        images: ["/public/st6.png"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st6.png",
        description: "Description for product 6",
        category: "Category 6",
        discountPercentage: 15,
      },
      {
        id: 7,
        title: "Product 7",
        images: ["/public/st7.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st7.jpg",
        description: "Description for product 7",
        category: "Category 7",
        discountPercentage: 15,
      },
      {
        id: 8,
        title: "Product 8",
        images: ["/public/st8.jpg"],
        price: 49.99,
        rating: 4.0,
        thumbnail: "/public/st8.jpg",
        description: "Description for product 8",
        category: "Category 8",
        discountPercentage: 15,
      },

    ];

    dispatch(updateFeaturedList(productList.slice(0, 8)));
    dispatch(updateNewList(productList.slice(8, 16)));
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      <Features />
      <TrendingProducts />
      <Banner />
      <LatestProducts />
      <br />
    </>
  );
};

export default Home; 

