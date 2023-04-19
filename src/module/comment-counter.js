export default function commentCounter() {
    const commentsList = document.getElementById('comments-list');
    const commentCount = commentsList.childElementCount;
    const commentCounter = document.getElementById('comment-counter');
    commentCounter.innerHTML = `${commentCount} Comments`;
}