import { Controller, UseGuards } from '@nestjs/common';
import { QrService } from './qr.service';
import { Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
