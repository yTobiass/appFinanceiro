import { Injectable, Signal, signal } from '@angular/core';

export interface ContaReceber {
  cliente: string;
  vencimento: string;
  pagamento: string;
  valor: number;
}

@Injectable({
  providedIn: 'root',
})
export class ReceberService {
  private readonly _contas = signal<ContaReceber[]>([]);

  readonly contasReceber: Signal<ContaReceber[]> = this._contas.asReadonly();

  adicionar(conta: ContaReceber): void {
    this._contas.update((lista) => [{ ...conta }, ...lista]);
  }

  excluir(index: number): void {
    this._contas.update((lista) => {
      const proxima = [...lista];
      proxima.splice(index, 1);
      return proxima;
    });
  }
}
