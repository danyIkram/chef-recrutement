import React from "react";
import "../style/annonces.css";

export function Annonces(){
    return (
        <div className="container m-5">
            <h2 className="text-center mb-3">Annonces</h2>
            <div>
                <textarea name="annonces" cols="150" rows="15" placeholder="Ajouter une nouvelle annonce !"></textarea>
            </div>

            <div>
                Souhaitez-vous accompagner votre annonce d'un fichier ?
                <input type="file" name="ajouterFichier" />
            </div>
            <br/>
            <div>
                <button className="btn" btnName="publier">
                    Publier l'annonce
                 </button>
            </div>

        </div>
    );
}