# Question Asking Platform - Server

<h2>MSbit Assignment</h2>

## Set Up:

```
Please make sure you have .env file that contains
MONGO_URI=mongodb://127.0.0.1:27017/question
PORT=3001(or any other port you preffer).

You can also use Mongo Atals instead.
```

## Available Scripts

In the project directory, you can run:

### `node index.js`

### `nodemon index.js`

Runs the app on localhost:3001

## Technologies

- Node.js
- JavaScript
- Express
- Mongoose
- Bootstrap

## Features

Clients can make https calls to create, get and update (trivia or poll) questinos.

### Prerequisites

* node.js</br>
* mongoDb</br>

## Getting Started

make sure Mongo server (mongod or atlas) is running.

## API
1. <b>getQuestion</b></br>
    - Post: http://localhost:8080/api/question/questionId
    
    - Response - Status 200(question):
   ```
        {
        "_id": "6595291cbc047cb92d8b2322",
        "question": "What is my name?",
        "answers": [
            {
                "answer": "David",
                "numberOfVotes": 3600,
                "_id": "6595291cbc047cb92d8b2323"
            },
            {
                "answer": "Shlomi",
                "numberOfVotes": 3600,
                "_id": "6595291cbc047cb92d8b2324"
            },
            {
                "answer": "Oren",
                "numberOfVotes": 3600,
                "_id": "6595291cbc047cb92d8b2325"
            },
            {
                "answer": "Avi",
                "numberOfVotes": 3600,
                "_id": "6595291cbc047cb92d8b2326"
            }
        ],
        "correctAnswer": 3,
        "__v": 0
    }
   ```
2. <b>getQuestions</b></br>
    - Get: http://localhost:3001/api/question </br>
    - Body:
     ```
     {
        "question": "What is my last name ?",
        "answers": [{
            "answer": "Levi",
            "numberOfVotes": 3600
            },
            {
            "answer": "Rosenfeld",
            "numberOfVotes": 3600
            } ,
            {
            "answer": "Cohen",
            "numberOfVotes": 3600
            } ,
            {
            "answer": "Tuchband",
            "numberOfVotes": 3600
            }       
        ],      
        "correctAnswer": 3
    }
    ```

- Response - Status 200(questions):
    ```
    array of questions
    ```
3. <b>createQuestion</b></br>
    - POST: http://localhost:3001/api/question </br>

    - Response - Status 200(questionsId):
    ```
    {
    "questionId": "65952aa6bc047cb92d8b232d"
    }
    ```

4. <b>voteAnswer</b></br>
    - POST: http://localhost:3001/api/question/questionId/answerNum </br>

    - Response - Status 200(numberOfVotes):
    ```
    {
    "numberOfVotes": Number
    }
    ```
   
## Next Steps:
- Use JWT (JSON Web Tokens) for secure transmission of user credentials and session information.
- Implement database indexing for faster query execution, particularly for getQuestions and getQuestion endpoints.
- Consider using database caching mechanisms to reduce the load on the MongoDB server and speed up response times for frequently accessed data.
