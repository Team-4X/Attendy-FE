import { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export const AdminMessages = () => {

    const [messages, setMessages] = useState([]);

    const getQuestions = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/contactus/getMessages`)
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        
        getQuestions();

    }, []);


    return (
        <>
        <NavBar/>

        <div className="container">
            <h1 className="title is-1 has-text-centered mt-3">User Queries</h1>
            <div className="container">

            {
                messages?.map(item => (
                    <div id={item._id} className="has-background-grey-lighter mb-3 mx-3 box">
                        
                        <a href={`mailto:${item.email}`} className="is-italic has-text-dark">{item.email}</a>
                        <h2 className="title is-5">{item.heading}</h2>
                        <p>{item.message}</p>
                        <hr/>
                        <p>{item.createdAt.split('T')[0]}</p>
                    </div>
                ))
            }

            </div>
        </div>

        <Footer/>
        </>
    )
}