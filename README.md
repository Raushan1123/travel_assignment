**Travel Booking Application**

A full-stack travel booking application that allows users to create trip details and view them on an admin page. The frontend is developed using React.js and Chakra UI, while the backend is built with Node.js, Express.js, MongoDB, and Mongoose.

Table of Contents

  Installation
  
  Features
  
  Usage
  
  API Reference
  
  License
  
  Acknowledgments

Installation

Prerequisites:-

Before proceeding with the installation, ensure you have the following installed on your system:

Node.js (https://nodejs.org/)

MongoDB (https://www.mongodb.com/)

Steps:-
Clone the repository:
git clone https://github.com/Raushan1123/travel_assignment.git

# Install backend dependencies

cd ./Backend

npm install

Set up environment variables:

Create a .env file in the server directory and add the following:

MONGO_URL = mongodb+srv://raushan00567:plYGXzC2A3ul5jKr@cluster0.jdgnwed.mongodb.net/?retryWrites=true&w=majority

PORT = 7769

# Install frontend dependencies

cd ./Frontend/travel-details

npm install

Set up environment variables:

Create a .env file in the server directory and add the following:

REACT_APP_MAP_API_KEY = "pk.eyJ1IjoicmF1c2hhbjExMjMiLCJhIjoiY2xranlqamprMGFnODNpcXpscThuOHRlZCJ9.UXV0V71gDAH5qTgp_iTLtw"

# Start the frontend

cd ./Frontend/travel-details

npm start

# Start the backend

cd ./Backend

npm start

The application will be accessible at http://localhost:7769/travelinfo/ in your browser.

Features

User-friendly form to create trip details with name, phone, city destination, trip date, and trip budget etc.
Integrated phone validation to ensure valid phone numbers are entered.
Utilizes the GetCity API to provide autocomplete suggestions for city destinations.
Admin page secured with credentials to view all trip details filled by different travelers.
Usage

Create Trip: On the home page, fill out the form with your trip details, including name, phone, city destination, trip date, and trip budget etc. Click the "Submit" button to create the trip.

Admin Page: To access the admin page, click on Trip Details present on Navbar and enter the credentials when prompted. Use the following credentials for demonstration purposes:

Username: user1, Password: pass1
Username: user2, Password: pass2
Once logged in, you can view all the trip details filled by different travelers.

API Reference

Endpoints

POST /api/travelinfo/: Create a new trip with the provided details.

GET /api/travelinfo/: Get all trip details.

Request Body (POST /api/travelinfo)

json
{
          "Name": "Ravi2",
          "Email": "ravi@ravi2.com",
          "Phone": "8938736000",
          "Destination": "Mumbai",
          "No_of_travellers": 3,
          "Interests": "Heritage & Culture",
          "Budget": 2000,
          "Trip_Duration": 3,
          "Trip_Date": "2023-10-26T12:00:00",
          "Planning_Stage": "Definitely traveling, need destination expertise"
}

Response (GET /api/trips)

json
[
    {
        "_id": "64c360ccf6b475dcffafedaf",
        "Name": "Ravi",
        "Email": "ravi@ravi.com",
        "Phone": "8938736382",
        "Destination": "Singapore",
        "Interests": "Adventure & Outdoors",
        "No_of_travellers": 2,
        "Budget": 5000,
        "Trip_Duration": 4,
        "Trip_Date": "2023-08-26T06:30:00.000Z",
        "Planning_Stage": "Still dreaming/researching",
        "__v": 0
    },
    {
        "_id": "64c3612cf6b475dcffafedb2",
        "Name": "Ravi2",
        "Email": "ravi@ravi2.com",
        "Phone": "8938736000",
        "Destination": "Mumbai",
        "Interests": "Heritage & Culture",
        "No_of_travellers": 3,
        "Budget": 2000,
        "Trip_Duration": 3,
        "Trip_Date": "2023-10-26T06:30:00.000Z",
        "Planning_Stage": "Definitely traveling, need destination expertise",
        "__v": 0
    }
]

License

MIT License

Acknowledgments

The project was inspired by the idea of creating a user-friendly travel booking application.
Special thanks to the creators and maintainers of React.js, Chakra UI, Node.js, Express.js, and MongoDB for their excellent frameworks and tools.
For any questions or feedback, feel free to contact us at raushan00567@gmail.com

Future Perspectives:-

I am making changes to modify admin page to filter out the results based on the trip date, budget, number of travellers and other fields so that a large data can be managed easily.
