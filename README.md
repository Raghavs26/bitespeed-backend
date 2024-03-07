# Project Setup Instructions

## Install Dependencies

1. **Project Setup:**

   - Open your terminal.

   - Install the required dependencies by running:

     ```sh
     npm i
     ```

   - Create a `.env` file in the `backend` folder with the following variables:

     ```plaintext
     DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
     ```

     Be sure to replace the placeholders (`MONGO_URI`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`, and `MAPBOX_TOKEN`) with your actual configuration values.

     - `MONGO_URI` should be your MongoDB connection URI.
     - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, and `CLOUDINARY_SECRET` are for Cloudinary integration.
     - `MAPBOX_TOKEN` is for Mapbox integration.

## Running the Server

To run the server, use the following command:

```sh
npx ts-node index.ts
```

## Live Project

- You can check out the deployed project by visiting [this link](https://yelp-camp-26.onrender.com/).
