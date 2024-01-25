import React, { useEffect, useState } from "react";

function ProductOverviewImg({ pet }) {
  return (
    <div className="col-span-12 lg:col-span-6">
      <img
        width="100%"
        height="50vh"
        className="object-cover"
        src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg"
        // alt={product.productName}
      />
    </div>
  );
}

export default ProductOverviewImg;
