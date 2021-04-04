import React, { useState } from "react";
import ImageHelper from "./helper/imageHelper";
import { Redirect, useHistory } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper/index";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = true,
  reload = undefined,
  setReload = f => f
}) => {
  const history = useHistory();

  const [redirect, setRedirect] = useState(false);
  const cartTitle = product ? product.name : "Default product";
  const cartDescription = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "Default price";

  const AddToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => {
        setRedirect(true);
      });
      console.log("added to card");
    } else {
      redirectToSignUpPage();
      console.log("please login");
    }
  };

  const redirectToSignUpPage = () => {
    history.push("/signup");
  };

  const getAredirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addToCart => {
    return (
      addToCart && (
        <button
          onClick={AddToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getAredirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
