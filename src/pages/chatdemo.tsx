import React, { useState, useEffect } from 'react';
import { Typography, Paper, TextField, MenuItem, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import Header from '../components/NavBard';

interface Message {
  id: number;
  senderName: string;
  recipientName: string;
  message: string;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    },
  },
  messagePaper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const DoctorDashboard: React.FC = () => {
  const classes = useStyles();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderName: 'Patient Sridhar',
      recipientName: 'Dr. Baali',
      message: 'Doctor, please give medications.'
    },
    {
      id: 2,
      senderName: 'Patient Virat',
      recipientName: 'Dr. Baali',
      message: 'Need advices'
    },
  ]);

  const [doctor] = useState<Doctor>({
    id: 1,
    name: 'Dr. Baali',
    specialization: 'Cardiologist'
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [recipient, setRecipient] = useState<string>('');

  useEffect(() => {
    // Extract unique recipients from messages
    const uniqueRecipients = Array.from(new Set(messages.map(message => message.senderName)));
    setRecipient(uniqueRecipients[0]); // Set the first recipient as the default value
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        senderName: doctor.name,
        recipientName: recipient,
        message: message.trim()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setResponseMessage('');
    }
  };

  return (
    <main>
      <Header />
      <div className={classes.root}>
        <Typography variant="h4">Welcome, Dr. {doctor.name}</Typography>

        <Typography variant="h5" style={{ marginTop: '2rem' }}>Patient Messages</Typography>
        {messages.map(message => (
          <Paper key={message.id} className={classes.messagePaper}>
            <Typography variant="subtitle1">From: {message.senderName}</Typography>
            <Typography variant="subtitle1">To: {message.recipientName}</Typography>
            <Typography variant="body1">{message.message}</Typography>
          </Paper>
        ))}

        <Typography variant="h5" style={{ marginTop: '2rem' }}>Send Message to Patient</Typography>
        <TextField
          label="Recipient"
          variant="outlined"
          select
          fullWidth
          value={recipient}
          onChange={(e) => setRecipient(e.target.value as string)}
        >
          {messages.map(message => (
            <MenuItem key={message.senderName} value={message.senderName}>{message.senderName}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          value={responseMessage}
          onChange={(e) => setResponseMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={() => handleSendMessage(responseMessage)}>Send</Button>
      </div>
    </main>
  );
};

export default DoctorDashboard;
