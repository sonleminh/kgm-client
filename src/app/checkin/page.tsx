'use client';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import * as yup from 'yup';
import Input from '../components/Input';

const unitData = [
  'VPCT3',
  'TT CNTT',
  'QTR',
  'TTH',
  'DN1',
  'DN2',
  'QNA',
  'QNG',
  'BDI',
];

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Vui lòng nhập họ và tên')
    .max(50, 'Không được vượt quá 50 ký tự!'),
  unit: yup
    .string()
    .required('Vui lòng nhập đơn vị')
    .max(50, 'Không được vượt quá 50 ký tự!'),
});

export default function Checkin() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: { name: '', unit: '' },
    validationSchema: validationSchema,
    validateOnChange: false,
    async onSubmit(values) {
      try {
        // Make the POST request using the fetch API
        const response = await fetch('http://localhost:8080', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // Send form values as JSON
        });

        if (!response.ok) {
          // If response is not OK, throw an error with status text
          throw new Error(
            `Request failed with status: ${response.status} - ${response.statusText}`
          );
        }

        // Check if the response is successful
        const res = await response.json();
        if (res?.name) {
          router.push('/qr');
        }
      } catch (error) {
        // showNotification(error?.message, 'error');
        console.error('Network error:', error);
      }
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    formik.setFieldValue(name, value);
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { value, name } = e.target;
    formik.setFieldValue(name, value);
  };

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          gridRowStart: 2,
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: '44%',
            width: '98%',
            p: 2,
            mx: 'auto',
            // bgcolor: '',
            borderRadius: 2,
            textAlign: 'center',
          }}>
          <Typography
            sx={{
              mb: 1,
              color: '#fff',
              fontSize: 20,
              fontWeight: 500,
              textTransform: 'uppercase',
            }}>
            checkin và lấy số may mắn
          </Typography>
          <FormControl
            sx={formControlStyle}
            size='small'
            margin='dense'
            fullWidth>
            <Input
              label='Họ và tên'
              name='name'
              variant='filled'
              size='small'
              helperText={
                <Box component={'span'} sx={helperTextStyle}>
                  {formik?.errors.name}
                </Box>
              }
              onChange={handleChange}
              value={formik?.values?.name}
            />
          </FormControl>
          <FormControl sx={formControlStyle} margin='dense' fullWidth>
            {/* <InputLabel id='demo-simple-select-label'>Đơn vị</InputLabel> */}
            <Select
              sx={selectStyle}
              // labelId='demo-simple-select-label'
              // id='demo-simple-select'
              // label='Đơn vị'
              size='small'
              displayEmpty
              name='unit'
              onChange={handleSelectChange}
              value={formik?.values?.unit}>
              <MenuItem value=''>
                <>Đơn vị</>
              </MenuItem>
              {unitData?.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={helperTextStyle}>
              {formik?.errors?.unit}
            </FormHelperText>
          </FormControl>
          <Button
            sx={{ mt: 1, bgcolor: '#369190', border: '1px solid #363636' }}
            variant='contained'
            fullWidth
            onClick={() => formik.handleSubmit()}>
            Gửi
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const helperTextStyle: SxProps<Theme> = {
  color: '#fff',
  fontSize: 13,
};

const selectStyle: SxProps<Theme> = {
  bgcolor: '#fff',
  textAlign: 'start',
  height: 48,
};

const formControlStyle: SxProps<Theme> = {
  borderRadius: 1,
  '.MuiInputBase-input': {
    bgcolor: '#fff',
  },
};

const containerStyle: SxProps<Theme> = {
  height: '100vh',
  backgroundImage:
    'url("https://firebasestorage.googleapis.com/v0/b/geardn-a6c28.appspot.com/o/backdrop3.png?alt=media&token=ffc20fda-6015-46bc-8d43-b0aad14b1494")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
