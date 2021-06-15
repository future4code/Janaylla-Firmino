
export type authenticationData = {
    id: string
  }

export type address = {
    street:string,
    neighborhood: string,
    city: string,
    state: string
}

export type user = {
  id:  string, 
  name: string, 
  email:  string, 
  password: string
}
export type recipe = {
  id:  string, 
  title: string, 
  text:  string,
  creation_date: Date|string,
  user_id?:string
}