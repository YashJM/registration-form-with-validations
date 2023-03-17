import axios from 'axios';
import { toast } from 'react-toastify';

// Ideally have this in a .env file, keeping it here for simplicity
const REGISTER_USER_ENDPOINT = 'https://fullstack-test-navy.vercel.app/api/users/create';

interface IUser {
    full_name: string;
    contact_number: string;
    email: string;
    date_of_birth: string;
    password: string;
}

const onSuccess = () => {
    toast.success('User registered successfully', { theme: "colored", closeButton: false, hideProgressBar: true, style: { background: '#CDFADC', color: '#333333' } });
}

const onError = (errorMessage: string) => {
    toast.error(errorMessage, { theme: "colored", closeButton: false, hideProgressBar: true, style: { background: '#FFC0C0', color: '#333333' } });
}

export const registerUser = async (userData: IUser) => {
    await axios.post(REGISTER_USER_ENDPOINT, userData).then((res) => {
        onSuccess();
    }).catch((err) => {
        let errorMessage = err.response.data.description ?? 'Something went wrong';
        onError(errorMessage);
    });
}

export default {};
