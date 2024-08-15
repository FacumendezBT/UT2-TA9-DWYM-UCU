const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    getOdds(nums);
});


/**
 * filtre e imprima en consola, en un nuevo arreglo, aquellos números dentro del parámetro nums que sean impares.
 * @param {Array} nums - Un arreglo de números enteros.
 */
function getOdds(nums){
    let odds = nums.filter(num => num % 2 !== 0);
    console.log(odds);
    return odds;
}