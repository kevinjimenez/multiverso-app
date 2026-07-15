# Multiverso 👋

Este es un proyecto de [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

Multiverso es una app de React Native/Expo que consume la [Rick and Morty API](https://rickandmortyapi.com/) para explorar personajes, episodios y lugares.

## Stack técnico

### Core

- [Expo](https://docs.expo.dev/) `~57` — framework y tooling sobre React Native.
- [React Native](https://reactnative.dev/) `0.86` + [React](https://react.dev/) `19.2`
- [Expo Router](https://docs.expo.dev/router/introduction/) — navegación basada en archivos.
- [TypeScript](https://www.typescriptlang.org/)

### Datos y estado

- [Axios](https://axios-http.com/) — cliente HTTP para consumir la API.
- [TanStack Query](https://tanstack.com/query/latest) — fetching, cache e infinite scroll.
- [Zustand](https://zustand-demo.pmnd.rs/) — estado global de cliente (ej. sesión de usuario).
- [Zod](https://zod.dev/) — validación de esquemas (forms).
- [Formik](https://formik.org/) — manejo de formularios.

### UI y estilos

- [NativeWind](https://www.nativewind.dev/) + [Tailwind CSS](https://tailwindcss.com/) — estilos con clases utility.
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) — resolución de conflictos entre clases de Tailwind.
- [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/), [expo-blur](https://docs.expo.dev/versions/latest/sdk/blur-view/), [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/), [expo-glass-effect](https://docs.expo.dev/versions/latest/sdk/glass-effect/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) + [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Screens](https://github.com/software-mansion/react-native-screens) + [React Native Safe Area Context](https://github.com/AppAndFlow/react-native-safe-area-context)
- [@react-native-vector-icons/ionicons](https://www.npmjs.com/package/@react-native-vector-icons/ionicons) — íconos.

### Herramientas de desarrollo

- [ESLint](https://eslint.org/) (`expo lint`) — linting.
- [Prettier](https://prettier.io/) + [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) — formateo de código y orden de clases de Tailwind.
- [Bun](https://bun.sh/) — gestor de paquetes usado en este repo (`bun.lock`), aunque también funciona con `npm` o `pnpm`.

## Branding (nombre, ícono y splash)

El ícono y el splash screen se generaron con [expo-assets-generator](https://expo-assets-generator.vercel.app/), una web que a partir de una imagen base genera los assets en los tamaños/formatos que Expo espera.

| Elemento | Se configura en | Archivo(s) |
| --- | --- | --- |
| Nombre visible | `app.json` → `expo.name` | — (actualmente `"Multiverso"`) |
| Ícono genérico (Android/iOS) | `app.json` → `expo.icon`, `expo.ios.icon` | `assets/images/icon.png` |
| Adaptive icon (Android) | `app.json` → `expo.android.adaptiveIcon` | `assets/adaptive-icon.png` |
| Splash screen | `app.json` → plugin `expo-splash-screen` | `assets/images/splash-icon.png` |
| Favicon (web) | `app.json` → `expo.web.favicon` | `assets/images/favicon.png` |

### ⚠️ Importante: `npx expo prebuild --clean` después de cambiar branding

Cada vez que cambies `name`, ícono, adaptive icon o splash en `app.json` (o reemplaces alguno de los archivos de `assets/images/`), **hay que correr**:

```bash
npx expo prebuild --clean
```

**Para qué sirve:** las carpetas `ios/` y `android/` de este repo son proyectos nativos ya generados (Xcode/Gradle), y una vez generados, Expo **no los vuelve a sincronizar solo** con lo que cambies en `app.json` — quedan "congelados" con los assets que tenían al momento de generarse. `expo prebuild --clean` borra y regenera esas carpetas nativas desde cero a partir de la configuración actual de `app.json` y los assets del repo, aplicando así el nombre/ícono/splash nuevos. Si te saltas este paso, vas a seguir viendo el ícono o nombre viejo en el simulador/dispositivo aunque el código ya esté actualizado.

## Cómo empezar

1. Instalar dependencias

   ```bash
   bun install
   # o con npm
   npm install
   # o con pnpm
   pnpm install
   ```

2. Iniciar la app

   ```bash
   npx expo start
   ```

En la salida del comando vas a encontrar opciones para abrir la app en:

- un [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- un [emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- un [simulador de iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un sandbox limitado para probar desarrollo con Expo

Puedes empezar a desarrollar editando los archivos dentro del directorio **app**. Este proyecto usa [file-based routing](https://docs.expo.dev/router/introduction).

## Reiniciar el proyecto

Cuando quieras empezar de cero, corre:

```bash
npm run reset-project
```

Este comando mueve el código inicial a un directorio **app-example** y crea un directorio **app** en blanco para empezar a desarrollar.

### Correr en un dispositivo Android físico

1. Generar el proyecto nativo de Android (si aún no existe):

   ```bash
   npx expo prebuild
   ```

2. Correr un build debug en un dispositivo conectado:

   ```bash
   npx expo run:android --device
   # o el script equivalente del proyecto
   bun android:device
   ```

3. Correr un build release en un dispositivo conectado:

   ```bash
   npx expo run:android --device --variant release
   # o el script equivalente del proyecto
   bun android:device:release
   ```

   **Para qué sirve `--variant release`:** por defecto, `expo run:android` instala la variante **debug** — más lenta, con herramientas de desarrollo activas (Fast Refresh, warnings, sin minificar). `--variant release` compila la app con la configuración de **producción** (código minificado/optimizado, sin herramientas de debug), tal como quedaría si la subieras a la Play Store. Úsalo cuando quieras probar el rendimiento real de la app o verificar que un build de producción funciona antes de publicarlo, no para el día a día de desarrollo.

### Otros pasos de configuración

- Para configurar ESLint, corre `npx expo lint`, o sigue la guía de Expo ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- Si quieres configurar tests unitarios, sigue la guía ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Más sobre la configuración de TypeScript en la guía ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Para aprender más

Para aprender más sobre cómo desarrollar tu proyecto con Expo, revisa estos recursos:

- [Documentación de Expo](https://docs.expo.dev/): fundamentos y temas avanzados en sus [guías](https://docs.expo.dev/guides).
- [Tutorial de Expo](https://docs.expo.dev/tutorial/introduction/): un tutorial paso a paso para crear un proyecto que corre en Android, iOS y web.

## Comunidad

Únete a la comunidad de desarrolladores que crean apps universales.

- [Expo en GitHub](https://github.com/expo/expo): la plataforma open source de Expo, para contribuir.
- [Comunidad en Discord](https://chat.expo.dev): para chatear con otros usuarios de Expo y hacer preguntas.
