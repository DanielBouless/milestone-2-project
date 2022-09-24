import TeamStatsCard from "../components/TeamStatsCard";
import Navigation from "../components/Navigation";

function TeamStats(props) {
    return (
        <div>
            <Navigation />
            <TeamStatsCard
                setData={props.setData}
                data={props.data}
                apiUrl={props.apiUrl}
            />
        </div>
    );
}

export default TeamStats;
