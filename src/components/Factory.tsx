import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { company } from "../data/company";

function Factory() {
  return (
    <Box
      id="factory"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#102a43",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#63d7ff",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          OUR FACTORY
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            mt: 1,
            mb: 3,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
        >
          Behind The Production
        </Typography>

        <Typography
          sx={{
            maxWidth: 700,
            mx: "auto",
            textAlign: "center",
            color: "#bcccdc",
            lineHeight: 1.8,
            mb: 6,
          }}
        >
          Take a look inside our production and factory environment.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {company.factoryImages.map((image, index) => (
            <Box
              key={image}
              component="img"
              src={image}
              alt={`Factory ${index + 1}`}
              sx={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Factory;