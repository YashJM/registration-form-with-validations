import React, { useState } from 'react';
import { Box, TextField, Button, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useForm, Controller } from 'react-hook-form';
import MuiPhoneNumber from 'material-ui-phone-number-2';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ContactNumberInput from './customFormInputs/ContactNumberInput';

type RegistrationFormProps = {
  [key: string]: any;
};

interface IMyForm {
  fullName: string;
  contactNumber: string;
  email: string;
  date: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  const [date, setDate] = useState('');
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    control,
  } = useForm<IMyForm>();

  const onSubmit = (data: IMyForm) => {
    alert(JSON.stringify(data));
  };

  const isFuture = (date: Date) => {
    console.log(date);
    return date;
  };

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
              required: 'This field is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email address',
              },
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
        <Button variant="outlined">Cancel</Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};
export default RegistrationForm;
