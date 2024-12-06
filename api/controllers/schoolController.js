const { School } = require('../models');

// Создание нового учебного заведения
exports.createSchool = async (req, res) => {
  try {
    const { school_name, school_number, address, city_id, region_id, user_id } = req.body;

    const school = await School.create({
      school_name,
      school_number,
      address,
      city_id,
      region_id,
      user_id
    });

    return res.status(201).json({ message: 'School created successfully', school });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating school', error: error.message });
  }
};

// Получение всех учебных заведений
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    return res.status(200).json(schools);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching schools', error: error.message });
  }
};

// Получение учебного заведения по ID
exports.getSchoolById = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const school = await School.findByPk(schoolId);

    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    return res.status(200).json(school);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching school', error: error.message });
  }
};

// Обновление учебного заведения
exports.updateSchool = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const { school_name, school_number, address, city_id, region_id, user_id } = req.body;

    const school = await School.findByPk(schoolId);
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    school.school_name = school_name || school.school_name;
    school.school_number = school_number || school.school_number;
    school.address = address || school.address;
    school.city_id = city_id || school.city_id;
    school.region_id = region_id || school.region_id;
    school.user_id = user_id || school.user_id;

    await school.save();

    return res.status(200).json({ message: 'School updated successfully', school });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating school', error: error.message });
  }
};

// Удаление учебного заведения
exports.deleteSchool = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const school = await School.findByPk(schoolId);

    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    await school.destroy();
    return res.status(200).json({ message: 'School deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting school', error: error.message });
  }
};
