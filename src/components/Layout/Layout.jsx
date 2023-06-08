import Container from "@mui/material/Container";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer/index";
const Layout = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "6110px",
        width: "1920px",
        maxWidth: "100%",
        bgcolor: "#ffff",
        padding: 0,
      }}
    >
      <Header />
      <Outlet />
      <ScrollToTop smooth />
      <Footer />
    </Container>
  );
};

export default Layout;
