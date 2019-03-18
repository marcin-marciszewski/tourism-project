<h1>Discover the world</h1>

   The primary goal of the created website is to provide potential users with a wide range of tourist destinations and help them discover the most exciting places. We can find six vibrant cities on six different continents. There is New York with a unique mixture of cultures, London with its rich history, futuristic Tokyo,  jolly Rio De Janeiro,  Cape Town with its natural beaches and Sydney where you can enjoy excellent weather.
   Users can find all necessary information regarding attractions, places to stay and the best restaurants.  Integrated maps allow users to locate a particular place and see close neighborhood thanks to implemented Google Street View.
   
<h2>UX</h2>
The project's website was created to introduce potential customers to holiday destinations and focus their attention on interesting places which they can find there. The front page contains cards leading to maps with attractions, hotels, and restaurants in all of the cities. Those places are the most critical factor before deciding about the next vacations. 
User stories:
- A user who is looking for his next holiday destination can choose from a variety of potential places.
- A user who wants to check the availability of hotel rooms, the local restaurant, and entertainment, can visit maps linked to particular locations. 
- A user who wants to see the local area close to the chosen place can click on an icon and use the implemented Google Street View feature. 
- A user interested in getting more information about the company can visit the "About" link.
- A user who wants to get to know opinions from previous customers can visit the "Testimonials" link.

Pre-implementation mockups: 

http://tourism-project.tk/img/tourism%20mockup.pdf




<h2>Features</h2>

One page website allows the user to get familiar with the offer.
Clear and visible cards help users get necessary information about a particular place.
Maps created thanks to Google Maps API give a view to the local topography.
Usage of Google Street View provides a possibility to explore the neighborhood.
The app.js file is responsible for adding all visual effects making the website more visually attractive.

<h2>Technologies Used</h2>

Technologies Used:
- HTML
- JavaScript and JQuery
- SASS
- Bootstrap



<h2>Testing</h2>
The project has been tested on multiple browsers and devices. The HTML5 and CSS3 code have also been validated with C3W Markup Validator and C3W CSS Validator. Jasmine and Jasmine-Jquery were adopted for testing.

1. Browsing through the offer.<br> 
a) The front page containing the available offer is loading properly. All images, buttons, and descriptions are visible for the users.<br>
b) All links to the destinations were tested and working, leading to the subpages.<br> 
c) The front page was tested on many devices and resolutions to make sure that the content is adjusting to the particular screen size.<br> 
2. Checking a particular destination.<br> 
a) All links to the subpages with hotels, restaurants, and attractions were checked and working properly.<br> 
b) Maps are visible and all buttons for showing and hiding listing are functional.<br> 
3) Checking the neighborhood.<br> 
a) After clicking on an icon of a place a window is popping up allowing the user to see the neighborhood of the place he chose.<br> 
b) The window from the Google Street View has the right size and the center of the map is adjusting respectively.<br> 
4) Links in the navbar work correctly leading to the right places. <br> 
a) The "About" page is available and has the right structure.<br> 
b) The "Testimonials" page contains all cards with customers feedbacks.<br> 

Jasmine and Jquery-jasmine were used for testing the page and the result can be found here: http://tourism-project.tk/testing/spec/spec-runner.html<br> 

When you run the `index.html` file, visit:<br> 

http://URL.com/testing/spec/spec-runner.html<br> 

where <URL> can be http://localhost:8081/testing/spec/spec-runner.html<br> 

All test done by Jasmine check whether:<br> 

1) Click event on the buttons triggers redirection to linked subpages. <br> 
2) Navbar contains class "navbar".<br> 
3) Click event invokes "navbar-toggle" class.<br> 
4) Burger menu contains five tabs.<br> 
5) The front page contains 18 cars with places to visit.<br> 
6) All section for six cities have:<br> 
	a) right id and class "landing-text"<br> 
	b) have the right title<br> 
	c) have the right grid structure<br> 
7) Footer has correct grid structure and contains five social media icons.<br> 


<h2>Deployment</h2> 

The project was deployed on a hosting server and is possible to find under domain: http://touris-mproject.tk/index.html. The website is hosted on a private server which provides security and stability. 
The project is available on GitHub: 
https://github.com/szantilas87/tourism-project

<h2>Credits</h2>

<h3>Content</h3>
-Maps were created thanks to Google Maps API and Google Places API.

<h3>Media</h3>

-All photos used in this project were obtained from Google.com  and https://unsplash.com/.
 








