/**
 * 指定したURLから文字列の配列を取得する関数
 * @returns 文字列の配列
 */
export async function fetchName(): Promise<string[]> {
  const url = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching name:", error);
    return [];
  }
}
