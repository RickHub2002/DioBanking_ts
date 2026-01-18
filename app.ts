import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { AlternativeAccount } from './class/AlternativeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.getBalance()
console.log(peopleAccount)
peopleAccount.withdraw(180)
console.log(peopleAccount)
peopleAccount.deposit(300)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Ricardo', 23)
companyAccount.getLoan(30)
console.log(companyAccount)

const alternativeAccount: AlternativeAccount = new AlternativeAccount('Henrique', 25)
alternativeAccount.deposit(40)
console.log(alternativeAccount)