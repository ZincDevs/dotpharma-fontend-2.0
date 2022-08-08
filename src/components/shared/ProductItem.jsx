/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink, FloatingButton } from './Buttons';
import { ItemFotter, Price } from './Elements';

export function ProductItemHor() {
  return (
    <div className="product-item hor d-flex py-4">
      <div className="top col-4">
        <div className="disc">
          <FloatingButton link="/" text="-2%" icon="bi bi-bag" />
        </div>
        <img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/02/product12-fetaured.jpg" alt="item" />
      </div>
      <div className="down px-3 w-100">
        <div className="p-1">
          <h5>
            <Link to="/">
              New Protective Formula Shampoo
            </Link>
          </h5>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere labore animi est dolore nemo, alias, modi inventore ipsam a ipsa!</p>
        </div>
        <div className="py-2">
          <Price discount={10} price={100} />
        </div>
        <div className="py-2">
          <ButtonLink link="/" text="Add to cart" icon="bi bi-bag" />
        </div>
        <div className="py-1">
          <ItemFotter />
        </div>
      </div>
    </div>
  );
}

export default function ProductItem() {
  return (
    <div className="product-item">
      <div className="top">
        <div className="disc">
          <FloatingButton link="/" text="-2%" icon="bi bi-bag" />
        </div>
        <img src="https://pharmacare.qodeinteractive.com/wp-content/uploads/2021/02/product12-fetaured.jpg" alt="item" />
      </div>
      <div className="down p-2">
        <div className="p-1">
          <h5 className="text-center">
            <Link to="/" className="text-center">
              New Protective Formula Shampoo
            </Link>
          </h5>
        </div>
        <div className="py-2">
          <Price discount={10} price={100} center />
        </div>
        <div className="py-2 d-flex justify-content-center align-items-center">
          <ButtonLink link="/" text="Add to cart" icon="bi bi-bag" />
        </div>
        <div className="py-1 d-flex justify-content-center align-items-center">
          <ItemFotter />
        </div>
      </div>
    </div>
  );
}
