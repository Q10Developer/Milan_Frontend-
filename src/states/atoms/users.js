import { atom } from "recoil";

const userListAtom = atom({
    key: 'userList',
    default : []
});

export default userListAtom;