import React from "react";
import { useParams } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
// data
import home from "../data/Home";
import concept from "../data/Concept";
import abonnement from "../data/Abonnement";
import services from "../data/Services";

const Pages = () => {
  const { pages } = useParams();
  const getComponent = (type, data) => {
    const component = {
      header: () => <Header data={data} />,
      logo: () => <Logo data={data} />,
      footer: () => <Footer data={data} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    const DetailsPages = {
      concept,
      abonnement,
      services,
    };
    const DetailsComp = DetailsPages[pages] || home;

    const res = DetailsComp.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    return res;
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {createComponent()}
    </div>
  );
};

export default Pages;
