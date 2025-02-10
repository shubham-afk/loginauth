import { Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: 2 }}>
          <Button
            variant="contained"
            component={Link}
            to="/login"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{ mr: 2 }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
