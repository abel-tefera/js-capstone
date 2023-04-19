import commentCounter from '../src/module/comment-counter.js';

const comments = document.createElement('div');
comments.innerHTML = `
<h4 class='text-gray-900 text-xl font-semibold'>Comments</h4>
<ul id='comments-list' class='border border-gray-300 p-4 rounded-md shadow-sm mt-2'>

</ul>`;
const commentsList = comments.querySelector('#comments-list');

const commentsArray = [
        {
            username: 'test',
            comment: 'test comment',
            creation_date: '2021-09-01',
        },
        {
            username: 'test',
            comment: 'test comment',
            creation_date: '2021-09-01',
        },
]

// mock fetch comments

let getComments = () => commentsArray;

// mock post comment

let postComment = () => commentsArray.push({
    username: 'test',
    comment: 'test comment',
    creation_date: '2021-09-01',
})

function appendComments(comments) {
    comments.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add('flex', 'flex-col', 'py-2', 'border-b', 'border-gray-300');
        li.innerHTML = `<div class='flex justify-between items-center'>
            <p class='font-bold'>${comment.username}</p>
            <p class='text-sm text-gray-500'>${comment.creation_date}</p>
        </div>
        <p class='text-sm'>${comment.comment}</p>`;
        commentsList.appendChild(li);
    });
}

// get comments
describe('test comment count', () => {
    test('should return 2', () => {
        let comments = getComments();
        expect(comments.length).toBe(2);
        appendComments(comments);
        expect(commentsList.children.length).toBe(2);
        postComment();
        expect(commentsList.children.length).toBe(3);
    });
});
