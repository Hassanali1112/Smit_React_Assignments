import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const projects = [
  {
    title: "Loan Management System",
    description: "Dashboard to manage loan requests using React and Supabase.",
    link: "https://github.com/Hassanali1112",
  },
  {
    title: "Quiz App",
    description:
      "Multi-page quiz with login, light/dark mode, and three quizzes.",
    link: "https://spectacular-conkies-03ae5c.netlify.app/",
  },
  {
    title: "Weather App",
    description: "Responsive weather app with location-based forecast.",
    link: "https://smit-weather.netlify.app/",
  },
  {
    title: "Pepsi Clone",
    description: "Pixel-perfect responsive Pepsi landing page.",
    link: "https://radiant-kangaroo-483346.netlify.app/",
  },
];

export default function Projects() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card elevation={4}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.link} target="_blank">
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
