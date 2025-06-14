const people = require("../resources/data");

const getPersonById = (req, res) => {
  const person = people.find((p) => p.id == req.params.id);
  return person ? res.json(person) : res.status(404).send("Person not found");
};

const getFilteredPeople = (req, res) => {
  const { firstName, lastName } = req.body;
  let filtered = people;

  if (firstName) filtered = filtered.filter((p) => p.firstName === firstName);
  if (lastName) filtered = filtered.filter((p) => p.lastName === lastName);

  res.json(filtered);
};

const insertPerson = (req, res) => {
  const newPerson = req.body;
  people.push(newPerson);
  res.status(201).json(newPerson);
};

module.exports = {
  getPersonById,
  getFilteredPeople,
  insertPerson,
};
