import Navigation from "../components/Navigation";
import Contact from "./Contact";


const About = () => {
    return (
        <div className="about">
            <Navigation/>

            {/* global div */}
            <div className="global">
            
            <div className="leftside">

            {/* Photo sur la gauche */}
                
                    <img src="/img/Thomas2.jpg" alt="thomas"/>
               
                </div>
            {/* Partie droite : texte    */}
            <div className="rightside">
                    {/* Premier encart en haut à droite */}
                    <div className="aboutme"> 
                        
                        <h1 className="h2">Thomas Bausière / 28 ans / Web Développeur</h1>
                        <p>Depuis toujours passioné d'informatique, j'ai décidé de me réorienter à mon 27ème anniversaire. <br/>
                        Je me suis tourné vers le centre de formation M2I pour apprendre les rudiments du code. Grâce à mes professeurs, j'ai appris bon nombre de choses, tel que le C# et le .Net.<br/>
                        A la fin de ma formation, j'ai choisi de me tourner vers le developpement de sites web. Je me suis entrainé grâce à mes cours et également des sites comme par exemple OpenClassRoom et Codeingame afin prendre confiance en mes compétences.</p>
                        <p>Armé de determination pour devenir Web-Dev, je cherche maintenant une équipe pour m'accueillir.</p>
                    </div>
                    <hr/>

                    {/* <div className="btn"><a href="C:\Users\Maz0\Desktop\cvo\src\ThomasBausiere_CV.pdf">Télécharger mon C.V.</a></div> */}
                    {/* Deuxième encart à en bas à droite */}

                {/* <Contact/> */}
                </div>
            </div>

        </div>
    )
}

export default About;

