'use client';

import { fetchTeams } from './lib/fetchTeams';
import { ShowNames } from './ui/names';
import { Team } from './lib/definitions';
import TeamRadioButton from './ui/teamRadioButton';
import { useEffect, useState } from 'react';

const Names: React.FC = () => {
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
        // console.log(`Selected team: ${team}`);
        // console.log('Members:', members);
        setMembers(members);
    };

    return (
        <div>
            <h1>チーム選択</h1>
            <TeamRadioButton teams={data} onTeamChange={handleTeamChange} />
            <ShowNames member={members} />
        </div>
    );
};

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Names />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
