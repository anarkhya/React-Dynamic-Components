const contact = [
  /*
à propos du lieu 1
à propos du lieu 2
google map interactive
  infos de contact
  */

  // à propos du lieu 1

  // bloc_order 1
  {
    component: "slideshow",
  },
  {
    component: "articleImage",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-primary text-secondary",
      titre: "Un lieu de vie, d'échange et de mixité",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  // à propos du lieu 2
  // bloc_order 2

  {
    component: "objets",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-dark",
      categorie: [
        {
          id: 1,
          appartenance: "Lorem",
          cible:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          appartenance: "Lorem",
          cible:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          appartenance: "Lorem",
          cible:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
  },
  // google map interactive

  {
    component: "map",
  },
  // infos de contact
  // bloc_order 3

  {
    component: "contact",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-dark",
      titre: "Contact",
      nom: "lorem",
      srcPhoneIcon: "./assets/icones/icon_phone.svg",
      telephone: "06 79 21 42 19",
      srcMailIcon: "./assets/icones/icon_mail.svg",
      mail: "example@gmail.com",
      adresse: "777 rue Placeholders",
      titreHoraires: "Horaires d'ouverture",
      horaires: [
        { id: 1, horaire: "Mercredi 10h30 - 19h00" },
        { id: 2, horaire: "Jeudi 10h30 - 19h00" },
        { id: 3, horaire: "Vendredi 10h30 - 19h00" },
        { id: 4, horaire: "Samedi 10h30 - 19h00" },
      ],
    },
  },
];

export default contact;
