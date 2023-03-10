# Introduction to application
This is a simple Node.js + EJS Instagram clone (mobile version)

# Setting up everything for running application in development enviroment

First thing you must do is install **Node.js** on your machine

## Dependencies

After pulling down the code from GitHub in each service run this command in your terminal

``` npm i ```

After that you will need to install nodemon globally or run the app with node

``` npm i -g nodemon ```

## Running your application

In order to run the app in dev environment run the command

``` npm run dev ```

Which will run the server using nodemon

## Host
Your server will be listening to requests on localhost:5000, in order to navigate there copy this path into your url

`http://localhost:5000`

# Using application

## Routes

Once you open your port 5000 the default route **http://localhost:5000/** will give you a list of posts. You can navigate to **http://localhost:5000/add-post** if you want access to form so that you can add posts.

