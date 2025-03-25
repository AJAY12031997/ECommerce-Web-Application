import axios from "axios";

const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjIyYmQzYjdhMzBiMzQ4N2Q3YTJkZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc3OTI3MCwiZXhwIjoxNjQ0MDM4NDcwfQ.VM7nBQJBdBy0FXu5yS01Nd__loGMKjvz__tgURz4Abc";

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});