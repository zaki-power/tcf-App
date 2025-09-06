
function question(props) {
    return (
        <div>
            <div>
                <div></div>
                <div></div>
            </div>

            <div>
                <div>
                    <p>Structure de la langue</p>
                    <p>Choisissez la bonne réponse et cliquez sur le bouton correspondant.</p>
                </div>
                <div>
                    <p>{props.question}</p>
                    <ul>
                        {
                            props.reponses.map((rep)=>(
                                <li key={props.id + rep.id} >
                                    <button>
                                        <div>{toUpperCase(rep.id)}</div>
                                        <p >{rep.text}</p>
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            <div>
                <button>Arrêter le test</button>
                <button>
                    Question suivante
                <span>
                    
                </span>    
                </button>
            </div>
        </div>

    )
}