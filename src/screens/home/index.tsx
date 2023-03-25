import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participante } from '../../components/Participant';
import { styles } from './styles';

export function Home() {

    const participants = ['Sabrina', 'Andre', 'Ana Sandra', 'Mario', 'Bethania', 'Diana', 'Kauany', 'Gustavo', 'Mariana', 'Dora', 'Alanda', 'Angela'];


    function handleParticipantAss() {
        if (participants.includes('Sabrina')) {
            return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Tem certeza que quer remover ${name}?`,[
            {
                text:'Sim',
            onPress:() => Alert.alert ("Deletado!")
            },
            {
                text: 'Não',
                style:'cancel',
            }
        ])
        console.log(`Você clicou em remover: ${name}`)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sábado, 25 de março de 2023.</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6b6b6b'
                    keyboardType="name-phone-pad"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAss} >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participante
                        key={item}
                        User={item} onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>
                    <Text style={styles.ListEmpatText}>
                        Niguém chegou no evento ainda? Adicione participantes na sua lista de presença.
                    </Text>
                }
            />
        </View>
    )
}
