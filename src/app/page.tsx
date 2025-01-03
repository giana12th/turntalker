'use client';

import { fetchTeams } from './lib/fetchTeams';
import { ShowNames } from './ui/showNames';
import { Team } from './lib/definitions';
import TeamSelect from './ui/teamSelect';
import { useEffect, useState } from 'react';
import ShuffleTopics from './ui/shuffleTopics';
import { fetchTopics } from './lib/fetchTopics';

/**
 * チーム選択と順番決め
 */
const Turn: React.FC = () => {
    const [data, setData] = useState<Team[]>([]);
    const [members, setMembers] = useState<string[]>([]);

    useEffect(() => {
        const getData = async () => {
            const teams = await fetchTeams();
            setData(teams);
        };
        getData();
    }, []);

    const handleTeamChange = (team: string, members: string[]) => {
        setMembers(members);
    };

    return (
        <div>
            <TeamSelect teams={data} onTeamChange={handleTeamChange} />
            <ShowNames member={members} />
        </div>
    );
};

/**
 * トークテーマを決める
 * @returns
 */
const Talk: React.FC = () => {
    const [showShuffleTopics, setShowShuffleTopics] = useState(false);
    const [data, setData] = useState<string>('');
    const [key, setKey] = useState(0);
    const handleButtonClick = async () => {
        const getData = async () => {
            const topics = await fetchTopics();
            setData(topics);
        };
        await getData();
        setShowShuffleTopics(true);
        setKey((prevKey) => prevKey + 1);
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <button onClick={handleButtonClick} className="btn mb-4">
                    トークテーマを決める！
                </button>
            </div>
            <div className="w-full">
                {showShuffleTopics && <ShuffleTopics topics={data} key={key} />}
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Turn />
            </div>
            <div className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
                <Talk />
            </div>

            <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
