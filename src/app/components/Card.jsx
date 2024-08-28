import Image from "next/image";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function Card({ image, title, description, githubLink, liveLink, category }) {
  return (
    <div className="m-4 block p-2 max-w-sm bg-slate-900 overflow-hidden rounded-md">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          height={500}
          width={500}
          className="w-full h-60 object-cover object-left-top rounded-md"
        />
        <div className="flex flex-col justify-between  p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{category}</p>
          <p className="mb-4 text-sm font-medium">{description}</p>
          <div className="flex justify-between items-center">
            <Link
              href={githubLink}
              target="_blank"
              className="border-indigo-700 border px-2 py-1 flex gap-x-2 items-center rounded-lg "
            >
              <FaGithub size={18} className="hover:text-indigo-600" />
            </Link>
            <Link
              href={liveLink}
              target="_blank"
              className="bg-indigo-700 flex gap-x-2 items-center px-2 py-1 rounded-lg text-sm"
            >
              LiveLink
              <BiLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
