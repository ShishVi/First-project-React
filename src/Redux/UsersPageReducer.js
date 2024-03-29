const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SETUSERS = 'setusers';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialstate = {
    users: [/*{id: '1', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: false, fullName: 'Vitaly', status: 'I am happy', location:{country: 'Russia', city: 'Saransk'}},
    {id: '2', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: true, fullName: 'Sergey', status: 'I am a boss', location:{country: 'Belarus', city: 'Misk'}},
    {id: '3', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80', followed: false, fullName: 'Dmitry', status: 'Let"s go', location:{country: 'Russia', city: 'Moscow'}},
*/],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    
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

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching:action.isFetching};
        }


        default:
            return state;
    }
};
export const follow = (UserId) => ({type: FOLLOW, UserId});
export const unfollow = (UserId) => ({type: UNFOLLOW, UserId});
export const setUsers = (Users) => ({type: SETUSERS, Users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersPageReducer;