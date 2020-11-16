import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';
// import backgroundImage from './assets/xps.jpg'
import api from './services/api';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, {}]);
        const response = await api.post('projects', { title: `titulo bacana ${Date.now()}`, owner: `HiranAzevedo` })
        const newProject = response.data;

        setProjects([...projects, newProject]);
    }

    return (
        <>
            <Header title="Projects" />

            {/* <img width="300" src={backgroundImage} /> */}

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}> Adicionar projeto</button>
        </>
    );
}

export default App;