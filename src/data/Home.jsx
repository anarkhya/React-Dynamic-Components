const home = [
  // présentation concept, avec bouton
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-secondary text-white pb-8",
      clsBouton:
        "transition ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-white border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/40 shadow-white hover:shadow-[8px_8px_40px_5px] bg-secondary text-white px-6 py-2 ",
      titre: "Chaque objet a une histoire",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description2: "",
      description3: "",
      url: "/concept",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
  // présentation concept 2, avec bouton
  // bloc_order 2

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary pb-8",
      clsBouton:
        "transition ease-in rounded-md rounded-bl-3xl rounded-tr-3xl border-white border-2 hover:border-accent hover:bg-accent -skew-y-6 active:translate-y-1 hover:shadow-accent/40 shadow-white hover:shadow-[8px_8px_40px_5px] bg-secondary text-white px-6 py-2 ",
      titre: "Échangez vos objets dès maintenant",
      description: "",
      description2: "",
      description3: "",
      url: "/echanges",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
];

export default home;
