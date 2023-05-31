import React from "react";
import house1 from "../assets/house1.jpg";
import houses from "../assets/houses.png";
import CardComponent from "./CardComponent";
const NewListing = () => {
  const cards = [
    { photo: house1, price: " $236940" },
    { photo: houses, price: " $236990" },
    { photo: house1, price: " $233440" },
    { photo: houses, price: " $234540" },
  ];
  return (
    <div>
      <div className="mx-8 mt-12">
        <p className="text-[29px] font-medium">New Listing in Apna_Home</p>
        <p className="text-[18px] font-serif text-blue-600">
          View All 160 New Listing
        </p>
      </div>
      {/* listing */}
      <div className="flex flex-nowrap pt-4 space-x-6  overflow-x-scroll w-full pb-4 mb-20">
        {cards.map((card) => (
          <CardComponent photo={card.photo} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default NewListing;
