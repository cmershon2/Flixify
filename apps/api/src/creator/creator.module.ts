import { Module } from '@nestjs/common';
import { CreatorController } from './controllers/creator.controller';
import { CreatorService } from './services/creator.service';
import { RequestService } from './request/services/request.service';
import { RequestModule } from './request/request.module';
import { EmailModule } from '../email/email.module';
import { PersistenceModule } from '../persistence/persistence.module';
import { ProfileController } from './profile/controllers/profile.controller';
import { ProfileModule } from './profile/profile.module';
import { ProfileService } from './profile/services/profile.service';
import { ImageModule } from '../image/image.module';

@Module({
  controllers: [CreatorController, ProfileController, ProfileController],
  providers: [CreatorService, RequestService, ProfileService],
  imports: [
    RequestModule,
    EmailModule,
    PersistenceModule,
    ProfileModule,
    ImageModule,
  ],
})
export class CreatorModule {}
