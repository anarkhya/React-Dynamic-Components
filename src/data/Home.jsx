const home = [
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
    component: "footer",
    data: {
      contact: [
        { id: 1, contact: "latrocquerie@gmail.com" },
        { id: 2, contact: "06 00 00 00 00" },
      ],
      address: "23 rue Petite-Biesse - quartier île de Nantes",
      copyright: "© 2022 LaTrocquerie - Tous droits réservés",
      horaires: [
        { id: 1, horaire: "Mercredi 10h30 - 19h00" },
        { id: 2, horaire: "Jeudi 10h30 - 19h00" },
        { id: 3, horaire: "Vendredi 10h30 - 19h00" },
        { id: 4, horaire: "Samedi 10h30 - 19h00" },
      ],
    },
  },
];

export default home;
