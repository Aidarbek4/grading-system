const express = require('express');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/attendanceRoutes'))
app.use('/api', require('./routes/cityRoutes'))
app.use('/api', require('./routes/examRoutes'))
app.use('/api', require('./routes/examGradeRoutes'))
app.use('/api', require('./routes/gradeRoutes'))
app.use('/api', require('./routes/groupRoutes'))
app.use('/api', require('./routes/lessonRoutes'))
app.use('/api', require('./routes/lessonTimeRoutes'))
app.use('/api', require('./routes/regionRoutes'))
app.use('/api', require('./routes/roomRoutes'))
app.use('/api', require('./routes/schoolRoutes'))
app.use('/api', require('./routes/studentRoutes'))
app.use('/api', require('./routes/subjectRoutes'))
app.use('/api', require('./routes/teacherRoutes'))

// Подключение к базе данных и запуск сервера
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
