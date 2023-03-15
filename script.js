async function copyToClipboard(element, id) {
    const template = document.getElementById(id || 'pre-class-template')

    const clipboardItem = new ClipboardItem({
        "text/plain": new Blob(
            [template.innerText],
            { type: "text/plain" }
        ),
        "text/html": new Blob(
            [template.outerHTML],
            { type: "text/html" }
        ),
    });
    await navigator.clipboard.write([clipboardItem])
    const prevText = element.innerHTML
    element.innerText = "Copied!"
    setTimeout(() => {
        element.innerHTML = prevText
    }, 1000)

}
