import people from "./people.js";

const olderPeople = people.filter((person) => person.age > 27);

const peopleThatStartWithJ = people.filter((person) =>
  person.name.startsWith("J")
);

const peopleWithSalutation = people.map(
  (person) => `${person.salutation} ${person.name}`
);

function createBioCard(person) {
  return `
    <p>${person.salutation} ${person.name} is ${person.age} years old.</p>
  `;
}

const bioCardHTML = people.map(createBioCard).join("");

console.log(bioCardHTML);
