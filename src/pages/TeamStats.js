import TeamStatsCard from "../components/TeamStatsCard";
import Navigation from "../components/Navigation";

function TeamStats(props) {
  return (
    <div>
      <Navigation />
      <TeamStatsCard
        data={props.data}
        getAllOnTeam={props.getAllOnTeam}
        handleRemoveFromTeam={props.handleRemoveFromTeam}
      />
    </div>
  );
}

export default TeamStats;
