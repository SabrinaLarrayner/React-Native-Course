import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
User: string;
onRemove: () => void;
}
export function Participante( { User, onRemove }:Props) {
    return (
        <View style={styles.Container}>
            <Text style={styles.Name}> 
            {User} 
            </Text>
            <TouchableOpacity
                style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}> 
                -
                </Text>
            </TouchableOpacity>
        </View>
    )
}