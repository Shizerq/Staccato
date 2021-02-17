<div align="center">
 <h1>Staccato</h1>
 <img src="https://github.com/Shizerq/Staccato/blob/main/resources/mockups.png?raw=true" />
</div>

Staccato is a **universal instrument tuner** written in **React Native**. Minimalistic, eye-pleasing user interface shows the most important pieces of information such as the current frequency or tuned note. Smoothly animated bar visualizes whether the currently tuned note is too sharp, too flat or in tune.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## To do
- [ ] Android support
- [ ] Adjust some values to make the measurements as accurate as possible
- [ ] Permissions support (iOS)
- [ ] Add i18n and Polish language support

## Bug reporting, contributing
If you have found any bug, or would like to contribute to the project, feel free to open an issue or create a PR.

## Development

### Prerequisites

Replace all signing-related values in the Xcode project.

### Install project dependencies

```bash 
yarn install
cd ios
pod install
```

### Run the project

Start the metro bundler
```bash
yarn react-native start
```

Build the app and open it in an iOS simulator
```bash
yarn react-native run-ios
```
For more information check the official <a href="https://reactnative.dev/docs/environment-setup">React Native documentation</a>.

## License

The code of the project is published under MIT license. <br />
Icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
