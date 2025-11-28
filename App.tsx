import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [name, setName] = useState<string>('');
  const [greetingMessage, setGreetingMessage] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [greetCount, setGreetCount] = useState<number>(0);
  const [showSpecialMessage, setShowSpecialMessage] = useState<boolean>(false);

  const MAX_LENGTH = 20;
  const SPECIAL_COUNT = 10;

  const handleGreet = () => {
    // Vibración suave al pulsar el botón
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    if (name.trim().length === 0) {
      setShowError(true);
      setGreetingMessage('');
      setShowSpecialMessage(false);
    } else {
      setShowError(false);
      const newCount = greetCount + 1;
      setGreetCount(newCount);
      setGreetingMessage(`👋 Hola, ${name.trim()}!`);

      // Mensaje especial al llegar a 10 saludos
      if (newCount === SPECIAL_COUNT) {
        setShowSpecialMessage(true);
        // Vibración más fuerte para celebrar
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      } else {
        setShowSpecialMessage(false);
      }
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    // Resetear error cuando el usuario empiece a escribir
    if (showError && text.trim().length > 0) {
      setShowError(false);
    }
  };

  const isButtonDisabled = name.trim().length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header con gradiente */}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Ionicons name="hand-right" size={40} color="white" />
        <Text style={styles.title}>Saludador Expo</Text>
      </LinearGradient>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Contenido principal */}
        <View style={styles.content}>
          {/* Contador de saludos */}
          <View style={styles.statsContainer}>
            <Ionicons name="stats-chart" size={24} color="#667eea" />
            <Text style={styles.statsText}>
              Saludos: <Text style={styles.statsNumber}>{greetCount}</Text>
            </Text>
          </View>

          <Text style={styles.label}>Escribe tu nombre:</Text>
          
          {/* Input con estilos condicionales */}
          <TextInput
            style={[
              styles.input,
              showError && styles.inputError
            ]}
            placeholder="Ej: Alejandro"
            placeholderTextColor="#999"
            value={name}
            onChangeText={handleNameChange}
            maxLength={MAX_LENGTH}
          />

          {/* Contador de caracteres */}
          <Text style={styles.charCounter}>
            {name.length} / {MAX_LENGTH}
          </Text>

          {/* Mensaje de error */}
          {showError && (
            <View style={styles.errorContainer}>
              <Ionicons name="alert-circle" size={20} color="#e74c3c" />
              <Text style={styles.errorText}>
                Por favor, introduce tu nombre
              </Text>
            </View>
          )}

          {/* Botón de saludar */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              isButtonDisabled && styles.buttonDisabled,
              pressed && !isButtonDisabled && styles.buttonPressed
            ]}
            onPress={handleGreet}
            disabled={isButtonDisabled}
          >
            <Ionicons 
              name="person" 
              size={20} 
              color={isButtonDisabled ? '#999' : 'white'} 
            />
            <Text style={[
              styles.buttonText,
              isButtonDisabled && styles.buttonTextDisabled
            ]}>
              Saludar
            </Text>
          </Pressable>

          {/* Mensaje especial de logro */}
          {showSpecialMessage && (
            <View style={styles.specialContainer}>
              <Ionicons name="trophy" size={32} color="#f39c12" />
              <Text style={styles.specialMessage}>
                ¡Increíble! 🎊
              </Text>
              <Text style={styles.specialSubtext}>
                ¡Has alcanzado {SPECIAL_COUNT} saludos!
              </Text>
            </View>
          )}

          {/* Mensaje de saludo */}
          {greetingMessage && !showError && !showSpecialMessage && (
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingMessage}>
                {greetingMessage}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  statsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#667eea',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#dfe6e9',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2c3e50',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  inputError: {
    borderColor: '#e74c3c',
    backgroundColor: '#ffe5e5',
  },
  charCounter: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'right',
    marginTop: 6,
    marginBottom: 8,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#667eea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: '#dfe6e9',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#999',
  },
  specialContainer: {
    backgroundColor: '#fff3cd',
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    borderWidth: 3,
    borderColor: '#f39c12',
    alignItems: 'center',
    shadowColor: '#f39c12',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
  },
  specialMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f39c12',
    textAlign: 'center',
    marginTop: 12,
  },
  specialSubtext: {
    fontSize: 16,
    fontWeight: '600',
    color: '#856404',
    textAlign: 'center',
    marginTop: 8,
  },
  greetingContainer: {
    backgroundColor: '#d4edda',
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    borderWidth: 2,
    borderColor: '#28a745',
    alignItems: 'center',
  },
  greetingMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#155724',
    textAlign: 'center',
  },
});