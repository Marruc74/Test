import React from "react";
import ItemImage from "./ItemImage";
import ItemFooter from "./ItemFooter";

const Item = (props) => {
  const { item } = props;
  return (
    <div className="item">
      <ItemImage item={item} />
      <ItemFooter item={item} />
    </div>
  );
};

export default Item;
