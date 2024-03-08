# Project Setup Instructions

## Install Dependencies

1. **Project Setup:**

   - Open your terminal.

   - Install the required dependencies by running:

     ```sh
     npm i
     ```

   - Create a `.env` file:

     ```plaintext
     DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
     ```

## Running the Server

To run the server, use the following command:

```sh
npx ts-node index.ts
```

## Live Project

- You can check out the deployed project by visiting [this link](https://bitespeed-backend-jr2o.onrender.com).

## Sending Request

- To send the API request, use Postman. Send a POST request to https://bitespeed-backend-jr2o.onrender.com/identity and select JSON. For example:

  ```plaintext
     {
      "email":"abc@gmail.com",  
      "phoneNumber": "123456789"
     }
  ```
  

