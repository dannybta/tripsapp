# Local Deployment

Built with Node v19.2.0

Clone the repository in your PC
```
git clone https://github.com/dannybta/reactexpressapp.git
```

## Start App (latest build)
In your terminal , go to the app folder of this project and install dependencies

```
cd app
npm install
```
once all dependencies are installed, run
```
npm start
```

to open the app go to http://localhost:3001 in your browser


## Implement changes in React 

To implement new changes, change the files in the client folder and then build this new version

```
cd client
npm run build
```
You can also run the react app and express app concurrenty for development. Using two terminals

First terminal
```
cd app
npm start
```

Second terminal
```
cd client
npm start
```
