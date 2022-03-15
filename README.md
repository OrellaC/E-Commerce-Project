<h1>View My Deployed Site <a href="https://ecstatic-meitner-a97cf3.netlify.app/">Here</a></h1>
<h1>View My Backend Repository <a href="https://github.com/OrellaC/updatedbackend2.git">Here </a></h1>

<h1>Description:</h1>
<p>This project is a demo website for a fake company I created called OrTech Web Builders. The company specializes in website building similar to companies such as Wix and Squarespace. The site is dedicated to selling businesses different website packages that include various APIs and CRUD applications to help them create functional user and business-friendly websites. </p>

<h3>Technologies Used: </h3>
<li>ReactJS</li>
<li>Bootstrap</li>
<li>SpringToolSuite</li>
<li>Postman</li>
<li>Postgresql</li>

<h3>API Utilization: </h3>
<p>I utilized a total of three APIs to create this site.</p> 
<ol>
<li>The first API utilized is <a href="https://fakestoreapi.com/">Fake Store API </a>. This API was used to render the items under the "shop" page. Users are able to add these items into their cart and then view them under the "cart" page.</li>
<li> The second API utilized is an <a href= "https://eva.pingutil.com/">email verification API </a>. This API can be found on the "coupon" page. Its purpose is to verify the email addresses of users. The API validates whether or not a provided email address is a webmail or not. If the provided email is not a webmail then users are not able to view the coupon code until they provide a valid email. This is to prevent users from using temporary email sites such as https://www.mohmal.com/en</li>
<li> The third API utilized is a <a href="https://ip-api.com/">geolocation API </a>. This API tracks the location of the current site user. Its purpose is to help business owners locate the region of their target demographic so that they are better able to create advertisements and other promotional material.</li>
</ol>

<h3>Approach Taken:</h3>
<p>The front-end portion of this project took me a total of 12 days to complete. The back-end portion took me 11 days to complete. This was my first time working with APIs in this capacity and creating my own CRUD applications. I am very proud of the outcome. All of the code was written by me. When I got stuck working on a certain code block or function, I reached out to my instructors (Teo and Manara) for assistance. I also created the graphic designs featured on the entirety of the the site by using the graphic design website <a href="https://www.canva.com/"> Canva</a>.</p>


<h3> Challenges and Unsolved Issues: </h3>
<ol>
<li> One issue I encountered while creating this project was with the geolocation API. It wasn't until I deployed my site via netlify that I realized the API is HTTP and not HTTPS. Therefore, it is not as secure as HTTPS and only accessible through the local host. In order to make this API feature safe and accessible for all my site users, I will look into buying the paid version of this API which is HTTPS secured or look into using a different API that serves the same purpose </li>
<li>Creating the backend portion of my site was quite challenging. It was my first time creating such a large project using Java. In addition, it was also my first time using SpringToolSuite. I had to delete the application a few times and also change my folder structure in order to get the application to run. </li>
</ol>

<h3>Future Plans for Project:</h3>
<p> I would like to integrate more APIs into this site in order to make it more appealing to potential business owners. For example, I found an API that calculates sales tax based on the user's provided zip code. Due to time restrictions I was not able to implement it. However, I feel that it would be a great addition to future versions of this project. I would also like to make the backend portion of my site more dynamic. Specifically, I would like the information submitted by users to be sent to the company who the site belongs to so that they can access the information.</p>
