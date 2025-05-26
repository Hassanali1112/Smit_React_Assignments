import React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import {
  CssBaseline,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AnimatePresence, motion } from "framer-motion";



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: { mode },
        shape: { borderRadius: 16 },
        typography: { fontFamily: "'Segoe UI', sans-serif" },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ScrollToTop />
        <Header />
        <Container>
          <Box component="main" sx={{ p: 3 }}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageWrapper>
                      <About />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <PageWrapper>
                      <Skills />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <PageWrapper>
                      <Projects />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/experience"
                  element={
                    <PageWrapper>
                      <Experience />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageWrapper>
                      <Contact />
                    </PageWrapper>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PageWrapper>
                      <NotFound />
                    </PageWrapper>
                  }
                />
              </Routes>
            </AnimatePresence>
          </Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Container sx={{display : "flex"}} >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hassan Ali
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 250 }}>
                  {pages.map((page) => (
                    <ListItem
                      button
                      key={page.name}
                      component={Link}
                      to={page.path}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <ListItemText primary={page.name} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            pages.map((page) => (
              <Button
              
                key={page.name}
                color="inherit"
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))
          )}

          <IconButton onClick={colorMode.toggleColorMode}  color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        p: 2,
        mt: 4,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Hassan Ali. All rights reserved.
      </Typography>
    </Box>
  );
}
