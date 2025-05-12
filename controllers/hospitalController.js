const Models = require("../models/index");

const sendSuccess = (res, data) => res.status(200).json(data);
const sendError = (res, error) =>
  res.status(500).json({ message: error.message });

const isValidId = (id) => Number.isInteger(Number(id)) && Number(id) > 0;

const createHospital = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body is empty" });
  }

  try {
    const hospital = await Models.Hospital.create(req.body);
    sendSuccess(res, hospital);
  } catch (error) {
    sendError(res, error);
  }
};

const getHospitals = async (req, res) => {
  try {
    const hospitals = await Models.Hospital.findAll();
    sendSuccess(res, hospitals);
  } catch (error) {
    sendError(res, error);
  }
};

const getHospital = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid hospital ID" });
  }

  try {
    const hospital = await Models.Hospital.findOne({ where: { id } });
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    sendSuccess(res, hospital);
  } catch (error) {
    sendError(res, error);
  }
};

const updateHospital = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid hospital ID" });
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body is empty" });
  }

  try {
    const [updated] = await Models.Hospital.update(req.body, { where: { id } });
    if (!updated) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    const updatedHospital = await Models.Hospital.findOne({ where: { id } });
    sendSuccess(res, updatedHospital);
  } catch (error) {
    sendError(res, error);
  }
};

const deleteHospital = async (req, res) => {
  const { id } = req.params;
  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid hospital ID" });
  }

  try {
    const deleted = await Models.Hospital.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ message: "Hospital not found" });
    }
    sendSuccess(res, {});
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = {
  createHospital,
  getHospitals,
  getHospital,
  updateHospital,
  deleteHospital,
};
