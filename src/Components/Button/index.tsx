import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// interface ButtonProps {
//   onClick: React.HtmlHTMLAttributes(void);
// }

export default function ContainedButtons({ onClick, titulo }: any) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={onClick}>
        {titulo}
      </Button>
    </Stack>
  );
}
