"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { format } from "date-fns";
import { data } from "@/src/config/constants";



const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // O'ngga siljitish
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Chapga siljitish
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Avtomatik aylanish
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Har 3 sekundda almashadi
    return () => clearInterval(interval); // Tozalash
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "70vh",
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
              <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <Avatar alt={item.author.name} src={item.author.image} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography>{item.author.name}</Typography>
                  <Typography>
                    {format(new Date(), "dd MMM, yyyy")} • 10min read
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Chapga va o'ngga o'tkazish tugmalari */}
      <Button
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.5)",
          color: "black",
          fontSize: "24px",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
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
          backgroundColor: "rgba(255,255,255,0.5)",
          color: "black",
          fontSize: "24px",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.8)" },
        }}
      >
        ›
      </Button>

      {/* Indikatorlar (dots) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        {data.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "white" : "gray",
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