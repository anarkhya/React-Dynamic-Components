const home = [
  // présentation concept, avec button
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "chisel p-4 bg-gradient-to-r from-cyan-500 to-blue-500 lg:text-lg gap-3 mx-auto flex items-center flex-col  text-white pb-[30%] lg:pb-[20px]",
      title: "Each link leads to another link",
      titleSub: "(...except 404 ones)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description2: "",
      description3: "",
      buttonUrl: "/concept",
      hasButton: true,
      buttonText: "read more...",
    },
  },
  // présentation concept 2, avec button
  // bloc_order 2

  {
    component: "article",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col text-secondary pb-[30%] lg:pb-8",
      title: "Follow a link asap",
      titleSub: "(...be bold)",
      description: "",
      description2: "",
      description3: "",
      buttonUrl: "/echanges",
      hasButton: true,
      buttonText: "read more...",
    },
  },
];

export default home;
