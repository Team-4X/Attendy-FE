import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';

export const Icon = (props) => {

    const [presentShown, setPresentShown] = useState(false);
    const [absentShown, setAbsentShown] = useState(false);

    const student = props.student;

    const hideAbsent = () => {
        setAbsentShown(false);
    }
    const hidePresent = () => {
        setPresentShown(false);
    }
    const showAbsent = () => {
        setAbsentShown(true);
    }
    const showPresent = () => {
        setPresentShown(true);
    }

    const sendRequest = async (state) => {

        const data = {
            student: student,
            attendance: state
        };

        await fetch(`${process.env.REACT_APP_API_URL}/attendance/markAttendance`, {
            method: "POST",
            body: JSON.stringify({data}),
            headers: {
                "content-type": "application/json",
            },
        })
        .then(response => response.json())
        .catch(err => console.error(err));
    }

    const handleMarkPresent = (e) => {
        e.preventDefault();
        setPresentShown(true);
        setAbsentShown(false);
        sendRequest('present');
    }
    const handleMarkAbsent = (e) => {
        e.preventDefault();
        setAbsentShown(true);
        setPresentShown(false);
        sendRequest('absent');
    }

    return (
        <div>
            <button onClick={handleMarkPresent} className={`button is-success mx-3 ${presentShown?'is-active' : 'is-light'}`} style={{width: '100px'}}>
                Present
            </button>
            <button onClick={handleMarkAbsent} className={`button is-danger mx-3 ${absentShown?'is-active' : 'is-light'}`} style={{width: '100px'}}>
                Absent
            </button>
        </div>
    )
}

// create a separate component for two components.
// When one is clicked it should be hidden and the other sould be shown.
// When it is clicked it should be hidden and the other should be shown.
