import getCharNames from './getCharacterNames.js';

const characters = await getCharNames(
    'https://tl.data.ensemble.moe/en/characters.json'
);

const table = document.getElementById('table');
const nameButton = document.getElementById('name_button');
const loading = document.getElementById('loading');

async function generateNames() {
    loading.textContent = 'Loading...';
    table.style.display = 'table';
    for (let i of characters) {
        const newRow = table.appendChild(document.createElement('tr'));

        const charID = newRow.appendChild(document.createElement('td'));
        charID.textContent = `${i.character_id}`;

        const charFirstName = newRow.appendChild(document.createElement('td'));
        charFirstName.textContent = `${i.first_name}`;

        const charLastName = newRow.appendChild(document.createElement('td'));
        charLastName.textContent = `${i.last_name}`;
    }
    loading.style.display = 'none';
}

nameButton.onclick = () => {
    generateNames();
};
