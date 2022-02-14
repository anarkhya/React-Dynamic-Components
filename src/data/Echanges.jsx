const echanges = [
  /*
  Dans la Trocquerie, il est possible de troquer:
  exemples d'objets
  types d'objets
  présentation troc
  Comment ça marche:
  */

  // Dans la Trocquerie, il est possible de troquer:
  // bloc_order 1

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary",
      clsBouton: "rounded-full bg-secondary text-white px-6 py-2 text-sm",
      titre: "Lorem ipsum dolor sit amet",
      description: "¡ Uniquement des objets en bon état !",
      description2: "",
      description3: "",
      url: "",
      bouton: false,
    },
  },

  // exemples d'objets
  // bloc_order 2

  {
    component: "product",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-white",
      titre: "Les différents produits échangeables:",
      presentation: [
        {
          id: 1,
          infos:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/pexels-mathilde-langevin-10897821.jpg",
          alt: "Image représentant un produit que l'on peut trocquer",
        },
        {
          id: 2,
          infos:
            "Excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. fugiat ullam quam, dolore. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/pexels-mark-vegera-1089425.jpg",
          alt: "Image représentant un produit que l'on peut trocquer",
        },
      ],
    },
  },

  // types d'objets
  // bloc_order 3

  {
    component: "objets",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-primary text-secondary",
      categorie: [
        {
          id: 1,
          appartenance: "Vêtements",
          cible: "Femme ~ Homme ~ Enfant ~ Accessoire ~ Chaussures ...",
        },
        {
          id: 2,
          appartenance: "Maison",
          cible: "Petit mobilier ~ Vaisselle ~ Décoration ~ Puériculture ... ",
        },
        {
          id: 3,
          appartenance: "Culture & loisirs",
          cible:
            "Livre ~ Jeu ~ CD/K7 ~ vinyle ~ Jeu vidéo ~ Univers sport ... ",
        },
      ],
    },
  },
  // présentation troc
  // bloc_order 4

  {
    component: "categorie",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-secondary text-white",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      gommettes: [
        {
          id: 1,
          color: "",
          src: "./assets/images/gommette-bleu.png",
          alt: "gommette bleu",
        },
        {
          id: 2,
          color: "",
          src: "./assets/images/gommette-rose.png",
          alt: "gommette rose",
        },
        {
          id: 3,
          color: "",
          src: "./assets/images/gommette-jaune.png",
          alt: "gommette jaune",
        },
        {
          id: 4,
          color: "",
          src: "./assets/images/gommette-vert.png",
          alt: "gommette verte",
        },
      ],
      infos: "Il est également possible de combiner des couleurs ",
      more: "(de nombreuses combinaisons possibles à retrouver en boutique)",
    },
  },
  // Comment ça marche:
  // bloc_order 5

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-primary text-secondary",
      clsBouton: "rounded-full bg-secondary text-white px-6 py-2 text-sm",
      titre: "Comment ça marche:",
      description:
        "Faire le tri chez soi. Venir à la boutique ou prendre rendez-vous. Amenez les pièces à échanger. Choisir les nouveaux articles. Repartir avec les produits choisis.",
      description2: "",
      description3: "",
      url: "",
      bouton: false,
    },
  },
];

export default echanges;
