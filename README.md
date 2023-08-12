![MUHAMMAD HAIKAL SHAHAB]([https://github.com/RevoU-FSSE-2/week-8-resyanac/assets/135514670/a50bbcf0-fec7-4eaf-86f5-1ffc0840d738](https://github.com/haikalshahab93/week-8-haikalshahab93))


# Financial Tracking REST API Server

processing api server tracking data using javascript, express js and also typescript.

## Features

- Create transaction details in the form of type, finance, details and cash.
- Can create data, add data, delete data, and update data

## Endpoints

The API provides the following endpoints for interacting with transactions and assets:

- `GET /api/v1/data/financialgetdata`: Retrieve a list of all transactions.
- `GET /api/v1/data/financialgetdata/{id}`: Retrieve details of a specific transaction.
-  `POST /api/v1/data/financialpostdata`: Create a new transaction.
- `PUT /api/v1/data/financialputdata/{id}`: Update details of a specific transaction.
- `PATCH /api/v1/data/financialpatchdata/{id}`: Partially update details of a specific transaction.
- `DELETE /api/v1/data/financialdeletedata/{id}`: Delete a specific transaction.

## HTTP Methods

- `POST`: Used for creating new transactions or assets.
- `GET`: Used for retrieving transactions or assets.
- `PUT`: Used for updating transactions or assets.
- `PATCH`: Used for updating partial of transactions or assets.
- `DELETE`: Used for deleting transactions or assets.

## Deployment
![DEPLOYMENT](https://github.com/haikalshahab93/week-8-haikalshahab93/blob/main/image/1.png)

This application  deployed using [Muhammad Haikal Shahab](  
[https://dull-jade-tam.cyclic.app](https://dull-jade-tam.cyclic.app/)) :

1. Sign up on Cyclic or your chosen deployment platform.
2. Connect your repository to the deployment platform.
3. Configure environment variables for database settings and other configurations.
4. Trigger a deployment. The platform will build and deploy your API server.

## TESTING

This application can be tested using POSTMAN
![POSTMAN](https://github.com/haikalshahab93/week-8-haikalshahab93/blob/main/image/2.jpeg)
