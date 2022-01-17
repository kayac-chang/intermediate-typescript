interface Fruit {
  name: string;
  mass: number;
  color: string;
}

class Fruit {
  static createBanana(): Fruit {
    return {
      name: "banana",
      color: "yellow",
      mass: 183,
    };
  }
}

namespace Fruit {
  export function createFruit(): Fruit {
    return Fruit.createBanana();
  }
}

export { Fruit };

Fruit.createFruit;
