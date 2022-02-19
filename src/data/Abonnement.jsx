const AbonnementData = [
  /*
  1 - formules d'abonnement
  2 - formulaire rdv
  */

  // 1 - formules d'abonnement
  // bloc_order 1
  {
    component: "abonnement",
    data: {
      cls: "chisel p-4 lg:text-lg gap-3 mx-auto flex items-center flex-col bg-secondary text-white pb-[30%] lg:pb-[10px]",
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
      ],
      miniText:
        "Chaque abonnement est nominatif et individuel. Paiement en espèces ou par CB.",
    },
  },
  // 2 - formulaire rdv
  // bloc_order 2

  {
    component: "formulaire",
    data: {
      title: "Prendre rendez-vous",
      lastName: "",
      firstName: "",
      email: "",
      message: "",
      button: true,
      buttonText: "Send",
    },
  },
];

export default AbonnementData;
