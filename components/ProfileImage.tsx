import React from "react";
import Image from "next/image";

const ProfileImg: React.FC = () => {
  return (
    <div className="w-64 h-64  mx-auto my-3  md:mt-4 lg:mt-10 lg:ml-auto  md:w-72 md:h-72 overflow-hidden  rounded-lg shadow-inner  border-r-8 border-b-4 border-t-2 border-l-2  border-gray-900 dark:border-blue-100">
      <Image
        priority
        layout="fixed"
        src="/img/Portfolio.jpg"
        alt="portfolio img"
        width={290}
        height={290}
      />
    </div>
  );
};

export default ProfileImg;
