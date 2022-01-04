const echanges = [
  {
    component: "header",
    data: {
      title: "Header",
      burger: { title: "burger" },
      logo: {
        src: "./assets/images/logo.png",
        alt: "logo de l entreprise",
        cls: "logo",
        url: "/",
      },
    },
  },
  {
    component: "logo",
    data: {
      src: "./assets/images/logo.png",
      alt: "logo de l entreprise",
      cls: "image",
    },
  },

  // COMPOSANT
  {
    component: "product",
    data: {
      title: "Les différents produits",
      infos:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
      src: "./assets/images/logo.png",
      alt: "Image représentant un produit",
      cls: "product",
    },
  },

  // FOOTER
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

export default echanges;
