import React from "react";
import Users from "./Users";
import { connect } from "react-redux/es/exports";
import { followAC, unfollowAC, setUsersAC } from "../../Redux/UsersPageReducer";

let mapSateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
    };
};

let mapDispatchToProps = (dispatch) => {
   
    return {
        follow: (UserId) => {
            dispatch(followAC(UserId));
        },
        unfollow: (UserId) => {
            dispatch(unfollowAC(UserId));
        },
        setUsers: (Users) => {
            dispatch(setUsersAC(Users));
        }
    };
}

const UserContainer = connect(mapSateToProps, mapDispatchToProps) (Users);

export default UserContainer;
