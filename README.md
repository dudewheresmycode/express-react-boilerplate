# express-react-boilerplate

This is a quick-start client/server app and using [React.js](https://reactjs.org/) and [Express.js](https://expressjs.com/)

![gif](https://media.giphy.com/media/3orif144Rtgy2MxJNS/giphy.gif)

## Set Up

```bash
git clone https://github.com/dudewheresmycode/express-react-boilerplate.git
cd express-react-boilerplate
yarn
```

Now that everything's installed, we can start everything with one command:

```bash
yarn develop
```

This starts the React app [development mode](https://github.com/facebook/create-react-app#npm-start-or-yarn-start), and the server with `nodemon` to watch for file changes. Easy right?


This project uses [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to separate the `/client` and `/server` dependencies. Which allows us to install everything we need with one `yarn` command.
