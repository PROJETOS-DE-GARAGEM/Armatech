import axios from 'axios';
import { CoreService } from './CoreService';

//Passar a URL da maquina que está usuando mas o caminho do endpoint.
const API_URL = "http://172.20.10.2:3000/produtos";

//Função 
export class ProdutoService extends CoreService{
    get resource(){
        return '/produtos'
    }

    
}
export const cadastrarProduto = async (produtos) => 
{
    try {
        const response = await axios.post(API_URL, produtos);
        return response.data; //Retorna os dados do produto cadastrado

    } catch(error){
        throw error; //Lança o erro para ser tratado na camada que chamou
    }
}