// import {
//   Box,
//   Button,
//   Container,
//   Stack,
//   Typography,
// } from "@mui/material";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import { company } from "../data/company";

// export default function Hero() {
//   return (
//     <Box
//       id="home"
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         background:
//           "linear-gradient(135deg, #eaf8ff 0%, #ffffff 55%, #dff6ff 100%)",
//         pt: { xs: 12, md: 10 },
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "1.05fr 0.95fr",
//             },
//             gap: 6,
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Typography
//               sx={{
//                 color: "#00a8e8",
//                 fontWeight: 800,
//                 letterSpacing: 2,
//                 mb: 2,
//               }}
//             >
//               PREMIUM SODA & BEVERAGES
//             </Typography>

//             <Typography
//               variant="h1"
//               sx={{
//                 fontWeight: 900,
//                 fontSize: {
//                   xs: "2.8rem",
//                   sm: "4rem",
//                   md: "5rem",
//                 },
//                 lineHeight: 1.05,
//                 color: "#102a43",
//                 mb: 3,
//               }}
//             >
//               Refreshing
//               <br />
//               Taste.
//               <br />
//               <Box component="span" sx={{ color: "#00a8e8" }}>
//                 Premium Quality.
//               </Box>
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: "1.1rem",
//                 color: "#486581",
//                 maxWidth: 560,
//                 lineHeight: 1.8,
//                 mb: 4,
//               }}
//             >
//               {company.tagline}
//             </Typography>

//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={2}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 href="#products"
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{
//                   background: "#00a8e8",
//                   px: 3,
//                   py: 1.5,
//                   borderRadius: 3,
//                   fontWeight: 700,
//                   "&:hover": {
//                     background: "#0077b6",
//                   },
//                 }}
//               >
//                 Explore Products
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 href={`https://wa.me/${company.whatsapp}`}
//                 target="_blank"
//                 startIcon={<WhatsAppIcon />}
//                 sx={{
//                   px: 3,
//                   py: 1.5,
//                   borderRadius: 3,
//                   borderColor: "#00a8e8",
//                   color: "#00a8e8",
//                   fontWeight: 700,
//                 }}
//               >
//                 WhatsApp Us
//               </Button>
//             </Stack>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               component="img"
//               src="/images/hero.jpg"
//               alt="Mumbai Bantai Premium Soda"
//               sx={{
//                 width: "100%",
//                 maxWidth: 560,
//                 height: {
//                   xs: 350,
//                   md: 520,
//                 },
//                 objectFit: "cover",
//                 borderRadius: 8,
//                 boxShadow: "0 30px 70px rgba(0,0,0,0.15)",
//               }}
//             />
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }


import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { company } from "../data/company";

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: {
          xs: "85vh",
          md: "90vh",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071A2B 0%, #0A2942 55%, #063D59 100%)",
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: "50%",
          background: "rgba(0,184,255,0.12)",
          top: { xs: -100, md: -180 },
          right: { xs: -100, md: -120 },
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 350 },
          height: { xs: 180, md: 350 },
          borderRadius: "50%",
          background: "rgba(184,240,0,0.08)",
          bottom: { xs: -80, md: -120 },
          left: { xs: -80, md: -100 },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: 850,
          }}
        >
          {/* Small label */}
          <Typography
            sx={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: {
                xs: "0.7rem",
                md: "0.85rem",
              },
              fontWeight: 800,
              letterSpacing: 4,
              color: "#B8F000",
              mb: 2,
            }}
          >
            MUMBAI • INDIA • PREMIUM SODA
          </Typography>

          {/* Main Brand */}
          <Typography
            component="h1"
            sx={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: {
                xs: "5rem",
                sm: "7rem",
                md: "10rem",
              },
              lineHeight: 0.78,
              letterSpacing: {
                xs: 2,
                md: 5,
              },
              color: "#FFFFFF",
              textShadow:
                "5px 5px 0px rgba(0,184,255,0.35)",
            }}
          >
            MUMBAI
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: {
                xs: "5rem",
                sm: "7rem",
                md: "10rem",
              },
              lineHeight: 0.9,
              letterSpacing: {
                xs: 2,
                md: 5,
              },
              color: "#d61831",
              textShadow:
                "5px 5px 0px rgba(184,240,0,0.25)",
            }}
          >
            BANTAI
          </Typography>

          {/* Tagline */}
          <Box
            sx={{
              mt: 3,
              mb: 4,
              borderLeft: "4px solid #B8F000",
              pl: 2.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: {
                  xs: "1.2rem",
                  md: "1.7rem",
                },
                fontWeight: 800,
                color: "#FFFFFF",
              }}
            >
              Mumbai Ka Swag.
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
                fontWeight: 600,
                color: "#B8F000",
                mt: 0.5,
              }}
            >
              Premium Soda Ka Fizz.
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            sx={{
              maxWidth: 650,
              color: "#C9D9E6",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: {
                xs: "0.9rem",
                md: "1rem",
              },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            {company.description}
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Button
              href="#products"
              variant="contained"
              size="large"
              sx={{
                background: "#B8F000",
                color: "#071A2B",
                borderRadius: 50,
                px: 4,
                py: 1.5,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                textTransform: "none",
                "&:hover": {
                  background: "#D0FF33",
                  transform: "translateY(-2px)",
                },
                transition: "0.25s",
              }}
            >
              Explore Our Soda
            </Button>

            <Button
              href="#contact"
              variant="outlined"
              size="large"
              sx={{
                color: "#FFFFFF",
                borderColor: "#00B8FF",
                borderWidth: 2,
                borderRadius: 50,
                px: 4,
                py: 1.5,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#B8F000",
                  color: "#B8F000",
                  background: "rgba(184,240,0,0.05)",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

