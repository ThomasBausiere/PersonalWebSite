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
                        
                        <h1 >Thomas Bausière</h1>

                        
                        <p>Depuis toujours passioné d'informatique, j'ai décidé de me réorienter à mon 27ème anniversaire. <br/>
                        Je me suis tourné vers le centre de formation M2I pour apprendre les rudiments du code. Grâce à mes professeurs, j'ai appris bon nombre de choses, tel que le C# et le .Net.<br/>
                        A la fin de ma formation, j'ai choisi de me tourner vers le developpement de sites web. Je me suis entrainé grâce à mes cours et également des sites comme par exemple OpenClassRoom et Codeingame afin de prendre confiance en mes compétences.</p>
                       
                        <p>Je suis actuellement  à la recherche d'une entreprise et d'un centre de formation pour mon alternance. J'espere pouvoir vous prouver que je suis motivé et déterminé pour devenir Developpeur ! </p>
                        <p>Je sais que j'ai encore beaucoup à apprendre et j'ai vraiment  hâte de continuer cette aventure en entreprise!</p>
                    </div>
                    

                     <div className="btn"><a href="/ThomasBausiere_CV.pdf" download>Télécharger mon C.V.</a></div> 
                   

                </div>
            </div>

        </div>
    )
}

export default About;

