export class DAOContas {
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

    insert(conta) {
        this.list.push(conta);
    }

    edit() {}

    delete(conta) {
        let pos = this.list.indexOf(conta);
        this.list.splice(pos, 1);
    }
}
