import React from "react";
import { Container, Typography, Box } from "@mui/material";
import  { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
// import Model from "../Components/Models"

export default function Home() {
  return (
    <Container>
      <Box sx={{ mt: 10, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Hassan Ali
        </Typography>
        <Typography variant="h6" gutterBottom>
          MERN Stack Developer | Passionate Problem Solver | React & Supabase
          Enthusiast
        </Typography>
        <Typography variant="body1">
          I craft responsive, dynamic web experiences using modern JavaScript
          tools. Welcome to my portfolio!
        </Typography>
      </Box>
    </Container>
  );
}
