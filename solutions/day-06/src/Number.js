function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const Number = () => {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const listItems = numbers.map((number) => {
    let color = "";
    if (number % 2 === 0) {
      color = "rgb(0, 128, 0)";
    } else {
      color = "rgba(247,142,22)";
    }
    if (isPrime(number)) {
      color = "rgb(255,0,0)";
    }
    return (
      <div
        style={{
          background: color,
          height: "150px",
          width: "150px",
          margin: "1px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          color: "white",
          fontSize: "20px",
          flexBasis: "calc(100%/8-2px)",
        }}
        key={number}
      >
        {number}
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
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
        <p style={{fontSize:'20px', marginTop:'0rem'}}>Number Generator</p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80vw",
          justifyContent: "center",
        }}
      >
        {listItems}
      </div>
    </div>
  );
};
export default Number;
