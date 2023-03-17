import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Controller } from 'react-hook-form';

type CustomDatePickerProps = {
  [key: string]: any;
};

const dayValues = [...Array(31).keys()].map((day) => ({
  value: day + 1,
  label: `${day + 1}`,
}));
const monthValues = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

const yearValues = [...Array(100).keys()].map((year) => ({
  value: 2023 - year,
  label: `${2023 - year}`,
}));

const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
  const isFuture = (date: Date) => {
    return true;
  };
  return (
    <>
      <label htmlFor="date">Date of Birth</label>
      <Box display={'flex'} gap={'5px'} justifyContent={'space-between'}>
        <FormControl style={{ flex: 1 }}>
          <InputLabel id="day">Day</InputLabel>
          <Controller
            name="date"
            defaultValue=''
            control={props.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Select fullWidth label="Date" error={!!error} {...field}>
                  {dayValues.map((date) => (
                    <MenuItem key={date.value} value={date.value}>
                      {date.label}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                {!!error ? <FormHelperText error>Day required</FormHelperText> : ''}
              </div>
            )}
          />
        </FormControl>

        <FormControl style={{ flex: 1 }}>
          <InputLabel id="day">Month</InputLabel>
          <Controller
            name="month"
            defaultValue=''
            control={props.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Select fullWidth label="Month" error={!!error} {...field}>
                  {monthValues.map((month) => (
                    <MenuItem key={month.value} value={month.value}>
                      {month.label}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                {!!error ? <FormHelperText error>Month required</FormHelperText> : ''}
              </div>
            )}
          />
        </FormControl>

        <FormControl style={{ flex: 1 }}>
          <InputLabel id="day">Year</InputLabel>
          <Controller
            name="year"
            defaultValue=''
            control={props.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Select fullWidth label="year" error={!!error} {...field}>
                  {yearValues.map((year) => (
                    <MenuItem key={year.value} value={year.value}>
                      {year.label}
                    </MenuItem>
                  ))}
                </Select>
                <br />
                {!!error ? <FormHelperText error>Year required</FormHelperText> : ''}
              </div>
            )}
          />
        </FormControl>
      </Box>
    </>
  );
};
export default CustomDatePicker;
