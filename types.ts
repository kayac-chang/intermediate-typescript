// Mapped Types: Map T => R
type MappedTypes<T> = { [K in keyof T]: T[K] };

// Partial<T>
// Constructs a type with all properties of T set to optional.
// This utility will return a type that represents all subsets of a given type.

() => {
  type IPartial<T> = { [K in keyof T]?: T[K] };

  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: IPartial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };

  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });
};

// Readonly<T>
// Constructs a type with all properties of T set to readonly,
// meaning the properties of the constructed type cannot be reassigned.
() => {
  type IReadonly<T> = { readonly [K in keyof T]: T[K] };

  interface Todo {
    title: string;
  }

  const todo: IReadonly<Todo> = {
    title: "Delete inactive users",
  };

  todo.title = "Hello"; // Error: cannot reassign a readonly property
};

// Record<K, T>
// Constructs a type with a set of properties K of type T.
// This utility can be used to map the properties of a type to another type.
() => {
  type IRecord<K extends keyof any, T> = { [key in K]: T };

  interface PageInfo {
    title: string;
  }

  type Page = "home" | "about" | "contact";

  const x: IRecord<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" },
  };
};

// Pick<T, K>
// Constructs a type by picking the set of properties K from T.
() => {
  type IPick<T, K extends keyof T> = {
    [Key in K]: T[Key];
  };

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = IPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
    // description: ''
  };
};

// Omit<T, K>
// Constructs a type by picking all properties from T and then removing K.
() => {
  type IOmit<T, K extends keyof T> = {
    [Key in Exclude<keyof T, K>]: T[Key];
  };

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = IOmit<Todo, "description">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
};

// Exclude<T, U>
// Constructs a type by excluding from T all properties that are assignable to U.
() => {
  type IExclude<T, U> = T extends U ? never : T;

  type T0 = IExclude<"a" | "b" | "c", "a">; // "b" | "c"
  type T1 = IExclude<"a" | "b" | "c", "a" | "b">; // "c"
  type T2 = IExclude<string | number | (() => void), Function>; // string | number
};

// Extract<T, U>
// Constructs a type by extracting from T all properties that are assignable to U.
() => {
  type IExtract<T, U> = T extends U ? T : never;

  type T0 = IExtract<"a" | "b" | "c", "a" | "f">; // "a"
  type T1 = IExtract<string | number | (() => void), Function>; // () => void
};

// NonNullable<T>
// Constructs a type by excluding null and undefined from T.
() => {
  type INonNullable<T> = Exclude<T, null | undefined>;
  type T0 = INonNullable<string | number | undefined>; // string | number
  type T1 = INonNullable<string[] | null | undefined>; // string[]
};

// Parameters<T>
// Constructs a tuple type of the types of the parameters of a function type T.
() => {
  type IParameters<T extends (..._: any) => any> =
    //
    T extends (..._: infer P) => any ? P : never;

  type T0 = IParameters<() => string>; // []
  type T1 = IParameters<(s: string) => void>; // [string]
  type T2 = IParameters<<T>(arg: T) => T>; // [unknown]
  function f1(arg: { a: number; b: string }) {}
  type T4 = IParameters<typeof f1>; // [{ a: number, b: string }]
  type T5 = IParameters<any>; // unknown[]
  type T6 = IParameters<never>; // never
  type T7 = IParameters<string>; // Error
  type T8 = IParameters<Function>; // Error
};

// ConstructorParameters<T>
// The ConstructorParameters<T> type lets us extract all parameter types of a constructor function type.
// It produces a tuple type with all the parameter types (or the type never if T is not a function).
() => {
  type IConstructorParameters<T extends new (..._: any) => any> =
    //
    T extends new (..._: infer P) => any ? P : never;

  type T0 = IConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
  type T1 = IConstructorParameters<FunctionConstructor>; // string[]
  type T2 = IConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]
};

// ReturnType<T>
// Constructs a type consisting of the return type of function T.
() => {
  type IReturnType<T extends (..._: any) => any> =
    //
    T extends (..._: any) => infer R ? R : never;

  type T0 = IReturnType<() => string>; // string
  type T1 = IReturnType<(s: string) => void>; // void
  type T2 = IReturnType<<T>() => T>; // unknown
  type T3 = IReturnType<<T extends U, U extends number[]>() => T>; // number[]
  function f1(): { a: number; b: string } {
    return { a: 0, b: "" };
  }
  type T4 = IReturnType<typeof f1>; // { a: number, b: string }
  type T5 = IReturnType<any>; // never
  type T6 = IReturnType<never>; // never
  type T7 = IReturnType<string>; // Error
  type T8 = IReturnType<Function>; // Error
};

// InstanceType<T>
// Constructs a type consisting of the instance type of a constructor function type T.
() => {
  type IInstanceType<T extends new (..._: any) => any> =
    //
    T extends new (..._: any) => infer R ? R : never;

  class C {
    x = 0;
    y = 0;
  }

  type T0 = IInstanceType<typeof C>; // C
  type T1 = IInstanceType<any>; // unknown
  type T2 = IInstanceType<never>; // never
  type T3 = IInstanceType<string>; // Error
  type T4 = IInstanceType<Function>; // Error
};

// Required<T>
// Constructs a type consisting of all properties of T set to required.
() => {
  type IRequired<T> = {
    [K in keyof T]-?: T[K];
  };

  interface Props {
    a?: number;
    b?: string;
  }

  const obj: Props = { a: 5 }; // OK

  const obj2: IRequired<Props> = { a: 5 }; // Error: property 'b' missing
};

// ThisParameterType<T>
// Extracts the type of the this parameter of a function type,
// or unknown if the function type has no this parameter.

// Note: This type only works correctly if --strictFunctionTypes is enabled.
() => {
  type IThisParameterType<T extends (..._: any) => any> =
    //
    T extends (this: infer R, ..._: any) => any ? R : never;

  function toHex(this: number) {
    return this.toString(16);
  }

  function numberToString(n: IThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }
};

// OmitThisParameter
// Removes the 'this' parameter from a function type.

// Note: This type only works correctly if --strictFunctionTypes is enabled.
() => {
  type IOmitThisParameter<T extends (this: any, ..._: any) => any> =
    //
    T extends (..._: infer A) => infer B ? (..._: A) => B : never;

  function toHex(this: Number) {
    return this.toString(16);
  }

  // The return type of `bind` is already using `OmitThisParameter`, this is just for demonstration.
  const fiveToHex: IOmitThisParameter<typeof toHex> = toHex.bind(5);

  console.log(fiveToHex());
};

// ThisType<T>
// This utility does not return a transformed type.
// Instead, it serves as a marker for a contextual this type.
// Note that the --noImplicitThis flag must be enabled to use this utility.
() => {
  type IThisType<M, T> = {
    [K in keyof M]: M[K] extends (..._: infer A) => infer B
      ? (this: M & T, ..._: A) => B
      : M[K];
  };

  // Compile with --noImplicitThis

  type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: IThisType<M, D>; // Type of 'this' in methods is D & M
  };

  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
  }

  let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx; // Strongly typed this
        this.y += dy; // Strongly typed this
      },
    },
  });

  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);
};
