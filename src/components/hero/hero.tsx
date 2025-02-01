"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Button, useMediaQuery } from "@mui/material";
import { format } from "date-fns";
import { data } from "@/src/config/constants";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ekran o'lchamini tekshirish
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // xs
  const isMediumScreen = useMediaQuery("(max-width:960px)"); // md

  // Slayderni o'zgartirish
  const nextSlide = () => setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  // Avtomatik slayder
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isSmallScreen ? "50vh" : "70vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
          width: `${data.length * 100}%`,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              flexShrink: 0,
              position: "relative",
              height: isSmallScreen ? "50vh" : "70vh",
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
                backgroundColor: "rgba(0,0,0,0.6)", // Matnni ajratish uchun qora fon
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: isSmallScreen ? "10px" : "20px",
                right: isSmallScreen ? "10px" : "auto",
                textAlign: isSmallScreen ? "center" : "left",
                color: "white", // Matn rangi oq
                zIndex: 999,
              }}
            >
              <Typography variant={isSmallScreen ? "h5" : isMediumScreen ? "h4" : "h2"} sx={{ color: "white" }}>
                {item.title}
              </Typography>
              <Typography variant={isSmallScreen ? "body2" : "h5"} sx={{ color: "white" }}>
                {item.exerpt}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <Avatar alt={item.author.name} src={item.author.image} sx={{ width: isSmallScreen ? 30 : 40, height: isSmallScreen ? 30 : 40 }} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ color: "white" }}>
                    {item.author.name}
                  </Typography>
                  <Typography variant={isSmallScreen ? "caption" : "body2"} sx={{ color: "white" }}>
                    {format(new Date(), "dd MMM, yyyy")} • 10min read
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Tugmalar */}
      <Button
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.3)",
          color: "white",
          fontSize: isSmallScreen ? "16px" : "24px",
          minWidth: isSmallScreen ? "30px" : "40px",
          height: isSmallScreen ? "30px" : "40px",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
        }}
      >
        ‹
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.3)",
          color: "white",
          fontSize: isSmallScreen ? "16px" : "24px",
          minWidth: isSmallScreen ? "30px" : "40px",
          height: isSmallScreen ? "30px" : "40px",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.5)" },
        }}
      >
        ›
      </Button>

      {/* Indikatorlar */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: isSmallScreen ? "5px" : "10px",
        }}
      >
        {data.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: isSmallScreen ? "8px" : "12px",
              height: isSmallScreen ? "8px" : "12px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;
