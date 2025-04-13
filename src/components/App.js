import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>

    </nav>
  );
}

function Home({name,city}) {
  return (
    <div id="home">
      <h1>{name} is a Web Developer from {city}</h1>
    </div>
  );
}

function About({bio}){
  return(
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
    </div>
  )
  /* write an <About> component here */
  }
function Links({github,linkedin}){
  return (
    <div>
      <h3>Links</h3>
      <a href="{github}">{github}</a> <br></br>
      <a href="{linkedin}">{linkedin}</a>
    </div>
    
  );
}

function App() {
  const  user ={
    name:"Liza",
    city:"New York",
   
    bio:"I made this!",
    links:{
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza",
    },


  };
  return (
    <div>
      <NavBar />
      {<Home name={user.name} city={user.city}/>}
      {<About bio={user.bio}/>}

      
      {<Links github={user.links.github} linkedin={user.links.linkedin}/>}
    </div>
  );
}

export default App;
