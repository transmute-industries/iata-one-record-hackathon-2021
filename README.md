# Proteus

> Digitized paper. Trusted parties. Verifiable data.

[![CD](https://github.com/transmute-industries/iata-one-record-hackathon-2021/actions/workflows/cd.yml/badge.svg)](https://github.com/transmute-industries/iata-one-record-hackathon-2021/actions/workflows/cd.yml)

### [Demo Video](https://www.youtube.com/watch?v=C-ggf17Jk84)

### [Presentation Slide Deck](https://docs.google.com/presentation/d/1B0VIPOb0R-0qs31xV9hsNi_Hr-A08EHUF41JEjmde2U/edit?usp=sharing)

### [Demo Application](https://iata-one-record-2021.transmute.industries/)

## Demo Instructions

### Carrier / Issuer Role

1. Print out the Bill of Lading Examples from [here](./public/sanitized-bols)
2. Go [here](https://iata-one-record-2021.transmute.industries/issue)
3. Focus the camera on the Bill of Lading Number, and click Scan.
4. Review the extracted credential data and click Issue.

### Consignee / Verifier Role

1. Print out a container number image
2. Go [here](https://iata-one-record-2021.transmute.industries/verify)
3. Focus the camera on the container number, and click Scan.
4. Review the resolved verifiable credential, click Verify, see console for details (needs more ux)

### General Navigation

Browse the organiations and documents which we have assigned decentralized identifiers and credentials, by using the sidebar.

## Built With

- [Decentralized Identifiers](https://github.com/w3c/did-core)
- [Verifiable Credentials](https://github.com/w3c/vc-data-model/)
- [vc.js](https://github.com/transmute-industries/verifiable-data)
- [did web](https://github.com/w3c-ccg/did-method-web)
- react
- [material ui](https://material-ui.com/)
- github
- [tesseract.js](https://tesseract.projectnaptha.com/)

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
