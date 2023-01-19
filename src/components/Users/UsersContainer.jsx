import React from "react";
import Users from "./Users";
import { connect } from "react-redux/es/exports";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../Redux/UsersPageReducer";

let mapSateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (Page) => {
            dispatch(setCurrentPageAC(Page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },

    };
}

const UserContainer = connect(mapSateToProps, mapDispatchToProps) (Users);

export default UserContainer;
