import React from "react";

function imageHelper({ product }) {
  const imageUrl = product
    ? product.image
    : "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return (
    <div className="rounded border border-success p-2">
      <img
        className="mb-3 rounded"
        src={imageUrl}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        alt=""
      />
    </div>
  );
}

export default imageHelper;
