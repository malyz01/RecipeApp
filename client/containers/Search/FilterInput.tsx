import React from 'react';
import { useForm } from 'react-hook-form';
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
    <main>
      <section className={c.section}>
        <div>
          <Box>
            <form onSubmit={handleSubmit(handleAdd)}>
              <Textfield name={name} variant="outlined" inputRef={register()} />
              <Button variant="contained" type="submit">
                Add
              </Button>
            </form>
          </Box>
        </div>

        <div>
          <Button variant="contained" onClick={handleClear}>
            clear all
          </Button>
        </div>
      </section>

      <section className={c.section}>
        {data.map((d) => (
          <Paper className={c.paper} key={d}>
            <Box mr=".2rem">{d}</Box>
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
