import React from "react";
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container-aboutpg">
      <div>
        <p>
          Welcome Trainers to the Collect 'Em All Pokemon Card Collection App!
        </p>
        <br></br>
        <p>
          I'd like to thank the Moonstone Cohort for ALL of the help with this
          project!
        </p>
        <br></br>
        <p>This would never have been done without all of their help!</p>
        <br></br>
        <p className="tech">Tech Used:</p>
        <ul className="about_page_list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Git</li>
          <li>Saga</li>
          <li>Redux</li>
          <li>PostgreSQL</li>
          <li>MUI</li>
          <li>PokemonTCG API</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
