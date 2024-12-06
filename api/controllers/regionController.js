const { Region } = require('../models');

// Создание нового региона
exports.createRegion = async (req, res) => {
  try {
    const { region_name } = req.body;

    const region = await Region.create({
      region_name,
    });

    return res.status(201).json({ message: 'Region created successfully', region });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating region', error: error.message });
  }
};

// Получение всех регионов
exports.getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    return res.status(200).json(regions);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching regions', error: error.message });
  }
};

// Получение региона по ID
exports.getRegionById = async (req, res) => {
  try {
    const { regionId } = req.params;
    const region = await Region.findByPk(regionId);

    if (!region) {
      return res.status(404).json({ message: 'Region not found' });
    }

    return res.status(200).json(region);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching region', error: error.message });
  }
};

// Обновление региона
exports.updateRegion = async (req, res) => {
  try {
    const { regionId } = req.params;
    const { region_name } = req.body;

    const region = await Region.findByPk(regionId);
    if (!region) {
      return res.status(404).json({ message: 'Region not found' });
    }

    region.region_name = region_name || region.region_name;
    await region.save();

    return res.status(200).json({ message: 'Region updated successfully', region });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating region', error: error.message });
  }
};

// Удаление региона
exports.deleteRegion = async (req, res) => {
  try {
    const { regionId } = req.params;
    const region = await Region.findByPk(regionId);

    if (!region) {
      return res.status(404).json({ message: 'Region not found' });
    }

    await region.destroy();
    return res.status(200).json({ message: 'Region deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting region', error: error.message });
  }
};
