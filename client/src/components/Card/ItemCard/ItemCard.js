import "./ItemCard.css";
import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
// import { IconButton } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { WishItemsContext } from "../../../Context/WishItemsContext";

const ItemCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  //   const cartItemsContext = useContext(CartItemsContext);
  //   const wishItemsContext = useContext(WishItemsContext);

  //   const handleAddToWishList = () => {
  //     wishItemsContext.addItem(props.item);
  //   };

  //   const handleAddToCart = () => {
  //     cartItemsContext.addItem(props.item, 1);
  //   };

  return (
    <div className="product__card__card">
      <div className="product__card">
        <div
          className="product__image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img
              src={`${props.item["url"]}`}
              alt="item"
              className="product__img"
            />
          ) : (
            <img
              src={`${props.item["url"]}`}
              alt="item"
              className="product__img"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
