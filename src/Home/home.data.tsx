import Image from "next/image";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
import icon6 from "../assets/images/icon6.png";
import icon7 from "../assets/images/icon7.png";
import icon8 from "../assets/images/icon8.png";

export const menuItems = [
  { label: "Home", path: "/" },
  { label: "Pricing", path: "/pricing" },
  { label: "Gifts", path: "/gifts" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact Us", path: "/contact" },
];

// ??
export const features = [
  {
    icon: <Image src={icon1} alt="image" height={100} width={100} />,
    title: "Seating arrangements",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon2} alt="image" height={100} width={100} />,
    title: "Send on WhatsApp",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon3} alt="image" height={100} width={100} />,
    title: "Arrival confirmations",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon4} alt="image" height={100} width={100} />,
    title: "Digital Order",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon5} alt="image" height={100} width={100} />,
    title: "Budget Management",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon6} alt="image" height={100} width={100} />,
    title: "Upload from contact",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon7} alt="image" height={100} width={100} />,
    title: "Real-time notifications",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
  {
    icon: <Image src={icon8} alt="image" height={100} width={100} />,
    title: "Event navigation",
    description:
      "A fast digital tool for table arrangements and guest management, including real-time arrival updates",
  },
];
export const occasions = [
  {
    title: "Business events",
    description:
      "An advanced and dynamic system for managing business events from small",
  },
  {
    title: "Business events",
    description:
      "An advanced and dynamic system for managing business events from small",
  },
  {
    title: "Business events",
    description:
      "An advanced and dynamic system for managing business events from small",
  },
];

export const testimonials = [
  {
    quote: "DIGINET made my event planning so much easier! The invitations looked amazing, and I could track RSVPs in real time. DIGINET made my event planning so amazing, and I could track RSVPs in real time.",
    author: "Mr. Johnne",
  },
  {
    quote: "DIGINET made my event planning so much easier! The invitations looked amazing, and I could track RSVPs in real time. DIGINET made my event planning so amazing, and I could track RSVPs in real time.",
    author: "Mr. Johnne",
  },
  {
    quote: "DIGINET made my event planning so much easier! The invitations looked amazing, and I could track RSVPs in real time. DIGINET made my event planning so amazing, and I could track RSVPs in real time.",
    author: "Mr. Johnne",
  },
];