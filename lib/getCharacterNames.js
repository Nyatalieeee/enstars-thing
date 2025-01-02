const url = 'https://tl.data.ensemble.moe/en/characters.json';
export default async function getCharNames() {
    try {
        const charData = await fetch(url);
        const characters = await charData.json();
        return characters;
    } catch (err) {
        console.log(err);
    } finally {
        console.log(`\n:)\n`);
    }
}
