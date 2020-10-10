# CS3219 OTOT Assignment Task B

## a. Set up to run project locally
1. Clone project to local machine
2. Go to root of project directory
3. run `npm install` in your terminal
4. run `npm run install-client` in your terminal
5. run `npm run install-server` in your terminal

## b. Run project locally
1. Follow instructions to set up project on local machine from above _(section a)_
2. run `npm start`

- [x] Frontend application should be running on *http://localhost:8080*
- [x] API should be running on *http://localhost:4000*

## c. Run test locally
1. Follow instructions to set up project on local machine _(section a)_
2. run `npm run test` on root of project directory

- [x] Mocha testing should start running

## d. Access deployed API on a serverless service (Google Cloud Function)
**Deployed API links:** 
1. Main page: *https://us-central1-cs3219-otot-taskb.cloudfunctions.net/cs3219-otot-function*
2. Subpage: *https://us-central1-cs3219-otot-taskb.cloudfunctions.net/cs3219-otot-function/api*
3. Contacts API page: *https://us-central1-cs3219-otot-taskb.cloudfunctions.net/cs3219-otot-function/api/contacts*

Refer to `master` branch of the project to view Travis deployment status

### Task B1: Running the API locally
Additional Requirements:
- [Postman](https://www.postman.com)

Instructions:
1. Refer to project set up on local machine _(section a)_
2. Refer to instructions to run project locally _(section b)_
3. Enter url as *http://localhost:4000/api/contacts* in Postman

>`GET` request <br />
>> Get all contacts <br />
>>url: *http://localhost:4000/api/contacts* <br />
>>
>> Get specific contact <br />
>>url: *http://localhost:4000/api/contacts/{contact_id}* <br />
>>contact_id: unique identifier of contact object

> `POST` request <br />
>url: *http://localhost:4000/api/contacts*
>>Submit request with the following fields <br />
>> `name` : String (required) <br />
>> `email` : String (required) <br />
>> `gender`: String - Female / Male (required) <br />
>> `phone`: 8 digits long (required)

> `PUT` request <br />
>url: *http://localhost:4000/api/contacts/{contact_id}* <br />
>contact_id: unique identifier of contact object
>>Submit request with the at least one of the fields <br />
>> `name` : String <br />
>> `email` : String <br />
>> `gender`: String - Female / Male <br />
>> `phone`: 8 digits long

>`DELETE` request <br />
>url: *http://localhost:4000/api/contacts/{contact_id}* <br />
>contact_id: unique identifier of contact object

### Task B1/B3: Accessing deployed API
Additional requirements to make REST API calls:
- [Postman](https://www.postman.com)

Instructions:
1. Refer to _section d_ to access API on google cloud function
2. Refer to task B1 guide above to make API calls but replacing the url as *https://us-central1-cs3219-otot-taskb.cloudfunctions.net/cs3219-otot-function/api/contacts* in Postman

### Task B2: Running test locally and via travis
Instructions:
1. Refer to _section c_ to run test locally

Refer to `localhost` branch of the project to view Travis status on automate testing

### Task B4: Set up frontend
Instructions:
1. Refer to _section b_ to setup and run frontend application
2. Enter *http://localhost:8080* on your browser

UI components:
- Navigate pages with the navigation bar
- View list of contacts on *http://localhost:8080/api/contacts* 
- Form to add/edit/delete contact on *http://localhost:8080/api/contacts*

#### Tech Stack
- Vue (Frontend)
- Mongodb (Database)
- NodeJS & ExpressJS (Backend)
- Google Cloud Function (Serverless Service)
- MochaJS (Test)
- Travis (CI/CD)


