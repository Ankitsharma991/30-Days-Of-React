function getRandomHexColor() {
  const hexChars = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return color;
}

const ColorGenerator = () => {
  console.log(getRandomHexColor());
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>30 Days Of React</h1>
        <p style={{ fontSize: "20px", marginTop: "0rem" }}>HexColor Generator</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "80vw",
            justifyContent: "center",
          }}
        >
          {numbers.map((number) => (
            <div
              key={number}
              style={{
                backgroundColor: getRandomHexColor(),
                height: "150px",
                width: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1px",
              }}
            >
              <p style={{}}>{getRandomHexColor()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
