# EzDues_Draco

## Overview
The "No Dues Portal" is a centralized platform designed to streamline the process of clearing pending dues or obligations for students graduating from IIT Patna. This platform aims to digitize and simplify the administrative procedures, saving time and reducing bottlenecks.

## Problem Statement
The project addresses the need for a seamless clearance process covering various departments within the college for graduating students.

## Participants
- **Students:** Have individual accounts to request "No Dues" from concerned departments.
- **Departments:** Maintain digital records, approve/reject clearance requests, and issue "No Dues" certificates.
- **Admins:** Manage student accounts, resolve issues, and oversee the system's operation.

## Features
### Students
- Outlook-based user authentication.
- Comprehensive clearance checklist outlining necessary clearances, deadlines, and outstanding dues.
- Ability to upload payment proofs and pay fines through the portal.
- Email reminders for dues with approaching deadlines.
  
  
![Sign In using Outlook (1)](https://github.com/hemantchaurasia2004/EzDues_Draco/assets/115251521/176fc6fa-63ce-4376-9ec7-057223e99f66)


### Departments
- Dashboard displaying details of dues owed by students.
- Ability to add dues with details such as amount, reason, and damage proofs.
- Verification and approval of payment proofs.
- Auto-approval feature for students with no dues.

### Admins
- Username/password-based login.
- Bulk registration using Excel/CSV, assigning roles (BTech, MTech, PhD) and associated departments.
- Super admin panel for easy maintenance, adding new departments, editing student roles, and closing accounts of graduated users.
- Bulk addition of fines through Excel/CSV.

### Entity Relationship Diagram


![ezdues drawio](https://github.com/hemantchaurasia2004/EzDues_Draco/assets/115251521/6954e57f-db9c-4370-b4a6-e821b23bd314)


## Additional Features
- **Certificate Verification using Blockchain (ERC721):** Implemented ERC721 to create "No Dues" certificates as Non-Fungible Tokens (NFTs), ensuring authenticity and security.

## Usage
1. **Student:** Log in, complete the clearance checklist, upload payment proofs if necessary, and request "No Dues".
2. **Departments:** Review clearance requests, verify payments, and issue "No Dues" certificates.
3. **Admin:** Manage student accounts, oversee system operation, and utilize additional features like bulk registration and fine addition.

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up the MySQL database.
4. Start the server using `npm start`.

## Technologies Used
- Frontend: React.js, HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Blockchain: Ethereum (ERC721)

## Contributors
- [List of contributors]

## License
This project is licensed under [License Name].

## Acknowledgements
- [List of acknowledgements]

