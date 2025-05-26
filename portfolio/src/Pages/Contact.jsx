import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 600,
          }}
        >
          <TextField label="Name" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Message" multiline rows={4} fullWidth required />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
