'use client';

import { fetchTeams } from './lib/fetchTeams';
import { ShowNames } from './ui/showNames';
import { Team } from './lib/definitions';
import TeamSelect from './ui/teamSelect';
import { useEffect, useState } from 'react';

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

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Turn />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
