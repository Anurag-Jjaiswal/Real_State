import React from "react";
import Item from "./Item";
import { PARTNERSHIP, ABOUT, SUPPORT } from "./Menu";
const ItemsComponents = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 sm:px-8 px-5 py-16">
      <Item Links={PARTNERSHIP} title="PARTNERSHIP" />
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsComponents;
