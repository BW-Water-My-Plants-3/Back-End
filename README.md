# Back-End

# WATER MY PLANTS - Build Week
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
POST | /api/signup | username (string), password (string), phoneNumber (10-digit string) | N/A | Creates a new user object in the database. On success, returns message "sign up successful" and newUser object with id and username. |
POST | /api/login |  username (string), password (string) | N/A | Logs in users who already exist in the database. On success, returns message "login successful" and JSON Web Token. If unregistered users try to log in, returns "invalid username or password" |
### Users
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
PUT | /api/users/:id | either password (string), or phoneNumber (10-digit string); or both | N/A | Updates the user with this id, and returns message "user updated successfully". |
### Plants
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/plants | N/A | N/A | Returns all the plants associated with this registered user |
GET | /api/plants/:id |  N/A | N/A | Returns plant object associated with this id |
POST | /api/plants | nickname (string), species (string), h2oFrequency (string) | image (string of the url) | Creates new plant object and returns it. |
PUT | /api/plants/:id |  at least one of the optional properties | nickname (string), species (string), h2oFrequency (string), or image (string of the url) | Updates the plant with this id, returns message "plant updated" |
DELETE | /api/plants/:id | N/A | N/A | Deletes the plant with this id from the database, returns message "plant deleted" |

## Credits
### Project Manager
Vick Javariz: https://github.com/javavick
### User Interface
Teagan Keith: https://github.com/Teagankeith
### Frontend
Ben Simpson: https://github.com/TheTechSurgeon <br>
Rachele Edwards: https://github.com/berachele
### Backend
Katya Pavlopoulos: https://github.com/kp1129 <br>
Wesley Ruedebusch: https://github.com/wesley-ruedebusch