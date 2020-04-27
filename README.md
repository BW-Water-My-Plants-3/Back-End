# Back-End

# <WATER MY PLANTS - Build Week>
## Table of Contents
- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>
## <a name='overview'></a>Overview
This database allows users to register, login, and add their houseplants as plant objects to make it easy to track when to water which plant.
## API Endpoints
### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/signup | username, password, phoneNumber | N/A | Creates a new user object in the database. |
POST | /api/login |  username, password | N/A | Returns message "login successful" and JSON Web Token. |
### Events
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/events | N/A | N/A | Returns an object of all the events in the database. |
GET | /api/events/:organizer | N/A | N/A | Returns a singular event object based on ID. |
POST | /api/events | Title, Date, Time, Location | Description, Link, Image, approved | Allows users to post brand new events to the database. |
### Events (non-admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
DELETE | /api/events/:id | N/A | N/A | Allows users to delete their OWN events. |
PUT | /api/events/:id | Title, Date, Time, Location | Description, Link, Image, approved | Allows users to edit their OWN events. |
### Events (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
DELETE | /api/admin/:id | N/A | N/A | Allows admins to delete ANY event. |
PUT | /api/admin/:id | Title, Date, Time, Location | Description, Link, Image, approved | Allows admins to edit ANY event. |
### Going
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/going | N/A | N/A | Returns a list of all event confirmations (which users confirmed which events they are going to). |
POST | /api/going | event_id | N/A | Allows users to confirm which events they are going to (MUST PROVIDE THE EVENT ID NOT THE EVENT NAME). |
### Users (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/admin/users | N/A | N/A | Allows an admin to see a list of all the users in the database. |
## Credits
### Project Manager
Vick Javariz: https://github.com/javavick
### User Interface
Teagan Keith: https://github.com/Teagankeith
### Frontend
Ben Simpson: https://github.com/TheTechSurgeon <br>
Rachele Edwards: https://github.com/berachele
### Backend
Katya Pavlopoulos: https://github.com/kp1129
Wesley Ruedebusch: https://github.com/wesley-ruedebusch