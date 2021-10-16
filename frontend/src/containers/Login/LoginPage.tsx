import React, {
  FC, memo, useState,
  ChangeEvent,
} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm, Controller } from 'react-hook-form';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  useLocation, Prompt, useHistory,
} from 'react-router-dom';
import useStyles from './style';
import { apiLogin } from '../../api/login';

type FormData = {
  loginCode: string;
};

interface Props {
  onSubmit: (data: FormData) => void;

}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage: FC = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]: [string, (error: string) => void] = useState('');
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const {
    handleSubmit,
    control, errors: fieldsErrors,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const response = await apiLogin(data.loginCode);

    if (response && response.status === 404) {
      setError('Нет соединения');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (response && response.status === 400) {
      setError('Ошибка');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (!response) {
      setError('Нет соединения');
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }

    if (response && response.status === 500) {
      setError(`${response.data}`);
      setOpen(true);
      setSuccess(false);
      setLoading(false);
    }
    if (response && response.token && response.refreshToken) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      setSuccess(true);
      setLoading(false);
      history.push('/user');
    }
  };

  const handleClose = async (event: ChangeEvent<unknown>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    await setOpen(false);
  };

  return (

    <Container component="main" maxWidth="xs">

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="loginCode"
            as={(
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="loginCode"
                label="Полученный код"
                autoFocus
              // error={!!fieldsErrors.loginCode?.message}
              // helperText={fieldsErrors.loginCode ? fieldsErrors.loginCode.message : null}
              />
            )}
            control={control}
            defaultValue=""
            rules={{
              required: 'Введите пожалуйста код',
              // pattern: {
              //   value: /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/i,
              //   message: 'Incorrect value',
              // },
            }}
          />
          {fieldsErrors.loginCode && <Typography variant="caption" color="error">{fieldsErrors.loginCode.message}</Typography>}
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              className={buttonClassname}
              disabled={loading}
            >
              Войти
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
      </div>
    </Container>

  );
};

export default memo(LoginPage);
