import  { cleanEnv, port, str } from 'envalid';
require('dotenv').config();

export default cleanEnv(process.env, {
    MONGO_CONNECTIONS_STRING:str(),
    PORT: port(),
})