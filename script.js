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
                this.adicionar(this.editId, aluno);
            }
        }
        
        
    }
    listaTabela(){
        
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
        aluno.dataAluno = document.getElementById('data').value;
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
        alert('limpar')
    }

}

let aluno = new Aluno()