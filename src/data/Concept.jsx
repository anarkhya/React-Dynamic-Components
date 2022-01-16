const concept = [
  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      titre: "Concept",
      paragraphe:
        "Une boutique de seconde main, sur l’île de Nantes, qui s'auto renouvelle par les échanges grâce à un système d’abonnement à la journée, au mois ou à l’année.",
      paragraphe2: true,
      paragraphe2contenu:
        "L'idée est de réduire la surconsommation, faire des économies, développer la solidarité et le partage en adaptant le troc au monde d'aujourd'hui.",
      paragraphe3: true,
      paragraphe3contenu:
        "Ce magasin sans affichage de prix est ouvert à toutes et tous et espère ainsi générer la création d’une véritable mixité sociale. Ce concept s’adresse à chacun.e de manière égale et annule toute possibilité de stigmatisation : le lieu servant d’intermédiaire entre celui qui donne (qui ne sait pas à qui) et celui qui récupère (il ne sait pas qui a donné) tout en se détachant du web.",
      button: false,
    },
  },
  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc",
      classParagraph: "md:w-1/2 px-4 text-[28px] font-light leading-tight",
      titre: "",
      paragraphe:
        "“Perçu comme un acte militant, le troc véhicule des valeurs fortes comme l’entraide, le partage, la convivialité, mais il contribue aussi à la lutte contre le gaspillage et la surconsommation.”",
      button: false,
    },
  },
  {
    component: "client",
    data: {
      classContainer:
        "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      titre: "Pour qui ?",
      description:
        "Les familles. Les curieux.se. Les connaisseur.eusses du système D. Les petits budgets. Les consommateur.trices qui souhaitent consommer autrement. Les écolos. Les amateur.trices de seconde main. Les minimalistes.",
    },
  },
  {
    component: "article",
    data: {
      classBg:
        "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-vert text-blanc",
      classTitre: "",
      classButton: "",
      classParagraph: "md:w-1/2 px-4 text-[28px] font-light leading-tight",
      titre: "",
      paragraphe:
        "“Selon le quinzième baromètre greenflex-ademe : 86 % des français aimeraient vivre demain dans une société où la consommation prend moins de place dans l’idée de consommer responsable.”",
      button: false,
    },
  },
  {
    component: "articleProjet",
    data: {
      classContainer:
        "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      classTitle: "text-h1 font-light",
      classImg: "w-32 rounded-full",
      classParagraph: "md:w-1/2",
      title: "Porteuse de projet",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      caption: "",
      paragraph:
        "Je m’appelle Agathe Violain, j'ai 30 ans et j’habite à Nantes (vertavienne d'origine). Après plusieurs années en tant que chargée de communication chez Pick Up Production, je suis nouvellement entrepreneuse dans l’ESS afin de monter ce projet de trocquerie. Je chine depuis toujours, j’achète (presque) 100% seconde main et j’ai envie de proposer une nouvelle manière de « consommer » dans cet univers.",
    },
  },
];

export default concept;
