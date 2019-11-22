import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { ItemModule } from "./item/item.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CatalogModule } from "./catalog/catalog.module";
import { TableModule } from "./table/table.module";
import config from "./config/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrderModule } from "./order/order.module";
import { TerminusModule } from "@nestjs/terminus";
import { TerminusOptionsService } from "./services/terminus-options/terminus-options.service";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://" + config.MONGO_HOST + "/" + config.MONGO_DB,
      { useNewUrlParser: true,useUnifiedTopology: true  }
    ),
    ItemModule,
    CatalogModule,
    TableModule,
    OrderModule,
    // TerminusModule.forRootAsync({useClass: TerminusOptionsService})
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
