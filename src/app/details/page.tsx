"use client";
import Navbar from "@/components/navbar";

import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/reducers/cart";
import { v4 as uuidv4 } from "uuid";

import Image from "next/image";
import iconCart from "@/public/img/images/icon-cart.svg";
import iconNext from "@/public/img/images/icon-next.svg";
import iconClose from "@/public/img/images/icon-close.svg";
import bannerProduct1 from "@/public/img/images/image-product-1.jpg";
import bannerProduct2 from "@/public/img/images/image-product-2.jpg";
import bannerProduct3 from "@/public/img/images/image-product-3.jpg";
import bannerProduct4 from "@/public/img/images/image-product-4.jpg";
import thumbnailProduct1 from "@/public/img/images/image-product-1-thumbnail.jpg";
import thumbnailProduct2 from "@/public/img/images/image-product-2-thumbnail.jpg";
import thumbnailProduct3 from "@/public/img/images/image-product-3-thumbnail.jpg";
import thumbnailProduct4 from "@/public/img/images/image-product-4-thumbnail.jpg";

import { useState } from "react";

const Details = () => {
  const carrousel = [
    bannerProduct1,
    bannerProduct2,
    bannerProduct3,
    bannerProduct4,
  ];
  const [counter, setCounter] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imgBanner, setImgBanner] = useState(bannerProduct1);
  const [banner, setBanner] = useState(false);

  const dispatch = useAppDispatch();

  const handleThumbnailClick = (bannerImage: any) => {
    setImgBanner(bannerImage);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const modalImage = () => {
    setBanner(!banner);
  };

  const handleToCart = (): void => {
    if (counter > 0) {
      const addToCart: any = {
        id: uuidv4(),
        name: "Fall Limited Edition Sneakers",
        amount: counter,
        image: thumbnailProduct1,
        price: counter * 125,
      };
      dispatch(addProduct(addToCart));
      setCounter(0);
    }
  };

  const handleNextImage = (increment: number) => {
    const nextIndex = currentImageIndex + increment;

    if (nextIndex >= 0 && nextIndex <= 3) {
      setCurrentImageIndex(nextIndex);
      setImgBanner(carrousel[nextIndex]);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="content flex lg:flex-row flex-col justify-center items-center lg:h-[500px] h-auto">
          <div className="left lg:w-1/2 w-full flex justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="banner md:w-1/2 w-auto relative">
                <button
                  className="absolute top-1/2 btn-click md:flex lg:hidden justify-between z-20 left-1 bg-white rounded-full px-2 py-1.5 rotate-180"
                  onClick={() => handleNextImage(-1)}
                >
                  <Image src={iconNext} alt="iconNext" />
                </button>
                <button
                  className="absolute top-1/2 btn-click md:flex lg:hidden justify-between z-20 right-1 bg-white rounded-full px-2 py-1.5 "
                  onClick={() => handleNextImage(1)}
                >
                  <Image src={iconNext} alt="iconNext" />
                </button>
                <Image
                  onClick={(): void => modalImage()}
                  className="md:rounded-md rounded-none w-full h-full"
                  src={imgBanner}
                  alt="bannerProduct1"
                ></Image>
              </div>
              <div className="thumbnail lg:flex hidden gap-4 ">
                <Image
                  onClick={() => handleThumbnailClick(bannerProduct1)}
                  className={`w-24 h-24 rounded-md hover:opacity-70 ${
                    imgBanner === bannerProduct1
                      ? "border-orange-500 border-2 opacity-50"
                      : ""
                  }`}
                  src={thumbnailProduct1}
                  alt="thumbnailProduct1"
                />
                <Image
                  onClick={() => handleThumbnailClick(bannerProduct2)}
                  className={`w-24 h-24 rounded-md hover:opacity-70 ${
                    imgBanner === bannerProduct2
                      ? "border-orange-500 border-2 opacity-50"
                      : ""
                  }`}
                  src={thumbnailProduct2}
                  alt="thumbnailProduct2"
                />
                <Image
                  onClick={() => handleThumbnailClick(bannerProduct3)}
                  className={`w-24 h-24 rounded-md hover:opacity-70 ${
                    imgBanner === bannerProduct3
                      ? "border-orange-500 border-2 opacity-50"
                      : ""
                  }`}
                  src={thumbnailProduct3}
                  alt="thumbnailProduct3"
                />
                <Image
                  onClick={() => handleThumbnailClick(bannerProduct4)}
                  className={`w-24 h-24 rounded-md hover:opacity-70 ${
                    imgBanner === bannerProduct4
                      ? "border-orange-500 border-2 opacity-50"
                      : ""
                  }`}
                  src={thumbnailProduct4}
                  alt="thumbnailProduct4"
                />
              </div>
            </div>
          </div>
          <div className="right lg:w-1/2 w-full flex lg:justify-between justify-center p-4 flex-col gap-3">
            <div className="subTitle font-bold text-orange-500">
              SNEAKERS COMPANY
            </div>
            <div className="Title lg:w-2/3 w-full font-bold xl:text-4xl text-2xl">
              Fall Limited Edition Sneakers
            </div>
            <div className="description lg:w-2/3 w-full font-medium text-gray-400">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </div>
            <div className="price flex flex-row lg:flex-col lg:items-start items-center justify-between lg:justify-start">
              <div className="after-disc flex items-center gap-3">
                <h1 className="text-3xl font-bold">$125.00 </h1>
                <span className="disc py-1 px-2 rounded-md bg-orange-100 font-semibold text-orange-500">
                  50%
                </span>
              </div>
              <span className="before-disc line-through font-medium">
                $250.00
              </span>
            </div>
            <div className="payment gap-3 flex lg:flex-row flex-col">
              <div className="counter-btn flex items-center">
                <button
                  onClick={handleDecrement}
                  className="px-5 py-2 bg-gray-100 text-orange-500 rounded-l-md w-full lg:w-1/2"
                >
                  -
                </button>
                <div className="bg-gray-100 w-full flex justify-center items-center h-full p-2">
                  {counter}
                </div>
                <button
                  onClick={handleIncrement}
                  className="px-5 py-2 bg-gray-100 text-orange-500  rounded-r-md w-full lg:w-1/2"
                >
                  +
                </button>
              </div>
              <div className="add-to-cart-btn">
                <button
                  className="bg-orange-500 text-white px-3 py-2 rounded-md active:bg-orange-600 w-full justify-center lg:w-52  flex gap-3"
                  onClick={handleToCart}
                >
                  <Image src={iconCart} alt="icon cart" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {banner && (
          <div className="w-full h-screen bg-[rgba(0,0,0,0.85)] z-30 top-0 absolute hidden lg:flex justify-center items-center flex-col gap-8">
            <div className="">
              <button
                className="absolute top-60 btn-click flex justify-between z-20 left-96 bg-white rounded-full px-2 py-1.5 rotate-180"
                onClick={() => handleNextImage(-1)}
              >
                <Image src={iconNext} alt="iconNext" />
              </button>
              <button
                className="absolute top-60 btn-click flex justify-between z-50 right-96 bg-white rounded-full px-2 py-1.5 "
                onClick={() => handleNextImage(1)}
              >
                <Image src={iconNext} alt="iconNext" />
              </button>
              <div
                className="flex justify-end py-2"
                onClick={(): void => modalImage()}
              >
                <Image src={iconClose} alt="close" />
              </div>
              <Image
                className="w-[300px] h-[300px] rounded-md"
                src={imgBanner}
                alt="banner"
              />
            </div>
            <div className="flex gap-5">
              <Image
                className="w-20 rounded-md"
                src={thumbnailProduct1}
                alt="thumbnail 1"
              />
              <Image
                className="w-20 rounded-md"
                src={thumbnailProduct2}
                alt="thumbnail 2"
              />
              <Image
                className="w-20 rounded-md"
                src={thumbnailProduct3}
                alt="thumbnail 3"
              />
              <Image
                className="w-20 rounded-md"
                src={thumbnailProduct4}
                alt="thumbnail 4"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
