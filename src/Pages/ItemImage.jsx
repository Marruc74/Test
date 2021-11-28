import React from "react";

const ItemImage = (props) => {
  const { item } = props;

  const renderImage = () => {
    //Images from file.plugboard.io are not working
    return item.images &&
      item.images.length > 0 &&
      !item.images[0].url.includes("file.plugboard.io") ? (
      <img
        alt={item.title}
        src={item.images[0].url}
        style={{ width: "250px", height: "250px" }}
      />
    ) : (
      <div style={{ width: "250px", height: "250px" }}>Bild saknas</div>
    );
  };

  return <div>{item && renderImage()}</div>;
};

export default ItemImage;
