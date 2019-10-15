import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class BillingService {
    constructor(private http: HttpService){
    }

    getBillings(){
        return this.http.get('http://localhost:3000/billing').pipe(
            map(response => response.data)
        );       
    }

    createBillings(message): Observable<any>{
        return this.http.post('http://localhost:3000/billing',{
            id_user: message.id_user,
            id_order: message.id_order,
            total: message.total

        })       
    }
}
