const concept = [
  {
    component: "header",
    data: {
      title: "Header",
      burger: { title: "burger" },
      logo: {
        src: "./assets/images/logo.png",
        alt: "logo de l entreprise",
        cls: "logo",
        url: "/home",
      },
    },
  },
  {
    component: "articleProjet",
    data: {
      title: "La porteuse de projet",
      src: "./assets/images/placeholder.png",
      alt: "portrait",
      cls: "image",
      caption: "Agathe Violain",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  },
  {
    component: "footer",
    data: {
      address: "23 rue Petite-Biesse - quartier île de Nantes",
      horaires: [
        { id: 1, horaire: "Mercredi 10h30 - 19h00" },
        { id: 2, horaire: "Jeudi 10h30 - 19h00" },
        { id: 3, horaire: "Vendredi 10h30 - 19h00" },
        { id: 4, horaire: "Samedi 10h30 - 19h00" },
      ],
    },
  },
];

export default concept;
