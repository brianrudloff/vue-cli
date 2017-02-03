/* eslint-disable */
function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    //return the new state with the new comments
    return [...state, {
      user: action.author,
      text: action.comment
    }];
    case 'REMOVE_COMMENT':
    //we return the new state without the deleted comment
      return [
        //from start to one we wont to delete
        ...state.slice(0, action.i),
        /// after the deleted one, to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
	return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined')
    return {
      //take current state
      ...state,
      //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
	return state;
}

export default comments;

// export const comments = function comments(state = [], action) {
// 	console.log('poop')
// 	switch(action.type) {
// 		case 'ADD_COMMENT':
// 		console.log('adding comment')
// 			//return the new state with new comment
// 			return [...state, {
// 				user: action.author,
// 				text:action.comment
// 			}]
// 		case 'REMOVE_COMMENT':
// 		console.log('Removing comment')
// 			let updatedComment = [
// 				// from start to target
// 				...state[action.postId].slice(0, action.i),
// 				// after deleted target
// 				...state[action.postId].slice(action.i + 1)
// 			]
// 			let updatedState = Object.assign({}, state, {[action.postId]: updatedComment})
// 			return updatedState;
// 		default:
// 			return state;
// 	}
// 	return state;
// }

// export const comments2 = function comments2(state = [], action) {
// 	// if(typeof action.postId !== 'undefined') {
// 	// 	return {
// 	// 		// take the current state
// 	// 		...state,  
// 	// 		// overwrite this post with a new one
// 	// 		[action.postId]: postComments(state[action.postId], action)
// 	// 	}
// 	// }
// 	return state;
// }

// export default postComments, ;