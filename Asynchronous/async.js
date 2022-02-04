console.log('connected')

setTimeout(()=>{
    console.log('this is the setTimeout')
}, 500)

axios.get('https://swapi.dev/api/')
    .then(res => {
        console.log(res.data)
    })

for(let i = 0; i < 10; i++){
    console.log(i)
}