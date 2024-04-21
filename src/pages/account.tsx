import React, { useState, useEffect } from 'react';
import Header from "../components/NavBar";
import { Grid, Button, Divider, TextField } from '@material-ui/core';

const Account: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [basic, setBasic] = useState({
    fname: '',
    lname: '',
    email: '',
    phonenumber: '',
    img: ''
  });
  const [password, setPassword] = useState({
    pwordold: '',
    pword: '',
    pwordconfirmation: ''
  });
  const [medical, setMedical] = useState({
    address1: '',
    address2: '',
    state1: '',
    city: '',
    zipcode: '',
    birthdate: '',
    sex: '',
    height: '',
    weight1: '',
    bloodtype: '',
    smoke: '',
    smokefreq: '',
    drink: '',
    drinkfreq: '',
    caffeine: '',
    caffeinefreq: ''
  });

  useEffect(() => {
    // Simulating user data fetching
    const fetchUserData = async () => {
      // Simulated user data
      const userData = {
        fname: 'Sridhar',
        lname: 'Eguram',
        email: 'sridhar.eguram@gmail.com',
        phonenumber: '812-361-3910',
        img: '/images/profile.jpg',
        detail: {
          address1: '1426 N Kinser Pike 6F Bloomington',
          city: 'Bloomington',
          state1: 'Indiana',
          zipcode: '47404',
          birthdate: '2002-08-01',
          sex: 'Male',
          height: '180 cm',
          weight1: '75 kg',
          bloodtype: 'AB-',
          smoke: 'Yes',
          smokefreq: 'Occasionally',
          drink: 'Yes',
          drinkfreq: 'Socially',
          caffeine: 'Yes',
          caffeinefreq: 'Daily'
        }
      };
      setBasic(userData);
      if (userData.detail) {
        setMedical({
          ...userData.detail,
          address2: userData.detail.address1 || '', // Use address1 as default if address2 is null
        });
        
      }
      setLoaded(true);
    };

    fetchUserData();
  }, []);

  const updateBasic = async () => {
    // Add your logic for updating basic info
  };

  const updatePassword = async () => {
    // Add your logic for updating password
  };

  const updateMedical = async () => {
    // Add your logic for updating medical info
  };

  const updateProfilePic = async (img: string) => {
    // Add your logic for updating profile picture
  };

  const logoutUser = async () => {
    // Add your logic for logging out user
    window.location.href = '/login';

  };

  return (
    <div>
      {/* Render your account information form here */}
      <Header />
      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12}>
          <TextField
            label="First Name"
            value={basic.fname}
            onChange={(e) => setBasic({ ...basic, fname: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            value={basic.lname}
            onChange={(e) => setBasic({ ...basic, lname: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            value={basic.email}
            onChange={(e) => setBasic({ ...basic, email: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            value={basic.phonenumber}
            onChange={(e) => setBasic({ ...basic, phonenumber: e.target.value })}
            fullWidth
          />
        </Grid>
        <Divider />
        {/* Password Update */}
        <Grid item xs={12}>
          <TextField
            label="Old Password"
            type="password"
            value={password.pwordold}
            onChange={(e) => setPassword({ ...password, pwordold: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="New Password"
            type="password"
            value={password.pword}
            onChange={(e) => setPassword({ ...password, pword: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm New Password"
            type="password"
            value={password.pwordconfirmation}
            onChange={(e) => setPassword({ ...password, pwordconfirmation: e.target.value })}
            fullWidth
          />
        </Grid>
        <Divider />
        {/* Medical Information */}
        {/* Include Medical Information Fields Here */}
        <Divider />
        {/* Action Buttons */}
        <Grid item container xs={12} style={{ marginBottom: "2rem" }}>
        <Grid item container xs={12} sm={10}>
          { /* Displaying user details */}
                 <TextField label="Address 1" value={medical.address1} onChange={(e) => setMedical({ ...medical, address1: e.target.value })} />
                 <TextField label="city" value={medical.city} onChange={(e) => setMedical({ ...medical, city: e.target.value })} />
                 <TextField label="state" value={medical.state1} onChange={(e) => setMedical({ ...medical, state1: e.target.value })} />
                 <TextField label="Zipcode" value={medical.zipcode} onChange={(e) => setMedical({ ...medical, zipcode: e.target.value })} />
                 <TextField label="Birthdate" value={medical.birthdate} onChange={(e) => setMedical({ ...medical, birthdate: e.target.value })} />
                 <TextField label="Gender" value={medical.sex} onChange={(e) => setMedical({ ...medical, sex: e.target.value })} />
                 <TextField label="Height" value={medical.height} onChange={(e) => setMedical({ ...medical, height: e.target.value })} />
                 <TextField label="Weight" value={medical.weight1} onChange={(e) => setMedical({ ...medical, weight1: e.target.value })} />
                   {/* Repeat this pattern for other fields like city, state1, etc. */}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={updateBasic}>Update Basic Info</Button>
          <Button variant="contained" color="primary" onClick={updatePassword}>Update Password</Button>
          <Button variant="contained" color="primary" onClick={updateMedical}>Update Medical Info</Button>
          <Button variant="contained" color="primary" onClick={logoutUser}>Logout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
