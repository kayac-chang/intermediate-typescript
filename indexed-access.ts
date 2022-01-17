interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

const color: Car["color"] = {
  red: "",
  green: "",
  blue: "",
};

type Pair = [string, number];

type FirstOfPair = Pair[0];
type SecondOfPair = Pair[1];

type GreenType = Car["color" | "year"];
