import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.diazar.com/" target="_blank">
        www.diazar.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Soluciones Integrales y tecnología empresarial del Mayab S.A. de C.V.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
