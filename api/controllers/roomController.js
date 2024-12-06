const { Room } = require('../models');

// Создание новой комнаты
exports.createRoom = async (req, res) => {
  try {
    const { room, school_id } = req.body;

    const newRoom = await Room.create({
      room,
      school_id,
    });

    return res.status(201).json({ message: 'Room created successfully', room: newRoom });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating room', error: error.message });
  }
};

// Получение всех комнат
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    return res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching rooms', error: error.message });
  }
};

// Получение комнаты по ID
exports.getRoomById = async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findByPk(roomId);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    return res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching room', error: error.message });
  }
};

// Обновление данных комнаты
exports.updateRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const { room, school_id } = req.body;

    const existingRoom = await Room.findByPk(roomId);

    if (!existingRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }

    existingRoom.room = room || existingRoom.room;
    existingRoom.school_id = school_id || existingRoom.school_id;

    await existingRoom.save();

    return res.status(200).json({ message: 'Room updated successfully', room: existingRoom });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating room', error: error.message });
  }
};

// Удаление комнаты
exports.deleteRoom = async (req, res) => {
  try {
    const { roomId } = req.params;

    const room = await Room.findByPk(roomId);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    await room.destroy();

    return res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting room', error: error.message });
  }
};
