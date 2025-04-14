import React, { useState } from "react";
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
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import PersonalInfo from "../../Components/student/PersonalInfo"; 
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
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  const handleShowPersonalInfo = () => {
    setShowPersonalInfo(true);
  };

  const handleBackToDashboard = () => {
    setShowPersonalInfo(false);
  };

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
        {!showPersonalInfo ? (
          <>
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
                  width: 80,
                  height: 80,
                  mb: 2,
                  mx: "auto",
                  fontSize: "2rem",
                }}
              >
                {user?.username?.charAt(0).toUpperCase()}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                {user?.username || "Tên người dùng"}
              </Typography>
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
                <Tooltip title="Quét mã QR để điểm danh" arrow>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    startIcon={<QrCodeScannerIcon sx={{ fontSize: 28 }} />}
                    onClick={() => navigate("/student/check-in")}
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: "1rem",
                    }}
                  >
                    Điểm Danh QR
                  </StyledButton>
                </Tooltip>
              </Grid>

              <Grid item xs={12} md={6}>
                <Tooltip title="Xem lịch sử điểm danh của bạn" arrow>
                  <StyledButton
                    variant="outlined"
                    color="secondary"
                    startIcon={<HistoryIcon sx={{ fontSize: 28 }} />}
                    onClick={() => navigate("/student/attendance-history")}
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: "1rem",
                      borderWidth: 2,
                      "&:hover": { borderWidth: 2 },
                    }}
                  >
                    Lịch Sử Điểm Danh
                  </StyledButton>
                </Tooltip>
              </Grid>

              <Grid item xs={12} md={6}>
                <Tooltip title="Xem thông tin cá nhân của bạn" arrow>
                  <StyledButton
                    variant="contained"
                    color="success"
                    startIcon={<PersonIcon sx={{ fontSize: 28 }} />}
                    onClick={handleShowPersonalInfo}
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: "1rem",
                    }}
                  >
                    Thông Tin Cá Nhân
                  </StyledButton>
                </Tooltip>
              </Grid>
            </Grid>
          </>
        ) : (
          <PersonalInfo user={user} onBack={handleBackToDashboard} />
        )}
      </Paper>
    </Container>
  );
};

export default StudentDashboard;
