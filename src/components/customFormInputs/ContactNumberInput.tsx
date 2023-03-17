import React from 'react';
import { InputAdornment } from '@mui/material';
import { Controller } from 'react-hook-form';
import MuiPhoneNumber from 'material-ui-phone-number-2';

type ContactNumberInputProps = {
  [key: string]: any;
};

const ContactNumberInput: React.FC<ContactNumberInputProps> = (props) => {
  return (
    <>
      <label htmlFor="contactNumber">Contact Number</label>
      <Controller
        name="contactNumber"
        control={props.control}
        defaultValue=""
        rules={{ required: 'Phone number is required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <MuiPhoneNumber
            variant="outlined"
            id="contactNumber"
            label="Contact Number"
            placeholder="(123) 456-7890"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            fullWidth
            defaultCountry="ca"
            onlyCountries={['ca']}
            disableCountryCode
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+1</InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};
export default ContactNumberInput;
