# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

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

## Get started

1. Install dependencies

   ```bash
   bun install
   # o con npm
   npm install
   # o con pnpm
   pnpm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Running on a physical Android device

1. Generate the native Android project (if not already generated):

   ```bash
   npx expo prebuild
   ```

2. Run a debug build on a connected device:

   ```bash
   npx expo run:android --device
   ```

3. Run a release build on a connected device:

   ```bash
   npx expo run:android --device --variant release
   ```

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
