import { Produto } from './produto';

export class ResponseApi {
    status: number;
    data: Produto[];
    total: number;
}