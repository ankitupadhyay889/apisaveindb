//! isme hum contact form fill krne wale kr rhe hai means backend m postman k through form fill krkre db m jayega

//! uske baad hum yhi wala react se integrate krte hai mern k project m yaad hai n...

//? jo restfapi likh rhe hai wo jha data.js wale ka hai fill ka sara rehta hai ki name,email,work,number use y mere online db ka naam.



app.post("/contact" , async(req,res) => {
    const {name , email , work , number} = user;
    if(!name||!email||!work||!number){
        return res.status(422).json({error : "Please check the form and fill all details"});
    }

    try{
        const userHai = await restfapi.findOne({email:email});
        if(userHai){
            return res.status(422).json({ error: "Email already exist" });
        }

        const userBharo = new restfapi({name , email , work , number});
        const userRegisterkro = await userBharo.save();

        if(userRegisterkro){
            res.status(201).json({ message: "Data save into Online db" });
        }else{
            res.status(500).json({ error: "Failed" });
        }

    }catch(error){
        console.log(error);
    }
})