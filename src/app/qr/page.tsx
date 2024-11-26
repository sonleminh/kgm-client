'use client';

import styles from './qr.module.css';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import { useNotificationContext } from '../context/NotificationContext';

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

export default function QR() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
          <Typography>Chào mừng anh</Typography>
        </Box>
      </main>
      <footer className={styles.footer}></footer>
    </div>
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
