import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "TypeScript",
  "React.js",
  "Material UI",
  "Supabase",
  "GitHub",
  "Netlify",
];

export default function Skills() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skillList.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill}>
              <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                {skill}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
