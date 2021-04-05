import React from "react";
import Layout from "../components/Layout";
import ProfileImg from "../components/ProfileImage";
import Bio from "../components/Bio";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className=" flex flex-col-reverse md:max-w-5xl mx-auto md:grid md:grid-cols-2 gap-5  md:mt-8 dark:bg-gray-900">
        <Bio />
        <ProfileImg />
      </div>
    </Layout>
  );
};

export default Home;
