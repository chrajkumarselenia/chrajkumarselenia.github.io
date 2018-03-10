import { Injectable } from '@angular/core';
import{Admin} from '../shared/models/admin';
import {TokenParams} from '../shared/token-param';
import { forEach } from '@angular/router/src/utils/collection';



@Injectable()
export class SessionStorageServicesService {
  constructor() { }

//code for admin session storage

  StoreAdminData(Tempdata:TokenParams)
  {
        if(Tempdata!=null)
        {

sessionStorage.setItem('a_Token',Tempdata.access_token);
sessionStorage.setItem('a_TokenType',Tempdata.token_type);
// sessionStorage.setItem('A_ExpiresIn',Tempdata.expires_in);
sessionStorage.setItem('a_IsActive',"1");
alert(sessionStorage.getItem('a_Token'));

          }


  }

//code for user session storage
StoreSuperAdminData(Tempdata:TokenParams)
{
      if(Tempdata!=null)
      {

sessionStorage.setItem('s_Token',Tempdata.access_token);
sessionStorage.setItem('s_TokenType',Tempdata.token_type);
// sessionStorage.setItem('A_ExpiresIn',Tempdata.expires_in);
sessionStorage.setItem('s_IsActive',"1");

        }


}


//Code for storing the admin claims Data Goes Here


StoreOperatorData(Tempdata:TokenParams)
{
      if(Tempdata!=null)
      {

sessionStorage.setItem('o_Token',Tempdata.access_token);
sessionStorage.setItem('o_TokenType',Tempdata.token_type);
// sessionStorage.setItem('A_ExpiresIn',Tempdata.expires_in);
sessionStorage.setItem('o_IsActive',"1");

        }

}

}
