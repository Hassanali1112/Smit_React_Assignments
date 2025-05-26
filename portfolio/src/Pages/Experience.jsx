import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Experience() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Web Development Intern - CodeAlpha"
              secondary="March 2025 - Present | Built projects like portfolio, quiz app, etc."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Web Development Intern - Prodigy InfoTech"
              secondary="March 2025 - April 2025 | Developed loan management dashboard using React & Supabase."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Lab Technician - LCI Pakistan"
              secondary="2019 - Present | Operated barcode and liquid filling machines."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
