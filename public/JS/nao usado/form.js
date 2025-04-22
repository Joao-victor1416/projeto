// // const {aplicarValidacaoFormCadastro,aplicarValidacaoFormLogin} = require('./validacao')
// const aC = document.getElementById("aCadastro")
// const aR = document.getElementById("aRegistro")

//     aR.addEventListener('click', ()=> {
//             fetch('formCadastro.html')
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error("Erro ao carregar o formulário de cadastro");
//                     }
//                     return response.text();
//                 })
//                 .then(html => {
//                     document.getElementById('output').innerHTML = html;
//                 })
//                 .catch(error => {
//                     console.error(error);
//                 });
//     })
    
//     // aC.addEventListener('click', ()=> {
//         // fetch('formRegistro.html')
//         //     .then(response => {
//         //         if (!response.ok) {
//         //             throw new Error("Erro ao carregar o formulário de cadastro");
//         //         }
//         //         return response.text();
//         //     })
//         //     .then(html => {
//         //         document.getElementById('output').innerHTML = html;
//         //     })
//         //     .catch(error => {
//         //         console.error(error);
//         //     });
//     // })
// // ===================================================================================
// // function carregarFormulario(url, outputId, callback) {
// //     fetch(url)
// //         .then(response => {
// //             if (!response.ok) {
// //                 throw new Error(`Erro ao carregar o formulário: ${url}`);
// //             }
// //             return response.text();
// //         })
// //         .then(html => {
// //             document.getElementById(outputId).innerHTML = html;
// //             if (typeof callback === 'function') {
// //                 callback();
// //             }
// //         })
// //         .catch(error => {
// //             console.error(error);
// //         });
// // }

// // if (!document.contains(aR) || !document.contains(aC)) {
// //     carregarFormulario('formRegistro.html', 'output', aplicarValidacaoFormCadastro);
// // } else {
// //     aR.addEventListener('click', () => {
// //         carregarFormulario('formCadastro.html', 'output', aplicarValidacaoFormCadastro);
// //     });

// //     aC.addEventListener('click', () => {
// //         carregarFormulario('formRegistro.html', 'output', aplicarValidacaoFormLogin);
// //     });
// // }
