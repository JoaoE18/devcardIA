import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✅</Text>
      </View>
      <Text style={styles.title}>Cartão criado com sucesso!</Text> 
      <Text style={styles.subtitle}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Criar outro cartão</Text>
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

    iconContainer: { 
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        backgroundColor: '#dcfce3', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 20 
    },

    icon: { 
        fontSize: 40 
    },

    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        textAlign: 'center' 
    },

    subtitle: { 
        fontSize: 14, 
        color: '#6b7280', 
        textAlign: 'center', 
        marginBottom: 40 
    },

    button: { 
        backgroundColor: '#6366f1', 
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