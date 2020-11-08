let state = {
    profilePage : {
        posts : [
            {id: 1, post: "Hello space!", likesCount: 209},
            {id: 2, post: "It's my first post.", likesCount: 15},
            {id: 3, post: "sub pls!", likesCount: 22},
            {id: 4, post: "Mad world", likesCount: 8}
        ]           // Посты в профиле
    },
    dialogsPage : {
        dialogs : [
            {id: 1, name: "Dmitry"},
            {id: 2, name: "Vlad"},
            {id: 3, name: "Kostya"},
            {id: 4, name: "Alex"},
            {id: 5, name: "Nastya"}
        ],       // Список собеседников
        messages : [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Where are you from?"},
            {id: 4, message: "How old are you?"},
            {id: 5, message: "Do you like flowers?"}
        ]       // История сообщений
    }
}
export default state;