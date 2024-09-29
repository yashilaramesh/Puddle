# Puddle

## Inspiration
With the recent Hurricane Helene coming through Atlanta (and therefore Georgia Tech), there have been a lot of blocked drains and large bodies of water blocking roads and walkways around campus. Outside of Georgia Tech, there have also been fallen trees and general flooding that has closed off many roads around the city. This is inconvinent for people trying to travel around the city but having their usual roads blocked off by flooding.

Not only that, if you ever took a stroll around Georgia Tech's campus, you notice that construction is everywhere. If you walk to the Campus Recreation Center to get some exercise in, you'll see the piles of construction material blocking half the road. If you ever go to a Yellow Jacket football game, you'll see half of Techwood Drive blocked off by construction at part of the stadium. However, **there is no software for students and faculty to see all the current construction happening**, which is really inconvinent as you try to get to your 8 AM class the normal route only to find out it has been blocked by construction.
## What it does
Puddle allows students and faculty to upload reports of current construction, road blockages, or flooding happening around the Georgia Tech campus. Users can put in an address, description, select what the obstruction is, and optionally add an image. Users can also see all the reports that people have submitted and view their locations on a map of the campus.

There is also an admin portal where staff can mark when the reports get resolved. They can update the current status of the report and remove any reports by resolving them.
## How we built it
We built Puddle using the **MERN stack** (MongoDB, ExpressJS, NodeJS) to manage data and API interactions. We integrated the **Google Maps API** for geolocation and reporting, with **CORS** handling cross-origin requests. The backend was tested with **Postman** to ensure robust API functionality. On the frontend, we used **TypeScript**, **HTML/CSS**, and **JavaScript** for creating responsive interfaces, allowing users to report blockage issues and upload media. Reports are dynamically displayed with real-time updates. This setup provides a seamless user experience for both users and admins managing the reports.
## Challenges we ran into
- Setting up the MongoDB integration with the frontend was one of our main challenges. We ran into a lot of issues with the report form returning 500 Server errors and other bugs. We had to make sure our backend MongoDB server and the frontend HTML were integrated properly.
- Posting the reports to a Google Maps page was complex - we had to convert addresses to latitude/longitude coordinates, and we also had to display the coordinates on a live Google Map.
- We ran into a few issues with Git control at the beginning of our project that was quickly worked out.
## Accomplishments that we're proud of
- We're proud to develop a tool that allows students and faculty to view construction and blockages around campus, along with developing a system where users can report blockages themselves for others to view, reducing inconvinences in travel.
- We successfully integrate the entire MERN stack with a frontend
- We use the Google Maps API to display reports from users in real time.
## What we learned
- We learned that it is important to make sure there is proper Git control within our repository.
- There was a slight learning curve on integrating the MongoDB with the frontend TypeScript, which required us to look through numerous pages of documentation.
- Formatting the reports in a way that was readable to both the server and the user was an issue that seemed minor but ended up taking more time than we expected.
## What's next for Puddle
- We want to add an integration that allows users to allow us to track their location so they do not have to enter in a precise address.
- A larger feature we could add is a forum board, where users can discuss each individual report made.
- We could also update the admin dashboard to have more features, such as a page where admins can respond to reports from users asking for more information or clarification.
