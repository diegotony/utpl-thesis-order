import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
  async hello(){
    return {"ok": true}
  }
}