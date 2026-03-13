function extract(content) {
    let el = document.getElementById(content);
    let text = el.textContent;
    const pattern = /\(.*?\)/g;

    const matches = text.match(pattern);
    return (matches.map(match => match.slice(1, -1)).join('; '));
}