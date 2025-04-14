import { FaXTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";

import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Aditya Deshmukh",
  info: "My future goal is to create exitsing projects that use for Industry Development Github.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "I'm a full-stack developer with a passion for crafting visually stunning and highly functional web experiences. My keen eye for detail ensures every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. This curiosity fuels my commitment to staying at the forefront of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm building a sleek website or diving into the latest tech, I'm dedicated to delivering excellence in every project.",
};

export const projectData = [
  {
    title: "ContentGenie",
    image: "project1.webp",
    category: "Full Stack",
    description:
      "Using React Js, Typescript, Tailwind css and Redux Toolkit for State management. Here I create Full Ai Content Genrator Dashboard with response edit functionality",
    githubLink: "https://github.com/Aditya-Deshmukh9/ai-content-generator",
    liveLink: "https://contentgenie.adityadeshmukh.online/",
  },
  {
    title: "Full Stack Grocery Store",
    image: "project4.webp",
    category: "Full Stack",
    description:
      "This project is an online grocery store application built with Next.js, Tailwind CSS, and Shadcn UI. It utilizes Razorpay Payment Gateway for processing online payments and Axios for making HTTP requests. Check it out!",
    githubLink: "https://github.com/Aditya-Deshmukh9/MERN-Grocery-Store",
    liveLink: "https://full-stack-grocery-store-aditya.vercel.app/",
  },
  {
    title: "Full Stack Ecommerce",
    image: "ecommerce.png",
    category: "Full Stack",
    description:
      "Our E-commerce Website offers a seamless shopping experience with a wide range of products, secure payments, detailed descriptions, and easy navigation. Create an account to track orders, save favorites, and access exclusive discounts.",
    githubLink: "https://github.com/Aditya-Deshmukh9/Ecommerce",
    liveLink: "https://ecom-colab-a.vercel.app/",
  },
  {
    title: "Walmart Clone",
    image: "walmart.png",
    category: "Frontend",
    description: "Walmart clone with Nextjs, Zustand, tailwind css, shadcn UI",
    githubLink: "https://github.com/Aditya-Deshmukh9/walmart-clone",
    liveLink: "https://walmartclone-by-aditya.vercel.app/",
  },
  {
    title: "Weather Forecast",
    image: "prjimg.webp",
    category: "Frontend",
    description:
      "A dynamic and responsive weather application built with JavaScript and Tailwind CSS that provides weather data based on the user's location or a searched city.",
    githubLink: "https://github.com/Aditya-Deshmukh9/weather-forecast-webapp-javascript",
    liveLink: "https://weather-forecast-internshala.netlify.app/",
  },
  {
    title: "E-Cart",
    image: "project2.webp",
    category: "Frontend",
    description:
      "Using React Js, Tailwind css and Context Api for State management. Here I create Full Cart functionality, product add in Search the products etc",
    githubLink: "https://github.com/Aditya-Deshmukh9/E-cart",
    liveLink: "https://webfoodstore.adityadeshmukh.online/",
  },
];

export const SKILLS = [
  {
    icon: <IoLogoHtml5 className="text-4xl text-orange-500 lg:text-6xl" />,
    name: "Html",
    experience: "1+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-sky-400 lg:text-6xl" />,
    name: "CSS",
    experience: "1+ years",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-300 lg:text-6xl" />,
    name: "Javascript",
    experience: "1+ years",
  },
  {
    icon: (
      <SiTypescript className="rounded-md bg-white text-4xl text-blue-500 lg:text-6xl" />
    ),
    name: "Typescript",
    experience: "6+ months",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-6xl" />,
    name: "React",
    experience: "10+ months",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-6xl" />,
    name: "Next.js",
    experience: "6+ months",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-6xl" />,
    name: "MongoDB",
    experience: "6+ months",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-6xl" />,
    name: "Node.js",
    experience: "6+ months",
  },
];

export const CERTIFICATES = [
  {
    title: "The Complete 2023 Web Development Bootcamp",
    image: "udemyCertificate.webp",
  },
  {
    title: "JavaScript Course",
    image: "js.jpg",
  },
  {
    title: "Full Stack Development Course",
    image: "letbigin.jpg",
  },
  {
    title: "HTML & CSS Course",
    image: "htmlcss.jpg",
  },
  {
    title: "Git Course",
    image: "git.jpg",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    ariaLabel: "Visit our Facebook page", // Added aria-label
    icon: <FaFacebook fontSize={26} className="social-icon" />,
  },
  {
    href: "https://x.com/adityadesh937?t=U_Wy5P0J2o2q1tRciLNOqg&s=08",
    ariaLabel: "Visit our Twitter page", // Added aria-label
    icon: <FaXTwitter fontSize={26} className="social-icon" />,
  },
  {
    href: "https://github.com/Aditya-Deshmukh9",
    ariaLabel: "Visit our GitHub profile", // Added aria-label
    icon: <FaGithub fontSize={26} className="social-icon" />,
  },
  {
    href: "https://www.linkedin.com/in/aditya-deshmukh-878482229",
    ariaLabel: "Visit our LinkedIn profile", // Added aria-label
    icon: <FaLinkedin className="social-icon" />,
  },
];
