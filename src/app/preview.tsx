import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

type Params = {
  nome: string;
  cargo: string;
  empresa?: string;
  anos: string;
  tecnologia: string;
  cor: string;
};

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<Params>();

  let cardBg = '#3b82f6'; 
  if (cor === 'Verde') cardBg = '#22c55e';
  if (cor === 'Roxo') cardBg = '#a855f7';

  
  const anosNum = Number(anos);
  let nivel = 'Júnior';
  let badgeColor = '#9ca3af';

  if (anosNum >= 3 && anosNum <= 5) {
    nivel = 'Pleno';
    badgeColor = '#3b82f6'; 
  } else if (anosNum >= 6) {
    nivel = 'Sênior';
    badgeColor = '#eab308';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seu Cartão</Text>

      <View style={[styles.card, { backgroundColor: cardBg }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{nome?.charAt(0).toUpperCase()}</Text>
        </View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargoInfo}>{cargo}</Text>
        {empresa ? <Text style={styles.cargoInfo}>{empresa}</Text> : null}
        
        <View style={styles.divider} />
        
        <Text style={styles.techTitle}>Especialista em</Text>
        <Text style={styles.techName}>{tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{nivel}</Text>
        </View>
        <Text style={styles.anosText}>{anos} anos de experiência</Text>
      </View>

     
      <TouchableOpacity style={styles.btnOutline} onPress={() => router.back()}>
        <Text style={styles.btnOutlineText}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSolid} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.btnSolidText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f9fafb', 
        padding: 20, 
        alignItems: 'center' 
    },

    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        alignSelf: 'flex-start', 
        marginTop: 40, 
        marginBottom: 20 
    },

    card: { 
        width: '100%', 
        borderRadius: 20, 
        padding: 30, 
        alignItems: 'center', 
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, shadowRadius: 3.84 
    },

    avatar: { 
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 15 
    },

    avatarText: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    nome: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#fff', 
        marginBottom: 5 
    },

    cargoInfo: { 
        fontSize: 14, 
        color: 'rgba(255,255,255,0.8)', 
        textAlign: 'center' 
    },

    divider: { 
        width: '80%', 
        height: 1, 
        backgroundColor: 'rgba(255,255,255,0.3)', 
        marginVertical: 15 
    },

    techTitle: { 
        color: 'rgba(255,255,255,0.8)', 
        fontSize: 12 
    },

    techName: { 
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 20 
    },

    badge: { 
        paddingVertical: 5, 
        paddingHorizontal: 15, 
        borderRadius: 15, 
        marginBottom: 10 
    },

    badgeText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 12 
    },

    anosText: { 
        color: 'rgba(255,255,255,0.8)', 
        fontSize: 12 
    },

    btnOutline: { 
        width: '100%', 
        padding: 15, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#6366f1', 
        alignItems: 'center', 
        marginTop: 40, 
        marginBottom: 10 
    },

    btnOutlineText: { 
        color: '#6366f1', 
        fontWeight: 'bold' 
    },

    btnSolid: { 
        width: '100%', 
        padding: 15, 
        borderRadius: 10, 
        backgroundColor: '#6366f1', 
        alignItems: 'center' 
    },

    btnSolidText: { 
        color: '#fff', 
        fontWeight: 'bold' 
    }
});