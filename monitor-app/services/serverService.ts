import api from './api';
import { Server } from '../types/Server';

export async function buscarServidores() :Promise<Server[]> {
    try {
        const resposta = await api.get<Server[]>('/servers');
        return resposta.data;
    }
    catch (erro) {
        console.error('Erro ao buscar servidores:', erro);
        return [];
    }
}