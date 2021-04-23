
import Navigation from "../components/Navigation";


const Projets = () => {
    return (
        <div className="projets">
            <Navigation/>
            
            {/* ARTICLE 1 */}
            <div className="art1">
                <div className="prez">
                    <h1>CopyCats</h1>
                    <p>Pour pouvoir m'entrainer à coder en HTML et CSS j'ai réalisé des copies de sites, en voici un exemple:
                            
                    </p>
                    <a href="https://github.com/ThomasBausiere/CopyCat-Gw" class="btn">Voir sur GitHub</a>
                </div>
                <div className="vitrine1">
                    <img src="/img/copycatgw.png" alt="ccgw"/>     
                </div>
            </div>
                {/* ARTICLE 2 */}
            <div className="art2">            
                <div className="vitrine2">
                    <img src="/img/background_amel.png" alt="Amel"/>
                </div>
                <div className="prez2">
                    <h1>PorteFolio</h1>
                    <p>Amel Merzouk est une jeune graphiste à L'iscom, elle m'a demandé de réaliser son porte-folio afin d'exposer ses créations.<br/>
                    (Le site n'est pas encore en ligne, il arrivera bientot!!)
                    </p>
                    <a href="" class="btn">Accéder au site</a>
                </div>
                
                    
            </div>
            
        </div>

        
    )
}

export default Projets;
