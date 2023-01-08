import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import MapSearch from "../components/map";

const index = () => {
  return (
    <>
      <Seo pageTitle="Map" />
      <MapSearch />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
