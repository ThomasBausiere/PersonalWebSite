
import Navigation from "../components/Navigation";


const Projets = () => {
    return (
        <div className="projets">
            <Navigation/>
            
            {/* ARTICLE 1 */}
            <section className="articles">
            <div className="article">
                {/* partie Gauche*/}
                <div className="left">
                    <img src="/img/copycatgw.png" alt="ccgw"/>                    
                </div>

                {/* partie droite*/}
                <div className="right">

                
                <h1>Copycat-Gw</h1>
                <p className="description">Alors que je découvrais L'HTML et le CSS, mon formateur m'a conseillé de m'entrainer et de refaire des pages internet.<br/> J'ai été voir un site que j'apprécie et je me suis entrainé. Voici le site de Guild Wars 1. <br/>Mon tout premier projet personnel !</p>
                
                    <a href="https://github.com/ThomasBausiere/CopyCat-Gw" class="btn" target="blank">Voir sur GitHub</a>
                </div>
            </div>
                {/* ARTICLE 2 */}
            

            <div className="article">            
                <div className="left">
                    <img src="/img/backgroundFC1.png" alt="FrenchCoder#Youtube"/>
                </div>
                <div className="right">               
                <h1>Entrainement Responsive</h1>
                <p className="description">Afin de pratiquer et de produire, j'ai commencé à réaliser des pages reponsives. Je me suis aidé de tutoriels sur youtube (#FrenchCoder). Le but était de m'entrainer et de découvrir certains aspects du mobile first que je n'avais pas encore pratiqué jusqu'à présent.<br/>
                Voici donc une page responsive d'un "A propos". Le texte est du Lorem Ipsum.</p>
                
                    <a href="https://github.com/ThomasBausiere/training_responsive" class="btn" target="blank">Voir sur GitHub</a>
                </div>     
            </div>

            <div className="article">            
                <div className="left">
                    <img src="/img/backgroundFC2.png" alt="FrenchCoder#Youtube2"/>
                </div>
                <div className="right">
                
                <h1>Entrainement Responsive 2</h1>
                <p className="description">Dans le même but que le projets précédent, je me suis entrainé en suivant l'un des tutos de French Coder. Cette fois ci, la page est une page d'accueil. </p>
                
                    <a href="https://github.com/ThomasBausiere/training_responsive2" class="btn" target="blank">Voir sur GitHub</a>
                </div>     
            </div>
            <div className="article">            
                <div className="left">
                    <img src="/img/background_projet_react.png" alt="Thomas Bausiere"/>
                </div>
                <div className="right">
                
                <h1>Mon projet React !</h1>
                <p className="description">Alors oui.. C'est bien d'utiliser la tech appropriée, et peut etre qu'une application React c'est un peu trop pour un site vitrine, mais je voulais faire du React pour apprendre, et progresser. Vous etes dessus, vous y naviguer. J'espere que vous appreciez !</p>
                
                    <a href="https://github.com/ThomasBausiere/PersonalWebSite" class="btn" target="blank">Voir sur GitHub</a>
                </div>     
            </div>

            <div className="article">            
                <div className="left">
                    <img src="/img/background_amel.png" alt="AMZK"/>
                </div>
                <div className="right">
                
                <h1> [En cours de réalisation] Portfolio Amel Merzouk</h1>
                <p className="description">Amel Merzouk est une étudiante en Graphisme et motion 3D à l'ISCOM Lille. Elle m'a demandé de réaliser son Portfolio afin d'y afficher ses travaux. La demande est précise, le challenge est élevé!
                 Je travail sur ce site en ce moment, il n'est pas encore fini mais le sera prochainement </p>
                
                </div>
            </div>


            </section>
        </div>

        
    )
}

export default Projets;
