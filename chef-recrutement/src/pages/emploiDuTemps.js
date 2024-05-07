import React, { useState } from "react";

export function WeeklySchedule() {
    // Fonction pour obtenir les noms des jours de la semaine
    const getDayName = (day) => {
        const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        return daysOfWeek[day];
    };

    // Plages horaires spécifiques
    const timeSlots = [
        { start: "8:30", end: "10:00" },
        { start: "10:15", end: "11:45" },
        { start: "12:45", end: "14:15" },
        { start: "14:30", end: "16:00" },
        { start: "16:15", end: "17:45" }
    ];

    // État pour stocker le contenu de chaque séance
    const [sessionContent, setSessionContent] = useState(Array.from({ length: timeSlots.length * 6 }, () => ""));

    // Fonction pour mettre à jour le contenu de la séance
    const handleSessionContentChange = (index, event) => {
        const updatedContent = [...sessionContent];
        updatedContent[index] = event.target.value;
        setSessionContent(updatedContent);
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4">Emploi du temps de la semaine</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        {timeSlots.map((timeSlot, index) => (
                            <th key={index} className="text-center">{`${timeSlot.start} - ${timeSlot.end}`}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 6 }, (_, day) => day).map((day) => (
                        <tr key={day}>
                            <th>{getDayName(day)}</th>
                            {timeSlots.map((timeSlot, index) => (
                                <td key={`${day}-${index}`} className="text-center">
                                    <textarea
                                        value={sessionContent[day * timeSlots.length + index]}
                                        onChange={(event) => handleSessionContentChange(day * timeSlots.length + index, event)}
                                        style={textareaStyle}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const textareaStyle = {
    width: "100%",
    height: "100%",
    border: "1px solid #ced4da",
    borderRadius: "4px",
    padding: "6px 12px",
    fontSize: "14px",
    lineHeight: "1.42857",
    color: "#495057",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    resize: "vertical"
};




