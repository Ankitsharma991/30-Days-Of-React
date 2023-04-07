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
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
      <div
        style={{
          backgroundColor: getRandomHexColor(),
          height: "5vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "5px",
        }}
      >
        <p style={{}}>{getRandomHexColor()}</p>
      </div>
      <div
        style={{
          backgroundColor: getRandomHexColor(),
          height: "5vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "5px",
        }}
      >
        <p style={{}}>{getRandomHexColor()}</p>
      </div>
      <div
        style={{
          backgroundColor: getRandomHexColor(),
          height: "5vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "5px",
        }}
      >
        <p style={{}}>{getRandomHexColor()}</p>
      </div>
      <div
        style={{
          backgroundColor: getRandomHexColor(),
          height: "auto",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "5px",
        }}
      >
        <p style={{}}>{getRandomHexColor()}</p>
      </div>
      <div
        style={{
          backgroundColor: getRandomHexColor(),
          height: "5vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "5px",
        }}
      >
        <p style={{}}>{getRandomHexColor()}</p>
      </div>
    </div>
  );
};

export default ColorGenerator;
