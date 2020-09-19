import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const index = () => {
  const c = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={c.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Search', 'Profile', 'My Recipe'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={c.mainContainer}>
      <Typography variant="h6">Recipe app</Typography>
      <section>
        <Button onClick={toggleDrawer(true)}>
          <MoreVertIcon className={c.iconButton} />
        </Button>
        <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </section>
    </div>
  );
};

export default index;
