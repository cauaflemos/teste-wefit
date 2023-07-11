import * as S from "./style";
import LoadSVG from "../../assets/loader.png";

interface ILoading {
    status: boolean;
}

export const Loading = ({ 
    status
}: ILoading) => {
    return (
        <S.LoadingContainer
            modalStatus={status}        
        >
            <S.Loading src={LoadSVG} />
        </S.LoadingContainer>
    );
};