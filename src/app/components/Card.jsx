import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import Image from "./Image";
import Link from "next/link";

function Card({ image, title, description, githubLink, liveLink, category }) {
  return (
    <>
      <div className="relative h-60">
        <Image
          path={image}
          alt={title}
          priorty="true"
          transformation={[
            {
              height: "240px",
              width: "full",
            },
          ]}
          className="object-cover bg-white/95 p-4 object-center"
        />
        <div className={`absolute right-0 top-0 mr-3 mt-3 rounded-lg  px-2 py-1 text-xs capitalize tracking-tight text-white ${category === 'Frontend' ? 'bg-green-400' :
          "bg-indigo-700"

          }`}>
          {category}
        </div>
      </div>
      {/* title and description */}
      <div className="mb-auto px-6 py-4">
        <Link
          href="#"
          className={`mb-2 inline-block text-lg font-medium transition duration-500 ease-in-out  hover:text-indigo-600`}
        >
          {title}
        </Link>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      {/* links */}
      <div className="flex flex-row items-center justify-between px-6 py-3">
        <Link
          href={githubLink}
          target="_black"
          className="font-regular mr-1 flex flex-row items-center py-1 text-xs"
        >
          <FaGithub size={18} className="hover:text-indigo-600" />
          <span className="ml-1">Github</span>
        </Link>

        <Link
          href={liveLink}
          target="_black"
          className="font-regular mr-1 flex flex-row items-center rounded-xl bg-blue-700 px-3 py-1 text-xs"
        >
          <BiLink />
          <span className="ml-1">LiveLink</span>
        </Link>
      </div>
    </>
  );
}

export default Card;
