const HeaderData = {
  // liens de navigation + logo
  menus: [
    {
      to: "/",
      name: "Accueil", // id_pages 1
    },
    {
      to: "/concept",
      name: "Concept", // id_pages 2
    },
    {
      to: "/abonnement",
      name: "Abonnement", // id_pages 3
    },
    {
      to: "/echanges",
      name: "Échanges", // id_pages 4
    },
    {
      to: "/services",
      name: "Services", // id_pages 5
    },
    {
      to: "/contact",
      name: "Contact", // id_pages 6
    },
  ],
  logo: {
    src: "../../assets/images/logo.png",
    alt: "Logo de l'entreprise de la trocquerie, échange d'objets sur abonnement",
    to: "",
  },
};

export default HeaderData;
