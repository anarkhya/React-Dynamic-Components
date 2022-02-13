const footer = {
  // infos boutiques (mail, tel, adresse, horaires) + copyright
  titreContact: "Contact",
  contact: [
    { id: 1, mail: "example@gmail.com" },
    { id: 2, phone: "06 00 00 00 00" },
  ],
  reseaux: [
    {
      src: "./assets/icones/icon_insta.svg",
      alt: "Instagram",
      url: "",
      insta: "",
    },
    {
      src: "./assets/icones/icon_fb.svg",
      alt: "Facebook",
      url: "",
      facebook: "",
    },
    {
      src: "./assets/icones/iconLinkedin.svg",
      alt: "LinkedIn",
      url: "",
      linkedin: "",
    },
  ],
  adresse: "777 rue Placeholders",
  copyright: "© 2022 Tous droits réservés",
  titreHoraires: "Horaires d'ouverture",
  horaires: [
    { id: 1, horaire: "Mercredi 10h30 - 19h00" },
    { id: 2, horaire: "Jeudi 10h30 - 19h00" },
    { id: 3, horaire: "Vendredi 10h30 - 19h00" },
    { id: 4, horaire: "Samedi 10h30 - 19h00" },
  ],
  cls: "bg-dark text-secondary",
};

export default footer;
