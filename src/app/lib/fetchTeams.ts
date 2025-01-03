import { Team } from './definitions';

const teams: Team[] = [
    { name: 'dummyA', members: ['apple', 'banana', 'lemon'] },
    { name: 'dummyB', members: ['cabbage', 'tomato', 'corn'] },
];

/**
 * 指定したURLからチームを取得する
 * @returns 文字列の配列
 */
export async function fetchTeams(): Promise<Team[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/';
    const url = baseUrl + 'teams';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        const data: Team[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        return teams;
    }
}
