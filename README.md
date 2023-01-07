
# RSS Fetcher App

The Application fetches data from the RSS feeds in the Backend and keeps updating its database every 2 minutes. On Client side we can see all these in the form of Articles.

## Features

- Used 'node-cron' package to keep making api requests from backend for articles from NDTV and Times of India of categories : 'Latest', 'India', 'Cricket' & 'Technology'.
- Used an API (https://rss2json.com/docs) to get RSS's XML nature converted to JSON.
- Storing only the Articles that are not already present in the Database.
- REST APIs created with ExpressJS for User Registration, Login and Account Info & for Articles of a particular 'Category' of news and from a particular 'Source'
- Used Mongoose as an adapter/driver between Server and MongoDB.
- User Authentication performed with help of libraries like 'bcryptjs' and 'jsonwebtoken'.
- 'client' folder contains all the Front end files and 'server' folder contains all the server side files.


## Screenshots

![App Screenshot](https://i.postimg.cc/NjgnXjcj/Screenshot-11.png)

![App Screenshot](https://i.postimg.cc/Hnzw1HP6/Screenshot-12.png)

![App Screenshot](https://i.postimg.cc/T11wh637/Screenshot-13.png)

## Installation

Clone the repository

```
git clone https://github.com/yadav-pratik/Rss-Fetcher.git
```
Install all the server dependencies

Go to the server directory

```bash
  cd server
```

Install Dependencies
```
npm install
```
And Start up the server by

```
node index.js
```

Install MongoDB Community Edition and run it by executing
```
mongod
```

Install all the client dependencies

Go to the client directory

```bash
  cd client
```

Install Dependencies
```
npm install
```

And Start up the Front end by

```
npm start
```

Note : Add the following environment variables for best experience.

1. SECRET_KEY (for JWT signing and verifying) 
2. BASE_URL : 'https://api.rss2json.com/v1/api.json'
3. ARTICLES_COUNT (no. of articles to get in one api call)
4. API_KEY

Visit the following link and Login to generate your api-key for the RSS to json API, and add your api-key inside the .env file.

```
https://rss2json.com/docs
```

## Authors

- [@yadav-pratik](https://github.com/yadav-pratik)


## Note

If you face any problem or have any suggestion on improving the code then feel free to raise an issue.