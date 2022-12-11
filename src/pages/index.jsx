import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomeMain from "../components/listing-half-map/listing-map-v4";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
