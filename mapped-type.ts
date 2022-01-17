type Dict<K extends string, T> = {
  [k in K]: T;
};

const map: Dict<"apple" | "cherry", string> = {
  apple: "",
  cherry: "",
};

interface Apple {
  name: string;
  size?: number;
}

type SizeMap = Dict<Extract<keyof Apple, "size">, string>;

type PartOfWindow = {
  [Key in "document" | "navigator"]: Window[Key];
};

type MyPick<Key extends keyof Type, Type> = {
  [K in Key]: Type[K];
};

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key];
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Size = MyRequired<MyPick<"size", Apple>>;
