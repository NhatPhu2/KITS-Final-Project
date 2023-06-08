import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { LogoStore, LogoSearch, LogoUser, LogoCart } from "../ImageSVG";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@mui/material/TextField";
const Header = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        background: "#F0F0F0",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "1350px",
          maxWidth: "100%",
          borderBottom:"1px solid #E3E3E3"
        }}
      >
        <Grid
          container
          justifyContent="space-between"

          alignItems="center"
        >
          <Grid>
            <TextField
              sx={{
                border: "none",
              }}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LogoSearch />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid>
            <LogoStore />
          </Grid>
          <Grid>
            <Box
              component="div"
              sx={{ display: "flex", gap: "20px", alignItems: "center" }}
            >
              <Box
                component="div"
                sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
              >
                <LogoUser />
                <Typography> Account</Typography>
              </Box>
              <Box component="div" sx={{ display: "flex", gap: "10px" }}>
                <LogoCart />
                <Typography>Shoppping</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Header;
