module.exports = {
    getHomePage: (req, res) => {
       
        // execute query
      
            res.render('home.ejs');
            
    
    },


    postHomePage: (req, res) => {
        console.log(req.body.username)
        var name =req.body.name;
        var password= req.body.password;
       var phone = req.body.Phone;
       var email =req.body.email;
       var username = req.body.username;
        let query = "INSERT INTO `formdata`( `name`, `password`, `phone_no`, `email`, `user_name`) VALUES ('"+name+"','"+password+"','"+phone+"','"+email+"','"+username+"')"; // query database to get all the players

        // execute query
        db.query(query, (err, results) => {
            if (err) {
                res.redirect('/');
            }
var id =results.insertId;
console.log(id)
            let secquery = "select * from `formdata` where id='"+id+"' "; // query database to get all the players

            // execute query
            db.query(secquery, (err, result) => {
                if (err) {
                    res.redirect('/');
                }
                console.log(result)
            res.render('index.ejs', {
               
                user: result
            });
        });


        var nodemailer = require('nodemailer');
        let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'piyushgrepix@gmail.com',
            pass:'piyushivan2021'
        }
      });
    
      
      var mailOptions = {
        from: 'piyushgrepix@gmail.com',
        to: email,
        bcc:'piyush.m.jain21@gmail.com',
        subject: 'Successfully registered',
        text: 'That was easy!',
        html: '<h1>Thank you</h1><p>Successfully registered on Piyush Form</p>'
      
        
        
        };
      
        
        transporter.sendMail(mailOptions, function(error, info){
      
        });
    });
    },
};