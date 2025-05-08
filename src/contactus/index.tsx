"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import contactus from "../assets/images/contactus.png";
import Header from "../Home/header";
import { Footer } from "../Home/fotter";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          py: 8,
          backgroundColor: "#fff",
          // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23ffccbc' opacity='0.6'/%3E%3Crect x='120' y='120' width='40' height='40' fill='%2390caf9' opacity='0.6'/%3E%3Cpath d='M20 180 Q 100 100 180 180' stroke='%23ffab91' stroke-width='10' fill='none' opacity='0.6'/%3E%3Ccircle cx='150' cy='50' r='30' fill='%23fff59d' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundImage: `url(${contactus.src})`,
          backgroundRepeat: "repeat",
          textAlign: "center",
          minHeight: "50vh",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="body1" paragraph>
            Click to chat with a representative on WhatsApp
          </Typography>
          <Typography variant="body1" paragraph>
            Phone Support: You can dial: <br />
            <Link href="tel:+12345667989" color="primary">
              +12345667989
            </Link>
          </Typography>
          <Typography variant="body1" paragraph>
            Our operating hours are: <br />
            Sun-Thu: 09:00-17:00 <br />
            Friday and holiday eves: 09:00-12:00
          </Typography>
          <Typography variant="body1">
            You can also contact us using the following form:
          </Typography>
          {/* Placeholder for the form, as it's not shown in the image */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              [Form placeholder - Add your form component here]
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ maxWidth: "800px", mx: "auto", p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Contact Form
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Full name"
              variant="outlined"
              placeholder="Full name"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Mobile number"
              variant="outlined"
              placeholder="Mobile number"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="Email"
              type="email"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Reference subject"
              variant="outlined"
              placeholder="Reference subject"
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              placeholder="Message"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f28b82",
              "&:hover": { backgroundColor: "#e57373" },
              px: { xs: 2, sm: 3 },
              py: 1,
              mt: 2,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
