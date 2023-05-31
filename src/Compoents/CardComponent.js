import React from "react";

const CardComponent = ({ photo, price }) => {
  return (
    <div>
      {/* imaege */}
      <div className="min-w-[22rem]">
        <img src={photo} className="ml-2" />
      </div>
      {/* description */}
      <div className="">
        <div className="w-2 h-2 bg-green-600 rounded[0.5rem] flex items-center mt-2 ml-2"></div>
        <div className="ml-3">
          <p>Single-Family Home</p>
          <p className="font-semibold text-[20px]">{price}</p>
        </div>
        <div className="font-serif ml-3">
          <p>5 bedroom</p>
          <p>3 bathroom</p>
          <p>8,765 sqft</p>
          <p>Noida sector-15</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
