export class DAOLancamentos {
    constructor() {
        this.list = [];
    }

    getList() {
        this.list = [
            { descricao: "Alimentação" },
            { descricao: "Lazer" },
            { descricao: "Transporte" },
            { descricao: "Educação" }
        ];
        return this.list;
    }

    insert(lancamento) {
        this.list.push(lancamento);
    }

    edit() {}

    delete(lancamento) {
        let pos = this.list.indexOf(lancamento);
        this.list.splice(pos, 1);
    }

    getSaldo() {
        return "1000";
    }
}
