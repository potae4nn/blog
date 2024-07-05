import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mt-12">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <Image
          className="rounded-full"
          width={400}
          height={400}
          alt="Profile"
          src={
            "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/263584110_3209473435947063_1860258462322893136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGn9Lfn6Heq7t-aIka-iaRpIDGvBROalcUgMa8FE5qVxT7AHsksFusA5DaGnlqKazT2I7ITo7Yg8LlHYQZvY7-6&_nc_ohc=JAck6UMZ-EMQ7kNvgG4OKlE&_nc_ht=scontent-bkk1-2.xx&oh=00_AYAvjlv1yfUMQF5MjSks9PGd95Q4JwsYxBsT2Xl5jhDw5A&oe=668D90BA"
          }
        />
        <div className="bg-gray-600 w-full mt-4 lg:mx-12 mx-0 rounded-lg lg:p-10 p-5 ">
          <p>
            My name is{" "}
            <span className="text-2xl font-extrabold">
              Nattapon Chomsunthia
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
