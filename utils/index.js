export const copyClipboard = (text)  => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Copied')
        })
        .catch((err) => {
            alert('Not Copied')
        });

}