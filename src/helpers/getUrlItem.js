export const getUrlItem = () => {

    return(
        new Promise((resolve, reject) =>{
            setTimeout( () => {
                resolve('https://pokeapi.co/api/v2/pokemon/18');
            }, 2000)
        }))
}