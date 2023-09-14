# HNGx CRUDE API

## Introduction

This is a simple API that allows users to create, read, update and delete data from a database. It is built with Node.js, Express.js and MongoDB.

## Installation

1. Clone this repository into your local machine:

```
git clone
```

2. Install dependencies

```
npm install
```

3. Create a .env file in the root directory and add the following:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/hngx_crude_api
```

4. Start the application

```
npm start
```

5. Use Postman to test the endpoints

## Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | /api/    | Create a new user |
| GET    | /api/:id | Get a single user |
| PUT    | /api/:id | Update a user     |
| DELETE | /api/:id | Delete a user     |

## Author

[Ibukun Alesinloye](https://twitter.com/highb33kay)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## E-R Diagram (Entity-Relationship Diagram)

+-------------------+
| Person |
+-------------------+
| - name: String |
+-------------------+

## Database Schema

    +-------------------+
    |       Person      |
    +-------------------+
    | - name: String    |
    +-------------------+

## API Documentation

[API Documentation](https://documenter.getpostman.com/view/28437007/2s9YC5xs43)
