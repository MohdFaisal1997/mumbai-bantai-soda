




// import { useEffect, useState } from "react";

// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Container,
//   Typography,
// } from "@mui/material";

// import { company } from "../data/company";

// function Products() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % company.products.length);
//     }, 2500);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <Box
//       id="products"
//       sx={{
//         py: { xs: 8, md: 12 },
//         background: "#f4f9fc",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* SECTION TITLE */}
//         <Typography
//           sx={{
//             color: "#00a8e8",
//             fontWeight: 800,
//             textAlign: "center",
//             letterSpacing: 2,
//             fontFamily: '"Montserrat", sans-serif',
//           }}
//         >
//           OUR PRODUCTS
//         </Typography>

//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "center",
//             fontWeight: 900,
//             color: "#102a43",
//             mt: 1,
//             mb: 2,
//             fontFamily: '"Bebas Neue", sans-serif',
//             letterSpacing: 2,
//             fontSize: {
//               xs: "2.8rem",
//               md: "4rem",
//             },
//           }}
//         >
//           PREMIUM SODA COLLECTION
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#627d98",
//             mb: 6,
//             fontFamily: '"Montserrat", sans-serif',
//           }}
//         >
//           Explore our range of refreshing soda flavours.
//         </Typography>

//         {/* PRODUCT SLIDER */}
//         <Box
//           sx={{
//             position: "relative",
//             overflow: "hidden",
//             width: "100%",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               transform: `translateX(-${activeIndex * 100}%)`,
//               transition: "transform 0.7s ease-in-out",
//             }}
//           >
//             {company.products.map((product) => (
//               <Box
//                 key={product.name}
//                 sx={{
//                   minWidth: "100%",
//                   px: {
//                     xs: 0,
//                     sm: 2,
//                   },
//                 }}
//               >
//                 <Card
//                   sx={{
//                     maxWidth: 850,
//                     mx: "auto",
//                     borderRadius: 5,
//                     overflow: "hidden",
//                     display: {
//                       xs: "block",
//                       md: "flex",
//                     },
//                     background: "#FFFFFF",
//                     boxShadow:
//                       "0 20px 50px rgba(7,26,43,0.12)",
//                   }}
//                 >
//                   {/* PRODUCT IMAGE */}
//                   <Box
//                     sx={{
//                       width: {
//                         xs: "100%",
//                         md: "50%",
//                       },
//                       overflow: "hidden",
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       image={product.image}
//                       alt={product.name}
//                       sx={{
//                         width: "100%",
//                         height: {
//                           xs: 330,
//                           md: 430,
//                         },
//                         objectFit: "cover",
//                         transition: "transform 0.5s ease",
//                         "&:hover": {
//                           transform: "scale(1.05)",
//                         },
//                       }}
//                     />
//                   </Box>

//                   {/* PRODUCT DETAILS */}
//                   <CardContent
//                     sx={{
//                       width: {
//                         xs: "100%",
//                         md: "50%",
//                       },
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       p: {
//                         xs: 4,
//                         md: 6,
//                       },
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontFamily: '"Montserrat", sans-serif',
//                         fontSize: "0.75rem",
//                         fontWeight: 800,
//                         letterSpacing: 3,
//                         color: "#00a8e8",
//                         mb: 1,
//                       }}
//                     >
//                       MUMBAI BANTAI
//                     </Typography>

//                     <Typography
//                       variant="h3"
//                       sx={{
//                         fontFamily: '"Bebas Neue", sans-serif',
//                         fontSize: {
//                           xs: "2.8rem",
//                           md: "4rem",
//                         },
//                         lineHeight: 1,
//                         color: "#071a2b",
//                         letterSpacing: 1,
//                         mb: 2,
//                       }}
//                     >
//                       {product.name}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         color: "#627d98",
//                         fontFamily: '"Montserrat", sans-serif',
//                         lineHeight: 1.8,
//                         mb: 3,
//                       }}
//                     >
//                       {product.description}
//                     </Typography>

//                     <Box
//                       sx={{
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: "50%",
//                           background: "#B8F000",
//                         }}
//                       />

//                       <Typography
//                         sx={{
//                           fontFamily: '"Montserrat", sans-serif',
//                           fontWeight: 700,
//                           color: "#071a2b",
//                         }}
//                       >
//                         Premium Soda
//                       </Typography>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* SLIDER DOTS */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 1,
//             mt: 4,
//           }}
//         >
//           {company.products.map((product, index) => (
//             <Box
//               key={product.name}
//               onClick={() => setActiveIndex(index)}
//               sx={{
//                 width: index === activeIndex ? 32 : 10,
//                 height: 10,
//                 borderRadius: 10,
//                 cursor: "pointer",
//                 background:
//                   index === activeIndex
//                     ? "#00a8e8"
//                     : "#cbd5e1",
//                 transition: "all 0.3s ease",
//               }}
//             />
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Products;


import { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import { company } from "../data/company";

function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % company.products.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      id="products"
      sx={{
        py: { xs: 8, md: 12 },
        background: "#f4f9fc",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">

        {/* SECTION TITLE */}

        <Typography
          sx={{
            color: "#00B8FF",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 3,
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          OUR PRODUCTS
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: {
              xs: "3rem",
              md: "4.5rem",
            },
            lineHeight: 1,
            letterSpacing: 2,
            color: "#071A2B",
            mt: 1,
            mb: 2,
          }}
        >
          PREMIUM SODA COLLECTION
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#627d98",
            fontFamily: '"Montserrat", sans-serif',
            mb: 6,
          }}
        >
          Explore our range of refreshing soda flavours.
        </Typography>

        {/* SLIDER */}

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 0.7s ease-in-out",
            }}
          >
            {company.products.map((product) => (
              <Box
                key={product.name}
                sx={{
                  minWidth: "100%",
                  px: {
                    xs: 0,
                    md: 2,
                  },
                }}
              >
                <Card
                  sx={{
                    maxWidth: 1000,
                    minHeight: {
                      xs: "auto",
                      md: 500,
                    },
                    mx: "auto",
                    borderRadius: 5,
                    overflow: "hidden",
                    display: {
                      xs: "block",
                      md: "flex",
                    },
                    background: "#FFFFFF",
                    boxShadow:
                      "0 20px 60px rgba(7,26,43,0.12)",
                  }}
                >

                  {/* IMAGE */}

                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        md: "55%",
                      },
                      height: {
                        xs: 400,
                        sm: 480,
                        md: 500,
                      },
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: "100%",

                        /*
                         * IMPORTANT:
                         * contain shows the COMPLETE
                         * soda image without cropping.
                         */
                        objectFit: "contain",

                        display: "block",

                        transition:
                          "transform 0.6s ease",

                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    />
                  </Box>

                  {/* PRODUCT INFORMATION */}

                  <CardContent
                    sx={{
                      width: {
                        xs: "100%",
                        md: "45%",
                      },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      p: {
                        xs: 4,
                        md: 6,
                      },
                    }}
                  >

                    <Typography
                      sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        letterSpacing: 3,
                        color: "#00B8FF",
                        mb: 1,
                      }}
                    >
                      MUMBAI BANTAI
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontSize: {
                          xs: "3rem",
                          md: "4rem",
                        },
                        lineHeight: 1,
                        color: "#071A2B",
                        letterSpacing: 1,
                        mb: 2,
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#627d98",
                        fontFamily: '"Montserrat", sans-serif',
                        lineHeight: 1.8,
                        mb: 3,
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#B8F000",
                          flexShrink: 0,
                        }}
                      />

                      <Typography
                        sx={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontWeight: 700,
                          color: "#071A2B",
                        }}
                      >
                        Premium Soda
                      </Typography>
                    </Box>

                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* SLIDER DOTS */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 4,
          }}
        >
          {company.products.map((product, index) => (
            <Box
              key={product.name}
              onClick={() => setActiveIndex(index)}
              sx={{
                width:
                  index === activeIndex ? 32 : 10,
                height: 10,
                borderRadius: 10,
                cursor: "pointer",
                background:
                  index === activeIndex
                    ? "#00B8FF"
                    : "#CBD5E1",
                transition:
                  "all 0.3s ease",
              }}
            />
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default Products;