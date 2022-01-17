// The infer keyword

class FruitStand {
  constructor(names: string[], colors: number[]) {}
}

// interface Constructable {
//     new (arg: infer A): any
// }

type ConstructorArg<Class> = Class extends {
  new (...args: infer A): any;
}
  ? A
  : never;

type FruitStandArg = ConstructorArg<typeof FruitStand>;

function createBanana(): FruitStand {}

type GetReturnType<T> = T extends () => infer A ? A : never;

type ReturnOfCreateBanana = GetReturnType<typeof createBanana>;
