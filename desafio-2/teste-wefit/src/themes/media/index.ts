import { css, CSSProp } from "styled-components";
type TipagemTamanho = "PC" | "SMARTPHONE";

const Tamanhos: { [index in TipagemTamanho]: number } = {
    PC: 992,
    SMARTPHONE: 576,
};

export const media: {
    [index in TipagemTamanho]: (
        literals: TemplateStringsArray,
        ...placeholders: CSSProp[]
    ) => CSSProp;
} = Object.keys(Tamanhos).reduce((acc, label) => {
    acc[label as TipagemTamanho] = (
        literals: TemplateStringsArray,
        ...placeholders: CSSProp[]
    ) => css`
        @media (max-width: ${Tamanhos[label as TipagemTamanho]}px) {
            ${css(literals, ...placeholders)};
        }
    `;

    return acc;
}, {} as { [index in TipagemTamanho]: (literals: TemplateStringsArray, ...placeholders: CSSProp[]) => CSSProp });
