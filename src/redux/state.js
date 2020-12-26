let store = {
    _state : {
        profilePage : {
            posts : [   // Посты в профиле
                {id: 1, post: "Hello space!", likesCount: 209},
                {id: 2, post: "It's my first post.", likesCount: 15},
                {id: 3, post: "sub pls!", likesCount: 22},
                {id: 4, post: "Mad world", likesCount: 8}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage : {
            dialogs : [     // Список собеседников
                {id: 1, name: "Dmitry"},
                {id: 2, name: "Vlad"},
                {id: 3, name: "Kostya"},
                {id: 4, name: "Alex"},
                {id: 5, name: "Nastya"}
            ],
            messages : [    // История сообщений
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Where are you from?"},
                {id: 4, message: "How old are you?"},
                {id: 5, message: "Do you like flowers?"}
            ]
        },
        friends : [     // Список друзей
            {id : 1, name : 'Dmitry'},
            {id : 1, name : 'Kostya'},
            {id : 1, name : 'Alex'}
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
      return this._state;
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.posts.length + 1,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;



export default store;