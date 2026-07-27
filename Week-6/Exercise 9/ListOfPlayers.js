import React from "react";

function ListOfPlayers() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 95 },
        { name: "KL Rahul", score: 60 },
        { name: "Hardik Pandya", score: 72 },
        { name: "Ravindra Jadeja", score: 65 },
        { name: "R Ashwin", score: 78 },
        { name: "Mohammed Shami", score: 50 },
        { name: "Jasprit Bumrah", score: 88 },
        { name: "Suryakumar Yadav", score: 69 },
        { name: "Ishan Kishan", score: 80 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {
                    players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

            <h3>Players with Score Below 70</h3>

            <ul>
                {
                    lowScorePlayers.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>

        </div>
    );

}

export default ListOfPlayers;
