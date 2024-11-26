'use client';

import { Box, SxProps, Theme, Typography } from '@mui/material';

export default function Code() {
  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          position: 'absolute',
          top: '44%',
          width: '98%',
          p: 2,
          mx: 'auto',
          borderRadius: 2,
          textAlign: 'center',
        }}>
        <Typography sx={{ color: '#fff' }}>Chào mừng anh Tuan</Typography>
        <Typography sx={{ color: '#fff' }}>Ma so du thuong: 69</Typography>
      </Box>
    </Box>
  );
}

const containerStyle: SxProps<Theme> = {
  height: '100vh',
  backgroundImage:
    'url("https://firebasestorage.googleapis.com/v0/b/geardn-a6c28.appspot.com/o/backdrop3.png?alt=media&token=ffc20fda-6015-46bc-8d43-b0aad14b1494")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
