

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

  