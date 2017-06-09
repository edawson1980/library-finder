_"When I read about the way in which library funds are being cut and cut, I can only think that American society has found one more way to destroy itself."_

_–Isaac Asimov_

<img width="600" height="600" alt="screen shot 2017-06-09 at 1 31 59 pm" src="https://user-images.githubusercontent.com/16961196/26987118-52843b5e-4d18-11e7-8ff2-fa652b79e93a.png">

# BookWorm

BookWorm is a React app that aims to make reading material more accessible.  Specifically, it is comprised of two parts...Where To Read and What To Read.


## Where To Read

  This section provides the user with a complete list of all the branches in the DC Public Library system, along with a map and hours of operation.

## What To Read

  This section provides the user with a method to search for books online.  Once the search results are returned, a link takes the user to that book's entry in the GoogleBooks db.  From there we are able to preview, purchase, or download a copy.  We are also able to search for the book in brick-and-mortar library systems.

### Additional Resources

  The aim of this project is get more people reading, and to that end the user will also find information on getting a library card in DC, and a list of local book sellers in the area.


#### Technologies Used

  This was built entirely in React, and styled using Bulma.  All Axios calls went to external APIs.  In order to run this on our machines, we will need to install Bulma as a dependency (in package.json).  We will also need to install Axios and React-Router.

  The installation process for all of these is:
   - navigate to the library-finder directory in your terminal.

   then (one at a time):

  $ npm install --save bulma

  $ npm install --save axios

  $ npm install --save react-router

#### User Stories

**MVP:**

-The user will be able to select a DC Public Library from the drop-down menu.

-The user will be able to get location information for selected library, including use of Google Maps.

-The user will be able to search books by title, author, or ISBN.

-The user will return results for book searches that provide information on where to find the books online for download.

-The user will be able to find resources on how to obtain a DC Public Library card.


**Silver:**

-The user will be able to browse a list of bookstores.

**Gold:**

-The user will be able to discover which libraries have their book in stock.


#### Wireframes
(there are a couple of different iterations)

the most recent one:

[Imgur](http://i.imgur.com/UB9xEvN.jpg)

the original:

[Imgur](http://i.imgur.com/hnQh7qV.jpg)

#### Unsolved Problems/Major Hurdles

There are plenty of features I wish I had been able to add.  I intend to get them up and running by the Showcase.  I also wish that my styling were a little more sleek, but for now it'll do.

This final project knocked me around a little bit.  As of this writing, I've had two hours of sleep since Wednesday morning.  I have a lot of improvements that I want to make over the coming weeks, but overall I'm very satisfied with where I ended up.  This was a challenge, and I think I met it head on.
