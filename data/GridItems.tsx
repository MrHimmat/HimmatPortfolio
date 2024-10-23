// import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const GridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast,Passion of Development",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Paste Application",
    description: "To Store Different Kind Of Data",
    className: "lg:col-span-2  md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StudyNotion",
    des: "Online Learning Platform For the Students, Build In React.js,Tailwind CSS,Express.js,MongoDB",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://temp-study-notion.vercel.app/",
  },
  {
    id: 2,
    title: "Online GIF Generating Website",
    des: "You can Generate Random as well as Any GIF You like , Build in React.js ",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://gif-app-ivory.vercel.app/",
  },
  {
    id: 3,
    title: "Random Password Generator App",
    des: "You Can Build An Any kind of Strong Password Using this Application , build in Javascript , TailwindCSS",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://passaword-genarator-web-app.vercel.app/",
  },
  {
    id: 4,
    title: "Paste Application",
    des: "You Can Store Your Data into this website , it connected to MongoDB with High Security Of your data , Build in React.js , Express.js , TailwindCSS",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with MrHimmat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Sachin Salunke",
    title: "Director of SOFP Company Limited",
  },
  {
    quote:
      "Collaborating with MrHimmat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ",
    name: "Savitri Mutekar",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "MrHimmat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Om Salunke",
    title: "Director of Future Technology",
  },
  {
    quote:
      "Collaborating with MrHimmat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ",
    name: "Omkar Bhapkar",
    title: "Director of Somanath Mobile Shopy",
  },
  {
    quote:
      "Collaborating with MrHimmat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ",
    name: "Rushi Gadade",
    title: "Director of Press Company",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React.js Developer",
    desc: "Designed and developed React.js WebApplication",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MrHimmat",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/himmat-mutekar-39aa5a237/",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "",
  },
];