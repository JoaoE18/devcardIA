import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { theme } from '../theme/theme';
import CardInfo from '../components/CardInfo';

type Params = {
  nome: string;
  cargo: string;
  empresa?: string;
  anos: string;
  tecnologia: string;
  cor: string;
};

export default function Preview() {
  const params = useLocalSearchParams<Params>();
  const { width } = useWindowDimensions(); // Hook reativo exigido na Aula 8

  // Lógica de cores usando o tema centralizado
  let cardBg = theme.colors.blue;
  if (params.cor === 'Verde') cardBg = theme.colors.green;
  if (params.cor === 'Roxo') cardBg = theme.colors.purple;

  // Arrays de estatísticas fictícias para preencher o grid responsivo
  const stats = [
    { titulo: 'Projetos', valor: '12+' },
    { titulo: 'Commits', valor: '450' },
    { titulo: 'Cafés', valor: '∞' },
    { titulo: 'Bugs Fix', valor: '99' }
  ];

  // Cálculo de largura responsiva: 1 coluna em telas muito pequenas, 2 colunas no padrão
  const cardWidth = width < 375 
    ? width - theme.spacing.lg * 2 
    : (width - theme.spacing.lg * 3) / 2;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Text style={styles.header}>Seu Cartão</Text>

      {/* Cartão Principal */}
      <View style={[styles.card, theme.shadows, { backgroundColor: cardBg }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{params.nome?.charAt(0).toUpperCase() || 'D'}</Text>
        </View>
        <Text style={styles.nome}>{params.nome || 'Desenvolvedor'}</Text>
        <Text style={styles.cargoInfo}>{params.cargo || 'Mobile Dev'}</Text>
        {params.empresa ? <Text style={styles.cargoInfo}>{params.empresa}</Text> : null}
        
        <View style={styles.divider} />
        
        <Text style={styles.techTitle}>Especialista em</Text>
        <Text style={styles.techName}>{params.tecnologia || 'React Native'}</Text>
        <Text style={styles.anosText}>{params.anos || '0'} anos de experiência</Text>
      </View>

      <Text style={styles.sectionTitle}>Estatísticas (Grid Responsivo)</Text>

      {/* Grid Responsivo usando flexWrap e useWindowDimensions */}
      <View style={styles.grid}>
        {stats.map((stat) => (
          <CardInfo 
            key={stat.titulo} 
            titulo={stat.titulo} 
            valor={stat.valor} 
            width={cardWidth} 
          />
        ))}
      </View>

      {/* Botões de Ação */}
      <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={() => router.back()}>
        <Text style={styles.btnOutlineText}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnSolid]} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.btnSolidText}>Finalizar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilização agora consome os valores centralizados de theme.ts
const styles = StyleSheet.create({
    scroll: { 
        flex: 1, 
        backgroundColor: theme.colors.background 
    },

    container: { 
        padding: theme.spacing.lg, 
        alignItems: 'center', 
        paddingBottom: 40 
    },

    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        alignSelf: 'flex-start', 
        marginTop: 20, 
        marginBottom: theme.spacing.md, 
        color: theme.colors.text 
    },

    card: { 
        width: '100%', 
        borderRadius: 20, 
        padding: 30, 
        alignItems: 'center', 
        marginBottom: theme.spacing.lg 
    },

    avatar: { 
        width: 80, 
        height: 80, 
        borderRadius: 40, 
        backgroundColor: theme.colors.card, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 15 
    },

    avatarText: { 
        fontSize: 32, 
        fontWeight: 'bold', 
        color: theme.colors.text 
    },

    nome: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: theme.colors.card, 
        marginBottom: 5 
    },

    cargoInfo: { 
        fontSize: 14, color: 'rgba(255,255,255,0.8)', 
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
        color: theme.colors.card, 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },

    anosText: { 
        color: 'rgba(255,255,255,0.8)', 
        fontSize: 14 
    },

    sectionTitle: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf: 'flex-start', 
        marginBottom: theme.spacing.md, 
        color: theme.colors.text 
    },

    grid: { 
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        marginBottom: theme.spacing.lg 
    },

    btn: { 
        width: '100%', 
        padding: 15, 
        borderRadius: 10, 
        alignItems: 'center', 
        marginBottom: 10 
    },

    btnOutline: { 
        borderWidth: 1, 
        borderColor: theme.colors.primary 
    },

    btnOutlineText: { 
        color: theme.colors.primary, 
        fontWeight: 'bold' 
    },

    btnSolid: { 
        backgroundColor: theme.colors.primary 
    },

    btnSolidText: { 
        color: theme.colors.card, 
        fontWeight: 'bold' 
    }
});