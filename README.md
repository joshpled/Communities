# Communities App
> Find local friends and start sharing your passions! Communities is a platform for social interaction that removes the ads and the personal sharing, implements an easy to use interface to create a community and share interests. More features to come! 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Future Developments](#future-developments)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General Info
Born out of a need to connect with locals who have similar interests without going to a big meet up that intimidates me. 

## Screenshots
<img src="https://i.imgur.com/8ivt2sU.png" alt="alt text" width="250px">
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
  document.querySelector("#modal").innerHTML = createCommunityModal; // required for modal of create community to work. See communities.js
});
```
## Features
* User accounts and associations
* Create Events
* Comments

## Future Developments
* Mobile Application (Progressive Web App | React Native)
* Firebase implementation

## Status
Project is: _in progress_, because it started as a school project and it's still in development.

## Inspiration

## License
Copyright (c) 2020 Joshua Perez Leduc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
Created by Joshua Perez Leduc
