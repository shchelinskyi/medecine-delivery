# Medicine Delivery App

## Test deploy pages:

### Api:
https://medecine-delivery.onrender.com/api/pharmacies

### Client:
https://next-medicine-delivery.vercel.app/

###   The Medicine Delivery application provides users with the ability to access information about the prices of various medications from different online pharmacies, place orders for these products, and also add items to favorites. The application consists of both server-side and client-side components.




## Server Side

### The server-side of the application is built using:
* Node.js
* Express.js
* MongoDB for the database. 

## Getting Started

To get started with Notes manager Api, follow the steps below:

### Prerequisites

* Node.js (version 14.0 or higher) must be installed on your machine.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Navigate to the api directory (`cd api`).
4. Run `npm install` to install all dependencies.
5. Run `npm run dev` to start the development server.
6. The server will be launched on port 3001 (http://localhost:3001).

### Get all pharmacies
Method GET<br>
http://localhost:3001/api/pharmacies

### Get all products
Method GET<br>
http://localhost:3001/api/products

### Get all inventories
Method GET<br>
http://localhost:3001/api/inventories

### Get products by current pharmacy
Method GET<br>
http://localhost:3001/api/inventories/:pharmacyId/products

### Get products by current pharmacy (sort by price ascending)
Method GET<br>
http://localhost:3001/api/inventories/:pharmacyId/products/sortedUp

### Get products by current pharmacy (sort by price descending)
Method GET<br>
http://localhost:3001/api/inventories/:pharmacyId/products/sortedDown

### Get all orders
Method GET<br>
http://localhost:3001/api/orders

### Create order
Method Post<br>
http://localhost:3001/api/orders <br>
Body example <br>
{
"_id": "65e9e76a849a9a220d38cc24",
"orderDate": "07.03.2024",
"address": "Kyev",
"name": "Alex Fox",
"email": "test@gmail.com",
"phone": "380505512233",
"products": [
{
"product": "65e8722f6cbcfb37bf0401f8",
"price": 22,
"quantity": 1
}
],
"total": 107
}

## Client Side

### The client-side of the application of the application is built using:
* Next.js
* Ant Design
* Redux toolkit
* Yup
* Formik
* Axios
* TypeScript


### Installation

1. Navigate to the root directory of the project in your terminal.
2. Navigate to the client directory (`cd client`).
3. Run `npm install` to install all dependencies.
4. Run `npm run build` to build project.
5. Run `npm run start` to run App.
6. The server will be launched on port 3000 (http://localhost:3000)
 

## Features

    Access information about medication prices from various online pharmacies.
    Place orders for medications.
    Add medications to favorites for quick access.

## Technologies Used

    Node.js
    Express.js
    MongoDB
    Next.js
    Ant Design
    Yup
    Formik
    Redux Toolkit

## Contributors

    Artem Shchelinskyi - Developer

