const AbonnementData = [
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
    component: "abonnement",
    data: {
      title: "Abonnements",
      details: [
        {
          id: 1,
          detail: "Abonnement 1 jour",
          description1: "Pour les plus curieux.ses : 10 €",
          description2: "Échange 5 pièces maximum en 1 seule fois",
        },
        {
          id: 2,
          detail: "Abonnement 1 mois",
          description1: "Pour les testeur.euses : 15 €",
          description2: "Échange de 10 pièces maximum sur 1 mois",
        },
        {
          id: 3,
          detail: "Abonnement 1 an",
          description1: "Pour les engagé.es : 120 €",
          description2:
            "Échange illimité pendant une année tout au long de l'année : ateliers, lecture, offre spécifique, ...",
        },
        {
          id: 4,
          detail: "Abonnement solidaire* Prix libre",
          description1:
            "Prix libre choix de la durée et de la somme *bénéficiaires du RSA, étudiant.es, chomeur.ses, ...",
        },
        {
          infoDescription1:
            "Chaque abonnement est nominatif et individuel. Paiement en espèces ou par CB.",
        },
      ],
      cls: "",
    },
  },
  {
    component: "utilisateur",
    data: {
      titre: "Utilisateur.trices",
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

export default AbonnementData;
