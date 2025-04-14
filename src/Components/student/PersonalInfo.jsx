import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PersonalInfo = ({ user, onBack }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 4,
        p: 2,
        border: `1px solid #ddd`,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          letterSpacing: "-0.5px",
          color: "#333",
          mb: 3,
        }}
      >
        Thông Tin Cá Nhân
      </Typography>

      <Typography variant="body1" sx={{ mb: 0.5 }}>
        Họ và Tên: {user?.name || "Chưa cập nhật"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        MSSV: {user?.studentId || "Chưa cập nhật"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        Email: {user?.email || "Chưa cập nhật"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        Ngành học: {user?.major || "Chưa cập nhật"}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        onClick={onBack}
        sx={{ mt: 2 }}
      >
        Quay Lại
      </Button>
    </Box>
  );
};

export default PersonalInfo;