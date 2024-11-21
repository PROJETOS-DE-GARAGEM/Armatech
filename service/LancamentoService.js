import { CoreService } from "./CoreService";

export class LancamentoService extends CoreService {
  get resource() {
    return "/lancamento";
  }
  
}
