# React Native Starter Boilerplate

- [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo Router](https://expo.github.io/router/docs/)
- [Jest](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [TailwindCSS](https://tailwindcss.com/) (via [NativeWind](https://www.nativewind.dev/))
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Query](https://tanstack.com/query/v4/docs/react/react-native) (WIP)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/usage) (WIP)

## Getting Started
Install the correct node version listed in `.nvmrc` using the command:
```sh
nvm install
```
Next, install the project dependencies by running:
```sh
npm install
```
Finally, run the app using any of the following commands:
```sh
npm run start # Starts the expo server without launching a simulator
npm run ios # Starts the expo server and launches ios simulator
npm run android # Starts the expo server and launches android simulator

```

## Testing
To run the unit test suite with jest, use the following command:
```sh
npm run test
```
This runs just with `--watch` mode which means it will re-run affected tests as you write and re-factor code.