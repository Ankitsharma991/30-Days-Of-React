import Data from "./data";
const WorldPopulation = () => {
  console.log(Data[0].country);
  Data.map((data) => console.log(data.country + "=>" + data.population));

  const total = Data[0].population;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>30 Days Of React</h1>
        <p style={{ fontSize: "20px", marginTop: "0" }}>World Population</p>
        <p style={{ marginTop: "0" }}>Ten most populated countries</p>
      </div>

      {Data.map((Data) => (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "2%",
              marginRight: "2%",
              marginTop: "-10px",
            }}
          >
            <p
              style={{
                width: "10%",
                textTransform: "uppercase",
                fontWeight: "bolder",
                fontSize: "15px",
              }}
            >
              {Data.country}
            </p>

            <div style={{ width: "76%" }}>
              <div
                style={{
                  height: "30px",
                  width: `${(Data.population / total) * 100}%`,
                  backgroundColor: "orange",
                }}
              ></div>
            
            </div>
            <p style={{ width: "10%", fontWeight: "bolder", fontSize: "15px" }}>
              {Data.population}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default WorldPopulation;
