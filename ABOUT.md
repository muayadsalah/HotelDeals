# Hotel Offers Application
In this application, I used many technologies in order to achieve the development stack. These technologies are described below.

I put the fron-end code in the same project as the back-end, so I can have better management over the application. Although in real and big applications, separating the back-end from its clients adds mote value.

# Technologies and Languages
The main frameworks I used are **Spring-boot** for the backend, and **Angular** for the front-end.
## Back-end Stack
#### Language: Java
I use Java, because simply I love it. I have many years of experience with Java, and I use it in a daily basis.

#### Framework: Spring-boot
Spring-boot makes it easy to configure and integrate many back-end components out-of-the-box.

My main back-end experience is with Spring-boot. And with every new Spring-boot project, I discover something new. That's why I enjoy working more and more on this framework. 

In the process of developing this application, I learnt more about *FeignClient*, which I used in place of the ordinary *RestTemplate*.

I also learnt how Spring provides the static content. In the past, I setup a standalone *nginx* server to provide the static content.

## Front-end Stack
#### Language: Typescript
The main language I worked with for the front-end is Microsoft's TypeScript.

Although my main experience in the front-end development is pure javascript, I picked Angular and TypeScript so this project can add more to me.

#### Framework: Angular
One year ago, I've been asked to do a POC on front-end technology selection. I created a small application on Angular, React and Vue. I liked Angular since then, and was not able to miss the chance of doing more with it.

What makes Angular special is that it is a framework, other than viewing library like react. This means its components are integrated and tested by the people working on it. Also, we don't need to choose between other libraries provided by the community, for example to do state management, or routing.
 
During the development of this application, I practiced Angular more. I can say that I doubled my experience with it and with TypeScript.

The most important thing I've learnt in Angular is while trying to make the HTTP calls, I wanted to connect everything together (filters, URL query parameters, offers list,...), so I did it using RxJs Observables. And that was the first time I work with *RxJS*. 

###### Complementary technologies
- html5
- css
- bootstrap
- NPM
- Angular-CLI
- RxJS

## Travis-CI
This GitHub repository is connected to *Travis-CI*, so each time I push changes, Travis builds the application and runs the tests.

Also, Heroku is connected with this repository, and it is configured for automatic deploys if the CI build was successful.

# Thoughts and Future Work
#### Resolved issues
- I noticed that the images of the hotels are in low resolution, and also noticed that we can get higher resolutions by changing the image url's suffix.
    - So I replaced the suffix from _t into _y for medium-sized images.
- During the front-end development, I wanted the filter to be reflected on the site's URL, so we can navigate into it later. This helps in case someone wanted to share/save the filter results for example.
    - I accomplished this using Angular router, and RxJS Observables.

#### For the future
In real applications, we need to account for the following points:
- API documentation: we need to implement some automatic API documentation like *Swagger*.
- Splitting the back-end from its clients. This gives the following strengths:
    - Microservice architecture design friendly.
    - Less coupled with one client type. 
        - In the future we might want to implement more clients or modify the current one.
    - Better management for API requests.
    - The back-end will not worry about providing the static content.
    - More scalable.
- Applying suitable UX, and styling for the front-end.