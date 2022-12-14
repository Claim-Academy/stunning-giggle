// Asynchronous
// This will leverage the OS's thread pool to perform the work
const resp = await fetch("https://jsonplaceholder.typicode.com/users");

// Asynchronously read the raw response data as JSON
const users = await resp.json();

const createBioCard = (person) => `
    <section>
      <h2>${person.name}</h2>
      <ul>
        <li><a href="mailto:${person.email}">${person.email}</a></li>
        <li><a href="tel:${person.phone}">${person.phone}</a></li>
        <li><a href="https://www.google.com/maps/place/${person.address.geo.lat},${person.address.geo.lng}">${person.address.street}, ${person.address.city}</a></li>
      </ul>

      <footer>
        <em>${person.company.catchPhrase}</em>
      </footer>
    </section>
  `;

const bioCardHTML = users.map(createBioCard).join("");

console.log(bioCardHTML);
