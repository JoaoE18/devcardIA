import { Platform } from 'react-native';

export const theme = {
  colors: {
    primary: '#6366f1',
    background: '#f9fafb',
    card: '#ffffff',
    text: '#333333',
    textSecondary: '#6b7280',
    blue: '#3b82f6',
    green: '#22c55e',
    purple: '#a855f7',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  shadows: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
    },
    android: {
      elevation: 5,
    },
    default: {
      boxShadow: '0px 2px 4px rgba(0,0,0,0.15)',
    }
  })
};