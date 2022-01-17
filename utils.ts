// Extract
type MyExtract<Target, Filter> = Target extends Filter ? Target : never;

// Exclude
type MyExclude<Target, Filter> = Target extends Filter ? never : Target;

type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number };

// Usecase1: string colors
// type StringColors = MyExtract<FavoriteColors, string>

// UseCase2: string colors
type StringColors = MyExclude<
  FavoriteColors,
  [number, number, number] | { red: number; green: number; blue: number }
>;
