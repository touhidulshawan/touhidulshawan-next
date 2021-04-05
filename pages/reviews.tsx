import React from "react";
import Layout from "../components/Layout";
import { AiOutlineUser } from "react-icons/ai";
import Review from "../components/pageComponents/Review";
import { InferGetStaticPropsType } from "next";
import fs from "fs/promises";
import path from "path";

const Reviews = ({
  reviews,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Reviews">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 2xl:grid-col-5 lg:mx-6">
        {reviews.map(
          (r: {
            id: React.Key;
            client_name: string;
            star: number;
            client_txt: string;
          }) => {
            return (
              <Review
                key={r.id}
                client_name={r.client_name}
                star={r.star}
                client_txt={r.client_txt}
              />
            );
          }
        )}
      </div>
      <div className="pb-3">
        <a
          href="https://www.fiverr.com/frontwebdev"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:text-purple-700 transform transition duration-200 ease-in-out text-purple-600 animate-pulse dark:text-purple-300 dark:hover:text-purple-500"
        >
          <span className="flex justify-center items-center py-2 ">
            <AiOutlineUser className="text-xl mr-2" />
            <span>See More on Fiverr</span>
          </span>
        </a>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "Reviews.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return {
    props: {
      reviews: data.reviews,
    },
  };
}

export default Reviews;
