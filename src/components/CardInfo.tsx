import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

interface CardInfoProps {
  titulo: string;
  valor: string;
  width: number;
}

export default function CardInfo({ titulo, valor, width }: CardInfoProps) {
  return (
    <View style={[styles.card, theme.shadows, { width }]}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: 12,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  titulo: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500'
  }
});