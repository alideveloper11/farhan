import axios from 'axios';

const url = "http://localhost:5000";

export const addUser = async (object) => {
    return await axios.post(`${url}/Doctors`,object);
}

export const getUsers = async () =>{
    return await axios.get(`${url}/Bookmepage`);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/Bookmepage/${id}`);
}

export const updateUser = async (id,object) => {
    return await axios.put(`${url}/TestUpdate/${id}`,object);
}

export const addSignUp = async (object) => {
    return await axios.post(`${url}/SignUp`,object);
}