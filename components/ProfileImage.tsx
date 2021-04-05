import React from "react";
import Image from "next/image";

const ProfileImg: React.FC = () => {
  return (
    <Image
      className="w-64 h-64 border-r-8 border-b-4 border-t-2 border-l-2  border-gray-900 shadow-inner rounded-lg mx-auto my-3 md:w-72 md:h-72 md:mt-4 lg:mt-10 lg:ml-auto dark:border-blue-100 dark:shadow-lg"
      src="/img/Portfolio.jpg"
      alt="portfolio img"
      width="w-64"
      height="h-64"
    />
  );
};

export default ProfileImg;
