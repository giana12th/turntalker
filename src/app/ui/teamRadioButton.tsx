// components/TeamRadioButton.tsx
import React, { useState } from 'react';
import { Team } from '../lib/definitions';

type TeamRadioButtonProps = {
  teams: Team[];
  onTeamChange: (team: string, members: string[]) => void;
};

const TeamRadioButton: React.FC<TeamRadioButtonProps> = ({ teams, onTeamChange }) => {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedTeam(value);
    const selectedTeamMembers = teams.find(team => team.name === value)?.members || [];
    onTeamChange(value, selectedTeamMembers);
  };

  return (
    <div>
      {teams.map((team) => (
        <label key={team.name}>
          <input
            type="radio"
            value={team.name}
            name="team"
            checked={selectedTeam === team.name}
            onChange={handleTeamChange}
          />
          {team.name}
        </label>
      ))}
    </div>
  );
};

export default TeamRadioButton;
