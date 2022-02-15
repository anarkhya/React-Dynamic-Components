const concept = [
  /*
  1 - présentation concept
  2 - citation 1
  3 - cible client
  4 - citation 2
  5 - présentation fondatrice
  */

  // présentation du concept
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary",
      clsPara: "lg:w-1/2",
      titre: "Concept",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
      description3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      bouton: false,
    },
  },
  // bloc_order 2

  // 2 - citation 1
  {
    component: "concept",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex flex items-center flex-col bg-secondary text-dark",
      titre: "",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”",
    },
  },
  // 3 - cible client
  // bloc_order 3

  {
    component: "client",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary",
      titre: "Pour qui ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  },
  // 4 - citation 2
  // bloc_order 4

  {
    component: "concept",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex flex items-center flex-col bg-secondary text-dark",
      titre: "",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    },
  },
  // 5 - présentation fondatrice
  // bloc_order 5

  {
    component: "articleImage",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary",
      titre: "Porteuse de projet",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      caption: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
];

export default concept;
