interface Lego {
    setId: string;
    name: string;
    year: number | null;
    theme: string | null;
    subtheme: string | null;
    themeGroup: string | null;
    category: string | null;
    pieces: number | null;
    minifigs: number | null;
    ageRangeMin: number | null;
    usRetailPrice: number | null;
    bricksetUrl: string;
    thumbnailUrl: string;
    imageUrl: string;
}