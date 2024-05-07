import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Style from "../style/profil.css";
import { HiOutlineMail } from "react-icons/hi";
import "../style/profil.css";


export function Profil() {
    
    const [fileUrl, setFileUrl] = useState('https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setFileUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className="profil-container">
      <div className="profil-left">
        <h1 className="profil-title">Paramètres de profil</h1>
        <img src={fileUrl} alt='photo de profil' height='150' width='150'/>
        <div {...getRootProps()} className="profil-image">
                    <input {...getInputProps()} />
                    <p>Glissez-déposez une nouvelle photo ici.</p>
      </div>
    </div>
    <div className="profil-right">
            <div className="form">
                <form>
                    <div className="form-label">
                        <label htmlFor="name">Nom</label>
                        <input type="text" placeholder="changer votre nom" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="firstname">Prenom</label>
                        <input type="text" placeholder="changer votre prénom" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="email">Email</label>
                        <div className="form-input">
                         <div className={Style.Form_box_input_box_icon}>
                            <HiOutlineMail />
                         </div>
                         <input type="text" placeholder=" Changer votre Email"/>
                    </div>

                    <div className="form-label">
                        <label htmlFor="telephone">N° de téléphone</label>
                        <input type="text" placeholder="changer votre N° de téléphone" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="CV">Curriculum Vitae</label>
                        <input type="file" name="Ajouter CV" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="diplomes">Diplômes</label>
                        <input type="file" name="Ajouter diplômes" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="password">Changer le mot de passe</label>
                        <input type="password" placeholder="changer votre mot de passe" className="form-input" />
                    </div>

                    <div className="form-label">
                        <label htmlFor="confirmerPassword">Confirmer le nouveau mot de passe</label>
                        <input type="password" placeholder="Confirmer le nouveau mot de passe" className="form-input" />
                    </div>

                    <div>
                        <button btnName="Modifier Profile" className="form-button"
                                handleClick={()=> {}}
                        >
                                    Modifier Profil
                        </button>
                    </div>
                    
                    </div>  
                </form>
            </div>
        </div>

    </div>
  );
}

