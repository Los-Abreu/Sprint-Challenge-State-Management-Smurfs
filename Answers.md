1. What problem does the context API help solve?
Helps with prop drilling and sharing data throughout the app

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions - are packets of information that contain an action type and associated data.

Reducers - are functions that take the previous state and an action and return the next state.

Store - is the middleman between actions and reducers. Makes it easier to debug and test an application with all of your state stored in one place.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global whereas Component state is local. Choosing between the two depends on whether or not state needs to be shared with more than one component. If more than one component needs access to state then use Application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Middleware that handles asynchronous requests. Thunk intercepts normal redux flow and makes a call before actions make it to the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context is way easier to setup in my opinion.
