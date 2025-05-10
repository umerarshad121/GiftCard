"use client";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import card from "../assets/images/card.png";
import giftcard from "../assets/images/giftcard.png";
import cardprofile from "../assets/images/cardprofile.png";

import React from "react";
import { features, menuItems, occasions, testimonials } from "./home.data";
import { Footer } from "./fotter";
import Header from "./header";

const Home = () => {
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            p: { xs: 2, sm: 4 },
            backgroundColor: "#f7e9e9",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              px: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            >
              Easily place your order online with just a few clicks
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#666",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              It matches your personal style and brings real order to your guest
              list! I mean, when have you ever seen an invitation like this? One
              that tells you exactly how many people are coming, who canceled,
              and even helps you save money and avoid awkward situations with
              guests. In short—no unnecessary stress. Go ahead, register now,
              and best of luck!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f28b82",
                "&:hover": { backgroundColor: "#e57373" },
                px: { xs: 2, sm: 3 },
                py: 1,
              }}
            >
              Registration
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
            }}
          >
            <Image
              src={card}
              alt="card"
              width={500}
              height={300}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row-reverse",
            alignItems: "center",
            p: { xs: 2, sm: 4 },
            backgroundColor: "#fff",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Image
              src={giftcard}
              alt="giftcard"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              textAlign: isMobile ? "center" : "left",
              px: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            >
              Gifts on Credit
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "#666",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Who’s got time to hunt for cash? With just one click, you can send
              a digital gift anytime, anywhere. Forget the stress of
              gift-giving—show up to the event with a clean and generous heart.
              Fast, easy, now on the website or app and enjoy the credit
              service—fast, easy, and totally digital!
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: isMobile ? "center" : "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f28b82",
                  "&:hover": { backgroundColor: "#e57373" },
                  px: { xs: 2, sm: 3 },
                  py: 1,
                }}
                onClick={() => router.push("/register")}
              >
                Credit Card Gifts
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            backgroundColor: "#f7e9e9",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            What’s the special occasion?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#666",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            At Event & Celebrate, digital invitations are designed to fit your event
            perfectly
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 3,
              justifyContent: "center",
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {occasions.map((occasion, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  width: { xs: "100%", sm: "300px" },
                  maxWidth: "100%",
                }}
              >
                <CardContent>
                  <Box  >

                    {occasion.image}
                  </Box>
                  {/* <Image
                    src={cardprofile}
                    alt="card profile"
                    style={{ maxWidth: "100%", height: "auto" }}
                  /> */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    {occasion.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "#666",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    {occasion.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#f28b82",
                      color: "#f28b82",
                      "&:hover": { borderColor: "#e57373", color: "#e57373" },
                      px: { xs: 2, sm: 3 },
                      py: 1,
                    }}
                    onClick={() => router.push("/register")}
                  >
                    Registration
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f28b82",
              "&:hover": { backgroundColor: "#e57373" },
              px: { xs: 2, sm: 3 },
              py: 1,
            }}
            onClick={() => router.push("/pricing")}
          >
            Price and Packages
          </Button>
        </Box>

        <Box sx={{ p: { xs: 2, sm: 4 }, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            Features, but really worth it.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "#666",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            And that’s just a small part of the collection of capabilities that
            can be configured for your event.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 2,
                  boxShadow: 2,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  p: 2,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: { xs: 30, sm: 40 },
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            py: { xs: 4, sm: 8 },
            backgroundColor: "#f7e9e9",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            Celebrate and stay to tell the story
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{ maxWidth: 345, mx: "auto", p: 2 }}>
                  <CardContent>
                    <Avatar
                      alt={testimonial.author}
                      src="/path-to-avatar-image.jpg"
                      sx={{ mx: "auto", mb: 2, width: 56, height: 56 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      }}
                    >
                      {testimonial.quote}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                    >
                      {testimonial.author}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
