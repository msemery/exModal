// Modal simple avec bouton à l'arrière, 
// important -> placer pointer events dans le css à l'état initial à none (sinon tu ne peux
//     pas cliquer sur le bouton à travers le mur)
// ->penser BiquadFilterNode, si il doit y avoir une intéraction avec l'intérieur 
// du modal (formulaire, cookies accepter ou pas), penser sur l'event du bouton à rajouter
// pointer event: inherit
// attention alias $ querySelector ne va marcher qu'avec un seul élément

function $(uneClasseUnique) {
    return document.querySelector(uneClasseUnique);
}
function $all(uneClasseAvecPlusieursNoeuds) {
    return document.querySelectorAll(uneClasseAvecPlusieursNoeuds)
}

//$all('.uneClasse')       _______________  renvoi un array ------- > for /// foreach

let myButton = $('.myButton');
let modal = document.querySelector('.modal');
let containerModal = document.querySelector('.containerModal');


myButton.addEventListener('click', event=>{
    modal.classList.toggle('visible');
    containerModal.classList.toggle('backgroundModal');
    containerModal.style.pointerEvents = 'inherit';
});


containerModal.addEventListener('click',event=> {
    modal.classList.toggle('visible');
    containerModal.classList.toggle('backgroundModal');
    containerModal.style.pointerEvents = 'none';
});