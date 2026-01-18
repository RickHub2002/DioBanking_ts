export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 200
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit(value: number): void {
    if(this.validateStatus()){
      this.balance += value

      console.log(`O seu novo saldo é: ${this.balance}`)
    }
  }

  withdraw(value: number): number {
    if(this.validateStatus() && this.balance >= value) {
      console.log(`Seu saldo é: ${this.balance}, e você sacará ${value}`)
      this.balance -= value
      console.log(`o seu novo saldo é: ${this.balance}`)
    } else {
      console.log(`O seu saldo é insuficiente, ${this.balance}`)
    }

    return this.balance
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
