import { DioAccount } from "./DioAccount";

export class AlternativeAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit(value: number) {
        super.deposit(value + 10)
    }
}