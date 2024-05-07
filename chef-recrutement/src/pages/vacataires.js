import React from "react";
import { Link } from 'react-router-dom';


export function Vacataires(){

    return (
        <div className="container m-5">
            <h2 className="text-center mb-3">Liste des vacataires</h2>
            <h3>Cours</h3>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Id</th>
                        <th scope="col" className="text-center">Nom</th>
                        <th scope="col" className="text-center">Prenom</th>
                        <th scope="col" className="text-center">Filiere</th>
                        <th scope="col" className="text-center">Groupe</th>
                        <th scope="col" className="text-center">Session</th>
                        <th scope="col" className="text-center">Cahier de texte</th>
                        <th scope="col" className="text-center">Emploi du temps </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary btn-sm" type="button">
                                    supervisionner
                            </button>
                        </td>
                        <td>
                            <Link to="/emploiDuTemps">
                                <button className="btn btn-primary btn-sm" type="button">
                                        Ajouter
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <h3>TD</h3>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Id</th>
                        <th scope="col" className="text-center">Nom</th>
                        <th scope="col" className="text-center">Prenom</th>
                        <th scope="col" className="text-center">Filiere</th>
                        <th scope="col" className="text-center">Groupe</th>
                        <th scope="col" className="text-center">Session</th>
                        <th scope="col" className="text-center">Cahier de texte</th>
                        <th scope="col" className="text-center">Emploi du temps </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary btn-sm" type="button">
                                    supervisionner
                            </button>
                        </td>
                        <td>
                            <Link to="/emploiDuTemps">
                                <button className="btn btn-primary btn-sm" type="button">
                                        Ajouter
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <h3>TP</h3>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Id</th>
                        <th scope="col" className="text-center">Nom</th>
                        <th scope="col" className="text-center">Prenom</th>
                        <th scope="col" className="text-center">Filiere</th>
                        <th scope="col" className="text-center">Groupe</th>
                        <th scope="col" className="text-center">Session</th>
                        <th scope="col" className="text-center">Cahier de texte</th>
                        <th scope="col" className="text-center">Emploi du temps </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary btn-sm" type="button">
                                    supervisionner
                            </button>
                        </td>
                        <td>
                            <Link to="/emploiDuTemps">
                                <button className="btn btn-primary btn-sm" type="button">
                                        Ajouter
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}