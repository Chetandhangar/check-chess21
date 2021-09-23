import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 650,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    paper: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
      },
      avatar : {
            width: theme.spacing(15),
            height: theme.spacing(15),
      }
  }));

  export default useStyles;