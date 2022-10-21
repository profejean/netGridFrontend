export class UpdateUser{
  constructor(
    public email: string,
    public name: string,
    public address: string,
    public birthdate: string,
    public city: string
  ){}
}
