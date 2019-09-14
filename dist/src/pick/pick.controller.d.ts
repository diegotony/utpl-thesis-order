import { PickService } from './pick.service';
import { CreatePickDto } from 'shared/dto/pick/create-pick.dto';
import { Pick } from 'shared/dto/pick/pick.dto';
export declare class PickController {
    private readonly pickService;
    constructor(pickService: PickService);
    createPick(dto: CreatePickDto): Promise<Pick>;
    findAll(): Promise<Pick[]>;
    findPick(idPick: any): Promise<Pick>;
    editPick(data: any): Promise<any>;
    deletePick(idPick: any): Promise<Pick[]>;
}
