function colorize() {
    let children = document.querySelectorAll('tbody tr:nth-child(even)');

    for(let child of children) {
        child.style.backgroundColor = 'teal';
    }
}