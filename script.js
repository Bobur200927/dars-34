// let f1 = document.forms[0]
// console.log(f1);
let f2 = document.querySelector('form')
console.dir(f2);
let inp = document.querySelector('input')
let h = document.querySelector('h1')
console.dir(inp);

// ? ================== Formani ichida seleksiya va uning elementlari obyekti ==========================

// console.log(f2.viloyat.value);

// ? ================== Formani sobitsiyalari ==================

// ? submit, reset

// f2.addEventListener('reset', (e)=>{
//     console.log(e);
// })

// addEventListener('keydown', (e)=>{
//     if (e.ctrlKey && e.shiftKey && e.key === 'H') {
//         f2.reset()
//         f2.submit()
//     }
// })

f2.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e);
    let user = {
        firstname: f2.firstname.value,
        bdate: f2.bdate.value
    }

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'post',
        body: JSON.stringify(user)
    }).then(res => console.log(res))
    console.log(user);
})

// ? =============== Forma elementlarini sobitsiyalari ================
// ? input, focus, blur, change, select

// inp.addEventListener('input', ()=>{
//     if (inp.value.length < 8) {
//         h.innerText = 'Belgilar soni kam'
//     }else if (inp.value.length > 16) {
//         h.innerText = "Belgilar soni ko'p"
//     }else{
//         h.innerText = "Hammasi yaxshi yuborish mumkin"
//     }
// })
// inp.addEventListener('blur', ()=>{
//     inp.style.backgroundColor = 'aquamarina'
// })

inp.addEventListener('change', ()=>{
    h.innerText = inp.value
})

document.querySelector('select').addEventListener('change', (e)=>{
    console.log(e);
})

document.querySelector('#check').addEventListener('change', (e)=>{
    console.log(e.target.checked);
})