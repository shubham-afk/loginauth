import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ margin: 2 }}></Box>
      <Typography variant="h4">Dashboard</Typography>
      <Button
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
}
