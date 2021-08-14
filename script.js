let nome = document.getElementById('fname')
let sobre = document.getElementById('sname')
let data = document.getElementById('fdata')
let turma = document.getElementById('fturma')
let nota = document.getElementById('fnota')
let res = document.getElementById('res')

       
        



function finalizar(){
   
    nome = String(nome.value)       
    sobre = String(sobre.value)
    data = String(data.value)
    turma = String(turma.value)
    nota= Number(nota.value)
    if(let = nota >= 90 ){
        nota = `A`
    } else if(nota >= 80){
        nota = `B`

    }
   
    res.innerHTML += ` O aluno ${nome}${sobre} que nasceu em ${data} da turma ${turma} tirou nota: ${nota}`
    
    

}

    fnota.value = ''
    fname.value = ''
    sname.value = ''

/*|| data.value.length == 0 || turma.value.length == 0 || nota.value.length == 0 
res.innerHTML += `Aluno ${nome} ${sobre} `*/