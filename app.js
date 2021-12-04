const party = [
    {
        name        :   'Achem',
        fathersName :   'Abutaher',
        mothersName :   'Hasina Begum',
        loocation   :   'Dhaka',
        age         :   22,
    },
    {
        name        :   'Rayhan',
        fathersName :   'Janina',
        mothersName :   'Janina Begum',
        loocation   :   'Mirpur',
        age         :   17,
    },
    {
        name        :   'Nur Amin',
        fathersName :   'Janina',
        mothersName :   'Janina Begum',
        loocation   :   'Mirpur',
        age         :   60,
    }
]


party.map((data) => {

    let age = data.age;

    function ageCal (){

        if (age >= 0 && age <=18 ){
    
            return ` You Are Bacca `;
    
        }else if( age > 18 && age <= 40 ){
    
            return ` Welcome Your Are
                            Young Boy `;
    
        }else if( age > 40 ){
    
            return ` Your Are Bura `;
    
        }
    }
   
    console.log(`
    
    Your Name           :   ${data.name}
    Your Age            :   ${ data.age }
    Your Father Name    :   ${ data.fathersName }
    Your Mothers Name   :   ${ data.mothersName }
    Loocation           :   ${ data.loocation }
--------------------------------------------
    Your Massage        :  ${ageCal() }

    `);

})



