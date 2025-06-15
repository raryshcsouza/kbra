# kbra

## Exercise

### Requirements:
1. Use Node.js.
2. Create an Express server.
3. Create 3 endpoints:
    - **GET**: `person/:id`
    - **POST**: `person/list`
      - This should have the ability to filter the data by `firstName` or `lastName`. Do not worry about pagination.
    - **POST**: Insert a new person into the array.
4. Include unit tests for each endpoint.

### Dataset:
```json
[
  { "id": 1, "firstName": "Mickey", "lastName": "Mouse" },
  { "id": 2, "firstName": "Donald", "lastName": "Duck" },
  { "id": 3, "firstName": "Minnie", "lastName": "Mouse" },
  { "id": 4, "firstName": "Daisy", "lastName": "Duck" },
  { "id": 5, "firstName": "Pluto", "lastName": "Dog" },
  { "id": 6, "firstName": "Chip", "lastName": "Chipmuck" },
  { "id": 7, "firstName": "Dale", "lastName": "Chipmuck" },
  { "id": 8, "firstName": "Olive", "lastName": "Oil" },
  { "id": 9, "firstName": "Bruce", "lastName": "Wayne" },
  { "id": 10, "firstName": "Peter", "lastName": "Parker" },
  { "id": 11, "firstName": "Clark", "lastName": "Kent" },
  { "id": 12, "firstName": "Loise", "lastName": "Lane" },
  { "id": 13, "firstName": "Luke", "lastName": "Skywalker" }
]
```

---

## Steps to Run the Project

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd kbra
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server**:
    ```bash
    npm start
    ```

4. **Run unit tests**:
    ```bash
    npm test
    ```

5. **Node.js Version**:
    Ensure you are using **Node.js version 20**.
