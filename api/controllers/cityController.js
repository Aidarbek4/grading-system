const { City } = require('../models');

// Создание нового города
exports.createCity = async (req, res) => {
  try {
    const { city_name, region_id } = req.body;

    const city = await City.create({
      city_name,
      region_id
    });

    return res.status(201).json({ message: 'City created successfully', city });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating city', error: error.message });
  }
};

// Получение всех городов
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    return res.status(200).json(cities);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching cities', error: error.message });
  }
};

// Получение города по ID
exports.getCityById = async (req, res) => {
  try {
    const { cityId } = req.params;
    const city = await City.findByPk(cityId);

    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    return res.status(200).json(city);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching city', error: error.message });
  }
};

// Обновление города
exports.updateCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const { city_name, region_id } = req.body;

    const city = await City.findByPk(cityId);
    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    city.city_name = city_name || city.city_name;
    city.region_id = region_id || city.region_id;
    await city.save();

    return res.status(200).json({ message: 'City updated successfully', city });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating city', error: error.message });
  }
};

// Удаление города
exports.deleteCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const city = await City.findByPk(cityId);

    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    await city.destroy();
    return res.status(200).json({ message: 'City deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting city', error: error.message });
  }
};
