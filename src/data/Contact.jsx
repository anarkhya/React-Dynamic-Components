const contact = [
  /*
  à propos du lieu 1
  à propos du lieu 2
  google map interactive
  infos de contact
  */

  // à propos du lieu 1
  {
    component: "articleImage",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto flex flex items-center flex-col bg-gris_clair text-vert",
      clsPara: "md:w-1/2",
      titre: "Un lieu de vie, d'échange et de mixité",
      src: "./assets/images/placeholder.png",
      alt: "photo",
      description:
        "Quartier d’accueil et d’échanges depuis des décennies, la rue Biesse est riche de ses habitant.es et de ses commerçant.es. La trocquerie permettra d'amorcer une nouvelle dynamique et manière innovante de consommer pour ses habitant.es et tous.tes les nantais.es.",
    },
  },
  // à propos du lieu 2
  {
    component: "objets",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      categorie: [
        {
          id: 1,
          appartenance: "INITIATION AU TROC",
          cible: "pour les enfants, les entreprises, les associations, ...",
        },
        {
          id: 2,
          appartenance: "ÉVÉNEMENT TROC SPÉCIFIQUE",
          cible:
            "plantes, vinyles, vêtements de saison, vêtements enfant et puériculture, ...",
        },
        {
          id: 3,
          appartenance: "ACTIVITÉ POUR LES ABONNEMENTS 1 AN",
          cible: "lecture, troc d’une sélection unique, ...",
        },
        {
          id: 4,
          appartenance: "LIEU DE SERVICE",
          cible:
            "service de location d’appareil mutualisé (perceuse, appareil à raclette, boule à facettes) panier bio, service de conciergerie, ...",
        },
      ],
    },
  },
  // google map interactive
  {
    component: "map",
    data: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10842.964386704758!2d-1.5527203863097434!3d47.2020798071419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb2ca34b1a3%3A0x4b40e35d971d0c93!2s23%20Rue%20Petite%20Biesse%2C%2044200%20Nantes!5e0!3m2!1sfr!2sfr!4v1641822740903!5m2!1sfr!2sfr",
      url: "https://www.google.fr/maps/place/23+Rue+Petite+Biesse,+44200+Nantes/@47.2040916,-1.5497807,17z/data=!3m1!4b1!4m5!3m4!1s0x4805eeb2ca34b1a3:0x4b40e35d971d0c93!8m2!3d47.204088!4d-1.547592",
    },
  },
  // infos de contact
  {
    component: "contact",
    data: {
      cls: "p-4 md:text-lg gap-3 mx-auto  flex items-center flex-col bg-vert text-blanc",
      titre: "Contact",
      nom: "Agathe Violain",
      srcPhoneIcon: "./assets/icones/icon_phone.svg",
      telephone: "06 79 21 42 19",
      srcMailIcon: "./assets/icones/icon_mail.svg",
      mail: "latrocquerie@gmail.com",
      adresse: "23 rue Petite-Biesse - quartier île de Nantes",
      reseaux: [
        {
          src: "./assets/icones/instagram.svg",
          alt: "Instagram de la Trocquerie",
          url: "https://www.instagram.com/latrocquerie/",
          insta: "La Trocquerie",
        },
        {
          src: "./assets/icones/iconFacebook.svg",
          alt: "Facebook de la Trocquerie",
          url: "https://www.facebook.com/latrocquerie.nantes",
          facebook: "La Trocquerie",
        },
        {
          src: "./assets/icones/iconLinkedin.svg",
          alt: "LinkedIn de la Trocquerie",
          url: "https://www.linkedin.com/company/latrocquerie/",
          linkedin: "La Trocquerie",
        },
      ],
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
