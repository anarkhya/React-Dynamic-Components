const home = [
  // présentation concept, avec button
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-secondary text-white pb-8",
      title: "Chaque objet a une histoire",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description2: "",
      description3: "",
      buttonUrl: "/concept",
      hasButton: true,
      buttonText: "More...",
    },
  },
  // présentation concept 2, avec button
  // bloc_order 2

  {
    component: "article",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary pb-8",
      title: "Échangez vos objets dès maintenant",
      description: "",
      description2: "",
      description3: "",
      buttonUrl: "/echanges",
      hasButton: true,
      buttonText: "More...",
    },
  },
];

export default home;
