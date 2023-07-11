import { CardProductHome } from "../../components/cardProductHome";
import { Header } from "../../components/header";
import * as S from "./style";

export const HomePage = () => {
    const arr = [1,1,1,1,1,1];
    return (
        <>
            <Header />
            <S.HomeContainer>
                <S.Showcase>
                    {arr.map((element, idx) => {
                        return <CardProductHome />
                    })}
                </S.Showcase>
            </S.HomeContainer>
        </>
    )
};