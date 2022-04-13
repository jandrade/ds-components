type FontWeight = "400" | "500" | "600" | "700" | "800";

interface TypographyContract {
    font: {
        body: string;
    };
    fontWeight: {
        regular: FontWeight;
        medium: FontWeight;
        strong: FontWeight;
    };
    fontSize: {
        xs: string;
        sm: string;
        md: string; // base fontSize
        lg: string;
        xl: string;
        xxl: string;
    };
    lineHeight: {
        xs: string;
        sm: string;
        md: string; // base line height
        lg: string;
        xl: string;
        xxl: string;
    };
}

interface ColorContract {
    body: string;
    primary: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    positive: string;
    negative: string;
    warning: string;
    neutral: string;
}

interface TextColorContract extends ColorContract {
    bodyInverted: string;
}

export interface ThemeContract {
    name: string;

    typography: TypographyContract;

    spacing: {
        xxxs: string;
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };

    color: {
        text: TextColorContract;
        background: ColorContract;
        border: ColorContract;
    };

    shadows: {
        sm: string;
        md: string;
        lg: string;
    };
}
