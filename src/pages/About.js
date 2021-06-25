import Navigation from "../components/Navigation";



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

                        
                        <p>Depuis toujours passionné d'informatique, j'ai décidé de me lancer!<br/>Grâce à OpenClassRooms, j'ai la chance de pouvoir effectuer mon alternance ! <br/>
                        Je suis à la recherche d'une entreprise que je pourrais soutenir et aider avec mes compétences !<br/>
                        J'ai un profil qui se distingue par deux caracteristiques: la communication et le developpement. <br/>
                        </p>
                       
                        <p>Aujourd'hui, mon objectif c'est de mettre à profit mes atouts en codant des sites web et étant une force de proposition dans l'équipe qui m'accueillera. <br/>
                         </p>
                        <p>J'ai vraiment hâte de vous rejoindre!</p>
                    </div>
                    

                     <div className="btn"><a href="/ThomasBausiere_CV.pdf" download>Télécharger mon C.V.</a></div> 
                   

                </div>
            </div>

        </div>
    )
}

export default About;

