import { Controller } from '@nestjs/common';
import { QrService } from './qr.service';
import { Get } from '@nestjs/common';


@Controller('qr')
export class QrController {

    constructor(
        private qrService: QrService
    ) {}

    @Get()
    async qrGen() {
        return this.qrService.qrGenerator();
    }
}
