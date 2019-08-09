export class Manager {
    public id: string;
    public name: string;
    public role: string;

    constructor() {
        this.id = "";
        this.name = "";
        this.role = "";
    }

    toJSON() {
        return { "id" : this.id != undefined ? this.id : "", "name" : this.name != undefined ? this.name : "", "role" : this.role != undefined ? this.role : "" };
    }

    copy(manager: Manager) {
        this.id = manager.id;
        this.name = manager.name;
        this.role = manager.role;
    }
}
