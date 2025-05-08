import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "@mui/icons-material/Drafts";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <Typography variant="h5" color="#333">
                  L
                </Typography>
              </Box>
              <Typography variant="h6">Logoipsum</Typography>
            </Box>
            <Typography variant="body2">
              Events, a startup that was founded to create a different, smart
              and advanced experience in event management. We make sure to be on
              the cutting edge of technology and do not compromise on any step
              in the programming and design process.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Site Map
            </Typography>
            <Typography variant="body2">Arrival confirmations</Typography>
            <Typography variant="body2">Gifts on credit</Typography>
            <Typography variant="body2">Seating arrangements</Typography>
            <Typography variant="body2">Packages and prices</Typography>
            <Typography variant="body2">Questions and Answers</Typography>
            <Typography variant="body2">Theaters / Producers</Typography>
            <Typography variant="body2">Contact us</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2">+12345678354678</Typography>
            <Typography variant="body2">xyz@gmail.com</Typography>
            <Typography variant="body2">Dome location xyz</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Social networks
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" href="#" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#" target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href="#" target="_blank">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="inherit" href="#" target="_blank">
                <TikTokIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// export default Footer;
