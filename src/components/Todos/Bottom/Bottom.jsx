import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import s from './Bottom.module.scss';

const Bottom = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => setText(e.target.value);

  return (
    <div className={s.container}>
      <TextField
        onChange={handleInputChange}
        value={text}
        multiline
        rowsMax={5}
        placeholder="Todo text..."
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        color='secondary'
      />
      <Button variant="contained" color='secondary'>Add</Button>
    </div>
  );
};

export default Bottom;
