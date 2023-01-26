const bigRedButton = document.getElementById('bigRedButton')

const scaryFace = () => {
    axios.get("http://ec2-34-219-108-153.us-west-2.compute.amazonaws.com/scary-face")
    .then((res) => {
        document.body.innerHTML = `<img src="${res.data}">`
        
    })
    .catch((err) => {
        console.log(err)
    })
}


bigRedButton.addEventListener("click", scaryFace)