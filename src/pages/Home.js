import Navigation from "../components/Navigation";
import Typewriter from 'typewriter-effect/dist/core';

// import Contact from "./Contact";





const Home = () => {
    const txtAnim= document.querySelector('h2');
        new Typewriter (txtAnim,{
            loop: true,
            deleteSpeed:100,
            
            
        })
        .typeString(' Web developpeur !')
        .pauseFor(1000)
        .deleteChars(2)
        .typeString('<strong> Junior </strong>')
        .pauseFor(1000)
        .deleteChars(8)
        .typeString('<span style="color:red "> HTML <span> !')
        .pauseFor(1000)
        .deleteChars(8)
        .typeString('<span style="color:#27ae60"> Css<span> !')
        .pauseFor(1000)
        .deleteChars(5)
        .typeString('<span style="color:#ff6910 "> Javascript <span> !')
        .pauseFor(1000)
        .deleteChars(13)
        .typeString('<span style="color:midnightblue "> React <span> !')
        .pauseFor(1000)
        .deleteChars(8)
        .start();
    return (
        

        <div className="acceuil">
            
            <Navigation/>
            <div className="contents">            
                <h1>THOMAS BAUSIERE</h1>
                <h2>Web développeur</h2>

                <div className="media-container"> </div>
                <a href="https://www.linkedin.com/in/thomas-bausiere-2163051b3/" class="btn" target="_blank">Contactez moi</a>
            </div>
         
        </div>
    

    );
    
    }
 
  
    

 





export default Home;