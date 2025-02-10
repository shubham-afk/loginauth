import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = [
      { email: "qwe@gmail.com", password: "1234" },
      { email: "abc@gmail.com", password: "12345" },
    ];

    const user = storedUser.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", credentials.email);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

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
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button Link href="#" sx={{ mt: 1 }}>
              Forgot password?
            </Button>
            <Button Link href="/signup" sx={{ mt: 1 }}>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
