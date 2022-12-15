import React, { useState } from "react";
const Filter = ({ handleFilter, newFilter }) => {
  return (
    <div>
      Filter shown with: <input onChange={handleFilter} value={newFilter} />
    </div>
  );
};

const PersonaForm = ({
  addPerson,
  handleName,
  newName,
  handleNumber,
  newNumber,
}) => {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          Name: <input onChange={handleName} value={newName} />
        </div>
        <div>
          Number: <input onChange={handleNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};
const Persons = ({personsFilter}) => {
  return (
    <ul>
      {personsFilter.map((person, index) => (
        <Person key={index} person={person}/>
      ))}
    </ul>
  );
};

const Person = ({person}) => {
  return(
    <li>{person.name} {person.number}</li>
)
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  const handleName = (e) => {
    setNewName(e.target.value);
  };
  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const addPerson = (e) => {
    e.preventDefault();
    const found = persons.filter((person) => person.name === newName);

    if (found.length > 0) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }

    const personObeject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObeject));
    setNewName("");
    setNewNumber("");
  };
  var ExpReg = new RegExp(newFilter, "i");
  const personsFilter =
    newFilter === ""
      ? persons
      : persons.filter((person) => ExpReg.test(person.name));
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} newFilter={newFilter} />
      <PersonaForm
        addPerson={addPerson}
        handleName={handleName}
        newName={newName}
        handleNumber={handleNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons personsFilter={personsFilter}/>
    </div>
  );
};

export default App;
