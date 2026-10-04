// import {
//   Box,
//   Container,
//   Typography,
// } from "@mui/material";

// const galleryImages = [
//   "/images/products/soda1.jpeg",
//   "/images/products/soda2.jpeg",
//   "/images/products/soda3.jpeg",
//   "/images/products/soda4.jpeg",
//   "/images/products/soda5.jpeg",
//   "/images/products/soda6.jpeg",
//   "/images/products/soda7.jpeg",
// ];

// export default function Gallery() {
//   return (
//     <Box
//       id="gallery"
//       sx={{
//         py: { xs: 8, md: 12 },
//         background: "#ffffff",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           sx={{
//             color: "#00a8e8",
//             fontWeight: 800,
//             textAlign: "center",
//             letterSpacing: 2,
//           }}
//         >
//           GALLERY
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "center",
//             fontWeight: 900,
//             color: "#102a43",
//             mt: 1,
//             mb: 6,
//             fontSize: {
//               xs: "2rem",
//               md: "3rem",
//             },
//           }}
//         >
//           Our Soda Collection
//         </Typography>

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               sm: "repeat(2, 1fr)",
//               md: "repeat(4, 1fr)",
//             },
//             gap: 2,
//           }}
//         >
//           {galleryImages.map((image, index) => (
//             <Box
//               key={image}
//               component="img"
//               src={image}
//               alt={`Soda gallery ${index + 1}`}
//               sx={{
//                 width: "100%",
//                 height: 280,
//                 objectFit: "cover",
//                 borderRadius: 3,
//               }}
//             />
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }


import { useEffect, useState } from "react";

import {
  Box,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sodaImages = [
  "/images/products/soda1.jpeg",
  "/images/products/soda2.jpeg",
  "/images/products/soda3.jpeg",
  "/images/products/soda4.jpeg",
  "/images/products/soda5.jpeg",
  "/images/products/soda6.jpeg",
  "/images/products/soda7.jpeg",
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % sodaImages.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const previousImage = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + sodaImages.length) %
        sodaImages.length
    );
  };

  const nextImage = () => {
    setActiveIndex(
      (current) => (current + 1) % sodaImages.length
    );
  };

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#071A2B",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION TITLE */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#B8F000",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 800,
            letterSpacing: 4,
            fontSize: "0.8rem",
            mb: 1,
          }}
        >
          MUMBAI BANTAI
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#FFFFFF",
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
          SODA GALLERY
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#9FB3C8",
            fontFamily: '"Montserrat", sans-serif',
            mb: 5,
          }}
        >
          Explore the Mumbai Bantai Premium Soda collection.
        </Typography>

        {/* SLIDER */}

        <Box
          sx={{
            position: "relative",
            maxWidth: 950,
            mx: "auto",
          }}
        >
          {/* IMAGE CONTAINER */}

          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: {
                xs: 400,
                sm: 500,
                md: 600,
              },
              overflow: "hidden",
              borderRadius: {
                xs: 3,
                md: 5,
              },
              background: "#0A2942",
              boxShadow:
                "0 25px 70px rgba(0,0,0,0.35)",
            }}
          >
            {sodaImages.map((image, index) => (
              <Box
                key={image}
                component="img"
                src={image}
                alt={`Mumbai Bantai Soda ${index + 1}`}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",

                  /*
                   * contain keeps the complete soda
                   * product image visible.
                   */
                  objectFit: "contain",

                  background: "#FFFFFF",

                  opacity:
                    index === activeIndex ? 1 : 0,

                  transform:
                    index === activeIndex
                      ? "scale(1)"
                      : "scale(1.04)",

                  transition:
                    "opacity 0.6s ease, transform 0.8s ease",

                  pointerEvents:
                    index === activeIndex
                      ? "auto"
                      : "none",
                }}
              />
            ))}

            {/* LEFT BUTTON */}

            <IconButton
              onClick={previousImage}
              sx={{
                position: "absolute",
                left: {
                  xs: 12,
                  md: 20,
                },
                top: "50%",
                transform: "translateY(-50%)",
                width: {
                  xs: 42,
                  md: 52,
                },
                height: {
                  xs: 42,
                  md: 52,
                },
                background:
                  "rgba(7,26,43,0.75)",
                color: "#FFFFFF",
                backdropFilter: "blur(8px)",
                "&:hover": {
                  background: "#00B8FF",
                },
              }}
            >
              <ArrowBackIosNewIcon
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 22,
                  },
                }}
              />
            </IconButton>

            {/* RIGHT BUTTON */}

            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: {
                  xs: 12,
                  md: 20,
                },
                top: "50%",
                transform: "translateY(-50%)",
                width: {
                  xs: 42,
                  md: 52,
                },
                height: {
                  xs: 42,
                  md: 52,
                },
                background:
                  "rgba(7,26,43,0.75)",
                color: "#FFFFFF",
                backdropFilter: "blur(8px)",
                "&:hover": {
                  background: "#00B8FF",
                },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  fontSize: {
                    xs: 18,
                    md: 22,
                  },
                }}
              />
            </IconButton>
          </Box>

          {/* DOTS */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mt: 3,
            }}
          >
            {sodaImages.map((image, index) => (
              <Box
                key={image}
                onClick={() => setActiveIndex(index)}
                sx={{
                  width:
                    index === activeIndex
                      ? 32
                      : 10,
                  height: 10,
                  borderRadius: 10,
                  background:
                    index === activeIndex
                      ? "#B8F000"
                      : "#627D98",
                  cursor: "pointer",
                  transition:
                    "all 0.3s ease",
                }}
              />
            ))}
          </Box>

          {/* IMAGE NUMBER */}

          <Typography
            sx={{
              textAlign: "center",
              color: "#9FB3C8",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: 2,
              mt: 2,
            }}
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(sodaImages.length).padStart(2, "0")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Gallery;