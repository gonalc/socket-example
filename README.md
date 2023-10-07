# Socket Example

This is a simple example of how could the library **Socket.io** be implemented with **React** and **NodeJS**.

> Socket is used to handle real time messages.

## Tech used

* [NodeJS](https://nodejs.org/es)

* [React](https://react.dev/)

* [Socket.io](https://socket.io/)

## How to run it

You will need to have running both the API and the frontend.

Run this command to start your API:

```sh
yarn start
```

Run this other command to start the frontend:

```sh
npm run dev
```

Now you can call the url `http://localhost:8080` and add any param to it. Those params will be sent as a JSON object to the frontend within the socket message.

Example:

```
http://localhost:8080?name=Peter&country=USA&car=Volvo
```

Once you enter that URL in your browser, an alert should be displayed on screen.

![](https://github.com/gonalc/socket-example/blob/master/video-to-gif-converter.gif)
