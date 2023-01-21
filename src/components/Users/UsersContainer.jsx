import React from "react";
import Users from "./Users";
import { connect } from "react-redux/es/exports";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC } from "../../Redux/UsersPageReducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount () {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then (response => {
            this.props.setIsFetching(false);             
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        }); 
    } 
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then (response => {
            this.props.setIsFetching(false);             
            this.props.setUsers(response.data.items);
        });
    };
    

    render () {               

        return <>
        {this.props.isFetching ? <Preloader />: null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} onPageChanged ={this.onPageChanged}
                users = {this.props.users} unfollow = {this.props.unfollow} follow = {this.props.follow}
                isFetching = {this.props.isFetching}
                
                />
            </>
    }
}


let mapSateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching));
        }

    };
}

const UserContainer = connect(mapSateToProps, mapDispatchToProps) (UsersContainer);

export default UserContainer;
