import getCharNames from './getCharacterNames.js';

const table = document.getElementById('table');
const nameButton = document.getElementById('name_button');
const agreement = document.getElementById('agreement');
const loading = document.getElementById('loading');

async function generateNames() {
    loading.textContent = 'Loading...';
    const characters = await getCharNames();

    try {
        table.style.display = 'table';
        for (let character of characters.chars) {
            const newRow = table.appendChild(document.createElement('tr'));

            const charID = newRow.appendChild(document.createElement('td'));
            charID.textContent = `${characters.chars.indexOf(character) + 1}`;

            const charFirstName = newRow.appendChild(
                document.createElement('td')
            );
            charFirstName.textContent = `${character.first_name}`;

            const charLastName = newRow.appendChild(
                document.createElement('td')
            );
            if (character.last_name)
                charLastName.textContent = `${character.last_name}`;
        }
        loading.style.display = 'none';
    } catch (err) {
        const errContactInfo = 'Contact @meowcelinee. on Discord.';
        loading.style.display = 'none';

        document.getElementById(
            'error'
        ).textContent = `Internal error (${characters.status})`;

        document.getElementById('error-contact').textContent = errContactInfo;

        console.log(err);
    }
}

nameButton.onclick = () => {
    generateNames();
    nameButton.style.display = 'none';
    agreement.style.display = 'none';
};
