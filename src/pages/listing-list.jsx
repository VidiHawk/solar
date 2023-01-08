import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import List from "../components/listing-list";

const index = () => {
  return (
    <>
      <Seo pageTitle="Project List" />
      <List />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
