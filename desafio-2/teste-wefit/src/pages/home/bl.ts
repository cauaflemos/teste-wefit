import { IProduct } from '../../interfaces';
import { api } from '../../api';
import { AxiosResponse } from 'axios';

export const getProducts = async (): Promise<IProduct[] | []> => {
    try {
        const response: AxiosResponse<IProduct[]> = await api.get("/products");

        return response.data;
    } catch (error) {
        return [];
    }
}