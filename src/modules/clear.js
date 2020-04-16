export default function() {
    const content = document.getElementById(`content`);
    
    let child = content.lastElementChild;
    while(child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}
