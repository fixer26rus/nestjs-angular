# Angular NestJS Universal ( Server Rendering )

- src/client <-- Angular 9+
- src/server <-- NestJS
- src/shared <-- Shared between apps

 <a href="https://angular.io" target="blank"><img height="155px" src="https://angular.io/assets/images/logos/angular/angular.svg" /></a>
 <a href="http://nestjs.com/" target="blank"><img height="155px" src="http://kamilmysliwiec.com/public/nest-logo.png#1" alt="Nest Logo" /></a>

### Included

- REST API
- WebSockets
  
### Install

```bash
npm install
```

### Development

* Development port is on: 4200 ( inherited from angular-cli )

**in development, every controller ( route ) from NestJS must be mapped in proxy.conf.json**

```bash
npm start
```

Don't forget to Lint and Prettify your code from time to time:

```bash

npm run client:lint
npm run server:lint

npm run prettify

```


### Production

* Production port is specified in .env ( default to 5400 )

```bash
npm run build:universal
```

```bash

# test production

npm run serve:universal
```


### Static asset directory

```bash
src/client/assets
```
