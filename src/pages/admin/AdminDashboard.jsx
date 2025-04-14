import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Divider,
  useTheme,
  styled,
} from "@mui/material";
import CreateUser from "../../components/admin/CreateUser";

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 500,
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  "&:hover": {
    color: theme.palette.primary.dark,
    opacity: 1,
  },
}));

const AdminDashboard = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 600,
          color: theme.palette.primary.dark,
          letterSpacing: "-0.5px",
        }}
      >
        Quản lý hệ thống
      </Typography>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            p: 4,
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            aria-label="admin dashboard tabs"
            sx={{
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: 2,
              },
            }}
          >
            <StyledTab label="Tạo người dùng" />
            <StyledTab label="Quản lý người dùng" />
            <StyledTab label="Quản lý lớp học" />
          </Tabs>

          {/* Tab Content */}
          <Box
            sx={{
              pt: 4,
              minHeight: 400,
              borderTop: `1px solid ${theme.palette.divider}`,
              bgcolor: "background.default",
              borderRadius: 2,
              mt: 2,
              p: 3,
            }}
          >
            {currentTab === 0 && <CreateUser />}

            {currentTab === 1 && (
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: theme.palette.text.secondary }}
                >
                  Danh sách người dùng
                </Typography>
                {/* Add User List Table Here */}
              </Box>
            )}

            {currentTab === 2 && (
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: theme.palette.text.secondary }}
                >
                  Quản lý lớp học
                </Typography>
                {/* Add Class Management Here */}
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminDashboard;
