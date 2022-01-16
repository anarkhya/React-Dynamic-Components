const home = [
  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsPara: "md:w-1/2",
      clsBouton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
      titre: "Chaque objet a une histoire",
      description:
        "La Trocquerie est une boutique de seconde main sans affichage de prix, qui s’auto renouvelle par les échanges grâce à un système d’abonnement à la journée, au mois ou à l’année.",
      description2: false,
      description2contenu: "",
      description3: false,
      description3contenu: "",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-vert text-blanc",
      classTitre: "text-center text-h1 font-light",
      clsPara: "md:w-1/2",
      clsBouton:
        "rounded-full bg-transparent border-2 border-solid border-white text-white px-6 py-2 text-sm",
      titre: "Échangez vos objets dès maintenant",
      description: "",
      description2: false,
      description2contenu: "",
      description3: false,
      description3contenu: "",
      bouton: true,
      boutonContenu: "En savoir plus",
    },
  },
];

export default home;
