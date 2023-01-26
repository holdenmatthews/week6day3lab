const bigRedButton = document.getElementById('bigRedButton')

const scaryFace = () => {
    axios.get("http://localhost:4000/scary-face")
    .then((res) => {
        document.body.innerHTML = `<img src="${res.data}">`
        
    })
    .catch((err) => {
        // rollbar.error(err)
        console.log(err)
    })
}


bigRedButton.addEventListener("click", scaryFace)