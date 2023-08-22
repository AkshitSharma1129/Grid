import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [searchedText, setSearchedText] = useState(""); // State to store entered text
  TabTitle("Grid");

  useEffect(() => {
    axios
      .get("http://localhost:3001/images/", {
        params: { userId: window.sessionStorage.getItem("userId") },
      })
      .then((res) => {
        setFeaturedItems(res.data);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [searchedText]);
  const handleTextEntered = (text) => {
    setSearchedText(text);
  };

  return (
    <Fragment>
      <Landing func={setFeaturedItems}/>
      <FeaturedCategories />
      <FeaturedItems items={featuredItems} />

    </Fragment>
  );
};

export default Home;
