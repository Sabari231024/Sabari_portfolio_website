import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    Tensorflow,
    Python,
    Pytorch,
    ml,
    nlp,
    sklearn,
    flask,
    html,
    css,
    js,
    react,
    vscode,
    git,
    github,
    figma,
    mongo,
    mysql,
    tableau,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={Python} title="Python" alt="" />
        <img src={Pytorch} title="Pytorch" alt="" />
        <img src={Tensorflow} title="TensorFlow" alt="" />
        <img src={ml} title="Data Analysis" alt="" />
        <img src={sklearn} title="Sklearn" alt="" />
        <img src={nlp} title="nlp" alt="" />
        <img src={flask} title="flask" alt="" />
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={tableau} title="tableau" alt="tableau" />
        <img src={mysql} title="mysql" alt="mysql" />
        <img src={mongo} title="mongodb" alt="mongodb" />
        <img src={figma} title="Figma" alt="Figma" />
        

      </section>
    </main>
  );
}

export default Technologies;
