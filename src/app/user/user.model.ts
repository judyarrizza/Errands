export class User {
  userName: string;
  firstName: string;
  lastName: string;
  fullName: string;

  constructor(userName: string,
              firstName: string,
              lastName: string,
              fullName?: string
              ) {

    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }
}
