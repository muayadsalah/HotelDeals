# Hotel Offers Application
This is the setup instructions for the **Hotel Offers** application.

##Project Setup
####Prerequisits
- Java 8 or later
- NodeJS (for NPM)
- IDE (like IntelliJ Idea)

####Setup
- Download the code from Github
- Import project from IntelliJ
- Open terminal (from IntelliJ by `Alt + F12`), and run the command `mvnw.cmd clean install`
    - This will install all needed dependencies, and run the tests. Make sure this completes successfully.


## Running in development env 
####Back-end
We just need to run the application, no need for extra configuration.

Navigate the project files into `src\main\java\com\muayadsalah`, right-click on `HoteldealsApplication.java` and select Run.

######Verify
Watch the running logs for `Tomcat started on port(s): 5000`. 

After you see this log, go to the browser, and type the url: `localhost:5000/api/offers`. 

If this returned some JSON text, then the back-end is working fine.

####Front-end
In development, we can run the front-end server using `npm start`, which takes `proxy-config` option to redirect all API class which start with `\api` to the back-end server at `localhost:5000`.

######Verify
Watch the running logs for `webpack: Compiled successfully.`.

After you see this log, go to the browser, and type the url: `localhost:4200`.

This should display the front-end of the application.

*Note that in order to run the front-end and see the offers list, the back-end needs to be started.*
