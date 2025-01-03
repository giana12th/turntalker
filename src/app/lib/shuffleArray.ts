// app/lib/shuffleArray.ts

/**
 * 文字列の配列をランダムに並び替える関数
 * @param array - 並び替えたい文字列の配列
 * @returns ランダムに順番を並び替えた文字列の配列
 */
export function shuffleArray(array: string[]): string[] {
  // 配列のコピーを作成（元の配列を変更しないため）
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
