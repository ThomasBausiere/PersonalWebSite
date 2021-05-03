import Navigation from "../components/Navigation";
import Contact from "./Contact";


const About = () => {
    return (
        <div className="about">
            <Navigation/>

            {/* global div */}
            <div className="global">
            {/* Photo sur la gauche */}
                <div className="photo">
                    <img src="/img/Thomas2.jpg" alt="thomas"/>
                </div>  
            {/* Partie droite : texte    */}
            <div className="rightside">
                    {/* Premier encart en haut à droite */}
                    <div className="aboutme"> 
                        <h1>A propos</h1>
                        <h1 className="h2">Thomas Bausière / 28 ans / Web Développeur</h1>
                        <p>Depuis toujours passioné d'informatique, j'ai décidé de me réorienter à mon 27ème anniversaire. <br/>
                        Je me suis tourné vers le centre de formation M2I pour apprendre les rudiments du code. Grâce à mes professeurs, j'ai appris bon nombre de choses, tel que le C# et le .Net.<br/>
                        A la fin de ma formation, j'ai choisi de me tourner vers le developpement de sites web. Je me suis entrainé grâce à mes cours et également des sites comme par exemple OpenClassRoom et Codeingame afin prendre confiance en mes compétences.</p>
                        <p>Armé de determination pour devenir Web-Dev, je cherche maintenant une équipe pour m'accueillir.</p>
                    </div>
                    <hr/>
                    {/* Deuxième encart à en bas à droite */}
                    <div className="myskills">
                        <h3>Mes compétences</h3>
                        <div className="skills">
                            
                                <h4>HTML</h4>
                                <h4>Css/Sass</h4>
                                <h4>Javascript</h4>
                                <h4>React</h4>
                                <h4>Docker</h4>                                
                                <h4>GIT</h4>
                                <h4>NodeJS</h4>
                                <h4>C# (en cours d'apprentissage)</h4>                                
                                <h4>.NET (en cours d'apprentissage)</h4>
                                <h4> PHP (en cours d'apprentissage)</h4>
                                
                          
                        </div>
                    </div>
                {/* <Contact/> */}
                </div>
            </div>

        </div>
    )
}

export default About;

