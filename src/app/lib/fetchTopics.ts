/**
 * 指定したURLからお題を取得する
 * @returns お題
 */
export async function fetchTopics(): Promise<string> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/';
    const url = baseUrl + 'topics';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response);
        const data: string = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching topics:', error);
        return '通信エラーのとき最初に確認することは？';
    }
}
