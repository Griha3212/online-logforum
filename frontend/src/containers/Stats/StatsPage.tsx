/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/ban-types */
import React, {
  FC, memo, useState, useEffect,
} from 'react';

// import ContentContainer from '../ContentContainer/ContentContainer';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  Button, Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';

import useStyles from './style';
import parseToken from '../../utils/parseToken';
import getLocalStorageData from '../../utils/helpers/localStorage.helper';
import { apiGetStats } from '../../api/stats';

type User = {

  company: string;
  firstName: string;
  id: number;
  lastName: string;
  email: string;
  createdAt: Date;
  statusInCompany: string;

};

type Vote = {
  rate: number;
  user: User;
  createdAt: Date;
};

type DataForStats = {

  company: string;
  firstName: string;
  id: number;
  innerSystemName: string;
  isModerator: boolean;
  lastName: string;
  linkToImg: string;
  linkToPresentation: string;
  linkToZoom: string;
  topicName: string;

  usersWhoWatchedSpeaker: Array<User>;
  usersWhoSendContacts: Array<User>;
  votes: Array<Vote>;

};

const StatsPage: FC = () => {
  const classes = useStyles();
  const { token } = getLocalStorageData();
  const [userData] = useState(parseToken(token.accessToken as string));

  const [openContactsDialog, setOpenContactsDialog] = React.useState(false);
  const [openRafflePrizesDialog, setOpenRafflePrizesDialog] = React.useState(false);

  const [contactedSpeakersList, setContactedSpeakersList] = React.useState([]);

  const [rafflePrizesUserList, setRafflePrizesUserList] = useState<User[]>();

  const handleOpenModalDialog = (row: any) => {
    setContactedSpeakersList(row.usersWhoSendContacts);
    setOpenContactsDialog(true);
  };

  const handleCloseModalDialog = () => {
    setOpenContactsDialog(false);
    setOpenRafflePrizesDialog(false);
  };

  const [dataForStatsViewer, setDataForStatsViewer] = useState<DataForStats[]>();
  const [dataForStatsViewerUsers, setDataForStatsViewerUsers] = useState<User[]>();

  const loadDataForStatsViewer = async () => {
    const response = await apiGetStats(userData.id, token);
    setDataForStatsViewer(response.foundSpeakers);
    setDataForStatsViewerUsers(response.foundAllUsers);
  };

  const handleOpenRafflePrizesModalDialog = () => {
    setRafflePrizesUserList(dataForStatsViewerUsers && dataForStatsViewerUsers);

    setOpenRafflePrizesDialog(true);
  };

  useEffect(() => {
    loadDataForStatsViewer();
  }, []);

  const Row = (props: { row: DataForStats }) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    let sum = 0;

    row.votes.map((element) => {
      sum += element.rate;
    });

    const medianValue = (+sum / +row.votes.length || 0).toFixed(2);

    const renderRate = (historyRow: any) => {
      const currentRate = row && row!.votes.find(
        (element: any) => element.user.id === historyRow.id,
      );

      if (currentRate && currentRate.createdAt && !currentRate.rate) return '0';
      return currentRate && currentRate.rate || 'без оценки';
    };

    const renderContactCheckbox = (historyRow: any) => {
      const currentContact = row && row!.usersWhoSendContacts.find(
        (element: any) => element.user.id === historyRow.id,
      );

      if (currentContact) return true;

      return false;
    };

    const renderDateOfContactsSending = (historyRow: any) => {
      const currentContact = row && row!.usersWhoSendContacts.find(
        (element: any) => element.user.id === historyRow.id,
      );

      if (currentContact) {
        const today = new Date(currentContact.createdAt);
        const date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
        const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const dateTime = `${date} ${time}`;

        return String(dateTime);
      }

      return '-';
    };

    return (
      <>
        <TableRow className={classes.root}>
          <TableCell align="center">
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center" component="th" scope="row">
            {`${row.firstName} ${row.lastName}`}
          </TableCell>
          <TableCell align="center">{row.usersWhoWatchedSpeaker.length}</TableCell>
          <TableCell align="center">{row.votes.length}</TableCell>
          <TableCell align="center">{medianValue}</TableCell>
          <TableCell align="center">
            <Button
              color={row.usersWhoSendContacts.length > 0 ? 'primary' : 'secondary'}
              onClick={() => handleOpenModalDialog(row)}
            >
              Показать список
            </Button>

          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Подробнее
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Имя Фамилия участника</TableCell>
                      <TableCell align="center">Должность</TableCell>
                      <TableCell align="center">Компания</TableCell>
                      <TableCell align="center">Просмотрел</TableCell>
                      <TableCell align="center">Хочет отправить контакты</TableCell>
                      <TableCell align="center">Время отправки</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Оценка</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.usersWhoWatchedSpeaker.map((historyRow) => (
                      <TableRow key={historyRow.id}>
                        <TableCell align="center" component="th" scope="row">
                          {`${historyRow.firstName || '-'} ${historyRow.lastName || '-'}`}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {`${historyRow.statusInCompany || '-'}`}
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                          {`${historyRow.company || '-'}`}
                        </TableCell>
                        <TableCell align="center">
                          <Checkbox
                            defaultChecked
                            color="primary"
                            disabled
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Checkbox
                            checked={renderContactCheckbox(historyRow)}
                            color="primary"
                            disabled
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                        </TableCell>
                        <TableCell align="center">{renderDateOfContactsSending(historyRow)}</TableCell>
                        <TableCell align="center">{`${historyRow.email || '-'}`}</TableCell>
                        <TableCell align="center">{renderRate(historyRow)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };

  return (
    <>
      <Container className={classes.pageNameContainer} component="main" maxWidth="xs">

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Страница Просмотра Статистики
          </Typography>
          <p>
            <Button
              variant="contained"
              color="primary"
              onClick={
                () => handleOpenRafflePrizesModalDialog()
              }
            >
              Список людей, участвующих в конкурсе
            </Button>

          </p>

        </div>

      </Container>

      <div className={classes.root}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">Имя Фамилия спикера</TableCell>
                <TableCell align="center">Количество просмотров</TableCell>
                <TableCell align="center">Количество оценок</TableCell>
                <TableCell align="center">Средняя оценка</TableCell>
                <TableCell align="center">Кто отправил контакты</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataForStatsViewer && dataForStatsViewer.map((row) => {
                if (!row.isModerator) {
                  return <Row key={row.id} row={row} />;
                }
              })}
            </TableBody>
          </Table>

          <Dialog
            open={openContactsDialog}
            onClose={handleCloseModalDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Список людей, отправивших контакты</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {contactedSpeakersList.map((element: any) => (
                  <p>
                    {element.user.firstName}
                    {' '}
                    {element.user.lastName}
                    {' '}
                    {element.user.email}
                  </p>
                ))}
              </DialogContentText>
            </DialogContent>

          </Dialog>

          <Dialog
            open={openRafflePrizesDialog}
            onClose={handleCloseModalDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Список людей, участвующих в конкурсе</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {rafflePrizesUserList && rafflePrizesUserList.map((element: any) => {
                  if (element.wantToTakeAPartInRafflePrizes) {
                    return (
                      <p>
                        {element.firstName}
                        {' '}
                        {element.lastName}
                        {' '}
                        {element.email}
                      </p>
                    );
                  }
                })}
              </DialogContentText>
            </DialogContent>

          </Dialog>
          ;

        </TableContainer>
      </div>
    </>
  );
};

export default memo(StatsPage);
