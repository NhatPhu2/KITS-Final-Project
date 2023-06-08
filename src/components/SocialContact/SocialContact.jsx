import { Container, Typography, Grid } from "@mui/material";
import PhotoSocial1 from "../../assets/Image/photoSocial1.svg";
import ContactCard from "./ContactCard";
const SocialContact = () => {
  return (
    <Container
      sx={{ background: "#F0F0F0", padding: "80px 0px" }}
      maxWidth={false}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "1350px",
          maxWidth: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          fontFamily="Roboto"
          color="#000000"
          fontSize="50px"
          fontWeight="500"
        >
          Follow products and discounts on Instagram
        </Typography>
        <Grid
          m="50px 0px"
          container
          justifyContent="space-between"
          flexWrap="wrap"
        >
         <ContactCard photo={PhotoSocial1}/>
         <ContactCard photo={PhotoSocial1}/>
         <ContactCard photo={PhotoSocial1}/>
         <ContactCard photo={PhotoSocial1}/>
         <ContactCard photo={PhotoSocial1}/>
         <ContactCard photo={PhotoSocial1}/>
        </Grid>
        <Typography
          fontFamily="Roboto"
          fontSize="28px"
          fontWeight="500"
          color="#FF6F61"
        >
          @lisa.official
        </Typography>
      </Container>
    </Container>
  );
};

export default SocialContact;
