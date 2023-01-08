import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Blog from "../components/blog-home";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog Home" />
      <Blog />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
