import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Pricing from "../components/pricing";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pricing" />
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
