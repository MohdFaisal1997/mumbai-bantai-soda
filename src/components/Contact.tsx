// import {
//   Box,
//   Button,
//   Container,
//   Stack,
//   Typography,
// } from "@mui/material";

// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// import { company } from "../data/company";

// export default function Contact() {
//   return (
//     <Box
//       id="contact"
//       sx={{
//         py: { xs: 8, md: 12 },
//         background: "#eaf8ff",
//       }}
//     >
//       <Container maxWidth="md">
//         <Typography
//           sx={{
//             color: "#00a8e8",
//             fontWeight: 800,
//             textAlign: "center",
//             letterSpacing: 2,
//           }}
//         >
//           CONTACT US
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "center",
//             fontWeight: 900,
//             color: "#102a43",
//             mt: 1,
//             mb: 3,
//             fontSize: {
//               xs: "2rem",
//               md: "3rem",
//             },
//           }}
//         >
//           Let's Talk
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#627d98",
//             mb: 5,
//           }}
//         >
//           Get in touch with us for products, business enquiries and more.
//         </Typography>

//         <Stack spacing={2}>
//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<PhoneIcon />}
//             href={`tel:${company.phone}`}
//             sx={{
//               py: 1.7,
//               borderRadius: 3,
//               background: "#102a43",
//             }}
//           >
//             {company.phone}
//           </Button>

//           <Button
//             variant="contained"
//             size="large"
//             startIcon={<WhatsAppIcon />}
//             href={`https://wa.me/${company.whatsapp}`}
//             target="_blank"
//             sx={{
//               py: 1.7,
//               borderRadius: 3,
//               background: "#00a8e8",
//             }}
//           >
//             WhatsApp Us
//           </Button>

//           <Button
//             variant="outlined"
//             size="large"
//             startIcon={<EmailIcon />}
//             href={`mailto:${company.email}`}
//             sx={{
//               py: 1.7,
//               borderRadius: 3,
//             }}
//           >
//             {company.email}
//           </Button>
//         </Stack>

//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 5,
//             p: 3,
//             background: "white",
//             borderRadius: 4,
//             alignItems: "flex-start",
//           }}
//         >
//           <LocationOnIcon sx={{ color: "#00a8e8" }} />

//           <Box>
//             <Typography sx={{ fontWeight: 800 }}>
//               Business Address
//             </Typography>

//            <Typography
//   sx={{
//     color: "#627d98",
//     mt: 0.5,
//   }}
// >
//               {company.address}
//             </Typography>
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

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { company } from "../data/company";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#f4f9fc",
      }}
    >
      <Container maxWidth="lg">

        {/* TITLE */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#00B8FF",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 800,
            letterSpacing: 3,
            fontSize: "0.8rem",
            mb: 1,
          }}
        >
          GET IN TOUCH
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#071A2B",
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },
            letterSpacing: 2,
            lineHeight: 1,
            mb: 2,
          }}
        >
          CONTACT MUMBAI BANTAI
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#627D98",
            fontFamily: '"Montserrat", sans-serif',
            maxWidth: 650,
            mx: "auto",
            mb: 6,
          }}
        >
          Contact our team for product enquiries, business
          enquiries and orders.
        </Typography>

        {/* OWNER CARDS */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
            maxWidth: 900,
            mx: "auto",
            mb: 5,
          }}
        >
          {company.owners.map((owner) => (
            <Box
              key={owner.name}
              sx={{
                background: "#FFFFFF",
                borderRadius: 4,
                p: {
                  xs: 3,
                  md: 4,
                },
                boxShadow:
                  "0 15px 40px rgba(7,26,43,0.08)",
                border:
                  "1px solid rgba(0,184,255,0.12)",
              }}
            >
              <Typography
                sx={{
                  color: "#00B8FF",
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: 2,
                  mb: 1,
                }}
              >
                OWNER
              </Typography>

              <Typography
                sx={{
                  color: "#071A2B",
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: "2.5rem",
                  letterSpacing: 1,
                  lineHeight: 1,
                  mb: 3,
                }}
              >
                {owner.name}
              </Typography>

              {/* PHONE */}

              <Button
                fullWidth
                href={`tel:${owner.phone.replace(/\s/g, "")}`}
                startIcon={<PhoneIcon />}
                variant="contained"
                sx={{
                  mb: 1.5,
                  py: 1.3,
                  borderRadius: 3,
                  background: "#00B8FF",
                  color: "#FFFFFF",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": {
                    background: "#0099D6",
                  },
                }}
              >
                Call {owner.phone}
              </Button>

              {/* WHATSAPP */}

              <Button
                fullWidth
                href={`https://wa.me/${owner.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                variant="contained"
                sx={{
                  py: 1.3,
                  borderRadius: 3,
                  background: "#B8F000",
                  color: "#071A2B",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 800,
                  textTransform: "none",
                  "&:hover": {
                    background: "#D0FF33",
                  },
                }}
              >
                WhatsApp
              </Button>
            </Box>
          ))}
        </Box>

        {/* BUSINESS INFORMATION */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            maxWidth: 1000,
            mx: "auto",
          }}
        >

          {/* EMAIL */}

          <Box
            sx={{
              background: "#071A2B",
              borderRadius: 4,
              p: 3,
              textAlign: "center",
            }}
          >
            <EmailIcon
              sx={{
                color: "#B8F000",
                fontSize: 32,
                mb: 1,
              }}
            />

            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Email
            </Typography>

            <Typography
              sx={{
                color: "#9FB3C8",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "0.85rem",
              }}
            >
              {company.email}
            </Typography>
          </Box>

          {/* ADDRESS */}

          <Box
            sx={{
              background: "#071A2B",
              borderRadius: 4,
              p: 3,
              textAlign: "center",
            }}
          >
            <LocationOnIcon
              sx={{
                color: "#B8F000",
                fontSize: 32,
                mb: 1,
              }}
            />

            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              Address
            </Typography>

            <Typography
              sx={{
                color: "#9FB3C8",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              {company.address}
            </Typography>
          </Box>

          {/* COMPANY */}

          <Box
            sx={{
              background: "#071A2B",
              borderRadius: 4,
              p: 3,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#B8F000",
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: "2rem",
                letterSpacing: 1,
                lineHeight: 1,
                mb: 1,
              }}
            >
              MUMBAI BANTAI
            </Typography>

            <Typography
              sx={{
                color: "#9FB3C8",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "0.8rem",
              }}
            >
              Premium Soda
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

export default Contact;