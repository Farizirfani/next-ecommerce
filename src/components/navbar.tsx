"use client";

import React, { useState } from "react";
import { deleteProduct } from "@/redux/reducers/cart";
import Image from "next/image";
import AvatarProfile from "../../public/img/images/image-avatar.png";
import iconCart from "../../public/img/images/icon-cart.svg";
import iconMenu from "@/public/img/images/icon-menu.svg";
import iconClose from "@/public/img/images/icon-close.svg";
import iconDelete from "@/public/img/images/icon-delete.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Navbar = () => {
  const [cart, setCart] = useState(false);
  const [navMobile, setNabvMobile] = useState(false);
  const cartProduct = useAppSelector((state) => state?.cart?.value);

  const dispatch = useAppDispatch();

  const handleCart = () => {
    setCart(!cart);
  };

  const handleDeleteProduct = (id: any): void => {
    dispatch(deleteProduct(id));
  };

  const handleNabvMobile = () => {
    setNabvMobile(!navMobile);
  };

  return (
    <>
      <div className="Navbar bg-white lg:px-[50px] px-5 z-10">
        <div className="flex justify-between items-center w-auto border-b-[1.5px] border-b-stone-300">
          <div className="flex lg:justify-center justify-start items-center gap-5 h-20">
            <div
              className="nav-mobile lg:hidden block"
              onClick={handleNabvMobile}
            >
              <Image src={iconMenu} alt="icon menu" />
            </div>
            <h1 className="text-3xl font-bold">sneakers</h1>
            <div className="gap-5 h-full items-center hidden lg:flex w-full">
              <h1 className="flex items-center h-full border-b-orange-500 border-b-4 ">
                Collections
              </h1>
              <h1 className="text-slate-500">Men</h1>
              <h1 className="text-slate-500">Woman</h1>
              <h1 className="text-slate-500">About</h1>
              <h1 className="text-slate-500">Contact</h1>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-10 items-center">
            <div className="cart" onClick={handleCart}>
              <Image src={iconCart} alt="iconCart"></Image>
            </div>
            <div className="profile w-11 border-2 border-orange-500 rounded-full">
              <Image src={AvatarProfile} alt="AvatarProfile" />
            </div>
          </div>
        </div>
        <div
          className={`z-50 lg:top-[70px] lg:justify-end justify-center items-center lg:w-[350px] w-auto lg:max-h-[280px] overflow-auto lg:right-20 bg-white shadow-2xl rounded-md ${
            cart === false ? "hidden" : "absolute"
          }`}
        >
          <div className="header bor p-2">Cart</div>
          <div className="w-full border border-b-slate-100">
            {cartProduct?.length > 0 ? (
              cartProduct?.map((product: any) => (
                <div
                  key={product.id}
                  className="w-full flex justify-between items-center p-2"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      className="rounded-md"
                      src={product.image}
                      alt="product"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col px-2">
                      <p className="text-slate-500 font-thin">{product.name}</p>
                      <p className="flex font-thin text-slate-500">
                        $125.00 x {product.amount}
                        <span className="font-bold text-black px-1">
                          ${product.price}.00
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={(): void => handleDeleteProduct(product.id)}
                    >
                      <Image src={iconDelete} alt="iconDelete" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center items-center p-2">
                <h1>Cart is empty</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      {navMobile === true && (
        <div
          className={`z-30 bg-white w-3/4 h-[150vh] absolute top-0 lg:hidden block ${
            true === true ? "left-0" : "-left-96"
          }`}
        >
          <div className="flex flex-col gap-4 p-3">
            <Image src={iconClose} alt="iconMenu" onClick={handleNabvMobile} />
            <div className="flex flex-col">
              <p>Collections</p>
              <p>Men</p>
              <p>Woman</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
