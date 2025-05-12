const Models = require("../models/index");

const handleRequest = async (res, action) => {
  try {
    const result = await action();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createDoctor = async (req, res) => {
  await handleRequest(res, () => Models.Doctor.create(req.body));
};

const getDoctors = async (req, res) => {
  await handleRequest(res, () => Models.Doctor.findAll());
};

const getDoctor = async (req, res) => {
  const { id } = req.params;
  await handleRequest(res, () => Models.Doctor.findOne({ where: { id } }));
};

const updateDoctor = async (req, res) => {
  const { id } = req.params;
  await handleRequest(res, () =>
    Models.Doctor.update(req.body, { where: { id } })
  );
};

const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  await handleRequest(res, async () => {
    await Models.Doctor.destroy({ where: { id } });
    return {};
  });
};

module.exports = {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
};
