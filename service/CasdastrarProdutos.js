import { CoreService } from "./CoreService";

export class ProdutoService extends CoreService {
  get resource() {
    return "/produtos";
  }
}
