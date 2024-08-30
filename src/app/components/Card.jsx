import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Image from "./Image";
import Link from "next/link";

function Card({ image, title, description, githubLink, liveLink, category }) {
  return (
    <>
      {/* <Link href="/"></Link> */}
      <div className="relative h-60">
        {/* <Link href="#"> */}
        <Image
          path={image}
          alt={title}
          transformation={[
            {
              height: "240px",
              width: "full",
            },
          ]}
          className="transition duration-300 ease-in-out hover:scale-110 object-cover object-left-top"
        />
        {/* </Link> */}
        <div className="text-xs absolute tracking-tight lowercase top-0 right-0 bg-indigo-700 rounded-lg px-2 py-1 text-white mt-3 mr-3">
          {category}
        </div>
      </div>
      {/* title and description */}
      <div className="px-6 py-4 mb-auto">
        <Link
          href="#"
          className="font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
        >
          {title}
        </Link>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>

      {/* links */}
      <div className="px-6 py-3 flex flex-row items-center justify-between">
        <Link
          href={githubLink}
          target="_black"
          className="py-1 text-xs font-regular mr-1 flex flex-row items-center"
        >
          <FaGithub size={18} className="hover:text-indigo-600" />
          <span className="ml-1">Github</span>
        </Link>

        <Link
          href={liveLink}
          target="_black"
          className="py-1 text-xs bg-blue-700 rounded-xl px-3 font-regular mr-1 flex flex-row items-center"
        >
          <BiLink />
          <span className="ml-1">LiveLink</span>
        </Link>
      </div>
    </>
  );
}

export default Card;
