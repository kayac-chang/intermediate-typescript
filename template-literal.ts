type ArtFeatures = "cabin" | "tree" | "sunset";

type Colors = "darkSienna" | "sapGreen" | "titaniumWhite" | "prussianBlue";

type ArtMethodName = `paint${Capitalize< Colors >}${Capitalize<ArtFeatures>}`

type Art = {
    [key in ArtMethodName]: () => {}
}