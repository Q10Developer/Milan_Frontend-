import { useRecoilState } from "recoil";
import api from "../../api";
import userListAtom from "../atoms/users";

const UserActions = () => {

    const [, setUsers] = useRecoilState(userListAtom);

    const fetchUsers = () => {
        return api
          .get("/users")
          .then((res) => setUsers(res.data))
          .catch();
    }
    return {
      fetchUsers,
    };
};

export default UserActions;
