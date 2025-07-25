//✅ Prediction:

//"____/''''\____"
//flat(4) → "____"

//mountain(4) → "/''''\"

//flat(4) → "____"
const landscape = () => {
  let result = "";

  const flat = x => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = x => {
    result += "/";
    for (let count = 0; count < x; count++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape());

