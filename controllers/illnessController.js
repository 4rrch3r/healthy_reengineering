const Models = require("../models/index");

const modelName = "Illness"; // Підйом поля

// Підйом методу
const sendSuccess = (res, data) => res.status(200).json(data);
const sendError = (res, err) => res.status(500).json({ message: err.message });

const createIllness = async (req, res) => {
  try {
    const illness = await Models[modelName].create(req.body);
    sendSuccess(res, illness);
  } catch (err) {
    sendError(res, err);
  }
};

const getIllnesses = async (req, res) => {
  try {
    const illnesses = await Models[modelName].findAll();
    sendSuccess(res, illnesses);
  } catch (err) {
    sendError(res, err);
  }
};

const getIllness = async (req, res) => {
  try {
    const illness = await Models[modelName].findOne({
      where: { id: req.params.id },
    });
    sendSuccess(res, illness);
  } catch (err) {
    sendError(res, err);
  }
};

const updateIllness = async (req, res) => {
  try {
    const updated = await Models[modelName].update(req.body, {
      where: { id: req.params.id },
    });
    sendSuccess(res, updated);
  } catch (err) {
    sendError(res, err);
  }
};

const deleteIllness = async (req, res) => {
  try {
    await Models[modelName].destroy({ where: { id: req.params.id } });
    sendSuccess(res, {});
  } catch (err) {
    sendError(res, err);
  }
};

module.exports = {
  createIllness,
  getIllnesses,
  getIllness,
  updateIllness,
  deleteIllness,
};
