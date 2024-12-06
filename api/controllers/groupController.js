const { Group, School } = require('../models');

// Создать новую группу
exports.createGroup = async (req, res) => {
  try {
    const { group_name, group_start_date, group_end_date, school_id } = req.body;

    const group = await Group.create({
      group_name,
      group_start_date,
      group_end_date,
      school_id,
    });

    return res.status(201).json({ message: 'Group created successfully', group });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating group', error: error.message });
  }
};

// Получить все группы
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll({
      include: [
        {module: School, attributes: ['school_name']}
      ]
    });
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching groups', error: error.message });
  }
};

// Получить группу по ID
exports.getGroupById = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await Group.findByPk(groupId);

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    return res.status(200).json(group);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching group', error: error.message });
  }
};

// Обновить группу
exports.updateGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { group_name, group_start_date, group_end_date, school_id } = req.body;

    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    group.group_name = group_name || group.group_name;
    group.group_start_date = group_start_date || group.group_start_date;
    group.group_end_date = group_end_date || group.group_end_date;
    group.school_id = school_id || group.school_id;

    await group.save();

    return res.status(200).json({ message: 'Group updated successfully', group });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating group', error: error.message });
  }
};

// Удалить группу
exports.deleteGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await Group.findByPk(groupId);

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    await group.destroy();
    return res.status(200).json({ message: 'Group deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting group', error: error.message });
  }
};
