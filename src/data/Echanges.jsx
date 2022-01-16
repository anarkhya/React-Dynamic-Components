const echanges = [
  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsBouton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
      titre: "Dans la Trocquerie, il est possible de troquer:",
      description: "¡ Uniquement des objets en bon état !",
      description2: true,
      description2contenu: "",
      description3: false,
      description3contenu: "",
      bouton: false,
    },
  },

  // DIFFERENTS PRODUITS
  {
    component: "product",
    data: {
      titre: "Les différents produits échangeables:",
      presentation: [
        {
          infos:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/placeholder-sm.png",
          alt: "Image représentant un produit que l'on peut trocquer",
          cls: "product",
        },
        {
          infos:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/placeholder-sm.png",
          alt: "Image représentant un produit que l'on peut trocquer",
          cls: "",
        },
      ],
    },
  },

  // // LES TYPES D'OBJETS
  {
    component: "objets",
    data: {
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

  // CATEGORIES

  {
    component: "categorie",
    data: {
      texte:
        "La valeur des objets n'est pas la même pour tout le monde. La valeur du produit dans la Trocquerie est considérée différement de son prix d'achat. L'idée est de privilégier l'éthique et se détacher de la valeur monétaire et aussi sentimentale de ceux-ci.",
      sousTexte: "Les échanges sont catégorisés par un système de gommettes:",
      gommettes: [
        {
          id: 1,
          color: "bleu",
        },
        {
          id: 2,
          color: "rose",
        },
        {
          id: 3,
          color: "jaune",
        },
        {
          id: 4,
          color: "vert",
        },
      ],
      principe: [
        {
          id: 1,
          color: "bleu = bleu",
        },
        {
          id: 2,
          color: "rose = rose",
        },
        {
          id: 3,
          color: "jaune = jaune",
        },
        {
          id: 4,
          color: "vert = vert",
        },
      ],
      infos: "Il est également possible de combiner des couleurs",
      more: "(de nombreuses combinaisons possibles à retrouver en boutique)",
    },
  },

  // FONCTIONNEMENT

  {
    component: "article",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex items-center flex-col bg-gris_clair text-vert",
      clsPara: "md:w-1/2",
      clsBouton: "rounded-full bg-vert text-white px-6 py-2 text-sm",
      titre: "Comment ça marche:",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo culpa aspernatur libero sint in enim soluta earum facilis, animi sed, neque nemo eveniet ullam laudantium hic nam pariatur. Temporibus?",
      description2: true,
      description2contenu: "",
      description3: true,
      description3contenu: "",
      bouton: false,
    },
  },
];

export default echanges;
