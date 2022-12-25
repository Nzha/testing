import './style.css';
// import toggleDropdown from './dropdown';
import fetch from './fetch';

const loadJson = async function loadJsonFromUrl(url) {
    const response = await fetch(url);
    const responseData = await function() {
        try {
            return response.json();
        } catch(err) {
            alert(err);
        }
    }
}