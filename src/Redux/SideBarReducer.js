
let initialstate = {sideBar: [
        {
            id: '1',
            name: 'Vitaly',
            avatarUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU',
        },
        {
            id: '2',
            name: 'Sergey',
            avatarUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU',
        },
        {
            id: '3',
            name: 'Dmitry',
            avatarUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU',
        },
    ]}
const sideBarReducer =(state= initialstate, action) => {
    
    let copyState = {...state};
    copyState.sideBar = [...state.sideBar];
    return copyState;
};

export default sideBarReducer;