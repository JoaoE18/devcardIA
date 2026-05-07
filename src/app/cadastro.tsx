import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Azul'); 

  const [erros, setErros] = useState<any>({});

  const validar = () => {
    let novosErros: any = {};
    if (!nome || nome.length < 3) novosErros.nome = "Mínimo 3 caracteres";
    if (!cargo) novosErros.cargo = "Cargo é obrigatório"; 
    if (!anos || isNaN(Number(anos)) || Number(anos) <= 0) novosErros.anos = "Deve ser um número > 0"; 

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleGerar = () => {
    if (validar()) {
      router.push({
        pathname: '/preview',
        params: { nome, cargo, empresa, anos, tecnologia, cor } 
      });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Cadastro</Text>
      
      <Text style={styles.label}>Nome completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="João Silva" />
      {erros.nome && <Text style={styles.error}>{erros.nome}</Text>} 

      <Text style={styles.label}>Cargo</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} placeholder="Desenvolvedor Mobile" />
      {erros.cargo && <Text style={styles.error}>{erros.cargo}</Text>}

      <Text style={styles.label}>Empresa (opcional)</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} placeholder="Tech Solutions" />

      <Text style={styles.label}>Anos de experiência</Text>
      <TextInput style={styles.input} value={anos} onChangeText={setAnos} keyboardType="numeric" placeholder="4" /> 
      {erros.anos && <Text style={styles.error}>{erros.anos}</Text>}

      <Text style={styles.label}>Tecnologia favorita</Text>
      <TextInput style={styles.input} value={tecnologia} onChangeText={setTecnologia} placeholder="React Native" />
      {erros.tecnologia && <Text style={styles.error}>{erros.tecnologia}</Text>}

      <Text style={styles.label}>Cor do cartão</Text>
      <View style={styles.colorContainer}>
        {['Azul', 'Verde', 'Roxo'].map((op) => (
          <TouchableOpacity 
            key={op} 
            style={[styles.colorButton, cor === op && styles.colorSelected]} 
            onPress={() => setCor(op)}
          >
            <Text style={cor === op ? styles.textSelected : styles.textUnselected}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleGerar}>
        <Text style={styles.submitBtnText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f9fafb', 
        padding: 20 
    },

    header: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        marginTop: 40 
    },

    label: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 15, 
        marginBottom: 5 
    },

    input: { 
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#d1d5db', 
        borderRadius: 8, 
        padding: 12 
    },

    error: { 
        color: 'red', 
        fontSize: 12, 
        marginTop: 5 
    },

    colorContainer: { 
        flexDirection: 'row', 
        gap: 10, 
        marginTop: 5 
    },

    colorButton: { 
        flex: 1, 
        padding: 12, 
        borderWidth: 1, 
        borderColor: '#d1d5db', 
        borderRadius: 8, 
        alignItems: 'center' 
    },

    colorSelected: { 
        borderColor: '#6366f1', 
        backgroundColor: '#e0e7ff' 
    },

    textSelected: { 
        color: '#6366f1', 
        fontWeight: 'bold' 
    },

    textUnselected: { 
        color: '#6b7280' 
    },

    submitBtn: { 
        backgroundColor: '#6366f1', 
        padding: 15, 
        borderRadius: 10, 
        alignItems: 'center', 
        marginTop: 30 
    },

    submitBtnText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16 
    }
});