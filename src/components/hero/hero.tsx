"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { format } from "date-fns";

const data = [
  {
    image: "https://via.placeholder.com/data:image/png;base64,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",
    title: "JavaScriptning asoslari",
    exerpt:
      "JavaScript dasturlash tili haqida qisqacha tushuncha va asosiy konseptlar.",
    author: {
      name: "Zoyidjon Nasretdinov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "React bilan loyihalar yaratish",
    exerpt:
      "React kutubxonasi yordamida interaktiv foydalanuvchi interfeyslarini yaratish.",
    author: {
      name: "Abdulloh Karimov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "CSS flexbox asoslari",
    exerpt: "CSS flexbox tizimi va uni amaliy qo‘llash haqida tushuncha.",
    author: {
      name: "Shoxrux Ismoilov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "TypeScriptga kirish",
    exerpt:
      "TypeScript va uning JavaScript bilan farqlari haqida tushuncha.",
    author: {
      name: "Dilshodbek Rahimov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "Node.js bilan backend dasturlash",
    exerpt:
      "Node.js yordamida server tomon dasturlash va Express.js freymvorki.",
    author: {
      name: "Olimjon Valiyev",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "MongoDB bilan ishlash",
    exerpt:
      "NoSQL ma'lumotlar bazalariga kirish va MongoDB bilan CRUD amallarini bajarish.",
    author: {
      name: "Sardorbek Qodirov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "Redux Toolkit asoslari",
    exerpt:
      "Redux Toolkit yordamida state management va global holat boshqaruvi.",
    author: {
      name: "Javohir Abdullayev",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "Next.js bilan to‘liq stack dasturlash",
    exerpt:
      "Next.js yordamida SEO optimallashtirilgan full-stack dasturlar yaratish.",
    author: {
      name: "Zoyidjon Nasretdinov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "RESTful API yaratish",
    exerpt:
      "REST API konsepsiyalari va Express.js yordamida amaliy API yaratish.",
    author: {
      name: "Abdulloh Karimov",
      image: "https://via.placeholder.com/50",
    },
  },
  {
    image: "https://via.placeholder.com/800x400",
    title: "GraphQL asoslari",
    exerpt:
      "GraphQL texnologiyasi va uni backendda qo‘llash usullari haqida tushuncha.",
    author: {
      name: "Shoxrux Ismoilov",
      image: "https://via.placeholder.com/50",
    },
  },
];


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