import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { company } from "../data/company";

function Footer() {
  return (
    <Box
      sx={{
        background: "#071a2b",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 800,
          }}
        >
          {company.name}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#9fb3c8",
            mt: 1,
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;