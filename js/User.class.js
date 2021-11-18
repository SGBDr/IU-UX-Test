class User{
    
    constructor(id, phone, mail, pwd){
        this.phone = phone;
        this.mail = mail;
        this.pwd = pwd;
        this.id = id;
    }

    setPhone(phone) {this.phone = phone}
    setId(id) {this.id = id}
    setMail(mail) {this.mail = mail}
    setPwd(pwd) {this.pwd = pwd}
    getPhone() {return this.phone}
    getMail() {return this.mail}
    getPwd() {return this.pwd}
    getId() {return this.id}

    IsNum(num){
        try{
            parseInt(num);
            return true;
        }catch(e){
            return false;
        }
    }

    AmGood1(){
        let email_regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if(email_regex.test(this.mail.trim())){
            if(this.IsNum(this.phone.trim()) && !isNaN(this.phone.trim()) && this.phone.trim().length >= 9 && this.phone.trim() !== ""){
                if(this.pwd.trim().length > 6){
                    return 'ok';
                }else return '<div class="box-warning r-error off">Password must have at less 6 caracters</div>'
            }else return '<div class="box-warning r-error off">We find some problem in your Phone number</div>'
        }else return '<div class="box-warning r-error off">Email is not Valide</div>'
    }

    AmGood2(){
        let email_regex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if(email_regex.test(this.mail.trim())){
            if(this.IsNum(this.phone.trim()) && !isNaN(this.phone.trim()) && this.phone.trim().length >= 9 && this.phone.trim() !== ""){
                if(this.pwd.trim().length > 6){
                    return 'ok';
                }else return '<div class="box-warning s-error off">Password must have at less 6 caracters</div>'
            }else return '<div class="box-warning s-error off">We find some problem in your Phone number</div>'
        }else return '<div class="box-warning s-error off">Email is not Valide</div>'
    }

}