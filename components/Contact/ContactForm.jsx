import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import styles from "./contactform.module.scss";

export default function InputWithIcon() {
  // Define common style object for reuse
  const commonStyles = {
    '& label.Mui-focused': {
      color: '#87ecaf',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#87ecaf',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': { // Applies to label
      color: 'white',
    },
    '& .MuiInput-underline:before': { // Underline color
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // Hover underline
      borderBottomColor: 'white',
    },
  };

  return (
    <Box  sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard" sx={commonStyles}>
        <InputLabel className={styles.FormTitle}  htmlFor="input-with-icon-adornment">
          NAME
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              {/* Icon or element */}
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        sx={commonStyles}
        id="input-with-icon-textfield"
        label="EMAIL"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* Icon or element */}
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end', ...commonStyles }}>
        <TextField id="input-with-sx" label="VISION" variant="standard" sx={commonStyles} />
      </Box>
    </Box>
  );
}
