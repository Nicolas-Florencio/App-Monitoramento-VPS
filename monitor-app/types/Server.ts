export interface Server {
    id: number;
    nome: string;
    ip: string | null;
    url: string | null;
    status: 'online' | 'offline' | 'site caiu';
    pingLatencia: number | null;
    httpLatencia: number | null;
}