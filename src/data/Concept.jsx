const concept = [
  {
    component: "article",
    data: {
      classBg:
        "p-4 gap-3 md:max-w-2xl mx-auto flex items-center flex-col bg-gris_clair text-vert shadow-xl",
      classTitre: "text-h1 font-light",
      classButton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
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
    component: "utilisateur",
    data: {
      classContainer:
        "px-4 pb-4 gap-3 md:max-w-2xl mx-auto flex flex-col bg-gris_clair text-vert shadow-xl",
      classTitre: "text-center text-h1 font-light",
      titre: "Pour qui ?",
      textes: [
        {
          detail1: "Les familles",
          detail2: "Les curieux.se",
          detail3: "Les connaisseur.eusses du système D",
          detail4: "Les petits budgets",
          detail5:
            "Les consommateur.trices qui souhaitent consommer autrement responsable",
          detail6: "Les écolos",
          detail7: "Les amateur.trices de seconde main",
          detail8: "Les minimalistes",
        },
      ],
    },
  },
  {
    component: "articleProjet",
    data: {
      classContainer:
        "p-4 gap-3 md:max-w-2xl mx-auto flex items-center flex-col bg-vert text-blanc md:rounded-b-lg shadow-2xl shadow-vert/25",
      classTitle: "text-h1 font-light",
      classImg: "w-32 rounded-full",
      classParagraph: "",
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
