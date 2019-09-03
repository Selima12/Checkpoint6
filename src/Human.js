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




export default Human;
