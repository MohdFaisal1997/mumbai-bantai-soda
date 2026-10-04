// import { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

// const menuItems = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Products", href: "#products" },
//   { label: "Factory", href: "#factory" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           background: "rgba(21, 158, 94, 0.96)",
//           backdropFilter: "blur(10px)",
//           color: "#c9def171",
//         }}
//       >
//         <Toolbar
//           sx={{
//             maxWidth: "1200px",
//             width: "100%",
//             margin: "auto",
//           }}
//         >
//           <LocalDrinkIcon
//             sx={{
//               color: "#00e83a",
//               fontSize: 32,
//               mr: 1,
//             }}
//           />

//           {/* <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 800,
//               flexGrow: 1,
//               color: "#102a43",
//             //   backgroundColor: "rgba(255,255,255,0.1)",
//             }}
//           >
//             Mumbai Bantai -Bambai Ka Swag, Premium Soda Ka Fizz
//           </Typography> */}
//           <Typography
//   sx={{
//     fontFamily: '"Bebas Neue", sans-serif',
//     fontSize: {
//       xs: "2rem",
//       md: "2.8rem",
//     },
//     fontWeight: 700,
//     letterSpacing: 1.5,
//     color: "#00a8e8",
//     lineHeight: 1,
//   }}
// >
//   MUMBAI BANTAI
// </Typography>
          

//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               gap: 1,
//             }}
//           >
//             {menuItems.map((item) => (
//               <Button
//                 key={item.label}
//                 href={item.href}
//                 sx={{
//                   color: "#102a43",
//                   fontWeight: 600,
//                   "&:hover": {
//                     color: "#00a8e8",
//                   },
//                 }}
//               >
//                 {item.label}
//               </Button>
//             ))}
//           </Box>

//           <IconButton
//             onClick={() => setOpen(true)}
//             sx={{
//               display: { xs: "flex", md: "none" },
//               color: "#102a43",
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => setOpen(false)}
//       >
//         <Box
//           sx={{
//             width: 260,
//             pt: 2,
//           }}
//         >
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.label} disablePadding>
//                 <ListItemButton
//                   component="a"
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.label}
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#071A2B",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 70, md: 82 },
            justifyContent: "space-between",
          }}
        >
          {/* BRAND */}
          <Box
            sx={{
              display: "flex",
            //   justifyContent: "center",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
                letterSpacing: 2,
                lineHeight: 0.9,
                color: "#00B8FF",
              }}
            >
              MUMBAI
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
                letterSpacing: 2,
                lineHeight: 0.9,
                color: "#B8F000",
              }}
            >
              BANTAI
            </Typography>

            <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: 2.5,
                color: "#FFFFFF",
                mt: 0.5,
              }}
            >
              CAN ENTERPRISES
            </Typography>
          </Box>

          {/* NAVIGATION */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 1,
            }}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Products", "#products"],
              ["Factory", "#factory"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Button
                key={label}
                href={href}
                sx={{
                  color: "#FFFFFF",
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  textTransform: "none",
                  px: 1.5,
                  "&:hover": {
                    color: "#00B8FF",
                    background: "transparent",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* WHATSAPP / CTA */}
          <Button
            href="#contact"
            variant="contained"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              background: "#B8F000",
              color: "#071A2B",
              borderRadius: 50,
              px: 2.5,
              py: 1,
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 800,
              textTransform: "none",
              "&:hover": {
                background: "#D0FF33",
              },
            }}
          >
            Get In Touch
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

