import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyGenerators from "../../components/dashboard/my-generators";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Generators" />
      <MyGenerators />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
