import React from "react";
import Lead from "./Lead";
import Intro from "./Intro";
import PhotoGrid from "./PhotoGrid";
import Places from "./Places";
import Cover from "./Cover";

function Main(props) {
  const {onOpenFullImg} = props;
  return (
    <main className="content">
      <Lead />

      <Intro />

      <PhotoGrid onCardClick={onOpenFullImg} />

      <Places />

      <Cover />
    </main>
  );
}

export default Main;
