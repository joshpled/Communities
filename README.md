# Communities App
> Find local friends and start sharing your passions! Communities is a platform for social interaction that removes the ads and the personal sharing, implements an easy to use interface to create a community and share interests. More features to come! 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This is my Flatiron Bootcamp MOD 4 project. Born out of a need to connect with locals who have similar interests without going to a big meet up that intimidates me. 

## Screenshots
![](https://i.imgur.com/8ivt2sU.png)
![](https://i.imgur.com/0WYszvZ.png)
![](https://i.imgur.com/tpOt3Y6.png)


## Technologies
* Ruby on Rails - Ruby version 2.6.1 and Rails version 6.0.3 as API
* Javacscript - Node.js version 14.13.0
* PostgreSQL - version 12.4
* Bootstrap - version 4.5.3
* Ruby Gems: fast_jsonapi, faker, awesomeprint, puma, byebug, rack-cors, and bootsnap

## Setup
Fork and Clone then run:
```
rails db:create
rails db:migrate
// optional: rails db:seed
rails s
```

## Code Examples
```
const BASE_URL = "http://localhost:3000/api/v1/";
```

Inside index.js is the `BASE_URL` variable if you need to change it

```
document.addEventListener("DOMContentLoaded", () => {
```
```
  getAllCommunities(); //auto populates the list. If you didn't seed it, there should be nothing. Check console. 
```
```
  document.querySelector("#modal").innerHTML = sample; // required for modal of create community to work. See communities.js
});
```
## Features
List of features ready and TODOs for future development
* User accounts and associations
* Create Events
* Comments

To-do list:
* Create Comments
* Create Events

## Status
Project is: _in progress_, because it started as a school project and it's still in development. 

## Contact
Created by Joshua Perez Leduc