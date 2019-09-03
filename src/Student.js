class Human{
    name;
    job;
    skills=[];

    getJob(element){
        console.log(this.job=element)
    }
    leaveJob(){
        console.log(this.job='Batal')
    }
    learnNewSkill(newskill){
        console.log(this.skills.push(newskill))
    }
    forgetSkill(skill){
        let index = this.skills.indexOf(skill)
        console.log(this.skills.splice(index,1))
    }
}





class Student extends Human {
    name; job; age;
    constructor(){
        super();
        this.name='Selima';
        this.job='student';
        this.skills=['public speakin','football','tinnis']
    }

}
const me = new Student();

me.getJob('Web developer');

me.learnNewSkill('React');

me.forgetSkill('React');

me.leaveJob();