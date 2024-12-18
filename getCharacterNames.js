export default async function getCharNames(charUrl) {
    try {
        const charData = await fetch(charUrl);
        const characters = await charData.json();
        return characters;
    } catch (err) {
        console.log(err);
    } finally {
        console.log(`\n:)\n`);
    }
}
