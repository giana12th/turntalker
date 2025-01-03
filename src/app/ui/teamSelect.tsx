// components/TeamRadioButton.tsx
import React, { useState } from 'react';
import { Team } from '../lib/definitions';

type TeamSelectProps = {
    teams: Team[];
    onTeamChange: (team: string, members: string[]) => void;
};

/**
 * チーム選択
 * @param param0
 * @returns
 */
const TeamSelect: React.FC<TeamSelectProps> = ({ teams, onTeamChange }) => {
    const [selectedTeam, setSelectedTeam] = useState('');

    const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedTeam(value);
        const selectedTeamMembers =
            teams.find((team) => team.name === value)?.members || [];
        onTeamChange(value, selectedTeamMembers);
    };

    return (
        <select
            className="select w-full max-w-xs m-2"
            value={selectedTeam}
            onChange={handleTeamChange}
        >
            <option disabled value="">
                チームを選択してください
            </option>
            {teams.map((team) => (
                <option key={team.name} value={team.name}>
                    {team.name}
                </option>
            ))}
        </select>
    );
};

export default TeamSelect;
