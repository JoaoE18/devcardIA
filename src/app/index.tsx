import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DevCard</Text>
      <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro')}>
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f9fafb', 
        padding: 20 
    },

    title: { 
        fontSize: 40, 
        fontWeight: 'bold', 
        color: '#6300e6', 
        marginBottom: 10 
    },

    subtitle: { 
        fontSize: 16, 
        color: '#6b7280', 
        marginBottom: 40, 
        textAlign: 'center' 
    },

    button: { 
        backgroundColor: '#6300e6', 
        paddingVertical: 15, 
        paddingHorizontal: 30, 
        borderRadius: 10, 
        width: '100%', 
        alignItems: 'center' 
    },
    
    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    }
});