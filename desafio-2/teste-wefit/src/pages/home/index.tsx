import { useEffect, useState } from "react";
import { CardProductHome } from "../../components/cardProductHome";
import { Header } from "../../components/header";
import * as S from "./style";
import { IProduct } from "../../interfaces";
import { getProducts } from "./bl";
import { Loading } from "../../components/loading";

export const HomePage = () => {
    const [
        products,
        setProducts
    ] = useState<IProduct[]>([]);

    const [
        statusReq,
        setStatusReq
    ] = useState<boolean>(false);

    useEffect(() => {
        const reqProducts = async () => {
            setStatusReq(true);
            const arrProducts = await getProducts()

            // * Tratativa para quando o json-api estiver fora do ar
            if (arrProducts.length > 0) {
                setProducts(arrProducts);
                setStatusReq(false);
            }
        };

        reqProducts();
    }, []);

    return (
        <>
            <Header />
            <S.HomeContainer>
                {!statusReq &&
                    <S.Showcase>
                        {products.map((e) => {
                            return <CardProductHome key={`CardProductHome=${e.id}`} id={e.id} title={e.title} price={e.price} image={e.image} />
                        })}
                    </S.Showcase>
                }
            </S.HomeContainer>
            <Loading status={statusReq} />
        </>
    )
};