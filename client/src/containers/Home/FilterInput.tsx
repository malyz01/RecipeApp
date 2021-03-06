import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles/FilterInput';

const FilterInput: React.FC<Props> = (props) => {
  const { name, data, handleFilter } = props;
  const c = useStyles();
  const { register, handleSubmit, setValue } = useForm();

  const handleAdd = (input) => {
    const val = input[name].trim();
    if (val !== '') {
      handleFilter('add', name, val);
      setValue(name, '');
    }
  };

  const handleDel = (val: string) => () => {
    handleFilter('del', name, val);
  };

  const handleClear = () => {
    handleFilter('clear', name);
  };

  return (
    <main className={c.main}>
      <section className={clsx(c.section, c.inputContainer)}>
        <form onSubmit={handleSubmit(handleAdd)}>
          <Textfield
            InputProps={{ className: c.input }}
            name={name}
            variant="outlined"
            inputRef={register()}
          />
          <Button className={c.addBtn} color="primary" variant="contained" type="submit">
            Add
          </Button>
        </form>
        <Button variant="contained" color="primary" onClick={handleClear}>
          clear all
        </Button>
      </section>

      <section className={clsx(c.section, c.ingredientsContainer)}>
        {data.map((d) => (
          <Paper className={c.paper} key={d}>
            <Box mr=".2rem">{d.toUpperCase()}</Box>
            <HighlightOffIcon className={c.closeIcon} fontSize="small" onClick={handleDel(d)} />
          </Paper>
        ))}
      </section>
    </main>
  );
};

interface Props {
  name: string;
  data: string[];
  handleFilter: Function;
}

export default FilterInput;
