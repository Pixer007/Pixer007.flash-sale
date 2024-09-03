Flipzon Flash Sale API
Overview
The Flipzon Flash Sale API is a backend service for managing flash sales in an eCommerce platform. It handles sales creation, product inventory management, and user transactions, with robust features to ensure smooth operation and performance under load.

Getting Started
Prerequisites
To run this project locally, you'll need:

Node.js: Ensure you have Node.js (v14 or later) installed on your machine. You can download it from nodejs.org.

MongoDB: You'll need MongoDB installed and running. You can download it from mongodb.com or use a cloud-based MongoDB service like MongoDB Atlas.

Installation
Clone the Repository

bash
Copy code
git clone (https://github.com/Pixer007/Pixer007.flash-sale)
cd flipzon-flash-sale
Install Dependencies

Run the following command to install the necessary npm packages:

bash
Copy code
npm install
Configuration
Environment Variables

Create a .env file in the root directory of the project with the following content:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/flipzon
PORT=5000
Adjust the MONGO_URI if you are using a different MongoDB URI or if you are using MongoDB Atlas.

Running the Application
Start the Server

Run the following command to start the server:

bash
Copy code
npm start
The server will start and listen on port 5000 by default. You can change the port by modifying the PORT variable in the .env file.

Access the API

The API will be accessible at http://localhost:5000. You can test the endpoints using tools like curl or Postman.

API Endpoints
Create a Sale

Endpoint: POST /sales

Request Body:

json
Copy code
{
  "product": "productId",
  "start_time": "2024-09-10T00:00:00Z",
  "end_time": "2024-09-11T00:00:00Z"
}
Purchase a Product During a Sale

Endpoint: POST /sales/:id/purchase

Request Body:

json
Copy code
{
  "userId": "userId",
  "quantity": 1
}
Testing
Unit and Integration Tests

The project includes tests for various endpoints and functionality. You can run the tests using:

bash
Copy code
npm test
Load Testing

To perform load testing using Artillery, create a test script (e.g., test-script.yaml) and run:

bash
Copy code
artillery run test-script.yaml
Ensure Artillery is installed globally:

bash
Copy code
npm install -g artillery
Contributing
Feel free to contribute by submitting pull requests. For any issues or feature requests, please open an issue on the GitHub repository.

License
This project is licensed under the MIT License. See the LICENSE file for details.
