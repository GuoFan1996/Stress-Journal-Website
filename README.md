#Stress Journal Website#
The Stress Journal Website is a web application that provides users with valuable tools to effectively manage and reduce stress in their daily lives. The website will allow users to record their daily stress journal which will contain:
1. Date and time.
2. Stress level.
3. Stress triggers.
4. Emotional and experiential description.
5. Strategies and techniques.
6. Success and reflection.
The data of the website will store in and come from MongoDB, which will store user-generated content, such as personal daily post, success stories, and recommended stress-relief techniques. Users will be able to create accounts, log in, log out and record and access their daily stress journal. The goal of this project is to create a supportive online platform that empowers individuals to take control of their stress and improve their overall well-being.

##Key Features##

- User Authentication: Users can create accounts, log in, and log out.
- Compose Today's Journal: Users can write and save their daily stress journal entries.
- Review All Posts: Users can view all the posts from the stress journal.
- User Interface: The website has a user-friendly interface with responsive design.

##Tech Stack##

The Stress Journal Website is built using the following technologies:

- JavaScript
- HTML
- CSS
- Express.js
- MongoDB
- EJS (Embedded JavaScript)
- Bootstrap

##Installation and Running##

To install and run the Stress Journal Website, follow these steps:

1. Download the project file to your local machine and unzip it.
2. Open the terminal and navigate to the project directory.
3. Run the command `npm install` to install the necessary dependencies.
4. Start the MongoDB server.
5. Run the command `node app.js` to start the application.
6. Open a web browser and access the website at `http://localhost:3000`.

##Directory Structure##

The directory structure of the Stress Journal Website is as follows:

- `app.js`: The main entry point of the application.
- `models`: Contains the database models and schemas.
- `modules`: Includes various modules and utilities used in the project.
- `views`: Contains the EJS templates for rendering the views, including the partials folder for reusable components.
- `routes`: Contains the route handlers for different endpoints.
- `public`: Includes the static assets such as images, scripts, and stylesheets.
