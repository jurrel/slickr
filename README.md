# Table of Contents
1. [Welcome to Slickr](https://github.com/jurrel/slickr#Welcome-to-Slickr)
2. [Technologies](https://github.com/jurrel/slickr#Technologies)
3. [Relevent Documents](https://github.com/jurrel/slickr#Relevent-Documents)
4. [Navigating through website](https://github.com/jurrel/slickr#Navigating-through-the-website)
5. [Running website on local machine](https://github.com/jurrel/slickr#Running-website-on-local-machine)

## Welcome to Slickr
Slickr is a web application inspired by flickr [https://kindoflikeflickr.herokuapp.com/]

## Technologies
- Express.js
- Sequelize
- PostgreSQL
- React
- Redux
- Node.js
- CSS

# Relevent Documents
[Database Schema](https://github.com/jurrel/slickr/wiki/Database-Schema)

# Navigating through the website
## Landing Page
Upon entering the website, you will enter the landing page. The landing page changes photos every 5 seconds.
![LandingPage1](https://user-images.githubusercontent.com/41484889/130314705-881510c4-c6e9-4bff-9ee7-bca7f24a7326.PNG)


If you want to go directly to the website contents, click the `Log In` button. From there you will be presented with this page. 
[login](https://user-images.githubusercontent.com/41484889/130314604-de6f4b38-229a-4815-a29a-b96b8f07e679.PNG)
Click `Demo User` and you'll be able to expierence the full website.


If by chance, you wanted to create your own account, you can click the `Sign Up` button or the `Start Adventure` button.
![Sign up page](https://user-images.githubusercontent.com/41484889/130314510-8598640e-85eb-43e0-9ce6-ba3a70c5b17b.PNG)


![homes](https://user-images.githubusercontent.com/41484889/130314860-4c4a76c7-8ce1-4d16-b8c1-e852928bdc21.png)
All photos that get posted by members show up on this page. Hovering over the photos allows you to see the title of the photos. 

If a photo catches your interest, you're able to click the photo and find out more information about who posted it and what the community has to say about it
![as](https://user-images.githubusercontent.com/41484889/130314977-728c5959-585c-4838-adf6-27fdb08b4f0a.PNG)
If you happen to be the owner of the photo a `Delete Photo` and an `Edit Photo` button will appear. If you're not the owner, you will just be able to read and post comments.

Clicking the `Slickr` button allows you to go back to the home page at any time. 

The `Profile` button allows the user to see all the photos they have posted. 
![Profile](https://user-images.githubusercontent.com/41484889/130314903-71642e99-e0d0-4761-98a4-2b3d4e59ebe8.PNG)

The `Cloud with an arrow` button allows the user to their their own personal photos with the community
![uploadd](https://user-images.githubusercontent.com/41484889/130314945-01cfd7e0-865d-4fc7-bf84-5847706f3875.PNG)


# Running website on local machine

## Requirements: 
  * Node.js
  * PostsgresQL 

Warning: Make sure you have no processes running on port 5000 or you will run into issues. To check if you have anything running in port 5000, you can run this command
```bash
sudo lsof -PiTCP -sTCP:LISTEN
```
If you see this `*:5000 (Listen)`, it means you have something running in port 5000. To terminate it, you need to run 
```bash
kill -9 [PID number]
```
* Do not include the `[]` 
  * Ex. `kill -9 12457`

1. Go to your Bash (Unix shell) and type in 
```bash
git clone https://github.com/jurrel/slickr
```
2. cd into the main folder
```bash
cd slickr-main
```
3. Install the dependencies
```bash
npm install
```
4. Create a `.env` file in the root of the `frontend` folder. There should be an file called `.env.example`. You can take the contents in there and post it into the `.env` 
```
PORT=5000
DB_USERNAME=slickr_app
DB_PASSWORD=password
DB_DATABASE=slickr_app_db
DB_HOST=localhost
JWT_SECRET=secret 
JWT_EXPIRES_IN=604800
```
5. Create a username in PSQL. If you just copied and pasted the lines from the `.env.example` file, you can post this code directly onto your terminal. 
```bash
psql -c "CREATE USER slickr_app PASSWORD 'password' CREATEDB"
```
6. Migrate the database 
```
npm run sequelize db:create
npm run sequelize db:migrate
npm run sequelize db:seed:all
```
7. Start backend server 
```bash
npm start
```
8. Open a new terminal (make sure you keep the backend server terminal running). `cd` into the frontend folder and run this command
```bash
npm start
```
* `npm start` should be running on the backend on a terminal
* `npm start` should be running on the frontend on another terminal
  * both terminals should be running simultaneously 

 
