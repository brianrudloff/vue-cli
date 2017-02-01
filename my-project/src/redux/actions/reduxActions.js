/* eslint-disable */

import * as types from './reduxActionTypes.js'

// increment
// export function increment(index) {
// 	return {
// 		type: 'INCREMENT_LIKES',
// 		index: index
// 	}
// }

export const increment_likes = index => ({ type: types.INCREMENT_LIKES, index })

// add comment
// export function addComment(postId, author, comment) {
// 	console.log("Dispatching Add Comment");
// 	return {
// 		type: 'ADD_COMMENT',
// 		postId,
// 		author,
// 		comment
// 	}
// }

export const addComment = (postId, author, comment) => ({ type: types.ADD_COMMENT, indexpostId, author, comment })

// remove comment
// export function removeComment(postId, i) {
// 	return {
// 		type: 'REMOVE_COMMENT',
// 		i,
// 		postId
// 	}
// }

export const removeComment = (postId, i) => ({ type: types.REMOVE_COMMENT, postId, i })