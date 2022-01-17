// keyof
type DateProperties = keyof Date;
type DateStringProperties = DateProperties & string;
type DateSymbolProperties = DateProperties & symbol;

// typeof
async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
    Promise.resolve(123),
  ]);

  type ApiResponseType = typeof apiResponse;
}

class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}

  static createBanana(): Fruit {}
}

const MyFruit = Fruit;

const banana = Fruit.createBanana();
