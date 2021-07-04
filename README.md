# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Description](#description)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
  - [yarn eject](#yarn-eject)
  - [yarn dev](#yarn-dev)
  - [Supported Browsers](#supported-browsers)
- [Netlify](#netlify)
- [Styled Components](#styled-components)

## Description

This is project demonstrated United States population via barchart with mock data (json data).

The library using for demonstrating barchart is AmCharts. However, it has some limitation in jest while running "yarn test". 

There is dropdown button located at the top-right corner, it executes a simple filter function for year.

There is a dummy dropdown show after 'App experience' called General. It potentially can fulfil a selection function.   

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn dev`

Run Netlify command and Launches the test runner in the interactive watch mode. 

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Netlify

This project host on the Netlify because the [api](https://opendata.transport.nsw.gov.au/node/601/exploreapi#!/default/tfnsw_addinfo_request) from NSW cannot directly use. 

We should build our own server end to obtain the data from the api endpoint.

More info about[netlify](https://docs.netlify.com/?_gl=1%2a1z10n4n%2a_gcl_aw%2aR0NMLjE2MjU0MzYwMDEuQ2p3S0NBand1SVdIQmhCREVpd0FDWFFZc2I5X3RDZGZUb0Nrc3pjRFZoTmEtYi1BTDNURkl1Z29ZOTd5c0pzSUU4STg4M3R6MkJxUmVCb0NFUG9RQXZEX0J3RQ..&_ga=2.207410771.1554942327.1625436001-551351660.1625049641&_gac=1.51634651.1625436001.CjwKCAjwuIWHBhBDEiwACXQYsb9_tCdfToCkszcDVhNa-b-AL3TFIugoY97ysJsIE8I883tz2BqReBoCEPoQAvD_BwE)

## Styled Components

The layout of the app is completed with styled-components library.

For example:

### `globalStyles.ts`

```ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family:"brandon-grotesque", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${color.background};
    }
    ...
`

```

More information for [Styled Components](https://styled-components.com/)
