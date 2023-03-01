import './style.css';

import { getImageUrl } from './utils.js';

function Profile({ person, size }) {
  return (
  <section className="profile">
    <h2>{person.name}</h2>
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
    <ul>
      <li>
        <b>Profession: </b> 
        {person.profession}
      </li>
      <li>
        <b>Awards: {person.awards} </b> 
        {person.awardsDesc}
      </li>
      <li>
        <b>Discovered: </b>
        {person.discoverd}
      </li>
    </ul>
  </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        size={70}
        person={{
          name: 'Maria Skłodowska-Curie',
          profession: 'physicist and chemist',
          imageId: 'szV5sdG',
          awards: 4,
          awardsDesc: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
          discoverd: 'polonium (element)'
        }}
      />
      <Profile 
        size={70}
        person={{
          name: 'Katsuko Saruhashi',
          profession: 'geochemist',
          imageId: 'YfeOqp2',
          awards: 2,
          awardsDesc: '(Miyake Prize for geochemistry, Tanaka Prize)',
          discoverd: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}