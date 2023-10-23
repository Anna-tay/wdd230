const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// gets chapter list or if it returns empty then be an empty list.
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item){
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    listItem.innerHTML = item;
    deleteButton.textContent = '×';
    listItem.append(deleteButton);
    list.append(listItem);
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList(){
    localStorage.setItem('favBomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBomList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener('click', function() {
    if (input.value == '') {
        alert('No chapter has been selected. Please try again.');
        input.focus();
    }
    else {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});