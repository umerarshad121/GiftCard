"use client";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import card from "../assets/images/card.png";
import giftcard from "../assets/images/giftcard.png";
import cardprofile from "../assets/images/cardprofile.png";


import React from "react";
import { features, menuItems, occasions } from "./home.data";

const Home = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            backgroundColor: "#fff",
            borderBottom: "1px solid #e0e0e0",
            minHeight: "64px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "33.33%" }}>
            <Typography variant="h6" sx={{ color: "#1e1e1e", fontWeight: 700 }}>
              Logoipsum
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "33.33%",
            }}
          >
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => router.push(item.path)}
                    sx={{
                      color:
                        pathname === item.path
                          ? theme.palette.primary.main
                          : "#000",
                      fontWeight: pathname === item.path ? 600 : 400,
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "33.33%",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push("/register")}
              sx={{
                backgroundColor: "#f28b82",
                "&:hover": { backgroundColor: "#e57373" },
              }}
            >
              Registration
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          p: 4,
          backgroundColor: "#f7e9e9",
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Easily place your order online with just a few clicks
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
            It matches your personal style and brings real order to your guest
            list! I mean, when have you ever seen an invitation like this? One
            that tells you exactly how many people are coming, who canceled, and
            even helps you save money and avoid awkward situations with guests.
            In short—no unnecessary stress. Go ahead, register now, and best of
            luck!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f28b82",
              "&:hover": { backgroundColor: "#e57373" },
            }}
          >
            Confirm
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <Image src={card} alt="card" width={500} height={300} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          p: 4,
          backgroundColor: "#fff",
          gap: 4,
        }}
      >
        {/* Left Section: Santa Claus Placeholder */}
        <Image src={giftcard} alt="giftcard" />

        {/* Right Section: Text and Buttons */}
        <Box
          sx={{ flex: 1, textAlign: isMobile ? "center" : "left" }}
          px={2}
          mx={2}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Gifts on Credit
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
            Who’s got time to hunt for cash? With just one click, you can send a
            digital gift anytime, anywhere. Forget the stress of
            gift-giving—show up to the event with a clean and generous heart.
            Fast, easy, now on the website or app and enjoy the credit
            service—fast, easy, and totally digital!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f28b82",
                "&:hover": { backgroundColor: "#e57373" },
              }}
              onClick={() => router.push("/register")}
            >
              Registration
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#f28b82",
                color: "#f28b82",
                "&:hover": { borderColor: "#e57373", color: "#e57373" },
              }}
              onClick={() => router.push("/information")}
            >
              Information
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 4, backgroundColor: "#f7e9e9", textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          What’s the special occasion?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
          At DIGINET, digital invitations are designed to fit your event
          perfectly
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 3,
            justifyContent: "center",
            mb: 4,
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
              }}
            >
              <CardContent>
                <Image src={cardprofile} alt="card profile" />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {occasion.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
                  {occasion.description}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#f28b82",
                    color: "#f28b82",
                    "&:hover": { borderColor: "#e57373", color: "#e57373" },
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
          }}
          onClick={() => router.push("/pricing")}
        >
          Price and Packages
        </Button>
      </Box>
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Features, but really worth it.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
          And that’s just a small part of the collection of capabilities that
          can be configured for your event.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
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
              <CardContent  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ fontSize: 40, mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
