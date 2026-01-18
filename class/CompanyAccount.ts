import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()) {
      this.deposit(value)
      console.log(`O seu valor após o empréstimo é de: ${this.balance}`)
    }
  }
}
