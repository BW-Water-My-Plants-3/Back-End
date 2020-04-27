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
POST | /api/signup | username, password, phoneNumber as a 10-digit string | N/A | Creates a new user object in the database. |
POST | /api/login |  username, password | N/A | Returns message "login successful" and JSON Web Token. |
### Users
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
PUT | /api/users/:id | either password, or phoneNumber as a 10-digit string | N/A | Returns message "user updated successfully" |

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