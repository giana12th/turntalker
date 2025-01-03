import { useEffect, useRef } from 'react';
import ShuffleText from 'shuffle-text';

interface ShuffleTopicsProps {
    topics: string;
}

/**
 * テキストをシャッフルアニメーションさせて表示する
 * @param param0
 * @returns
 */
const ShuffleTopics: React.FC<ShuffleTopicsProps> = ({ topics }) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const text = new ShuffleText(textRef.current);
            text.setText(topics);
            text.start();
        }
    });

    return (
        <div className="m-5">
            <h1 ref={textRef} className="text-2xl">
                This is a ShuffleText.js Example
            </h1>
        </div>
    );
};

export default ShuffleTopics;
