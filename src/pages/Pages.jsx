import React from "react";
import { useParams } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Abonnement from "../components/Abonnement";
import Article from "../components/Article";
import ArticleImage from "../components/ArticleImage";
import Product from "../components/Product";
import Echanges from "../components/Echanges";
import Objets from "../components/Objets";
import Formulaire from "../components/Formulaire";
import Contact from "../components/Contact";
import Concept from "../components/Concept";
import Map from "../components/Map";
import ButtonAdmin from "../components/ButtonAdmin";
import Client from "../components/Client";
import ButtonNewsComponent from "../components/ButtonNewsComponent";

// data
import home from "../data/Home";
import concept from "../data/Concept";
import abonnement from "../data/Abonnement";
import services from "../data/Services";
import echanges from "../data/Echanges";
import contact from "../data/Contact";

const Pages = () => {
  const { pages } = useParams();
  const getComponent = (type, data) => {
    const component = {
      header: () => <Header data={data} />,
      logo: () => <Logo data={data} />,
      footer: () => <Footer data={data} />,
      abonnement: () => <Abonnement data={data} />,
      formulaire: () => <Formulaire data={data} />,
      article: () => <Article data={data} />,
      articleImage: () => <ArticleImage data={data} />,
      product: () => <Product data={data} />,
      categorie: () => <Echanges data={data} />,
      objets: () => <Objets data={data} />,
      echanges: () => <Echanges data={data} />,
      map: () => <Map data={data} />,
      contact: () => <Contact data={data} />,
      concept: () => <Concept data={data} />,
      buttonAdmin: () => <ButtonAdmin data={data} />,
      client: () => <Client data={data} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    const DetailsPages = {
      concept,
      abonnement,
      services,
      echanges,
      contact,
    };
    const DetailsComp = DetailsPages[pages] || home;

    const res = DetailsComp.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    return res;
  };
  return (
    <div>
      {createComponent()}
      <ButtonNewsComponent />
    </div>
  );
};

export default Pages;
