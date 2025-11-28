# HelloFormExpo - Saludador Expo

**Autor:** Alejandro Mejías Ramírez  
**Tecnología:** Expo + React Native + TypeScript

---

##  Descripción

**Saludador Expo** es una aplicación móvil desarrollada con Expo y React Native que permite al usuario introducir su nombre y recibir un saludo personalizado. La app incluye validaciones, contador de caracteres, estadísticas de uso y un sistema de logros que recompensa al usuario al alcanzar 10 saludos.

### Características principales:

 **Formulario interactivo** con validación en tiempo real  
 **Contador de caracteres** (máximo 20 caracteres)  
 **Botón inteligente** que se deshabilita cuando el campo está vacío  
 **Estilos de error condicionales** (borde rojo y fondo rosado)  
 **Contador de saludos** que registra cuántas veces has saludado  
 **Sistema de logros** con mensaje especial al alcanzar 10 saludos  
 **Retroalimentación háptica** (vibración) al interactuar  
 **Diseño moderno** con gradientes y iconos vectoriales  
 **Interfaz responsive** que se adapta al teclado

---

##  Instalación y Ejecución

### Requisitos previos:
- Node.js instalado (v14 o superior)
- Expo CLI
- Expo Go en tu dispositivo móvil (iOS/Android) o un emulador

### Pasos para ejecutar:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/TU_USUARIO/HelloFormExpo_AlejandroMejiasRamirez.git
cd HelloFormExpo_AlejandroMejiasRamirez
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Instalar dependencias de Expo:**
```bash
npx expo install expo-linear-gradient expo-haptics @expo/vector-icons
```

4. **Iniciar el proyecto:**
```bash
npx expo start
```

5. **Abrir en tu dispositivo:**
   - **Android:** Presiona `a` en la terminal o escanea el QR con Expo Go
   - **iOS:** Presiona `i` en la terminal o escanea el QR con Expo Go
   - **Web:** Presiona `w` para abrir en el navegador

### Modo túnel (recomendado para móviles):
```bash
npx expo start --tunnel
```

---

##  Funcionalidades Implementadas

###  Requisitos básicos:
-  Componentes de UI: `View`, `Text`, `TextInput`, `Pressable`
-  Estado con `useState` para controlar la UI
-  Estilos con `StyleSheet.create()`
-  `SafeAreaView` y `StatusBar` para experiencia móvil
-  Validación de campo vacío con mensaje de error

###  Retos opcionales (+3 puntos extra):
1. ** Botón deshabilitado cuando el campo está vacío**
   - El botón cambia de color a gris y no responde a pulsaciones
   - Estilos condicionales según el estado del input

2. ** Estilos condicionales para errores**
   - Borde rojo y fondo rosado en el `TextInput` cuando hay error
   - Mensaje de error visible con icono de alerta

3. ** Contador de caracteres**
   - Muestra "X / 20" debajo del input
   - Límite máximo de 20 caracteres con `maxLength`

4. ** Mejoras visuales con LinearGradient e iconos**
   - Header con gradiente morado-azul
   - Iconos de `@expo/vector-icons` (Ionicons)
   - Diseño moderno con sombras y bordes redondeados

5. ** Vibración háptica (expo-haptics)**
   - Vibración suave al pulsar el botón de saludar
   - Vibración especial al alcanzar el logro de 10 saludos

###  Funcionalidades extra añadidas:
- ** Contador de saludos:** Registra cuántas veces has saludado
- ** Sistema de logros:** Mensaje especial al alcanzar 10 saludos con diseño destacado
- ** ScrollView optimizado:** Mejor manejo del teclado sin bugs de desplazamiento

---

##  Capturas de Pantalla

### Estado inicial
![Estado inicial de la app](ruta/a/captura1.png)

### Saludo exitoso
![Saludo con nombre ingresado](ruta/a/captura2.png)

### Mensaje de error
![Error al intentar saludar sin nombre](ruta/a/captura3.png)

### Logro alcanzado
![Mensaje especial a los 10 saludos](ruta/a/captura4.png)

---

##  Comparación: Android Clásico / Jetpack Compose vs Expo

###  **Ventajas de Expo/React Native:**

| Aspecto | Expo/React Native | Android Clásico/Compose |
|---------|-------------------|-------------------------|
| **Curva de aprendizaje** | Más sencilla si conoces JavaScript/React | Requiere conocimientos de Kotlin/Java |
| **Hot Reload** | Instantáneo, muy rápido | Más lento en Android Studio |
| **Multiplataforma** | Un solo código para iOS y Android | Código separado para cada plataforma |
| **Prototipado** | Extremadamente rápido con Expo Go | Requiere compilar en cada cambio |
| **Ecosistema** | NPM con miles de librerías | Maven/Gradle, más limitado |
| **Estilos** | CSS-like con Flexbox | XML (clásico) o Composable functions |
| **Desarrollo visual** | Muy intuitivo con StyleSheet | Jetpack Compose es declarativo pero requiere más código |

###  **Ventajas de Android Clásico/Jetpack Compose:**

| Aspecto | Android Clásico/Compose | Expo/React Native |
|---------|-------------------------|-------------------|
| **Rendimiento** | Nativo, más optimizado | Ligera capa de JavaScript |
| **Acceso a APIs nativas** | Total y directo | A través de módulos nativos |
| **Personalización profunda** | Control total del sistema | Limitado por el framework |
| **Tamaño de la app** | Más pequeño | Mayor debido al bundle de JS |
| **Debugging** | Herramientas nativas potentes | Puede ser más complejo |

###  **Mi experiencia personal:**

**Lo que encontré más sencillo en Expo:**
- La configuración inicial es mucho más rápida (literalmente 1 comando)
- No necesitas Android Studio abierto todo el tiempo
- El Hot Reload de Expo es increíblemente rápido
- Probar en dispositivo real es inmediato con Expo Go (sin cables ni configuraciones)
- Los estilos con StyleSheet son más intuitivos que XML
- Las librerías como `expo-linear-gradient` y `expo-haptics` son plug-and-play

**Lo que encontré más complejo en Expo:**
- A veces las vibraciones hápticas no funcionan en todos los dispositivos
- Algunos bugs específicos de plataforma (como el del KeyboardAvoidingView en Android)
- Menos control sobre optimizaciones de rendimiento nativas

**Conclusión:**  
Para proyectos pequeños y prototipos rápidos, **Expo es claramente superior**. Para apps complejas con requisitos de rendimiento específicos o acceso profundo al sistema, **Android nativo sigue siendo la mejor opción**.

---

##  Estructura del Proyecto

```
HelloFormExpo_AlejandroMejiasRamirez/
├── App.tsx                 # Componente principal con toda la lógica
├── app.json               # Configuración de Expo
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── node_modules/          # Dependencias instaladas
├── assets/                # Imágenes y recursos
└── README.md              # Este archivo
```

---

##  Tecnologías Utilizadas

- **Expo SDK** - Framework para React Native
- **React Native** - Framework de desarrollo móvil
- **TypeScript** - Tipado estático para JavaScript
- **expo-linear-gradient** - Gradientes en componentes
- **expo-haptics** - Retroalimentación háptica (vibración)
- **@expo/vector-icons** - Iconos vectoriales (Ionicons)

---

##  Código Destacado

### Estado y lógica principal:
```typescript
const [name, setName] = useState<string>('');
const [greetingMessage, setGreetingMessage] = useState<string>('');
const [showError, setShowError] = useState<boolean>(false);
const [greetCount, setGreetCount] = useState<number>(0);
const [showSpecialMessage, setShowSpecialMessage] = useState<boolean>(false);
```

### Manejo de eventos con validación:
```typescript
const handleGreet = () => {
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
    
    if (newCount === 10) {
      setShowSpecialMessage(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }
};
```

---

##  Aprendizajes Clave

1. **Gestión de estado con hooks:** `useState` es fundamental para React funcional
2. **Estilos condicionales:** Cambiar estilos según el estado de la UI
3. **Validación de formularios:** Feedback inmediato al usuario
4. **Componentes nativos:** Diferencias entre web y móvil (SafeAreaView, StatusBar)
5. **Experiencia de usuario:** Detalles como el contador de saludos marcan la diferencia

---

##  Contacto

**Alejandro Mejías Ramírez**  
GitHub: Zyroks0906

---

##  Licencia

Este proyecto es parte de una actividad educativa.
