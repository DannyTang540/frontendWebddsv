import { useState, useEffect } from "react";
import "./Login/Login.css";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  CircularProgress,
  InputAdornment,
  IconButton,
  Alert,
  Divider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await login(username, password, role);
      if (result.success) {
        const userRole = localStorage.getItem("userRole");
        if (userRole === "admin") {
          window.location.href = "/admin/dashboard";
        } else if (userRole === "teacher") {
          window.location.href = "/teacher/dashboard";
        } else {
          window.location.href = "/student/dashboard";
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {/* Left: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100vh", // Đảm bảo chiều cao luôn chiếm toàn bộ màn hình
          overflow: "hidden", // Ẩn phần hình ảnh vượt quá khung
        }}
      >
        <img
          src="https://navigates.vn/wp-content/uploads/2023/06/co-so-vat-chat-dai-hoc-cong-nghe-sai-gon-1.jpg"
          alt="Campus"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Đảm bảo hình ảnh không bị méo
          }}
        />
      </Grid>

      {/* Right: Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Đảm bảo chiều cao luôn chiếm toàn bộ màn hình
          p: { xs: 2, md: 4 }, // Padding linh hoạt cho các kích thước màn hình khác nhau
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 2, md: 4 }, // Padding linh hoạt
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
              Đăng nhập
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box component="form" onSubmit={handleLogin}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Vai trò</InputLabel>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  label="Vai trò"
                  sx={{
                    "& .MuiSelect-select": {
                      color:
                        role === "admin"
                          ? "#d32f2f"
                          : role === "student"
                          ? "#2e7d32"
                          : "#ed6c02",
                    },
                  }}
                >
                  <MenuItem value="student">Sinh viên</MenuItem>
                  <MenuItem value="teacher">Giáo viên</MenuItem>
                  <MenuItem value="admin">Quản trị viên</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                disabled={loading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Mật khẩu"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                disabled={loading}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                sx={{ mt: 3 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Đăng nhập"
                )}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
