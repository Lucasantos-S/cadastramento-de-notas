class Aluno {

    constructor() {
        
        this.id = 1;
        this.arrayAlunos = [];
        this.editId = null;

    }

    salvar(){
        
        let aluno = this.lerDados();
        console.log(aluno)

        if(this.validarCampo(aluno)){
            if(this.editId == null) {
                this.adicionar(aluno);
            } else{
                this.atualizar(this.editId, aluno);
            }
        }
        this.listaTabela();
        this.limpar();
        
        
    }
    listaTabela(){
        let tbody = document.getElementById('tbody')

        tbody.innerText = '';
        for(let i = 0; i < this.arrayAlunos.length; i++) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_aluno = tr.insertCell();
            let td_turma = tr.insertCell();
            let td_nota = tr.insertCell();
            let td_data = tr.insertCell();
            let td_professor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
            td_turma.innerText = this.arrayAlunos[i].turmaAluno;
            td_nota.innerText = this.arrayAlunos[i].notaAluno;
            td_data.innerText = this.arrayAlunos[i].data;
            td_professor.innerText = this.arrayAlunos[i].professorAluno;

            td_id.classList.add('center')


            let imgEdit = document.createElement('img')
            imgEdit.src = 'img/edit.png'
            imgEdit.setAttribute("onclick" , "aluno.prepararEdicao("+JSON.stringify(this.arrayAlunos[i])+")");
            


            let imgDelet = document.createElement('img')
            imgDelet.src = 'img/delet.png'
            imgDelet.setAttribute("onclick", "aluno.deletar("+this.arrayAlunos[i].id+")")
           

            
            td_acoes.appendChild(imgEdit )
            td_acoes.appendChild(imgDelet)
            td_acoes.style.width = '100px'
            td_acoes.classList.add('center')

            console.log(this.arrayAlunos)


            
        }

    }

    adicionar(aluno) {
        
        this.arrayAlunos.push(aluno);
        this.id++

    }

    lerDados(){
        let aluno = {}
        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('aluno').value;
        aluno.turmaAluno = document.getElementById('turma').value;
        aluno.notaAluno = document.getElementById('nota').value;
        aluno.data = document.getElementById('data').value;
        aluno.professorAluno = document.getElementById('professor').value;


        return aluno;

       
    }

    validarCampo(aluno){
        let msg = ''
        if(aluno.nomeAluno ==''){
            msg += '-Informe o nome do Aluno'
        } 

        if(aluno.turmaAluno == '') {
            msg = '- Informe a turma'
        }

        if(aluno.notaAluno == '') {
            msg = '- Informe a nota do Aluno'
        }
        if(aluno.dataAluno == '') {
            msg = '- Informe a data de lançamento'
        }

        if(aluno.professorAluno == '') {
            msg = '- Informe o nome do Professor responsavel.'
        }

        if(msg!= '') {
            alert(msg);
            return false
        }
            return true
        
    }

    
    

    limpar(){
        document.getElementById('aluno').value = ''
        document.getElementById('turma').value = ''
        document.getElementById('nota').value = ''
        document.getElementById('data').value = ''
        document.getElementById('professor').value = ''

        document.getElementById('btn1').innerText = 'Salvar';
        document.getElementById('btn2').innerText = 'Limpar';

        this.editId = null
    }

    atualizar(id, aluno){
        for(let i = 0; i < this.arrayAlunos.length; i++) {
            if(this.arrayAlunos[i].id ==id) {
                this.arrayAlunos[i].nomeAluno = aluno.nomeAluno;
                this.arrayAlunos[i].turmaAluno = aluno.turmaAluno;
                this.arrayAlunos[i].notaAluno = aluno.notaAluno;
                this.arrayAlunos[i].data = aluno.data;
                this.arrayAlunos[i].professorAluno = aluno.professorAluno;
            }
        }
    }
    

    prepararEdicao(dados) {
        this.editId = dados.id;
        document.getElementById('aluno').value = dados.nomeAluno;
        document.getElementById('turma').value = dados.turmaAluno;
        document.getElementById('nota').value = dados.notaAluno;
        document.getElementById('data').value = dados.data;
        document.getElementById('professor').value = dados.professorAluno; 

        document.getElementById('btn1').innerText= 'Atualizar'
        document.getElementById('btn2').innerText= 'Cancelar'

        
    }

    deletar(id){


    }

}

let aluno = new Aluno()



/* 
       imgEdit.setAttribute("onclick" , "produto.prepararEdicao("+JSON.stringify(this.arrayAlunos[i])+")")
 imgDelet.setAttribute("onclick", "produto.deletar("+this.arrayAlunos[i].id+")")     */