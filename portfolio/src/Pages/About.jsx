import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph>
          I'm Hassan Ali, a passionate web developer with a strong foundation in
          HTML, CSS, JavaScript, Bootstrap, and React. I also have experience
          working with Supabase and Material UI.
        </Typography>
        <Typography paragraph>
          With a Bachelor’s degree in Physics and professional experience as a
          lab technician at LCI, I bring a unique analytical mindset to
          development.
        </Typography>
        <Typography paragraph>
          I’ve built and deployed multiple projects, including quiz apps,
          weather apps, a stopwatch, and a loan management system dashboard
          using React and Supabase.
        </Typography>
      </Box>
    </Container>
  );
}
