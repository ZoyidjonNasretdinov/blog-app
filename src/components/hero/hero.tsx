import React from "react";
import Slider from "react-slick";

import { Box, Typography, Avatar } from "@mui/material";
import { format } from "date-fns";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true, // Pastda indikatorlar
    infinite: true, // Cheksiz aylanish
    speed: 500, // Animatsiya tezligi
    slidesToShow: 1, // Bir vaqtning o'zida nechta slayd ko'rsatiladi
    slidesToScroll: 1, // Bir marta scroll qilishda nechta slayd o'zgaradi
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 3000, // Avtomatik aylanish tezligi (ms)
  };

  return (
    <Box width="100%" height="70vh">
      <Slider {...settings}>
        {data.map((item) => (
          <Box
            key={item.title}
            sx={{
              position: "relative",
              width: "100%",
              height: "70vh",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
                color: "white",
                zIndex: 999,
              }}
            >
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="h5">{item.exerpt}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Avatar alt={item.author.name} src={item.author.image} />
                <Box>
                  <Typography>{item.author.name}</Typography>
                  <Typography>
                    {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;

const data = [
  {
    image: "https://via.placeholder.com/150",
    title: "JavaScriptning asoslari",
    exerpt:
      "JavaScript dasturlash tili haqida qisqacha tushuncha va asosiy konseptlar.",
    author: {
      name: "Zoyidjon Nasretdinov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/150",
    title: "React bilan loyihalar yaratish",
    exerpt:
      "React kutubxonasi yordamida interaktiv foydalanuvchi interfeyslarini yaratish.",
    author: {
      name: "Abdulloh Karimov",
      image: "https://via.placeholder.com/50",
    },
  },
];
