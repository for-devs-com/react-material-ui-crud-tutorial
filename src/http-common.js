/*Initialize Axios for React Material UI HTTP Client
Let’s install axios with command: npm install axios.
Under src folder, we create http-common.js file with following code:*/
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

/*You can change the baseURL that depends on REST APIs url that your Server configures.

For more details about ways to use Axios, please visit:
Axios request: Get/Post/Put/Delete example*/