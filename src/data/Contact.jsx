const contact = [
  /*
    à propos du lieu 1
    à propos du lieu 2
    google map interactive
  */

  // à propos du lieu 1
  {
    component: "slideshow",
  },
  {
    component: "articleImage",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto flex flex items-center flex-col bg-primary text-secondary",
      title: "Un lieu de vie, d'échange et de mixité",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  // à propos du lieu 2
  {
    component: "objets",
    data: {
      cls: "p-4 lg:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-dark",
      category: [
        {
          id: 1,
          title: "Lorem",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          title: "Lorem",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          title: "Lorem",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  },
  // google map interactive
  {
    component: "map",
  },
];

export default contact;
