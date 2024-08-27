import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EnrollmentModuleBase } from "./base/enrollment.module.base";
import { EnrollmentService } from "./enrollment.service";
import { EnrollmentController } from "./enrollment.controller";
import { EnrollmentResolver } from "./enrollment.resolver";

@Module({
  imports: [EnrollmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EnrollmentController],
  providers: [EnrollmentService, EnrollmentResolver],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
