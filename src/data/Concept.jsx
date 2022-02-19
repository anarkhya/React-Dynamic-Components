const concept = [
  /*
  1 - présentation concept
  2 - citation 1
  3 - paragraph client
  4 - citation 2
  5 - présentation fondatrice
  */

  // présentation du concept
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "chisel p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-secondary text-white pb-[30%] lg:pb-[10px]",
      clsPara: "lg:w-1/2",
      title: "Concept",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      hasButton: false,
    },
  },
  // bloc_order 2

  // 2 - citation 1
  {
    component: "article",
    data: {
      cls: "quoty lg:text-lg gap-3 mx-auto flex items-center flex-col text-secondary   mx-[5vw] my-8",
      title: "",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”",
    },
  },
  // 3 - paragraph client
  // bloc_order 3

  {
    component: "client",
    data: {
      cls: "chisel p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-accent text-white pb-[30%] lg:pb-[10px]",
      title: "Pour qui ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  },
  // 4 - citation 2
  // bloc_order 4

  {
    component: "article",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col text-secondary pb-8",
      title: "",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
  },
  // 5 - présentation fondatrice
  // bloc_order 5

  {
    component: "articleImage",
    data: {
      cls: "chisel p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-accent text-white pb-[30%] lg:pb-[10px]",
      title: "Porteuse de projet",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      caption: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
];

export default concept;
