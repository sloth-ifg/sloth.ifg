export class Log {
    public id: string;
    public skill: string;
    public user: string;
    public message: string;
    public date: string;

    constructor() {
        this.id = "";
        this.skill = "";
        this.user = "";
        this.message = "";
        this.date = "";
    }

    toJSON() {
        return { "id" : this.id != undefined ? this.id : "", "skill" : this.skill != undefined ? this.skill : "", "user" : this.user != undefined ? this.user : "", 
        "message" : this.message != undefined ? this.message : "", "date" : this.date != undefined ? this.date : "" };
    }

    copy(log: Log) {
        this.id = log.id;
        this.skill = log.skill;
        this.user = log.user;
        this.message = log.message;
        this.date = log.date;
    }
}
