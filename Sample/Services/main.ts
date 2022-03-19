


import IDbConstraint from "type-identity/TypeIdenitiy/Core/DbConstraints/IDbConstraint";
import IdentityRoleClaims from "type-identity/TypeIdenitiy/Entity/IdentityRoleClaims";
import RoleManager from "type-identity/TypeIdenitiy/Idenitiy/Builder/RoleManager";
import UserManager from "type-identity/TypeIdenitiy/Idenitiy/Builder/UserManager";
import SignManager from "type-identity/TypeIdenitiy/Idenitiy/Builder/SignManager";
import IdentityRoles from "type-identity/TypeIdenitiy/Entity/IdentityRoles";
import TypeIdentity from "type-identity/TypeIdenitiy/Idenitiy/Builder/TypeIdentity";
import CustomUser from "../modal/CustomUser";
import IdentityUserClaims from "type-identity/TypeIdenitiy/Entity/IdentityUserClaims";



/**
 *1- initialize database configuration (this step is required)
*/

export class dbConfig extends IDbConstraint {
    type: String = "mssql";
    host: String = "localhost";
    username: any = "mms";
    password: any = "mms";
    database: any = "TypeIdentity";
    constructor() {
        super();
        this.setUserEntity(CustomUser) //this is option if you want to add new columns in user entity
    }
}

/**
*2- initialize type identity framework database configuration (this step is required)
*/

export async function initTypeIdentity() {

    new TypeIdentity()
        .setDatabaseConfig(dbConfig).build()
}



// migration type identity table in database (first when you want add type identity table talble)

export async function Migration() {
    await new TypeIdentity().migrationConfig()

}


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


export async function createUser() {

    const _user = new CustomUser()
    _user.name = "saeed mohammed alabidi"
    _user.userName = "saeed1adm@gmail.com"
    _user.passwordHash = "Baru"

    const _user_manager = await new UserManager<CustomUser, IdentityUserClaims>().build()
    const vaue = await _user_manager.addAsync(_user)
    console.log(vaue)
}


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



export async function signIn(req, res) {
    const _role_manager = new RoleManager<IdentityRoles, IdentityRoleClaims>().build()
    const _user_manager = new UserManager<CustomUser, IdentityUserClaims>().build()
    const _sign_manager = new SignManager<CustomUser, IdentityRoleClaims>().build(req, res)
    const user = await _user_manager.FindByUserNameAsync("saeed1adm@gmail.com")
    _sign_manager.SignInAsync(user, true)
}


export async function signOut(req, res) {

    var _sign_manager = new SignManager<CustomUser, IdentityRoleClaims>().build(req, res)
    await _sign_manager.SignOutAsync()
}


// 1- call migration first time  100%

//Migration()


//2- create Roles 100%

//createRoles()

//3- create Permisstion  1000

//createPermisstion()


//4- create user

//createUser()


//5- assign Role To User


//assignRoleToUser()


