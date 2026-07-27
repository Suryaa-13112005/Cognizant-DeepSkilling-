import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
    return (decimal.toFixed(2) + "%");
}

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, total, goal }) => (
    <div className="formatstyle">
        <h1><font color="Brown">Student Details</font></h1>

        <div className="Name">
            <span><b>Name:</b></span>
            <span>{Name}</span>
        </div>

        <div className="School">
            <span><b>School:</b></span>
            <span>{School}</span>
        </div>

        <div className="Total">
            <span><b>Total:</b></span>
            <span>{total} Marks</span>
        </div>

        <div className="Score">
            <span><b>Score:</b></span>
            <span>{calcScore(total, goal)}</span>
        </div>
    </div>
);
