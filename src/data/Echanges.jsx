const echanges = [
  // COMPOSANTS

  // TITRE
  {
    component: "Intitulé",
    data: {
      titre: "Dans la trocquerie, il est possible de troquer:",
      paragraphe: "¡ Uniquement des objets en bon état !",
    },
  },
  // DIFFERENTS PRODUITS
  {
    component: "product",
    data: {
      presentation: [
        {
          title: "Les différents produits",
          infos:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, fugiat ullam quam, dolore at animi excepturi eaque eligendi nostrum quod laboriosam, eius architecto repellat. Eos dicta iure assumenda eveniet?",
          src: "./assets/images/.png",
          alt: "Image représentant un produit",
          cls: "product",
        },
      ],
    },
  },

  // LES TYPES D'OBJETS
  {
    component: "objets",
    data: {
      categorie: [
        {
          appartenance: "Vêtements",
          cible: "Femme ~ Homme ~ Enfant ~ Accessoire ~ Chaussures ...",
        },
        {
          appartenance: "Maison",
          cible: "Petit mobilier ~ Vaisselle ~ Décoration ~ Puériculture ... ",
        },
        {
          appartenance: "Culture & loisirs",
          cible:
            "Livre ~ Jeu ~ CD/K7 ~ vinyle ~ Jeu vidéo ~ Univers sport ... ",
        },
      ],
    },
  },

  // CATEGORIES

  {
    component: "Categorie",
    data: {
      texte:
        "La valeur des objets n'est pas la même pour tout le monde. La valeur du produit dans la Trocquerie est considérée différement de son prix d'achat. L'idée est de privilégier l'éthique et se détacher de la valeur monétaire et aussi sentimentale de ceux-ci.",
      sousTexte: "Les échanges sont catégorisés par un système de gommettes:",
      gommettes: [
        {
          color: "bleu",
        },
        {
          color: "rose",
        },
        {
          color: "jaune",
        },
        {
          color: "vert",
        },
      ],
      principe: [
        {
          color: "bleu = bleu",
        },
        {
          color: "rose = rose",
        },
        {
          color: "jaune = jaune",
        },
        {
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
      fonctionnement: "Comment ça marche:",
      explications:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo culpa aspernatur libero sint in enim soluta earum facilis, animi sed, neque nemo eveniet ullam laudantium hic nam pariatur. Temporibus?",
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
