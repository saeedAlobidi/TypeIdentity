
## Description

Type Identity is a powerful and highly customizable authentication and authrozation and access-control framework. It is the de-facto standard for securing Type Script  api 
beta release



## Deployment

To deploy this project run

```bash
 
  npm run   type-identity

```


## Demo

1- initialize database configuration (this step is required)
```javascript
export class dbConfig extends IDbConstraint {
    type: String = "mssql";
    host: String = "localhost";
    username: any = "mms";
    password: any = "mms";
    database: any = "TypeIdentity";
    constructor() {
        super();
        this.setUserEntity(CustomUser) //this is option if you want to add new columns in user entity : note this CustomUser will be create on  step number 10 below
    }
}


```


2- initialize type identity framework database configuration (this step is required)

```javascript

//this step is not required but if you want to change cookies configuration such as name etc...
export class customCookiesConfig extends CookiesConfiguration{

    name="saeed@"; //cookies name
    loginPage="/login"; //unauthorize  redirect page
    successfullyPage="https://www.linkedin.com/in/saeed-mohammed-al-obidi-289082147/" //success Page
}

export async function initTypeIdentity() {

    new TypeIdentity()
        .seCookiesConfig(customCookiesConfig) // note this section  is dependency if you want custmize your cookies data
        .setDatabaseConfig(dbConfig).build()
}


```
 3- migration type identity table in database (first when you want add type identity table)

 
```javascript

//call this function 
  export async function Migration() {
    await new TypeIdentity().migrationConfig()

}


```
 

 
 4- create new Roles

 
```javascript

  export async function createRoles() {

    const _Admin = new IdentityRoles()
    _Admin.name = "admin"

    const _Guest = new IdentityRoles()
    _Guest.name = "guest"

    const _role_manager = new RoleManager<IdentityRoles, IdentityRoleClaims>().build()
    const vaue1 = await _role_manager.addAsync(_Admin)
    const vaue2 = await _role_manager.addAsync(_Guest)

    console.log(vaue1, vaue2)
}



```
 
5- create new Permisstion

 
```javascript

export async function createPermisstion() {
    const _role_manager = new RoleManager<IdentityRoles, IdentityRoleClaims>().build()


    const _Admin = await _role_manager.getRolesByNameAsync("admin")
    const _Guest = await _role_manager.getRolesByNameAsync("guest")

    //admin Permisstion
    const read_Permisstion_admin = new IdentityRoleClaims()
    read_Permisstion_admin.roleId = _Admin.id;
    read_Permisstion_admin.claimType = "permisstion"
    read_Permisstion_admin.claimValue = "Read"

    const writePermisstion_admin = new IdentityRoleClaims()
    writePermisstion_admin.roleId = _Admin.id;
    writePermisstion_admin.claimType = "permisstion"
    writePermisstion_admin.claimValue = "Write"



    //admin Permisstion
    const read_ermisstion_guest = new IdentityRoleClaims()
    read_ermisstion_guest.roleId = _Admin.id;
    read_ermisstion_guest.claimType = "permisstion"
    read_ermisstion_guest.claimValue = "Read"





    const vaue1 = await _role_manager.addPermisstionAsync(read_Permisstion_admin)
    const vaue2 = await _role_manager.addPermisstionAsync(writePermisstion_admin)
    const vaue3 = await _role_manager.addPermisstionAsync(read_ermisstion_guest)
    console.log(vaue1, vaue2, vaue3)
}



```

6-create new user
```javascript
export async function createUser() {

    const _user = new CustomUser()
    _user.name = "saeed mohammed alabidi"
    _user.userName = "saeed1adm@gmail.com"
    _user.passwordHash = "Baru"

    const _user_manager = await new UserManager<CustomUser, IdentityUserClaims>().build()
    const vaue = await _user_manager.addAsync(_user)
    console.log(vaue)
}

```


7-assign Role To User
```javascript

export async function assignRoleToUser() {
    const _role_manager = new RoleManager<IdentityRoles, IdentityRoleClaims>().build()
    const _user_manager = new UserManager<CustomUser, IdentityUserClaims>().build()

    const admin = await _role_manager.getRolesByNameAsync("guest")
    const user = await _user_manager.FindByUserNameAsync("saeed1adm@gmail.com")
    user.RoleId = admin.id
    user.RoleName = admin.name
    const vaue = await _user_manager.updateAsync(user)
    console.log(vaue)
}



```



8-signIn: this can call when user login

```javascript

export async function signIn(req, res) {
    const _role_manager = new RoleManager<IdentityRoles, IdentityRoleClaims>().build()
    const _user_manager = new UserManager<CustomUser, IdentityUserClaims>().build()
    const _sign_manager = new SignManager<CustomUser, IdentityRoleClaims>().build(req, res)
    const user = await _user_manager.FindByUserNameAsync("saeed1adm@gmail.com")
    _sign_manager.SignInAsync(user, true)
}




```







9-signOut: this can call when user logout

```javascript
export async function signOut(req, res) {

    var _sign_manager = new SignManager<CustomUser, IdentityRoleClaims>().build(req, res)
    await _sign_manager.SignOutAsync()
}


```












9- create custom user entity or any type identity entity

```javascript
 
 /** note you must Donwload typeorm from npn 
  *  npm i typeorm
  */
@Entity("CustomUser")
export default class CustomUser extends Users<IdentityUserClaims,IdentityUserLogins,IdentityUserTokens,IdentityRoles>{
    
    @Column("int", { name: "countryId", nullable: true })
    countryId: Number | null = 1
 
}


```
## call type on api 


1- create Controller
```javascript

 /** 
  *  this class have services that consume the request 
  */



import { AuthorizeType } from "type-identity/Idenitiy/Services/AuthorizeServices";
import { Authorize } from "type-identity/Core/Annotation/Authorize";
export default class UserInfo{

    @Authorize(AuthorizeType.Roles,"admin")
    admin(req, res){
      res.send('is Authorize to go as admin')
  
    }


    
    @Authorize(AuthorizeType.Policy,"write")
    write(req, res){
      res.send('is Authorize to write')
  
    }

    @Authorize(AuthorizeType.Roles,"quest")
    quest(req, res){
      res.send('is Authorize to go as  quest')
    }
  }

  



```


1- create endpoint used express.js

```javascript
 
 /** create file call api.ts
  *   
  */
import UserInfo from "../Controller.ts/UserInfo";
import { initTypeIdentity, signIn, signOut } from "../Services/main";


const cors = require('cors');//this required
var cookieParser = require('cookie-parser')//this required
const express = require('express')//this required
const app = express()  //this required
app.use(cookieParser()) //this required
app.use(cors()) //this required



initTypeIdentity()




app.get('/signIn', async (req, res) => {
    console.log('start')
    await signIn(req, res)
})

app.get('/signOut', async (req, res) => {
    signOut(req, res)
})


/**
 * this endpoint allow for admin if you try to go as guest you will get 401 
 */

app.get('/adminPermisstin', async (req, res) => {
    new UserInfo().admin(req, res)
})




/**
 * this endpoint allow for quest 
 */

app.get('/quest', async (req, res) => {
    new UserInfo().quest(req, res)
})


/**
 * any one have write Policy
 */

app.get('/quest', async (req, res) => {
    new UserInfo().write(req, res)
})


const port = 3334
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


```

















 



 





 


## 🔗 Links
 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saeed-mohammed-al-obidi-289082147/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SAEED1MOHAMMED4)




## Authors

- [@saeed_alabidi](https://github.com/saeedAlobidi)




## 🚀 About Me
Saeed Mohammed Al-abidi
saeed1adm@gmail.com
l woud description my self as some one who interesting on building software and frameworks, starting from Design & Architecture, up to implementation and test

