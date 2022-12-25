import './style.css';
// import toggleDropdown from './dropdown';
import fetch from './fetch';

async function getPersonsInfo(name) {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
}