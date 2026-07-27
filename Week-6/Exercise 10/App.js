import officeImage from "./Office.jpg";

function App() {

  const officeList = [

    {
      Name: "Smart Tech Park",
      Rent: 55000,
      Address: "Coimbatore"
    },

    {
      Name: "Infinity Business Center",
      Rent: 75000,
      Address: "Chennai"
    },

    {
      Name: "Innovation Hub",
      Rent: 45000,
      Address: "Bangalore"
    }

  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
        height="250"
      />

      <hr />

      {
        officeList.map((office, index) => (

          <div key={index}>

            <h2>{office.Name}</h2>

            <p>
              <strong>Address:</strong> {office.Address}
            </p>

            <p
              style={{
                color: office.Rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rent: ₹{office.Rent}
            </p>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;
