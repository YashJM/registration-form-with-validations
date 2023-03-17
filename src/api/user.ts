import axios from 'axios';
import { toast } from 'react-toastify';

// ideally have this in a .env file, keeping it here for simplicity
const REGISTER_USER_ENDPOINT = 'https://fullstack-test-navy.vercel.app/api/users/create';

interface IUser {
    full_name: string;
    contact_number?: string;
    email: string;
    date_of_birth: string;
    password: string;
}

export const registerUser = async (userData: IUser) => {
    await axios.post(REGISTER_USER_ENDPOINT, userData).then((res) => {
        toast.success('User registered successfully', {theme: "colored", className: 'customToastSuccess'});
    }).catch((err) => {
        let errorMessage = err.response?.data?.title ?? 'Something went wrong'; 
        toast.error(errorMessage, {theme: "colored"});
    });
}

export default {};
