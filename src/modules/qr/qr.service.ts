import { Injectable } from '@nestjs/common';
import { QRCode } from 'qrcode';

@Injectable()
export class QrService {

    constructor() {}

    async qrGenerator(/*purchase: any*/) {
        let text = 'paok';
        var opts: {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            quality: 0.3,
            margin: 1,
            color: {
              dark:"#010599FF",
              light:"#FFBF60FF"
            }
        }

        const generateQR = async text => {
            try {
                console.log(await QRCode.toDataURL('paok'))
            } catch (err) {
                console.log(err)
            }
        }

        generateQR;
        // this.qr.("Dummy Text", opts, function  (err, url) {
        //     if(err) return console.log(err)

        //     console.log(url);
            
        // })
        // this.qr.toCanvas(purchase, opts, function (err, url) {
        //     if(err) throw err;

        //     let container = document.getElementById('container');
        //     container.appendChild(url);
        // })
    }

}
