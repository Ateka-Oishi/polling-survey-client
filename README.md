# Website : InsightMint

Client Live Link : https://insightmint.web.app

Server Live Link : https://insight-mint-server.vercel.app

## Types of Users 
- **Admin**
- **User**
- **ProUser**

# Admin: Email:: oishi@admin.com
# Admin Password:: oishi@admin.com


## Q&A Sections
- Add at least 5 Project features of "InsightMint"

## Add at least 5 Project features of "InsightMint"

### Features :

- **Homepage:** Explore featured and latest surveys, understand how the platform works, and read testimonials.

- **Surveys Page:** View all surveys with filtering options.

- **Survey Details Page:** Participate in surveys, view results, like/dislike, and report inappropriate content.

- **Pricing Page:** Integrate payment system for pro-user membership.

- **User Authentication:** Allow users to create accounts with email/password and implement social media authentication.

- **Role Management:** Define user roles (user, surveyor, admin, pro-user) with different permissions.

- **Dashboard:** Customized dashboards for admins, surveyors, regular users, and pro-users with role-based access control.

## Access Control (Dashboard)
- **Admin:**
  - Manage users, change roles, and publish/unPublish surveys.
  - View payments of pro-users and survey responses.

- **Surveyor:**
  - Create/update surveys, view feedback, and survey responses.

- **User:**
  - Participate in surveys, like/dislike, and report surveys.

- **Pro-user:**
  - All user permissions plus commenting on surveys.

### Besides Other Features :
* There is error page 404 route.
* Our website is safe for users. As there is `logIn` & `registration section`. User Data will be saved.

## challenges I have faced for the Backend:
- **Admin Issue:** One issue I encountered was setting up the admin role. Initially, I faced a minor hurdle due to an oversight on my part. I manually added a `role` field with the value `admin` in the database collection named`users_collection`. Once rectified, the creation of the admin email and password proceeded smoothly.


## Technologies Used 
- **MongoDB:** NoSQL database for efficient and scalable data storage.

- **Express.js:** Web application framework for Node.js, providing a robust set of features for web and mobile applications.

- **React.js:** JavaScript library for building user interfaces, enabling the creation of interactive and dynamic frontEnds.

- **Node.js:** Server-side JavaScript runtime, allowing the execution of JavaScript code outside a web browser.

- **JWT for authentication:** JSON Web Token implementation for secure user authentication.

- **Other relevant libraries and tools:** (Please mention specific packages used in your project, such as Mongoose for MongoDB interaction, Axios for HTTP requests, etc.)

# Packages 
    "@headlessui/react": "^1.7.17",
    "@stripe/react-stripe-js": "^2.4.0",
    "@stripe/stripe-js": "^2.2.0",
    "@tanstack/react-query": "^5.8.6",
    "aos": "^2.3.4",
    "axios": "^1.6.2",
    "firebase": "^10.6.0",
    "moment": "^2.29.4",
    "qrcode": "^1.5.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^2.0.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.12.0",
    "react-loader-spinner": "^5.4.5",
    "react-preloaders": "^3.0.3",
    "react-share": "^5.0.3",
    "react-tabs": "^6.0.2",
    "recharts": "^2.10.1",
    "sweetalert2": "^11.6.13",
    "swiper": "^11.0.5"




* For installation of toast:
```bash
npm i react-toastify
```


# More about InsightMint
* First, run the development server:

```bash
npm run dev
```
* Open [http://localhost:5173/](http://localhost:5173/) with your browser to start your local instance of `InsightMint`.


# Deploy on Vercel & Firebase

# Client and Server Site CODE Link

- [Client](https://github.com/programming-hero-web-course1/b8a12-client-side-Ateka-Oishi) 

- [Server](https://github.com/programming-hero-web-course1/b8a12-server-side-Ateka-Oishi)

