import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, StatusBar, Text, StyleSheet, TouchableOpacity } from 'react-native'

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects',
            {
                title: `Novo project ${Date.now()}`, owner: `Hiran`
            });

        const newProject = response.data;

        setproject([...projects, newProject])
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (<Text style={styles.project}>{project.title}</Text>)} />

                <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar project</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',

    },

    project: {
        color: '#FFF',
        fontSize: 20
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: '4px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,

    },
})