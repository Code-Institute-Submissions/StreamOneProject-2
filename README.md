# Trailer Park Boys Fan Page
 
## Overview
 
### What is this project for?
 
This is a fan page meant for Trailer Park Boy viewers. It is front-end only and has no server-side connection. This project is only for fun and has no actual ties to the Trailer Park Boys.
 
### What does it do?
 
Visitors can check on upcoming TPB tours, send a message to a member of the cast, and play a short trivia questionnaire to test their TPB knowledge.
 
### How does it work
 
This page uses Angular JS framework to construct the DOM. Angular controllers are used to store interactive functions for a Fan Mail Modal and Trivia game. 

Trivia: An array of answers is stored in the controller and called on from a directive, then passed through on an html page. When an answer is chosen and submitted, a counter initiates the next set of answers and questions. When the user gets an answer correct, the array of answers is randomized to prevent the correct answer becoming fixed on a single radio button.
 
## Features
 
### Existing Features
- Send fan mail (no backend implemented)
- Check upcoming tours and follow link to buy tickets
- Interactive multiple choice trivia

### Features Left to Implement
- Animations to make things look prettier
- Mobile accessibility
 
## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
    - **AngularJS** used to handle page routing, and build custom directives to handle trivia questions/answers
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** used to give the project a consistent and responsive overall layout
- [jQuery](https://jquery.com/)
    - **jQuery** used to pull data within the DOM to trigger a modal
- [npm](https://www.npmjs.com/)
    - **npm** used to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** used to manage the installation of libraries and frameworks
- [CSS Formatter](https://www.cleancss.com/css-beautify/)
    - **CSS Formatter** used to prettify CSS code
- [HTML Formatter](https://www.freeformatter.com/html-formatter.html)
    - **HTML Formatter** used to prettify HTML code

 
## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request