import axios from "axios";

const Apiclient=axios.create({
    baseURL:"https://fakestoreapi.com"
});

export default Apiclient;
