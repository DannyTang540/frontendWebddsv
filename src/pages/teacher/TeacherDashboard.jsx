import { useState } from 'react';
import './TeacherDashboard.css';

import {
    Box,
    Container,
    Typography,
    Paper,
    Tabs,
    Tab,
    Divider
} from '@mui/material';

import CreateClass from '../../components/teacher/CreateClass';
import ClassList from '../../components/teacher/ClassList';

const TeacherDashboard = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <Container maxWidth="lg" className="teacherDashboardContainer">
               <Typography variant="h4" component="h1" className="dashboardTitle" gutterBottom>
                    Giảng viên Dashboard
                </Typography>
            <Paper elevation={3} className="teacherDashboardPaper">
                <Typography 
                    variant="h5" 
                    component="h2" 
                    className="dashboardSubtitle" 
                    gutterBottom
                    style={{ color: '#3f51b5' }} // Added color for subtitle
                >
                    Quản lý lớp học
                </Typography>
                <Box className="tabsContainer">
                    <Tabs
                        value={currentTab}
                        onChange={handleTabChange}
                        aria-label="teacher dashboard tabs"
                        className="teacherDashboardTabs"
                        TabIndicatorProps={{
                            style: { backgroundColor: '#3f51b5', height: '4px' }
                        }}
                    >
                        <Tab label="Danh sách lớp học" className="teacherDashboardTab" />
                        <Tab label="Tạo lớp mới" className="teacherDashboardTab" />
                        <Tab label="Báo cáo điểm danh" className="teacherDashboardTab" />
                    </Tabs>
                </Box>

                <Divider className="dashboardDivider" />

                <Box className="tabContent">
                    {currentTab === 0 && <ClassList />}
                    {currentTab === 1 && <CreateClass />}
                    {currentTab === 2 && (
                        <Typography variant="body1" className="reportPlaceholder">
                            Chức năng xem báo cáo điểm danh sẽ được hiển thị ở đây...
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default TeacherDashboard;