import { NbMenuItem } from '@nebular/theme';
export class SysMenu {
    sysId: string;
    sysName: string;
    sysMenu: NbMenuItem[];
}

export class UserInfo {
    userId : string;    
    name : string;
    password: string;
    email : string;
    isEnabled : string;
    status : string;
    deptId : string;
    language : string;
    ettCode : string;
}