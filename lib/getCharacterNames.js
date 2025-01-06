export const url = 'https://tl.data.ensemble.moe/en/characters.json';
export default async function getCharNames() {
    try {
        const charData = await fetch(url);
        const characters = await charData.json();
        return {
            chars: characters,
            status: charData.status,
        };
    } catch (err) {
        console.log(
            `--== REQUEST ERROR ==--\n\n${err}\n\n--== REQUEST ERROR ==--`
        );
        return { status: err.name };
    }
}
