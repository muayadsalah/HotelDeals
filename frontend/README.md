# Frontend
This is the source code for the front-end of the HotelDeals application.

## Running in Development Env 
In development, we can run the front-end server using `npm start`, which takes `proxy-config` option to redirect all API class which start with `\api` to the back-end server at `localhost:5000`.

## Preparing for Deployment 
Before pushing the application into Heroku, we need to do the following:
* Build front-end code: `ng build`
* Deploy script: `npm run deploy`, which is a custom node script that uses the `copyfiles` command to copy built files from `dist` folder into `../src/main/resources/static`.
