import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  Avatar,
  useTheme,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import HistoryIcon from "@mui/icons-material/History";

const StyledButton = styled(Button)(({ theme }) => ({
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[3],
  },
}));

const StudentDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
        minHeight: "10vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          background: `linear-gradient(145deg, ${theme.palette.background.default}, #f8f9fa)`,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: theme.palette.text.primary,
            mb: 1,
          }}
        >
          Trang Sinh Viên
        </Typography>

        <Box
          sx={{
            textAlign: "center",
            mb: 4,
            position: "relative",
          }}
        >
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
              width: 56,
              height: 56,
              mb: 2,
              mx: "auto",
            }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            {user?.studentId && `MSSV: ${user.studentId}`}
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <StyledButton
              variant="contained"
              color="primary"
              startIcon={<QrCodeScannerIcon sx={{ fontSize: 28 }} />}
              onClick={() => navigate("/student/check-in")}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: "1 rem",
              }}
            >
              Điểm Danh QR
            </StyledButton>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledButton
              variant="outlined"
              color="secondary"
              startIcon={<HistoryIcon sx={{ fontSize: 28 }} />}
              onClick={() => navigate("/student/attendance-history")}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: "1 rem",
                borderWidth: 2,
                "&:hover": { borderWidth: 2 },
              }}
            >
              Lịch Sử Điểm Danh
            </StyledButton>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Chào mừng bạn đến với hệ thống điểm danh thông minh
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentDashboard;
