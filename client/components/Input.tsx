import React from 'react';
import clsx from 'clsx';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      overflow: 'hidden'
    },
    input: {
      borderRight: 'none',
      borderRadius: '5px 0 0 5px',
      background: 'none',
      border: '1px solid #C4C4C4',
      padding: '.5rem',
      '&:focus': {
        outline: 'none'
      }
    },
    button: {
      borderRadius: '0 5px 5px 0x',
      minWidth: 60
    }
  })
);

const Input: React.FC<Props> = (props) => {
  const c = useStyles();
  console.log(props);
  return (
    <div className={c.container}>
      <input className={c.input} type="text" {...props.inputProps} />
      <button className={c.button} type="submit">
        Add
      </button>
    </div>
  );
};

export default Input;

interface Props {
  inputProps?: Object;
  buttonProps?: Object;
}
