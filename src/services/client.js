import axios from "axios";
import {wrapper} from "axios-cookiejar-support";
import {CookieJar} from 'tough-cookie';


export const cookieJar = new CookieJar();
export const client = wrapper(axios.create({
   jar: cookieJar,
   withCredentials: true,
}));