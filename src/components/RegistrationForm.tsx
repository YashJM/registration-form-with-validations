import React, { useRef, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import ContactNumberInput from './customFormInputs/ContactNumberInput';
import CustomDatePicker from './customFormInputs/CustomDatePicker';
import { registerUser } from '../api/user';
import LoadingScreen from './LoadingScreen';

type RegistrationFormProps = {
  [key: string]: any;
};

interface IMyForm {
  fullName: string;
  contactNumber: string;
  email: string;
  date: string;
  month: string;
  year: string;
  password: string;
  passwordConfirmation: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    control,
    reset,
  } = useForm<IMyForm>();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data: IMyForm) => {
    setLoading(true);
    const userData = {
      full_name: data.fullName,
      contact_number: data.contactNumber,
      email: data.email,
      date_of_birth: `${data.date}${data.month}${data.year}`,
      password: data.password,
    };
    registerUser(userData).then(() => {
      setLoading(false);
      reset();
    });
  };

  const onCancel = () => {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={'flex'} flexDirection={'column'}>
        <div className="inputContainer">
          <label htmlFor="fullName">Full Name</label>
          <TextField
            id="fullName"
            label="Full Name"
            error={!!errors.fullName}
            helperText={errors?.fullName?.message}
            inputProps={register('fullName', {
              required: 'Full Name is required',
              pattern: {
                value: /^[a-zA-Z0-9]+(([',. -][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/,
                message: 'Avoid spaces and special characters',
              },
            })}
          />
        </div>

        <div className="inputContainer">
          <ContactNumberInput control={control} />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            label="Email"
            error={!!errors.email}
            helperText={errors?.email?.message}
            inputProps={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
        </div>

        <div className="inputContainer">
          <CustomDatePicker control={control} />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <TextField
            type={'password'}
            id="password"
            label="Password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            inputProps={register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum length should be 8 characters',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                message:
                  'Must have Lower case (a-z), upper case (A-Z) and numbers (0-9)',
              },
            })}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <TextField
            type={'password'}
            id="passwordConfirmation"
            label="Confirm Password"
            error={!!errors.passwordConfirmation}
            helperText={errors?.passwordConfirmation?.message}
            inputProps={register('passwordConfirmation', {
              required: 'Confirm password is required',
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            })}
          />
        </div>
      </Box>
      <Box
        pt="55px"
        display="flex"
        justifyContent="center"
        sx={{ gap: '15px' }}
      >
        <Button onClick={() => onCancel()} variant="outlined">Cancel</Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>

      <LoadingScreen loading={loading} />
    </form>
  );
};
export default RegistrationForm;
