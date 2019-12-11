# slow-server
Basic HTTP server that responds after a provided delay. Useful for testing network-monitoring functionality.

## Getting Started

Install dependencies and start the server.

```
$ npm i
$ npm run start
```

Make requests to `/` on port 3000. Use the `delay` query parameter to define how long the server should wait before responding.

```
$ curl localhost:3000/?delay=1000
slow-server responded after a 1000ms delay
```
