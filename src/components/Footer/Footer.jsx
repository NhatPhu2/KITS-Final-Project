import { Container, Box, Typography, Button } from "@mui/material";
import PaymentIcon from "../../assets/Image/icons_payment 1.svg";
import arrowToTop from "../../assets/Image/arrowToTop.svg";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
import IconFacebook from "../../assets/Image/iconFacebook.svg";
import IconTwitter from "../../assets/Image/iconTwitter.svg";
import IconLinked from "../../assets/Image/iconLinked.svg";
import IconInstagram from "../../assets/Image/iconInstagram.svg";
const TableCell = withStyles({
  root: {
    borderBottom: "none",
    fontFamily:"Open Sans"
  },
})(MuiTableCell);
const Footer = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        minHeight: "200vh",
      }}
    >
      <Container
        sx={{
          padding: "50px",
        }}
        disableGutters
        maxWidth={false}
      >
        <TableContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Table
            sx={{
              width: "60%",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left" width="40%">
                  <Typography
                    fontFamily="Open Sans"
                    fontSize="28px"
                    fontWeight="600"
                  >
                    Lisa
                  </Typography>
                </TableCell>
                <TableCell align="left" width="20%">
                  <Typography
                    fontFamily="Open Sans"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    CATALOG
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    fontFamily="Open Sans"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    ABOUT US
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    fontFamily="Open Sans"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    CUSTOMER SERVICES
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell rowSpan={3} component="td" scope="row">
                  <Typography
                    fontFamily="Open Sans"
                    fontSize="16px"
                    fontWeight="400"
                    color="#1E2832BF"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </Typography>
                </TableCell>
                <TableCell align="left">Necklaces</TableCell>

                <TableCell align="left">Our Producers</TableCell>
                <TableCell align="left">Contact Us</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">hoodies</TableCell>
                <TableCell align="left">Sitemap</TableCell>
                <TableCell align="left">Track Your Order</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">Jewelry Box</TableCell>

                <TableCell align="left">FAQ</TableCell>
                <TableCell align="left">Product Care & Repair</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell  align="left" rowSpan={2} component="td" scope="row">
                  <Box
                    display="flex"
                    gap="40px"
                    alignItems="center"
                  >
                    <img src={IconFacebook} alt="" />
                    <img src={IconTwitter} alt="" />
                    <img src={IconLinked} alt="" />
                    <img src={IconInstagram} alt="" />
                  </Box>
                </TableCell>
                <TableCell align="left">t-shirt</TableCell>

                <TableCell align="left">About Us</TableCell>
                <TableCell align="left">Book an Appointment</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">jacket</TableCell>
                <TableCell align="left">Terms & Conditions</TableCell>
                <TableCell align="left">Shipping & Returns</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {/*footer*/}
      <Box
        bgcolor="#1E2832"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        p="10px 300px 10px 300px"
      >
        <Typography color="#FFFFFF">© 2023 LISA , Inc.</Typography>
        <img src={PaymentIcon} alt="" />
        <Button
          sx={{
            padding: "5px 15px 5px 15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            "&:hover":{backgroundColor: "#FF6F61" }
          }}
          onClick={() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })}
        >
          <Typography color="#FFFFFF" textTransform="capitalize">
            Scroll to top
          </Typography>
          <img src={arrowToTop} alt="" />
        </Button>
      </Box>
    </Container>
  );
};

export default Footer;
