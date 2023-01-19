const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SETUSERS = 'setusers';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialstate = {
    users: [/*{id: '1', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: false, fullName: 'Vitaly', status: 'I am happy', location:{country: 'Russia', city: 'Saransk'}},
    {id: '2', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: true, fullName: 'Sergey', status: 'I am a boss', location:{country: 'Belarus', city: 'Misk'}},
    {id: '3', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: false, fullName: 'Dmitry', status: 'Let"s go', location:{country: 'Russia', city: 'Moscow'}},
*/],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    
};
const usersPageReducer = (state = initialstate, action) => {
    
    switch (action.type) { 
            
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map (user => {

                    if (user.id === action.UserId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            };                  
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map (user => {

                    if (user.id === action.UserId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        }
        case SETUSERS: {
            return {...state, users:[...action.Users]};
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.currentPage};
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.totalCount};
        }


        default:
            return state;
    }
};
export const followAC = (UserId) => ({type: FOLLOW, UserId});
export const unfollowAC = (UserId) => ({type: UNFOLLOW, UserId});
export const setUsersAC = (Users) => ({type: SETUSERS, Users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

export default usersPageReducer;