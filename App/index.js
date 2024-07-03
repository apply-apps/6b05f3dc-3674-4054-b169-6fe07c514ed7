// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, View, Modal, ScrollView } from 'react-native';

const stories = [
    { id: '1', title: 'The Little Red Riding Hood', content: 'Once upon a time, there was a little girl who...' },
    { id: '2', title: 'Cinderella', content: 'Cinderella found herself in rags after her father passed away...' },
    { id: '3', title: 'The Three Little Pigs', content: 'A long time ago, there were three little pigs who built their houses...' },
    { id: '4', title: 'Jack and the Beanstalk', content: 'Jack traded his cow for some magic beans...' },
    { id: '5', title: 'Hansel and Gretel', content: 'Hansel and Gretel were left in the forest by their parents...' },
];

const StoryList = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    const renderStoryItem = ({ item }) => (
        <TouchableOpacity style={styles.storyItem} onPress={() => setSelectedStory(item)}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const closeStoryModal = () => {
        setSelectedStory(null);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderStoryItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            {selectedStory && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={closeStoryModal}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{selectedStory.title}</Text>
                        <ScrollView style={styles.modalContent}>
                            <Text style={styles.modalText}>{selectedStory.content}</Text>
                        </ScrollView>
                        <TouchableOpacity style={styles.closeButton} onPress={closeStoryModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bedtime Stories</Text>
            <StoryList />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#fff',
    },
    list: {
        alignItems: 'center',
    },
    storyItem: {
        margin: 10,
        padding: 15,
        backgroundColor: '#333',
        borderRadius: 10,
        width: 300,
        alignItems: 'center',
    },
    storyTitle: {
        color: '#fff',
        fontSize: 18,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalContent: {
        marginHorizontal: 20,
    },
    modalText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#555',
        borderRadius: 10,
    },
    closeButtonItemText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default App;