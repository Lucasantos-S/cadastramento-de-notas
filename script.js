class Aluno {

    constructor() {
        
        this.id = 1;
        this.arrayAlunos = [];
        this.aluno

    }

    salvar(){
        
        let aluno = this.lerDados();
        console.log(aluno)
        
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
            msg += '-Informe o nome do produto'
        }

    }

    
    

    limpar(){
        alert('limpar')
    }

}

let aluno = new Aluno()