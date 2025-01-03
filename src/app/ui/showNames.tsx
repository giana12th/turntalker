import { Members } from '../lib/definitions';
import { shuffleArray } from '../lib/shuffleArray';

/**
 * 名前をランダムに並び替えて表示
 * @param param0
 * @returns
 */
export function ShowNames({ member }: { member: Members }) {
    const shuffledData = shuffleArray(member);
    return (
        <div className="mt-5">
            {shuffledData.map((item, index) => (
                <span key={index} className="mt-5 p-1 text-2xl">
                    {item} {index < shuffledData.length - 1 && ' ⇒ '}
                </span>
            ))}
        </div>
    );
}
