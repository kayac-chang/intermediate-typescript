interface Grill {
  startGas: () => {};
  stopGas: () => {};
}

interface Oven {
  setTemperature: (degrees: number) => {};
}

type CookingDevice<T> = T extends "grill"
  ? Grill
  : T extends "oven"
  ? Oven
  : never;

let device1: CookingDevice<"grill">;
let device2: CookingDevice<"oven">;
let device3: CookingDevice<"happy">;
