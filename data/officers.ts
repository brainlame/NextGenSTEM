export type Officer = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  shortRole: string;
  email: string;
  phone: string;
  image: string | null;
  bio: string;
};

export const officers: Officer[] = [
  {
    slug: "maanav-patel",
    name: "Maanav Patel",
    initials: "MP",
    role: "Chief Operations Officer",
    shortRole: "COO",
    email: "maanavpatel01@gmail.com",
    phone: "216-347-2458",
    image: "/maanav.png",
    bio: "Maanav led his team to the national tournament in Science Olympiad as team captain. He founded a science paper at WRA, volunteers as a coach for Hudson Middle School Science Olympiad, and is working on a melanoma cancer research project. He is also founding ProjectMIND, a mental health and neuroscience awareness chapter at WRA.",
  },
  {
    slug: "arav-mathur",
    name: "Arav Mathur",
    initials: "AM",
    role: "Chief Communications Officer",
    shortRole: "CCO",
    email: "arav2mathur@gmail.com",
    phone: "216-375-2855",
    image: null,
    bio: "Arav is developing a cancer research project focused on A375 cancer cells. He is president and founder of the WRA chess team and has provided over 20 hours of chess tutoring to Western Reserve students. He holds multiple varsity positions, demonstrating strong balance of athletics and academics.",
  },
  {
    slug: "ronit-arora",
    name: "Ronit Arora",
    initials: "RA",
    role: "Chief Strategy & Research Officer",
    shortRole: "CSRO",
    email: "ronito.arora1@gmail.com",
    phone: "917-930-8075",
    image: "/ronit.jpg",
    bio: "Ronit has founded multiple clubs and tutored hundreds of hours through WRA\u2019s Peer Tutoring program. He has won multiple 1st place state Math Field Day titles in West Virginia and previously managed a reselling business where he gained early experience in entrepreneurship and market research.",
  },
];
