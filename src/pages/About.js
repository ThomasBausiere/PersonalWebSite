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
                        <p>Depuis toujours passioné d'informatique, j'ai décidé de me réorienté à mon 27ème annivairsaire. <br/>
                        Je me suis tourné vers le centre de formation M2I pour m'apprendre les rudiments du code. Grâce à mes professeurs, j'ai appris bon nombre de choses, tel que le C# et le .Net.<br/>
                        A la fin de ma formation, j'ai choisi de me tourner vers le developpement de sites web. Je me suis entrainé grâce à mes cours et également des sites comme par exemple OpenClassRoom et Codeingame afin prendre confiance en mes compétences.</p>
                        <p>Armé de determination pour devenir Web-Dev, je cherche maintenant une équipe pour m'épanouir.</p>
                    </div>
                    <hr/>
                    {/* Deuxième encart à en bas à droite */}
                    <div className="myskills">
                        <h3>Mes compétences</h3>
                        <div className="skills">
                            <div className="html">
                                <h4>html</h4>
                                <p>Cours suivi à M2I formation, approfondis via Openclassroom et divers projets personnels</p>
                            </div>
                            <div className="css">
                                <h4>css</h4>
                                <p>Cours suivi à M2I formation, approfondis via Openclassroom et divers projets personnels</p>
                            </div>
                            <div className="javascript">
                                <h4>javascript</h4>
                                <p>Cours suivi à M2I formation, approfondis via Openclassroom et divers projets personnels</p>
                            </div>
                            <div className="react">
                                <h4>React</h4>
                                <p>Cours suivi à M2I formation, approfondis via Openclassroom et divers projets personnels</p>
                            </div>
                        </div>
                    </div>
                {/* <Contact/> */}
                </div>
            </div>

        </div>
    )
}

export default About;

