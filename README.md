# express-react-quickstart

This is a quick-start client/server app and using [React.js](https://reactjs.org/) and [Express.js](https://expressjs.com/)

![gif](https://media.giphy.com/media/1ffOwHDZehVb6JlRid/giphy.gif)

## Installation

```bash
git clone https://github.com/dudewheresmycode/express-react-quickstart.git
cd express-react-quickstart
yarn
```

This project uses [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to separate the `/client` and `/server` dependencies. Which allows us to install everything we need with one `yarn` command.

## Development

Now that everything's installed, we can start everything with the `develop` script.

```bash
yarn develop
```

This starts the React app in [development mode](https://github.com/facebook/create-react-app#npm-start-or-yarn-start), and the server with [`nodemon`](https://nodemon.io/) to watch for file changes. Easy right?


## Production

```bash
yarn build
```
This command will build the production bundle for the React app.


```bash
yarn start
```
This command will start the server.
