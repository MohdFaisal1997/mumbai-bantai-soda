import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import BusinessIcon from "@mui/icons-material/Business";
// import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { company } from "../data/company";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#00a8e8",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          ABOUT US
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            color: "#102a43",
            mt: 1,
            mb: 3,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
        >
          About Our Company
        </Typography>

        <Typography
          sx={{
            maxWidth: 800,
            mx: "auto",
            textAlign: "center",
            color: "#486581",
            lineHeight: 1.8,
            mb: 6,
          }}
        >
          {company.description}
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
          <InfoCard
            icon={<BusinessIcon />}
            title="Our Business"
            text={company.name}
          />

          {/* <InfoCard
            icon={<PersonIcon />}
            title="Owner"
            // text={company.owner}
          /> */}

          <InfoCard
            icon={<LocationOnIcon />}
            title="Our Location"
            text={company.address}
          />
        </Box>
      </Container>
    </Box>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e1e8ed",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            width: 55,
            height: 55,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            background: "#eaf8ff",
            color: "#00a8e8",
            mb: 2,
          }}
        >
          {icon}
        </Box>

        <Typography
  variant="h6"
  sx={{
    fontWeight: 800,
    mb: 1,
  }}
>
  {title}
</Typography>

        <Typography color="#627d98">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}