import getCharNames from './getCharacterNames.js';

const table = document.getElementById('table');
const nameButton = document.getElementById('name_button');
const agreement = document.getElementById('agreement');
const loading = document.getElementById('loading');

async function generateNames() {
    loading.textContent = 'Loading...';
    const characters = await getCharNames();

    table.style.display = 'table';
    for (let character of characters) {
        const newRow = table.appendChild(document.createElement('tr'));

        const charID = newRow.appendChild(document.createElement('td'));
        charID.textContent = `${character.character_id}`;

        const charFirstName = newRow.appendChild(document.createElement('td'));
        charFirstName.textContent = `${character.first_name}`;

        const charLastName = newRow.appendChild(document.createElement('td'));
        if (character.last_name)
            charLastName.textContent = `${character.last_name}`;
    }
    loading.style.display = 'none';
}

nameButton.onclick = () => {
    generateNames();
    nameButton.style.display = 'none';
    agreement.style.display = 'none';
};
