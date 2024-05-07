import React , { useState } from "react";

export function Recrutement(){
    const [recruterEnabled, setRecruterEnabled] = useState(false);

    const handleSelectionnerClick = () => {
        setRecruterEnabled(true);
    };
    return (
        <div className="container m-5">
            <h2 className="text-center mb-3">Les demandes de recrutement</h2>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">CV</th>
                        <th scope="col">Diplômes</th>
                        <th scope="col" className="text-center">Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center">
                            <form method="post" className="d-flex">
                                <button className="btn btn-primary btn-sm me-1" type="button" onClick={handleSelectionnerClick}>
                                    Sélectionner
                                </button>
                                <button className={`btn btn-primary btn-sm me-1 ${recruterEnabled ? '' : 'disabled'}`} type="button">
                                    Recruter
                                </button>
                                <button className="btn btn-danger btn-sm" type="button">
                                    Refuser
                                </button>
                            </form>
                        </td>
                    </tr>
                </tbody>
  
            </table>
        </div>
        
    );
}