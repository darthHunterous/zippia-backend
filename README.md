# Install dependencies
* `npm install`
* It will automatically install all dependencies located on package-lock file
* MongoDB needs to be installed and running at its default address (`localhost:27017`)

# Run the server
* To run the server, simply run the command:
    `npm start`
* Starts the server at `http://localhost:3000`

# API Documentation
* The API contains the following endpoints:
    * `GET /`
        * Basic info about the server and API version
    * `GET /urls`
        * Shows 20 of the shortened URLs in the database
    * `GET /urls/:shortURL`
        * Returns the long URL version (for redirect) based on the given shortened URL
    * `POST /urls`
        * Post a new URL to the database, creating a 24 hours short URL
        * Body must be a JSON containing a single `url` attribute, which must be valid
        ```json
        {
            "url": "https://google.com"
        }
    * `DELETE /urls/:shortURL`
        * Remove the given short URL from the database