export default function() {    
    let child = content.lastElementChild;
    while(child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}
